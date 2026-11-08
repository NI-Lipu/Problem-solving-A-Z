const Check_if_the_Array_is_Sorted=(arr:number[]):boolean=>{
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]>arr[i+1]){
            return false;
        }
    }
    return true;
}

console.log(Check_if_the_Array_is_Sorted([1,2,5,4]));
