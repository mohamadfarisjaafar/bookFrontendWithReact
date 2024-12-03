# Use the Node.js LTS base image for building
FROM node:18 AS build

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the source code
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight web server for serving the static files
FROM nginx:alpine

# Copy built files from the previous stage
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expose the frontend port
EXPOSE 80

# Start the web server
CMD ["nginx", "-g", "daemon off;"]
