# Base image (Node LTS)
FROM node:20

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Prisma generate (if using Prisma)
RUN npx prisma generate

# Build the TypeScript code
RUN npm run build

# Expose the port the app runs on
EXPOSE 4000

# Start the application
CMD ["node", "dist/server.js"]