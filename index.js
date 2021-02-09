const objectToArray = {
    A: 1,
    B: 2,
    C: 3
  }

const convert = (obj)=>{
    return Object.entries(obj);
};
console.log(convert({objectToArray}));


let first = {firstName: "John"}
let last = {lastName: "Smith"}

  const merge = (obj1, obj2)=>{
   
let newmerge = Object.assign(obj1, obj2);
 return newmerge;

  };
  console.log(merge({first, last}));

  let student = {
    name: "Mike", 
    class: "4A", 
    course: "English"
  }
  
const toarry = (obj)=>{
    return [].concat(obj);

};
console.log(toarry({student}));