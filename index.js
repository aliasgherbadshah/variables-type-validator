const validator = require("./validator");
const schema = require("./schema");
// import validator from "./validator"
module.exports = {
    validate:validator,
    createScheam:schema.createScheam,
    getSchema:schema.getSchema,
    validateByScheam:schema.validateByScheam
};