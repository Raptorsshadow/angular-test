FROM node:8.12.0
RUN mkdir -p /usr/src/SUPERSTORE

COPY dist/SuperStore /usr/src/SUPERSTORE/dist/SuperStore
COPY ssl /usr/src/SUPERSTORE/ssl

COPY authMiddleware.js /usr/src/SUPERSTORE/
copy serverdata.json /usr/src/SUPERSTORE/
COPY server.js /usr/src/SUPERSTORE/server.js
COPY deploy-package.json /usr/src/SUPERSTORE/package.json

WORKDIR /usr/src/SUPERSTORE

RUN npm install

EXPOSE 80

CMD ["node", "server.js"]