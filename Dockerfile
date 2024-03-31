# Use the official Nginx image as the base image
FROM nginx:latest

# Copy the contents of the 'site' directory to the Nginx html directory
COPY ./site /usr/share/nginx/html
