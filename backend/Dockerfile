# 1️⃣ Base image (Node LTS)
FROM node:20-alpine

# 2️⃣ Set working directory inside the container
WORKDIR /app

# 3️⃣ Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# 4️⃣ Install dependencies
RUN npm install

# 5️⃣ Copy the rest of the application code to the working directory
COPY . .

# 6️⃣ Prisma generate (if using Prisma)
RUN npx prisma generate

# 7️⃣ Build the TypeScript code
RUN npm run build

# 8️⃣ Expose the port the app runs on
EXPOSE 4000

#  Start the application
CMD ["node", "dist/server.js"]