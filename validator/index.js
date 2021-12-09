const typeValidator = require("./type-validator");
const lengthValidator = require("./length-validator");
const specialCharactersValidator = require("./special-characters-validator");
const supportFunction = require("./support");

module.exports = store = function (variables) {

    try {
        let status = {
            status: true,
            message: "all variables are valid"
        };

        for (let i in variables) {
            if (variables[i].value || variables[i].default) {
                variables[i] = supportFunction.rearrengeKey(variables[i]);
                let valid = false;
                let validatorResult = [];
                let validatorMessages = [];
                for (let key in variables[i]) {
                    let result = {};
                    switch (key) {
                        case "type":
                            result = typeValidator(variables[i].value, variables[i].type, i);
                            validatorMessages.push(result.message);
                            validatorResult.push(result.result);
                        case "required":
                            result = variables[i].value === undefined || variables[i].value === null || variables[i].value === '' ? {
                                result: false, message: "variable " + i + " cannot be null"
                            } : { result: true, message: true };
                            validatorMessages.push(result.message);
                            validatorResult.push(result.result);
                        case "length":
                            result = lengthValidator(Object.keys(variables[i].value).length, variables[i].length, i);
                            validatorMessages.push(result.message);
                            validatorResult.push(result.result);
                        case "restrictSpecialCharacters":
                            result = specialCharactersValidator(variables[i].value, variables[i].restrictSpecialCharacters, variables[i].type, i);
                            validatorMessages.push(result.message);
                            validatorResult.push(result.result);
                        default:
                    }
                }
                if (validatorResult.length > 0 && validatorResult.indexOf(false) > -1) {
                    status = {
                        status: false,
                        message: variables[i].errorMessage || validatorMessages[validatorResult.indexOf(false)]
                    };
                    break;
                }
            } else {

                if (variables[i].required === false) {
                    status = {
                        status: true,
                        message: "all variables are valid"
                    };
                } else {
                    status = {
                        status: false,
                        message: variables[i].errorMessage || "unable to found value for key " + i,

                    };
                }

                break;
            }

        }
        return status;
    } catch (err) {

        console.log(new Error(err));
    }

};

