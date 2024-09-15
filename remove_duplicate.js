function fun(nums) {
    let nums2=[];

    for(let i=0;i<nums.length-1;i++){
       if(nums[i] != nums[i+1]){
          nums2.push(nums[i])
       }
       
         
    }              
   if(nums[nums.length-1] !=nums[nums.length-2]){
            nums2.push(nums[nums.length-1])
        }
  
          
        
        return nums2
};

console.log(fun([0,0,1,1,1,2,2,3,3,4]))