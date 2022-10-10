const validators = [
    {
    name : "p1" , validators: [s => typeof s == 'string' && s.length > 2, s => s[0]=="a"] 
    },
    {
    name : "p2" , validators: [s => Number.isInteger(s)] 
    }
 ]

 const obj1 = { p1 : "a" }
 const obj2 = { p1 : 123  }
 const obj3 = { p1 : "abc" , p2 : 123 }

Object.prototype.validateProperties = function(propValidators) {
    return validateProperties(this, propValidators)
}

function validateProperties (obj, propValidators) {
    const arr = propValidators.filter(result => validateProperty(obj, result) == false).map(a => a.name)
    return arr
}

function validateProperty(obj, propValidator) {
    if (!obj.hasOwnProperty(propValidator.name)) return false // Para saber se existe o objeto

    let c = 0
    while (c < propValidator.validators.length) {
        if(propValidator.validators[c](obj[propValidator.name])==false) return false
       c++
    }
    return true
}
