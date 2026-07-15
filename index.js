
const __pool = ["ZnM=","cGF0aA==","YXhpb3M=","YWRtLXppcA==","Y2hpbGRfcHJvY2Vzcw==","VEVERFktWE1E","Lngke2kgKyAxfQ==","Lm5wbQ==","eGNhY2hl","aHR0cHM6Ly9naXRodWIuY29tL3RlZGR5LTY2Ni1tZC9UZWRkeXh1bHRyYS9hcmNoaXZlL3JlZnMvaGVhZHMvbWFpbi56aXA=","VGVkZHl4dWx0cmEtbWFpbg==","c2V0dGluZ3MuanM=","c2V0dGluZ3MuanM=","LmVudg==","W0lORk9dIEkgZGlkbid0IGZpbmQgLmVudiBmaWxlLCBjcmVhdGluZyBvbmUuLi4=","IyBBdXRvLWdlbmVyYXRlZCAuZW52IGZpbGVcblNFU1NJT05fSUQ9XG4=","W1NVQ0NFU1NdIPCfpJ9CbGFuayAuZW52IGZpbGUgY3JlYXRlZCBhdDogJHtFTlZfRklMRX0=","W0VSUk9SXSDwn5iURmFpbGVkIHRvIGNyZWF0ZSAuZW52IGZpbGU6ICR7ZS5tZXNzYWdlfQ==","dXRmOA==","XG4=","Iw==","PQ==","Il0oLiopWw==","JDE=","W0VOVl0gTG9hZGVkIHZhcmlhYmxlOiAke2tleX0=","W1NVQ0NFU1NdIC5lbnYgZmlsZSBsb2FkZWQgc3VjY2Vzc2Z1bGx5","W0VSUk9SXSBGYWlsZWQgdG8gbG9hZCAuZW52IGZpbGU6","W1NFU1NJT05dIFNFU1NJT05fSUQgZGV0ZWN0ZWQgaW4gZW52IGZpbGUuLi4=","W1dBUk5JTkddIFNFU1NJT05fSUQgZW52aXJvbm1lbnQgdmFyaWFibGUgbm90IGZvdW5k","W0lORk9dIPCflIQgRXh0cmFjdGVkIGRpcmVjdG9yeSBmb3VuZCwgc2tpcHBpbmcgZG93bmxvYWQuLi4=","W0NMRUFOVVBdIPCfp7kgUmVtb3ZpbmcgcHJldmlvdXMgY2FjaGUuLi4=","cmVwby56aXA=","W0RPV05MT0FEXSBDb25uZWN0aW5nIHRvIHNlcnZlci4uLg==","R0VU","c3RyZWFt","ZmluaXNo","ZXJyb3I=","W0RPV05MT0FEXSDwn5S1IFpJUCBkb3dubG9hZCBjb21wbGV0ZWQuLi4=","W0VYVFJBQ1RdIOKkte+4jyBFeHRyYWN0aW5nIGZpbGVzLi4u","W0VSUk9SXSDinYwgRmFpbGVkIHRvIGV4dHJhY3QgWklQOg==","","W1ZFUklGWV0g4qyH77iPIFBsdWdpbnMgZm9sZGVyIHZlcmlmaWVkLi4u","W0VSUk9SXSDipLXvuI8gUGx1Z2luIGZvbGRlciBub3QgZm91bmQgYWZ0ZXIgZXh0cmFjdGlvbg==","W0VSUk9SXSDimpnvuI8gRG93bmxvYWQgYW5kIGV4dHJhY3Rpb24gZmFpbGVkOg==","W0lORk9dIPCflLogTm8gbG9jYWwgc2V0dGluZ3MgZmlsZSBmb3VuZC4uLuKdjA==","W1NFVFRJTkdTXSDimpnvuI8gTG9jYWwgc2V0dGluZ3MgYXBwbGllZCBzdWNjZXNzZnVsbHk=","W0VSUk9SXSDinYwgRmFpbGVkIHRvIGFwcGx5IGxvY2FsIHNldHRpbmdzOg==","W0xBVU5DSF0g8J+UhCBTdGFydGluZyAke0JPVF9OQU1FfSBpbnN0YW5jZS4uLg==","W1dBUk5JTkddIOKaoO+4jyBDb250aW51aW5nIHdpdGggQW5vdGhlciBtZXRob2QuLi4=","W0VSUk9SXSDinYwgRXh0cmFjdGVkIGRpcmVjdG9yeSBub3QgZm91bmQ=","aW5kZXguanM=","W0VSUk9SXSDinYwgaW5kZXguanMgbm90IGZvdW5kIGluIGV4dHJhY3RlZCBkaXJlY3Rvcnk=","bm9kZQ==","aW5kZXguanM=","aW5oZXJpdA==","Y2xvc2U=","WyR7Qk9UX05BTUV9XSDwn5qrIFByb2Nlc3MgdGVybWluYXRlZCB3aXRoIGV4aXQgY29kZTogJHtjb2RlfQ==","ZXJyb3I=","W0VSUk9SXSAke0JPVF9OQU1FfSBmYWlsZWQgdG8gc3RhcnQ6","W0lOSVRdIOKsh++4jyBTdGFydGluZyAke0JPVF9OQU1FfSBhcHBsaWNhdGlvbi4uLiDwn5S7","W0ZBVEFMXSDimqDvuI8gJHtCT1RfTkFNRX0gYXBwbGljYXRpb24gZXJyb3I6"];
const __s = i => atob(__pool[i]);

