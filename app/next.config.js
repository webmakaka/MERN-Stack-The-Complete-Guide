// must restart server whenever you make changes in next.config
module.exports = {
  env: {
    MONGO_SRV:
      'mongodb+srv://admin:admin@mern-stack-the-complete-guide-vksgu.mongodb.net/test?retryWrites=true&w=majority',
    JWT_SECRET: '<insert-jwt-secret>',
    CLOUDINARY_URL: 'https://api.cloudinary.com/v1_1/marley/image/upload',
    STRIPE_SECRET_KEY: '<insert-stripe-secret-key>',
  },
};
