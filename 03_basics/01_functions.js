function Add(num1,num2){
// console.log(num1+num2);
    return num1+num2;
}

// Add(4,5)
// Add(4,"5")
// Add(4+"a")
const result = Add(4,5)
// console.log("Result: "+ result);

function loggedInMessage(username){
    if (username ===undefined) {
        console.log("Please enter the username!!!")
        return
    }
    return `${username} just logged in.`
}
// const msg = loggedInMessage("Prathmesh")
const msg = loggedInMessage()
// console.log(msg);
function prices(val1,val2,...num1){
    return num1
}
console.log(prices(200,500,100));


