FROM node:21.6.2

WORKDIR /537website
COPY . .

RUN npm install -g pnpm
RUN pnpm install
RUN pnpm build

EXPOSE 3000

# CMD ["node",".next/standalone/server.js"]
CMD ["pnpm", "start"]

