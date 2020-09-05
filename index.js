const validator = require("./validator");
const schema = require("./schema");
// import validator from "./validator"
module.exports = {
    validate:validator,
    createSchema:schema.createScheam,
    getSchema:schema.getSchema,
    validateBySchema:schema.validateByScheam
};