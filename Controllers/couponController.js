const Coupon = require('../DB/models/couponModel');
const asyncHandler = require('express-async-handler');

//Create a new coupon
exports.createCoupon = asyncHandler(async (req, res) => {
  const coupon = await Coupon.create(req.body);
  res.status(201).json({ 
    status: 'success', 
    data: coupon 
    });
});

//Get all coupons
exports.getAllCoupons = asyncHandler(async (req, res) => {
  const coupons = await Coupon.find();
  res.status(200).json({ 
    status: 'success', 
    results: coupons.length, 
    data: coupons 
    });
});

//Get a single coupon by ID
exports.getCoupon = asyncHandler(async (req, res) => {
  const coupon = await Coupon.findById(req.params.id);
  if (!coupon) {
    return res.status(404).json({ message: 'Coupon not found' });
  }
  res.status(200).json({ 
    status: 'success', 
    data: coupon 
    });
});

//Update a coupon by ID
exports.updateCoupon = asyncHandler(async (req, res) => {
  const coupon = await Coupon.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!coupon) {
    return res.status(404).json({ message: 'Coupon not found' });
  }
  res.status(200).json({ 
    status: 'success', 
    data: coupon 
    });
});

//Delete a coupon by ID
exports.deleteCoupon = asyncHandler(async (req, res) => {
  const coupon = await Coupon.findByIdAndDelete(req.params.id);
  if (!coupon) {
    return res.status(404).json({ message: 'Coupon not found' });
  }
  res.status(204).json({ 
    status: 'success', 
    data: null 
    });
});
