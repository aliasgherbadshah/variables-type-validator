const validate = require("../validator");
let schema = {};
let schemaOptions = {};

const validateSchema = (schemaName, data)=>{
    let tempSchema = schema[schemaName];
    const options = schemaOptions[schemaName];
    let validData = true;
    let message;
    if(options.any === false){
        for(let key in data){
            if(tempSchema[key]){
                tempSchema[key].value = data[key];
            }else {
                message = "variable "+key+" is not allowed in schema";
                validData = false;
                break;
            }
        }
    }else{
        for(let key in data){
            if(tempSchema[key]){
                tempSchema[key].value = data[key];
            }
        }
    }
    if(validData){

        return validate(tempSchema);
    }else {
        return {
            result:false,
            message:message
        }
    }
};
const createSchema =(name, scheamData,options)=>{
    if(schema[name]){
        console.warn("scheam " +name + " already exist");
    }else {
        schema[name] = scheamData;
    }


    if(options){
        schemaOptions[name] = {
            any:options.any
        };
    }else {
        schemaOptions[name] ={
            any:true
        }
    }
};
const getSchema = (name) =>{
    return schema[name];
};

module.exports ={
    createScheam:createSchema,
    getSchema:getSchema,
    validateByScheam:validateSchema
};