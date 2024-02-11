//##############################################################################
// task 1
// #############################################################################
let nums = [1, 2 ,3 ];

function sum(numbers){
    let summation = 0;
    for(let i=0;i<numbers.length;i++){
        summation+=numbers[i];
    }
    return summation;
}
let print=sum(nums);
console.log(`test one : sum(1,2,3) \t` + print);
nums.push(4);
print=sum(nums);
console.log(`test 2 : sum(1,2,3,4) \t` + print);
// for(let x=0;x<4;x++)    {
//     nums.shift();
// }
nums=[25,30,40];
print=sum(nums);
console.log(`test 3 : sum(25,30,40) \t` + print);

//##############################################################################
// task 2
// #############################################################################
let array=[1,2,3,4,5,10,13,15,20];
for(let x=0;x<array.length;x++){
    if(array[x]%2==0)     console.log(`num ${array[x]} is even`);
    else                   console.log(`num ${array[x]} is odd`);
}

//##############################################################################
// task 3
// #############################################################################
let names=["yousef","salah","hana","mohamed"];
console.log(names.join(" ").toUpperCase());
//##############################################################################
// task 4
// #############################################################################
function Calculator(num1,num2,sign){
    if(sign==="+")                      return num1+num2;
    else if(sign==="-")                 return num1-num2;
    else if(sign==="*")                 return num1*num2;
    else if(sign==="/")         {  
                if (num2==0)       console.log(`you can not divide by zero`)
                else return num1/num2;
    }
}
let res = Calculator(1,2,"+");
console.log(`1+2---------->` + res);
res = Calculator(3,1,"-");
console.log(`3-1---------->` + res);
res = Calculator(4,2,"*");
console.log(`4*2---------->` + res);
res = Calculator(4,2,"/");
console.log(`4/2---------->` + res);