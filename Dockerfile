FROM node:latest
WORKDIR /usr/src/capstone_project
COPY package*.json ./
COPY index.js ./
RUN npm install
EXPOSE 2000
CMD ["node", "index.js"]

