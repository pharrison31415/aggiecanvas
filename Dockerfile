FROM node:18-alpine AS base
RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json package-lock.json ./

FROM base as build
RUN export NODE_ENV=production
RUN npm install

COPY . .
RUN npm run build

FROM base as prod-build

RUN npm install
COPY prisma prisma
RUN npm run db:gen
RUN cp -R node_modules prod_node_modules

FROM base as prod

COPY --from=prod-build /app/prod_node_modules /app/node_modules
COPY --from=build  /app/.next /app/.next
COPY --from=build  /app/public /app/public
COPY --from=build  /app/prisma /app/prisma

RUN echo "*/20 * * * * /bin/sh echo -e 'GET /api/bake-snapshot HTTP/1.1\r\n\r\n' | nc localhost 80" >> /var/spool/cron/crontabs/root

CMD ["npm", "run", "prod"]
