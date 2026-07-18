FROM node:20-bullseye

# Install dependencies needed for baileys + media
RUN apt-get update && apt-get install -y --no-install-recommends \
    ffmpeg \
    imagemagick \
    webp \
    python3 \
    make \
    g++ \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies - production only
RUN npm install --production --legacy-peer-deps && npm cache clean --force

# Copy application code
COPY . .

# Don't expose port - this is a worker bot, not web
# EXPOSE 3000

# Set environment
ENV NODE_ENV=production

# Run bot directly
CMD ["node", "index.js"]
