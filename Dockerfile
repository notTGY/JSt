FROM node

COPY . .
RUN npm i \
  && cd front \
  && npm i \
  && npm run build \
  && npm run export \
  && cd ..

CMD PORT=80 npm start
