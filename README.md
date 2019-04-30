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



#### **type** 
type parameter accept four values 
1. String
2. Number
3. Array
4. Object
5. Boolean


this module also help you with other characteristics of variable like 

#### **required : true** 
this parameter define is the value of given variable is required or not

#### **length** 

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
        required:true,
        length:{
            gte:5,
            lte:10
        }
    },
     
 })
 ```




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
