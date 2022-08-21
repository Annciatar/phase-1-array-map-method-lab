const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


const titleCased = () =>{
  //return tutorials
  const iterateString = tutorials.map(string => string.split(" "))

  const capitalize = iterateString.map(string2 =>
     string2.map(string3 => 
      string3[0].toUpperCase() + string3.slice(1)).join(" "))
      return capitalize
}















// function capital(str){
//   let tutorials = str.split(" ").map(tutorials =>{
// return tutorials.charAT(0).toUpperCase() + tutorials.slice(1);
//   });
//   return tutorials.join(" ")
// }


