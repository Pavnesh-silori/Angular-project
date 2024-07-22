FROM nginx:1.21.6

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.conf /etc/nginx/
COPY nginx/netzero.conf.template /etc/nginx/templates/

COPY dist/netzero /usr/share/nginx/html/netzero
