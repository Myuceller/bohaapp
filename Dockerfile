FROM node:20-bullseye-slim AS build

WORKDIR /app

# Install frontend deps
COPY front/package.json front/package-lock.json ./front/
RUN cd front && npm install

# Build frontend (needs legacy OpenSSL provider for webpack 4)
COPY front ./front
RUN mkdir -p /app/back/public
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN cd front && npm run build

FROM node:20-bullseye-slim

WORKDIR /app

# Install backend deps
COPY back/package.json back/package-lock.json ./back/
RUN cd back && npm ci --omit=dev

# Copy backend source and built frontend assets
COPY back ./back
COPY --from=build /app/back/public /app/back/public

ENV NODE_ENV=production
EXPOSE 3000

CMD ["node", "back/bin/www"]
