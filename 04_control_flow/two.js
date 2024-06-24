const myNums = [1,2,3,4,5,6,7,8,9]

const filtered = myNums.filter( (nums) => nums<5)
// const filtered1 = myNums.filter( (nums) => {return nums<5})
// console.log(myNums);
const filtered2 = myNums.map( (nums) => {return nums + 10}).map( (nums) => {return nums - 10})
// console.log(filtered);
// console.log(filtered2);


// ########################REDUCE#################
const intialValue = 10
const sumWithInitial = myNums.reduce(
    (accmulator,currentValue) => accmulator + currentValue,intialValue
)

const course=[
    {
        itemName : "js course",
        price : 1333
    },
    {
        itemName : "py course",
        price : 1999
    },
    {
        itemName : "c++ course",
        price : 2999
    },
    {
        itemName : "web dev course",
        price : 3999
    },
    {
        itemName : "app dev course",
        price : 4999
    }

]
const priceToPay = course.reduce((accumulator,item) => accumulator+item.price,0 )
console.log(priceToPay);