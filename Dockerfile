# Use an official NGINX image as the base image
FROM nginx:latest

# Set the working directory to /usr/share/nginx/html
WORKDIR /usr/share/nginx/html

# Remove the default NGINX content
RUN rm -rf ./*

# Copy your HTML files to the container
COPY . /usr/share/nginx/html

# Expose port 80 for the container
EXPOSE 80

# The NGINX image automatically starts NGINX, so no CMD is needed
