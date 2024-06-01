# Use the official Nginx image from the Docker Hub
FROM nginx:alpine

# Copy the custom configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the static HTML files
COPY html /usr/share/nginx/html

COPY style /usr/share/nginx/style
