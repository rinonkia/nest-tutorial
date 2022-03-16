FROM node:16.14.0-slim AS deps
WORKDIR /app

# M1 mac + slimの場合に必須
RUN apt-get update
RUN apt-get install -y openssl

COPY package.json package-lock.json ./
COPY prisma ./prisma
COPY .env ./.env
RUN npm ci
RUN npx prisma format && npx prisma generate

FROM node:16.14.0-slim AS runner
WORKDIR /app

# M1 mac + slimの場合に必須
# procpsは、ローカルのFile変更後のincremental compilationのエラー修正に必要
# https://github.com/nestjs/nest-cli/issues/484#issuecomment-683967257
RUN apt-get update
RUN apt-get install -y openssl procps

RUN groupadd --system --gid 1001 nodejs
RUN useradd --system --uid 1001 nestjs

COPY --from=deps /app/package.json ./package.json
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/prisma ./prisma

USER nestjs
CMD npm run start:dev