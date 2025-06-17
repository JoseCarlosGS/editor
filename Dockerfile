# base image
FROM node:18-alpine as build

# set working directory
WORKDIR /app

# copy files
COPY . .

# install dependencies and build using npm
RUN npm install
RUN npm run build

# production stage
FROM nginx:1.19-alpine


COPY nginx.conf /etc/nginx/conf.d/default.conf
# copy built files from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# start nginx
CMD ["nginx", "-g", "daemon off;"]