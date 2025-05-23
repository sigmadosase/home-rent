const joi=require("joi");

module.exports.listingSchema= joi.object({
    listing :joi.object({
    title: joi.string().required(),
    description: joi.string().required(),
    location:joi.string().required(),
    price: joi.number().required().min(500),
    image: joi.string().allow("",null),
    country:joi.string().required()
}).required(),
});

module.exports.reviewSchema =joi.object({
    review: joi.object({
        rating:joi.number().required().min(1).max(5),
        comment: joi.string().required(),
    }).required(),
});