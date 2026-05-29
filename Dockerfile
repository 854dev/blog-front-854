FROM node:18-alpine

WORKDIR /home/ubuntu/app/blog-front-854

RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . ./

RUN pnpm build

CMD ["pnpm", "start"]
