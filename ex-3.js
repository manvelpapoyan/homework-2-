function fibonacci(num,arr,i){
 
if(i<num){

if(i<2){
arr.push(1)

}else {
   arr[i]=arr[i-1]+arr[i-2];
}
i++;
return fibonacci(num,arr,i)

}else{

   return arr;
}
}
console.log(fibonacci(20,[],0))