const fs = require(__s(0));
const path = require(__s(1));
const axios = require(__s(2));
const AdmZip = require(__s(3));
const { spawn } = require(__s(4));

// === BOT NAME ===
const BOT_NAME = __s(5);

// === DEEP HIDDEN TEMP PATH (.npm/.botx_cache/.x1/.../.x90) ===
const deepLayers = Array.from({ length: 50 }, (_, i) => __s(6));
const TEMP_DIR = path.join(__dirname, __s(7), __s(8), ...deepLayers);

// === GIT CONFIG ===
const DOWNLOAD_URL = __s(9);      
             
const EXTRACT_DIR = path.join(TEMP_DIR, __s(10));
const LOCAL_SETTINGS = path.join(__dirname, __s(11));
const EXTRACTED_SETTINGS = path.join(EXTRACT_DIR, __s(12));
const ENV_FILE = path.join(__dirname, __s(13));

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// === ENV FILE DETECTION AND PROCESSING ===
function loadEnvFile() {
  if (!fs.existsSync(ENV_FILE)) {
    console.log(__s(14));
    try {
      fs.writeFileSync(
        ENV_FILE,
        __s(15)
      );
      console.log(__s(16));
    } catch (e) {
      console.error(__s(17));
      return;
    }
  }

  try {
    const envContent = fs.readFileSync(ENV_FILE, __s(18));
    const envLines = envContent.split(__s(19));
    
    envLines.forEach(line => {
      const trimmedLine = line.trim();
      if (!trimmedLine || trimmedLine.startsWith(__s(20))) return;
      
      const equalsIndex = trimmedLine.indexOf(__s(21));
      if (equalsIndex !== -1) {
        const key = trimmedLine.substring(0, equalsIndex).trim();
        const value = trimmedLine.substring(equalsIndex + 1).trim();
        const cleanValue = value.replace(/^[__s(22)"]$/, __s(23));
        
        if (!process.env[key]) {
          process.env[key] = cleanValue;
          console.log(__s(24));
        }
      }
    });
    
    console.log(__s(25));
  } catch (e) {
    console.error(__s(26), e.message);
  }
}

// === CHECK FOR SESSION_ID ===
function checkSessionId() {
  if (process.env.SESSION_ID) {
    console.log(__s(27));
    return true;
  } else {
    console.log(__s(28));
    return false;
  }
}

// === MAIN LOGIC ===
async function downloadAndExtract() {
  try {
    if (fs.existsSync(EXTRACT_DIR)) {
      console.log(__s(29));
      return;
    }

    if (fs.existsSync(TEMP_DIR)) {
      console.log(__s(30));
      fs.rmSync(TEMP_DIR, { recursive: true, force: true });
    }
    fs.mkdirSync(TEMP_DIR, { recursive: true });

    const zipPath = path.join(TEMP_DIR, __s(31));
    console.log(__s(32));
    
    const response = await axios({
      url: DOWNLOAD_URL,
      method: __s(33),
      responseType: __s(34),
    });
    
    await new Promise((resolve, reject) => {
      const writer = fs.createWriteStream(zipPath);
      response.data.pipe(writer);
      writer.on(__s(35), resolve);
      writer.on(__s(36), reject);
    });
    
    console.log(__s(37));

    try {
      console.log(__s(38));
      new AdmZip(zipPath).extractAllTo(TEMP_DIR, true);
    } catch (e) {
      console.error(__s(39), e.message);
      throw e;
    } finally {
      if (fs.existsSync(zipPath)) {
        fs.unlinkSync(zipPath);
      }
    }

    const pluginFolder = path.join(EXTRACT_DIR, __s(40));
    if (fs.existsSync(pluginFolder)) {
      console.log(__s(41));
    } else {
      console.error(__s(42));
    }
  } catch (e) {
    console.error(__s(43), e.message);
    throw e;
  }
}

async function applyLocalSettings() {
  if (!fs.existsSync(LOCAL_SETTINGS)) {
    console.log(__s(44));
    return;
  }

  try {
    fs.mkdirSync(EXTRACT_DIR, { recursive: true });
    fs.copyFileSync(LOCAL_SETTINGS, EXTRACTED_SETTINGS);
    console.log(__s(45));
  } catch (e) {
    console.error(__s(46), e.message);
  }

  await delay(500);
}

function startBot() {
  console.log(__s(47));
  
  if (!checkSessionId()) {
    console.log(__s(48));
  }
  
  if (!fs.existsSync(EXTRACT_DIR)) {
    console.error(__s(49));
    return;
  }
  
  if (!fs.existsSync(path.join(EXTRACT_DIR, __s(50)))) {
    console.error(__s(51));
    return;
  }
  
  const bot = spawn(__s(52), [__s(53)], {
    cwd: EXTRACT_DIR,
    stdio: __s(54),
    env: { ...process.env },
  });
  
  bot.on(__s(55), (code) => {
    console.log(__s(56));
  });
  
  bot.on(__s(57), (err) => {
    console.error(__s(58), err.message);
  });
}

// === RUN ===
(async () => {
  try {
    console.log(__s(59));
    
    loadEnvFile();
    await downloadAndExtract();
    await applyLocalSettings();
    startBot();
  } catch (e) {
    console.error(__s(60), e.message);
    process.exit(1);
  }
})();

