
function Selection_sort(arr){
     let index;

     for(let i=0;i<arr.length-1;i++){
       let temp=arr[i]
        for(let j=i+1;j<arr.length;j++){
           if(temp>arr[j]){
            temp=arr[j]
             index=j
           }
        }
        arr[index]=arr[i]
        arr[i]=temp
    }
    return arr
}
let a1=[1,4,2,6,32,-2,-6,0,16,-70,3]
console.log(Selection_sort(a1))