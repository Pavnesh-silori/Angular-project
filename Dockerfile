FROM nginx:1.21.6

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.conf /etc/nginx/
COPY nginx/admin.conf.template /etc/nginx/templates/

COPY dist/admin /usr/share/nginx/html/admin
