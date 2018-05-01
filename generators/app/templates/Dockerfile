FROM node:8.9.1

RUN npm i pm2 -g

ENV HOME=/home/app

COPY package.json package-lock.json $HOME/<%= name %>/
COPY src $HOME/<%= name %>/src/
COPY node_modules $HOME/<%= name %>/node_modules/
COPY .git $HOME/<%= name %>/.git

WORKDIR $HOME/<%= name %>

CMD ["pm2-docker", "src/config/pm2.config.js"]
