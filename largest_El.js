function largest_El(arr){
   let max = Number.NEGATIVE_INFINITY;
   for(let i=0;i<arr.length;i++){
       if(arr[i]>max)
           max=arr[i]
   }
   return max
}

console.log(largest_El([3,1,6,4,9,-12,40,2,8,45,32]))