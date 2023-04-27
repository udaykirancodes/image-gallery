/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    mongodburl: "mongodb+srv://udaykirancodes:udaykirancodes@cluster0.ip9n0c4.mongodb.net/nexttask?retryWrites=true&w=majority",
    // mongodburl: "mongodb://localhost:27017/socialmedia?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false",
  }
}

module.exports = nextConfig
