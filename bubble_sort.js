function bubble_sort(arr){
    for(let i=0;i<arr.length;i++){
        let index=0
        for(let j=1;j<arr.length-i;j++){
              if(arr[j]< arr[index])
                 {
                    let temp=arr[index]
                       arr[index]=arr[j]
                       arr[j]=temp
                       
                 }
                 index++
        }
    }

    return arr
    
}

console.log(bubble_sort([3,5,1,7,9,2,4,9,5,0]))