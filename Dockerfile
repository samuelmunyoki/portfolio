FROM httpd:2.4

# Install nano and configure Apache
RUN apt-get update && apt-get install -y nano
RUN echo "ServerName localhost" >> /usr/local/apache2/conf/httpd.conf

# Validate Apache configuration
RUN apachectl configtest

# Copy your site files
COPY ./site/ /usr/local/apache2/htdocs/
