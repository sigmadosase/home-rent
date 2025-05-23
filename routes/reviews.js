const express =require("express");
const router = express.Router({mergeParams: true});
const wrapAsync=require("../utils/wrapasync.js");
const ExpressError =require("../utils/ExpressError.js");
const  Review =require("../models/reviews.js");

const  Listing =require("../models/listing.js");
const {validateReview, isLoggedIn, isReviewauthor}=require("../middleware.js");
const reviewController=require("../controllers/reviews.js");


// post reviews routes

router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReviews));

// delete review routes

router.delete("/:reviewId",isLoggedIn, isReviewauthor, wrapAsync(reviewController.deleteReviews));

module.exports=router;
