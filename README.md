If you're not sure that what kind of input you are getting and you want to validate it before doing further process this package help you with this. anything which is not as per requirement it returns error.


## **Installation and Usage**

**Server-side usage**

Install the library with 

```npm install --save variables-type-validator```
    
```javascript
let validator = require('variables-type-validator');

const valid = validator.validate({
   variable_name: {
       value:"dummy string",
       type:"String"
   },
        
})
```

this will check that if given value is string or not it return the object like below :-
```javascript
console.log(valid)

/*{
        valid:true,
        message:"all variables are valid"
}*/
```



### **type** 
type parameter accept four values 
1. String
2. Number
3. Array
4. Object
5. Boolean


this module also help you with other characteristics of variable like 

### **required : true** 
this parameter define is the value of given variable is required or not.
 
###### Note :- by default required parameter is _true_

### **default: value**

you can also set default value to any variable if its value is empty or null. 


### **length** 

you can also define the length of the value of and variable. The
length parameter accept an object. the length of the variable can be define as below

1. gte  (greater then or equal to)
2. lte  (lower then or equal to)
3. eq   ( equal to)
4. gt   (greater then)
5. lt   (lower then)

for example :-

```javascript
const valid = validator.validate({
    variable_name:{
        value:[1,2,3,4,5,6,7],
        type:"Array",
        default:[1,2,3,4,5],
        required:true,
        length:{
            gte:5,
            lte:10
        }
    },
     
 })
 ```


# Schema

you can also pre define the schema for dataset you get it helps to validate the data and avoid unnecessary values.

### creating Schema
first you have to register a schema an give it a name

###### Note :- schema name should be unique other wise it will throw an error.

```javascript
const validator = require('validator');

validator.createScheam("my_schema",{
    variable1:{
        type:"Array",
        required:true,
        length:{
            gte:5,
            lte:10
        }
    },
    variable2:{
        type:"String",
        required:false
    }
     
 })
 ```
you can use same variable as you did in **_validate_** methods all parameters will work same as it does in **_validate_** method. 


### validating throw Schema

validating throw registered schema is super easy you just need to call the _**validateByScheam**_ method.

 
```javascript

const valid = validator.validateByScheam("my_schema",{
    variable1:[1,2,3,4,5,6],
    variable2:"sample text"
 })
 
 ```
 and this is it. now this method find the schema you entered and validate the data which you inserted. 
###### Note :- variable name should be same as you define on schema otherwise it will not validate the variable. 

### any : false

you can also restrict the unwanted variable by defining _**any**_  parameter in schema options.


```javascript
validator.createScheam("my_schema",{
    variable1:{
        type:"String",
        required:false
    }
     
 },{any:false})
 ```
 now if you insert data which has other variable unlike you define it will throw an response like below
 

```javascript
const valid = validator.validateByScheam("my_schema",{
    variable1:"sample text",
    variable2:10
 })
 
 console.log(valid);

/*
{
    result: false,
    message: 'variable variable2 is not allowed in schema' 
}   
 */

 ```
 
 it simple reject all the other variable which are not set in a scheam.
 
######  Note :- by default the _**any**_  parameter wil be true which means it allow other variables which are not defined in scheam 

## **validation ERROR messages**

=> if _**type**_ of given variable does not matched

 1. type of </your variable name> should be Array
 2. type of </your variable name> should be Object
 3. type of </your variable name> should be String
 4. type of </your variable name> should be Number



=> if _**required**_ condition does not match

variable </your variable name> cannot be null



=> if _**length**_ of given variable does not matched

1. length of  </your variable name> is must be greater then or equal to </ your condition>
2. length of  </your variable name> is must be lower then or equal to </ your condition>
3. length of  </your variable name> is must be equal to </ your condition>
4. length of  </your variable name> is must be greater then </ your condition>
5. length of  </your variable name> is must be lower then  </ your condition>



## **ABOUT :-**

this package is in its initial age so you may face some bugs and difficulties by using this but i am intresterd to know about your thoughts regarding this package so i can develop it more further and i hope that some of you may  interested helping me with this package and give me new ideas that help me building this more further. 

you can mail me your reviews and idea to my gmail account _**aliasgherbadshah128@gmail.com**_
