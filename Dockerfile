# Use the httpd:2.4 base image
FROM httpd:2.4

# Copy the local site content to the container's htdocs directory
COPY ./site/ /usr/local/apache2/htdocs/

# Edit the httpd.conf file to add ServerName
RUN echo "ServerName 0.0.0.0" >> /usr/local/apache2/conf/httpd.conf

# Check the Apache config for any syntax errors
RUN apachectl configtest
