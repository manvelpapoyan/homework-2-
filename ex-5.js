function sumOfDigits(num){

if(num>9){
num=num.toString()
num=num.split('')
num=num.reduce((sum,current)=>sum+(+current),0);
return sumOfDigits(num);

}else return num;

}
console.log(sumOfDigits(777))