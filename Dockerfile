FROM nginx:stable-alpine
LABEL author="Simona Cotin"
COPY ./dist/browser /var/www
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80 443
ENTRYPOINT ["nginx","-g","daemon off;"]
