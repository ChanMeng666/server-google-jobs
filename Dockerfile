# Generated by https://smithery.ai. See: https://smithery.ai/docs/config#dockerfile
# Start from a Node.js base image
FROM node:22-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package.json package.json

# Install dependencies
RUN npm install --ignore-scripts

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Create a production image
FROM node:22-alpine

# Set the working directory
WORKDIR /app

# Copy built application and dependencies from the builder stage
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/package.json /app/package.json

# Set the environment variable for SERP_API_KEY
ENV SERP_API_KEY=your-api-key

# Define the command to run the application
CMD ["node", "dist/index.js"]
