FROM node
COPY . .
RUN npm i
CMD PORT=80 npm start
