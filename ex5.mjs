var goodUsers = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
 ]
 
 // `checkUsersValid` is the function you'll define
 var testAllValid = checkUsersValid(goodUsers)
 
 testAllValid([
    { id: 2 },
    { id: 1 }
 ])
 // => true
 
 testAllValid([
    { id: 2 },
    { id: 4 },
    { id: 1 }
 ])
 // => false

 function checkUsersValid(goodUsers){
    return function (parameter) {
         let a = []
         for (let b = 0; b < parameter.length; b++){
            for (let c = 0; c < goodUsers.length; c++){
               if(parameter[b].id == goodUsers[c].id){
               a.push("true")
                  break
               }
            }
         }
         if(a.length == parameter.length){
            return true
         }
         return false
    }
 }