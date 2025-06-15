const authRoute = require('./authRoute');
const productRoute = require('./ProductsRoute');
const userRoute = require('./userRouter');
const categoryRoute = require('./categoryRoute');
const subCategoryRoute = require('./subCategoryRoute');

const mountRoutes = (app) => {
    app.use('/api/v1/products', productRoute);
    app.use('/api/v1/users', userRoute);
    app.use('/api/v1/auth', authRoute);
    app.use('/api/v1/categories', categoryRoute);
    app.use('/api/v1/subcategories', subCategoryRoute);
};

module.exports = mountRoutes;
