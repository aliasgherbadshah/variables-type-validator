module.exports = {
    rearrengeKey :(obj)=>{
        let tempObj = {};
        if(obj.hasOwnProperty('required')){
            tempObj.required = obj.required
        }
        if(obj.hasOwnProperty('type')){
            tempObj.type = obj.type
        }
        if(obj.hasOwnProperty('length')){
            tempObj.length = obj.length
        }
        tempObj.value = obj.value|| obj.default || null;
        return tempObj
    }
};

