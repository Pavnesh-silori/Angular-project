FROM nginx:1.21.6

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.conf /etc/nginx/
COPY nginx/account.conf.template /etc/nginx/templates/

COPY dist/account /usr/share/nginx/html/account

# Install JSON Server
# RUN apk --no-cache add nodejs=14.18.2 npm=6.14.15
# FROM node:14.18.2
# RUN npm install -g json-server@0.17.4
# docker pull qyvlik/typicode-json-server:0.17.3

# FROM qyvlik/typicode-json-server:0.17.3

# Expose port 3000 for JSON Server
# EXPOSE 3000

# Copy JSON Server data file
# COPY db.json /data/db.json

# Start JSON Server and Nginx
# CMD json-server --watch /data/db.json --port 3000
