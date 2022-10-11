FROM node:16

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json
#COPY index.js index.js

RUN npm install

# CMD [ "npm", "run", "dev"]
# ENTRYPOINT [ "/usr/local/bin/node", "index.js" ]
