// Immediately invoke functon Expressins(IIFE)
(function chai (){
    console.log(`DB Connected`);
})(); //semicolon to the function 

( (name) =>{
    console.log(`DB Connected ${name}`);
})("Prathmesh")