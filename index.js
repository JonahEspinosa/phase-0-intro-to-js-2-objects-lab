// Write your solution in this file!
const employee={
    name:"juan",
streetAddress:"340 mainstreet", 
}
function updateEmployeeWithKeyAndValue(object, key, value) {
    let newobject={...object}
       newobject[key]=value;
     return newobject;
 }
 function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
     employee[key]=value;
    
     return employee
 }
 function deleteFromEmployeeByKey(employee, key){
     let newobject= {employee, key}
     delete newobject[key]
     return newobject
 }
 function destructivelyDeleteFromEmployeeByKey(employee, key){
   delete employee[key]  
   return employee
     
 }