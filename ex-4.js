function concat(arr,retArr){
let bool=true;
for(let i=0;i<arr.length;i++){

   if(typeof arr[i]==='number'){
   retArr.push(arr[i])

}else{
   bool=false;
   retArr=retArr.concat(arr[i]);
}

}

if(bool===false){

return concat(retArr,[])

}

return retArr;
}
console.log(concat([1, [3, 4, [1, 2],[1,[3,5,8]]], 10],[]))