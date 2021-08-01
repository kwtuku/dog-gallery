FROM node:16.6.0-alpine

ENV APP /myapp
RUN mkdir $APP
WORKDIR $APP

COPY package.json yarn.lock $APP/
RUN yarn

COPY . $APP/

CMD ["yarn", "start"]
