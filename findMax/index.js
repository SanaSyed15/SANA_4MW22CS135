function findMax(arr)  {
    if(arr.length==0) {
        return null;
    }
    let max=arr[0];
    for(let i=1;i<arr.length;i++) {
        if(arr[i]>max) {
            max=arr[i];
        }
    }
    return max;
}

console.log(findMax([10,20,30,40,50,60]));
console.log(findMax([]));