const authRoute = require('./authRoute');
const productRoute = require('./ProductsRoute');
const userRoute = require('./userRouter');
const categoryRoute = require('./categoryRoute');
const subCategoryRoute = require('./subCategoryRoute');
const cartRoute = require('./cartRoute');
const orderRoute = require('./orderRoute');
const couponRoute = require('./couponRoute');
const brandRoute = require('./brandRoute');
const reviewRoute = require('./reviewRoute');
const wishlistRoute = require('./wishlistRoute');
const addressRoute = require('./addressRoute');

const mountRoutes = (app) => {
    app.use('/api/v1/products', productRoute);
    app.use('/api/v1/users', userRoute);
    app.use('/api/v1/auth', authRoute);
    app.use('/api/v1/categories', categoryRoute);
    app.use('/api/v1/subcategories', subCategoryRoute);
    app.use('/api/v1/cart', cartRoute);
    app.use('/api/v1/orders', orderRoute);
    app.use('/api/v1/coupons', couponRoute);
    app.use('/api/v1/brands', brandRoute);
    app.use('/api/v1/reviews', reviewRoute);
    app.use('/api/v1/wishlist', wishlistRoute);
    app.use('/api/v1/addresses', addressRoute);
};

module.exports = mountRoutes;
