FROM node:18.17.1
WORKDIR /usr/app/fixlab/adminclient
COPY . .
RUN npm cache clear --force
RUN rm -rf node_modules
RUN rm -rf package-lock.json
RUN npm install
ENTRYPOINT ["npm","start"]
