var c = 100 //global
if (true) {
    let a =10
    const b =20
    var c = 30 // or c = 30 local
}
// console.log(a)
// console.log(b)
// console.log(c)

// ################################
function one(){
    const username = "Prathmesh"

    function two(){
        const website="Google"
        console.log(username);
    }
    // console.log(website)

    // two()
}
one()
// console.log(result);