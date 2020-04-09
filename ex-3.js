function fibonacci(num,arr,i){

if(num===1){

   return arr[0];

}
if(num===2){

return arr;
}

arr[i]=arr[i-1]+arr[i-2];

if(arr.length===num){

   return arr;
}else{

   return fibonacci(num,arr,i+1);
}
}

console.log(fibonacci(20,[1,1],2))