# base image for 'build' stage (Official Node.js image ver 20.12.2)
FROM node:20.12.2 AS build 

# go to app directory in container
WORKDIR /app

# copy the package.json and package-lock.json into the /app directory
COPY package*.json ./

# install all required packages from npm
RUN npm install

# install angular globally in the container
RUN npm install -g @angular/cli

# copy everything into the /app directory of the container
COPY . ./

# build the angular app into the dist directory
RUN ng build --configuration=production

# create an nginx web server image
FROM nginx:latest

# copy the dist from the node image into the nginx image
COPY --from=build app/dist/tourneypal/browser /usr/share/nginx/html

# Expose port 80
EXPOSE 80