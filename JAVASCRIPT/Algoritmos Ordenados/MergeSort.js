function MergeSort(array) {
    arrLength = array.length;

    if (array.length == 1) return array; 
    
    mid = array.length /2
        
 let left = array.splice(0,mid);

 left = MergeSort(left);
 right = MergeSort(array);
return Merge(left,right);
}

function Merge(left,right) {
  resultArr = [];

  while (left.length && right.length) {
    if(left[0] < right[0]){
        resultArr.push(left.shift())
    }else{
        resultArr.push(right.shift());
    }
  }
  return [...resultArr,...left,...right];
}

console.log(MergeSort([9,7,4,6,3,5,8]));