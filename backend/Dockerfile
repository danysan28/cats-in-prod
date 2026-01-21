# 1️⃣ Base image (Node LTS)
FROM node:18-alpine

# 2️⃣ Set working directory inside the container
WORKDIR /app

# 3️⃣ Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# 4️⃣ Install dependencies
RUN npm install --production

# 5️⃣ Copy the rest of the application code to the working directory
COPY . .

# 6️⃣ Expose the port the app runs on
EXPOSE 4000

# 7️⃣ Start the application
CMD ["node", "src/index.js"]