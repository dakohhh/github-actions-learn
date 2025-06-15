FROM node:20-alpine AS builder

WORKDIR /app

COPY . .

# Install the dependencies
RUN yarn install

# Build the application
RUN yarn run build


FROM node:20-alpine AS runner

WORKDIR /app

COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/yarn.lock /app/yarn.lock


RUN yarn install --production

CMD [ "yarn", "start:prod" ]