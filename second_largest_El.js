function second_largest_El(arr){
    let max = Number.NEGATIVE_INFINITY;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max)
            max=arr[i]
    }
    let max1=Number.NEGATIVE_INFINITY;
    let j=0;
    let flag=false
    while(j<arr.length)
        {
            if(arr[j]>max1 && max>arr[j]){
            max1=arr[j]
             flag=true
            }
            j++
        }
        if(flag=== true)
         return max1
        return -1
 }
 
 console.log(second_largest_El([3,1,6,4,9,-12,40,2,8,45,32]))