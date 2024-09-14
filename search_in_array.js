

function search_in_array(arr,target){
    for(let i=0;i<arr.length;i++){
     if(arr[i]===target)
        return arr.indexOf(arr[i])
}
return `element ${target} not found in arr.`
}

let arr=[1,2,3,4,5,6,7]
let target=10
ans=search_in_array(arr,target)
console.log(ans)
