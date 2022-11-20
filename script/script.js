//***************************************** H_W1 TASK_1 ********************************************************
const array = [32, -1, 23, 5, 3, 90];
const key = -2;
function arr(volue){
  for(let i = 0; i < volue.length; i++){
    if(array[i] === key){
      return console.log(i);
    }
  }
  return console.log(-1);
}
arr(array);

     //space complexity O(1);
     //time complexity O(n);

    
//***************************************** H_W1 TASK_2 ********************************************************


     const arr2 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6];
     function array2(arr_arr){
     for(let i = 0; i < arr_arr.length; i +=2){
        if(arr2[i] !== arr2[i + 1]){
        return console.log(arr2[i]);
        }
     }
     return console.log(-1);
    }
    array2(arr2);

    // //space complexity O(1);
    //  //time complexity O(n);



    
