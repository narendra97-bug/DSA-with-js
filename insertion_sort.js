function Insertion_sort(arr){
    for(let i=1;i<arr.length;i++){
        let current=arr[i]
          let j=i-1
        while(arr[j]>current && j>=0)
           {
            arr[j+1]=arr[j]
            j--
            }
            arr[j+1]=current
}
return arr
}
let a1=[1,4,2,6,32,-2,-6,0,16,-70,3]
console.log(Insertion_sort(a1))