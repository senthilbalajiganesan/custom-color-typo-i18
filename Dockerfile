FROM node:10.16.3-slim as build

# creating a working directory
WORKDIR /react-app

# copying dependencies map
COPY package*.json ./

# installing all the dependencies
RUN npm ci

# copying src folder and public
COPY . .

# creating a prod build version of the app
RUN npm run build

FROM nginx:1.17.4
EXPOSE 80
COPY --from=build /react-app/build/ /usr/share/nginx/html