
module.exports = store  = function(variables){

    let status={
        valid:true,
        message:"all variables are valid"
    };

    for(let i in variables){
        console.log(variables)
        variables[i] = rearrengeKey( variables[i] );
        let valid = false;
        let validatorResult =[];
        let validatorMessages =[];
        for(let key in variables[i]){
            let result ={};
            switch (key) {
                case "type":
                    result = typeValidatorFunction(variables[i].value,variables[i].type, i);
                    validatorMessages.push(result.message);
                    validatorResult.push(result.result);
                    break;
                case "required":
                    result = variables[i].value === undefined || variables[i].value === null || variables[i].value === ''?{
                        result:false,message:"variable "+ i + " cannot be null"
                    }:{result:true,message:true};
                    validatorMessages.push(result.message);
                    validatorResult.push(result.result);
                    break;
                case "length":
                    result = lengthValidatorFunction(Object.keys(variables[i].value).length,variables[i].length,i);
                    validatorMessages.push(result.message);
                    validatorResult.push(result.result);
                default:
                    break;
            }
        }
        if(validatorResult.length > 0 && validatorResult.indexOf(false)>-1){
            status = {
                status:false,
                message:validatorMessages[validatorResult.indexOf(false)]
            };
            break;
        }
    }
    return status;
}

let rearrengeKey =(obj)=>{
    let tempObj = {};
    if(obj.hasOwnProperty('type')){
        tempObj.type = obj.type
    }
    if(obj.hasOwnProperty('required')){
        tempObj.required = obj.required
    }
    if(obj.hasOwnProperty('length')){
        tempObj.length = obj.length
    }
    tempObj.value = obj.value;
    console.log(obj)
    console.log(tempObj)
    return tempObj
};
let typeValidatorFunction =(variable,condition,key)=>{
    switch (condition) {
        case 'String':
            return typeof variable == 'string'? {result:true,message:true}:{
                result:false,
                message:"type of "+ key +' should be String'
            };
        case 'Array':
            return Array.isArray(variable) == true ? {result:true,message:true}:{
                result:false,
                message:"type of "+ key +' should be Array'
            };
        case 'Number':
            return typeof variable == 'number'? {result:true,message:true} : {
                result:false,
                message:"type of "+ key +' should be Number'
            };
        case 'Object':
            return Object.prototype.toString.call( variable) == "[object Object]" ? {result:true,message:true} :{
                result:false,
                message:"type of "+ key +' should be Object'
            };
        default:
            return true;
    }
};
let lengthValidatorFunction =(length,conditions,key)=>{
    let validatorResult =[];
    let validatorMessages =[];
    let result ;
    for(let value in conditions){
        switch (value) {
            case 'gte':
                result = length >= parseInt(conditions[value])? {result:true,message:true}:{
                    result:false,
                    message:"length of "+ key +' is must be greater then or equal to '+conditions[value]
                };
                validatorMessages.push(result.message);
                validatorResult.push(result.result);
                break;
            case 'lte':
                result = length <= parseInt(conditions[value])? {result:true,message:true}:{
                    result:false,
                    message:"length of "+ key +' is must be lower then or equal to '+conditions[value]
                };
                validatorMessages.push(result.message);
                validatorResult.push(result.result);
                break;
            case 'gt':
                result = length > parseInt(conditions[value])? {result:true,message:true}:{
                    result:false,
                    message:"length of "+ key +' is must be greater then '+conditions[value]
                };
                validatorMessages.push(result.message);
                validatorResult.push(result.result);
                break;
            case 'lt':
                result = length < parseInt(conditions[value])? {result:true,message:true}:{
                    result:false,
                    message:"length of "+ key +' is must be lower then '+conditions[value]
                };
                validatorMessages.push(result.message);
                validatorResult.push(result.result);
                break;
            case 'eq':
                result = length <= parseInt(conditions[value])? {result:true,message:true}:{
                    result:false,
                    message:"length of "+ key +' is must be equal to '+conditions[value]
                };
                validatorMessages.push(result.message);
                validatorResult.push(result.result);
                break;
            default:
                return true;
        }
    }
    if(validatorResult.indexOf(false)<0){
        return {
            result:true,
            message:true
        }
    }else {
        return {
            result:false,
            message:validatorMessages[validatorResult.indexOf(false)]
        }
    }
};

