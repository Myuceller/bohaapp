FROM node:20-bullseye-slim AS build

WORKDIR /app

# Install frontend deps
COPY package.json package-lock.json ./
RUN npm install

# Build frontend (needs legacy OpenSSL provider for webpack 4)
COPY . .
RUN mkdir -p /app/backend/public
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN npm run build

FROM node:20-bullseye-slim

WORKDIR /app

# Install backend deps
COPY backend/package.json backend/package-lock.json ./backend/
RUN cd backend && npm ci --omit=dev

# Copy backend source and built frontend assets
COPY backend ./backend
COPY --from=build /app/backend/public /app/backend/public

ENV NODE_ENV=production
EXPOSE 3000

CMD ["node", "backend/bin/www"]
