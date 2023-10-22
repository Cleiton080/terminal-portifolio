FROM gcr.io/distroless/nodejs18-debian12 AS builder

WORKDIR /app

COPY package*.json .

RUN npm i

COPY . .

RUN npm run build