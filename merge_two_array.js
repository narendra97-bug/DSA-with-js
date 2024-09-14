function merge_two_array (arr1,arr2){
   let arr=[]
   for(i=0;i<arr1.length;i++){
       arr.push(arr1[i])
   }
   for(i=0;i<arr2.length;i++){
    arr.push(arr2[i])
}
 return arr
}

a1=[1,2,4,2,1,4]
a2=[4,6,2,8,9,1,0]

console.log(merge_two_array(a1,a2))