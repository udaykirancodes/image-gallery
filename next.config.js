/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    mongodburl: "mongodb://localhost:27017/imageupload?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false ",
  }
}

module.exports = nextConfig
