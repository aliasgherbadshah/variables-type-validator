
module.exports = lengthValidatorFunction =(length,conditions,key)=>{
    try{
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
    }catch (err) {
        console.log(new Error(err));
    }

};