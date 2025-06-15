const Product = require('../DB/models/productModel');
const asyncHandler = require('express-async-handler');
const ApiError = require('../utils/apiError');


//Get all products
exports.getAllProducts = asyncHandler(async (req, res, next) => {

  const queryObj = { ...req.query };
  const excludeFields = ['page', 'sort', 'limit', 'fields'];
  excludeFields.forEach(el => delete queryObj[el]);

  let query = Product.find(queryObj);
  if (req.query.sort) {
    const sortBy = req.query.sort.split(',').join(' ');
    query = query.sort(sortBy);
  } else {
    query = query.sort('-createdAt');
  }

  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 10;
  const skip = (page - 1) * limit;
  query = query.skip(skip).limit(limit);

  const products = await query;

  res.status(200).json({
    status: 'success',
    results: products.length,
    data: { products },
  });
});


//Get a single product
exports.getProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ApiError('No product found with that ID', 404));
  }
  res.status(200).json({
    status: 'success',
    data: {
      product,
    },
  });
});

//Create a new product
exports.createProduct = asyncHandler(async (req, res, next) => {
  const newProduct = await Product.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      product: newProduct,
    },
  });
});

//Update a product
exports.updateProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!product) {
    return next(new ApiError('No product found with that ID', 404));
  }
  res.status(200).json({
    status: 'success',
    data: {
      product,
    },
  });d
});

//Delete a product  
exports.deleteProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) {
    return next(new ApiError('No product found with that ID', 404));
  }
  res.status(200).json({
    status: 'success',
    message: 'Product deleted successfully',
    data: null
  });
});
