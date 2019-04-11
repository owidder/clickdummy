FROM mhart/alpine-node:11 AS builder

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

FROM twalter/openshift-nginx:mainline-alpine

COPY --from=builder /app/build/ /usr/share/nginx/html