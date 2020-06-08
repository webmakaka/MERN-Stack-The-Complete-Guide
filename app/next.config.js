// must restart server whenever you make changes in next.config
module.exports = {
  env: {
    MONGO_SRV: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_KEY,
    CLOUDINARY_URL: 'https://api.cloudinary.com/v1_1/marley/image/upload',
    STRIPE_SECRET_KEY: process.env.STRIPE_KEY,
  },
};
