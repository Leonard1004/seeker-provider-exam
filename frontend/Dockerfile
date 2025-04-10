FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy the frontend code to the container
COPY . .

# Install dependencies
RUN npm install

# Build the frontend for production
RUN npm run build

# Expose the port the app runs on
EXPOSE 4173

# Serve the built frontend using a simple HTTP server
RUN npm install -g serve
CMD ["serve", "-s", "dist"]