function minPositive(arr,i,min){
   
   if(arr[i]>=0 && min>arr[i]){
      min=arr[i];   
   }
   
   if(i===(arr.length-1)&& min===+Infinity){
      return -1;
   }else if(i===(arr.length-1)){

      return min;
   }else{
      return minPositive(arr,i+1,min);
   }
}
console.log(minPositive([7,8,9,20,3,77],0,+Infinity));
console.log(minPositive([-2,-9,-8],0,+Infinity));