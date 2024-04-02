FROM busybox:latest
COPY ./site /www
CMD ["httpd", "-f", "-h", "/www"]
