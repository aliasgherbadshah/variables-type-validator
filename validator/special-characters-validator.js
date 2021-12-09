
module.exports = specialCharactersValidator =(value, condition, type, key)=>{
    try{
        if(type === 'String'){
            if(condition){
                const specialChars = `/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;`
                const isSpecialCharsPresent = specialChars.split('').some(char => 
                    value.includes(char));
                    if(isSpecialCharsPresent){
                        return {
                            result:false,
                            message: `${key} contains special characters.`
                        }
                    }else {
                        return {
                            result:true,
                            message: true
                        } 
                    }
            }else {
                return {
                    result:true,
                    message: true
                } 
            }
        }else {
            return {
                result:false,
                message:'restrictSpecialCharacters is only allowed on string'
            }
        }
        
    }catch (err) {
        console.log(new Error(err));
    }

};