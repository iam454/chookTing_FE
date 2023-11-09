# Build stage
FROM krmp-d2hub-idock.9rum.cc/goorm/node:16
ENV REACT_APP_KAKAO_CLIENT_ID=b51d037debb98e9ae02735887894b407 \
    REACT_APP_INSTAGRAM_CLIENT_ID=2456565514525348 \
    REACT_APP_BASE_URL=https://kb0572eda580ca.user-app.krampoline.com/api
WORKDIR /usr/src/app
COPY . .
RUN npm ci
RUN npm run build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "build"]