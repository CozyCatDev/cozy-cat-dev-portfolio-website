/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
    output: "export",
    sassOptions: {
        includePaths: [path.join(__dirname, 'app/styles')]
    },
    env: {
        SERVICE_ID: process.env.SERVICE_ID,
        TEMPLATE_ID: process.env.TEMPLATE_ID,
        PUBLIC_KEY: process.env.PUBLIC_KEY
    }
};

module.exports = nextConfig;
