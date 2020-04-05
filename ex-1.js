function oddDigits(a){

   if(a===0){
   return true;
   }
   
  if((a%10)%2===0){
     return false;
  }else{
     return oddDigits((a-(a%10))/10);
  }
}