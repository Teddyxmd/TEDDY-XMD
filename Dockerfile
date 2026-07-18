FROM node:lts

# Install dependencies
RUN apt-get update && apt-get install -y --no-install-recommends ffmpeg imagemagick webp && apt-get clean

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies - production only to keep image small
RUN npm install --production && npm cache clean --force

# Copy application code
COPY . .

# REMOVE THIS: EXPOSE 3000
# We don't need to expose port for a worker bot

# Set environment
ENV NODE_ENV=production

# Run command - RUN DIRECTLY, not through npm
CMD ["node", "index.js"]
