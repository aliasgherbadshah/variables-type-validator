
module.exports = typeValidatorFunction =(variable,condition,key)=>{
    try {
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
            case 'Boolean':
                return typeof variable == "boolean" ? {result:true,message:true} :{
                    result:false,
                    message:"type of "+ key +' should be Boolean'
                };
            default:
                return true;
        }
    }catch (err) {
        console.error(err);
    }

};