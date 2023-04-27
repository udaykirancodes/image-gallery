/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    mongodburl: "mongodb+srv://udaykirancodes:udaykirancodes@cluster0.ip9n0c4.mongodb.net/nexttask?retryWrites=true&w=majority",
  }
}

module.exports = nextConfig
