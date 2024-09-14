
function Selection_sort(arr){
    for (let i = 0; i < arr.length - 1; i++) {
        let index = i;  // Initialize the index to the current position
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[index]) {  // Compare and find the minimum
                index = j;  // Update the index of the minimum value
            }
        }
        // Swap the elements at i and index
        if (index !== i) {
            let temp = arr[i];
            arr[i] = arr[index];
            arr[index] = temp;
        }
    }
    return arr;
}
let a1=[1,4,2,6,32,-2,-6,0,16,-70,3]
console.log(Selection_sort(a1))