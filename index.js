const fs = require('fs');
const path = require('path');
const axios = require('axios');
const AdmZip = require('adm-zip');
const { spawn } = require('child_process');

const BOT_NAME = 'TEDDY-XMD-ULTRA';
const REPOSITORY_URL = 'https://github.com/Teddytech2/Teddyxmdbackend';
const DOWNLOAD_URL = `${REPOSITORY_URL}/archive/refs/heads/main.zip`;

const TEMP_DIR = path.join(__dirname, '.teddy-xmd-cache');
const EXTRACT_DIR = path.join(TEMP_DIR, 'Teddyxmdbackend-main');
const LOCAL_SETTINGS = path.join(__dirname, 'settings.js');
const EXTRACTED_SETTINGS = path.join(EXTRACT_DIR, 'settings.js');
const ENV_FILE = path.join(__dirname, '.env');

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function loadEnvFile() {
  if (!fs.existsSync(ENV_FILE)) {
    fs.writeFileSync(ENV_FILE, '# TEDDY-XMD-ULTRA environment\\nSESSION_ID=\\n');
    console.log('[ENV] Created blank .env file. Add SESSION_ID in your hosting config.');
  }

  try {
    for (const line of fs.readFileSync(ENV_FILE, 'utf8').split(/\\r?\\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const i = trimmed.indexOf('=');
      if (i < 1) continue;
      const key = trimmed.slice(0, i).trim();
      const value = trimmed.slice(i + 1).trim().replace(/^['"]|['"]$/g, '');
      if (!process.env[key]) process.env[key] = value;
    }
  } catch (error) {
    console.error('[ENV] Could not read .env:', error.message);
  }
}

function run(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      ...options,
      stdio: 'inherit',
      env: { ...process.env, ...(options.env || {}) }
    });
    child.once('error', reject);
    child.once('close', code => {
      if (code === 0) resolve();
      else reject(new Error(`${command} exited with code ${code}`));
    });
  });
}

async function downloadAndExtract() {
  const backendIndex = path.join(EXTRACT_DIR, 'index.js');

  if (fs.existsSync(backendIndex)) {
    console.log('[REPO] Existing TEDDY-XMD backend found; reusing it.');
    return;
  }

  fs.rmSync(TEMP_DIR, { recursive: true, force: true });
  fs.mkdirSync(TEMP_DIR, { recursive: true });

  const zipPath = path.join(TEMP_DIR, 'backend.zip');
  console.log(`[DOWNLOAD] Fetching ${REPOSITORY_URL}`);

  const response = await axios.get(DOWNLOAD_URL, {
    responseType: 'arraybuffer',
    timeout: 120000,
    maxContentLength: 200 * 1024 * 1024,
    headers: { 'User-Agent': BOT_NAME }
  });

  if (response.status !== 200) {
    throw new Error(`GitHub returned HTTP ${response.status}`);
  }

  fs.writeFileSync(zipPath, response.data);
  const archive = new AdmZip(zipPath);
  archive.extractAllTo(TEMP_DIR, true);
  fs.rmSync(zipPath, { force: true });

  if (!fs.existsSync(backendIndex)) {
    throw new Error(`Backend index.js was not found in ${EXTRACT_NAME}. Check the repository's main branch layout.`);
  }

  console.log('[REPO] Backend downloaded and extracted successfully.');
}

async function applyLocalSettings() {
  if (!fs.existsSync(LOCAL_SETTINGS)) return;
  fs.copyFileSync(LOCAL_SETTINGS, EXTRACTED_SETTINGS);
  console.log('[SETTINGS] Local settings.js applied.');
  await delay(250);
}

async function installBackendDependencies() {
  const packageFile = path.join(EXTRACT_DIR, 'package.json');
  if (!fs.existsSync(packageFile)) {
    throw new Error('Backend package.json is missing.');
  }

  const packageJson = JSON.parse(fs.readFileSync(packageFile, 'utf8'));
  console.log(`[INSTALL] Installing ${packageJson.name || BOT_NAME} dependencies...`);
  await run('npm', ['install', '--omit=dev', '--no-audit', '--no-fund'], {
    cwd: EXTRACT_DIR
  });
  console.log('[INSTALL] Backend dependencies installed.');
}

async function startBot() {
  const entry = path.join(EXTRACT_DIR, 'index.js');
  if (!fs.existsSync(entry)) throw new Error('Backend index.js is missing.');

  console.log(`[LAUNCH] Starting ${BOT_NAME}...`);
  const child = spawn(process.execPath, [entry], {
    cwd: EXTRACT_DIR,
    stdio: 'inherit',
    env: { ...process.env }
  });

  child.once('error', error => {
    console.error(`[${BOT_NAME}] Failed to start:`, error.message);
    process.exitCode = 1;
  });

  child.once('close', code => {
    console.error(`[${BOT_NAME}] Backend stopped with exit code ${code}.`);
    process.exitCode = code || 0;
  });
}

(async () => {
  try {
    console.log(`[INIT] ${BOT_NAME} launcher starting...`);
    loadEnvFile();
    await downloadAndExtract();
    await applyLocalSettings();
    await installBackendDependencies();
    await startBot();
  } catch (error) {
    console.error(`[FATAL] ${BOT_NAME}:`, error.stack || error.message);
    process.exit(1);
  }
})();
