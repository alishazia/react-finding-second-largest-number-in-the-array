import React from "react";
import "./style.css";




function secondLargestNumber(arr_size, arr) {
  const INVALID_NUMBER = "Invalid Input";
  const NO_SECOND_LARGEST_NUMBER = "There is no second largest number";
  if (arr_size < 2 ) {
     return "Invalid Input";
  }
  let MAX = arr[0] > arr[1] ? arr[0] : arr[1];
  let SECOND_MAX = arr[0] < arr[1] ? arr[0] : arr[1];
  
  for (const i = 2; i < arr_size; i++) {
    console.log("this is max", MAX);
    console.log("this is second_max", SECOND_MAX);

    if (arr[i] > MAX) {
      SECOND_MAX = MAX;
      MAX = arr[i];
    }
    else if (arr[i] > SECOND_MAX && arr[i] != MAX)
      SECOND_MAX = arr[i];

  }
   if (SECOND_MAX == MAX) {
      return "There is no second largest number";
    }
    else
      `The second largest number is: ${SECOND_MAX}`;
  // // Then print the values 
  console.log("this is largest number",MAX);
  console.log("this is second largest",SECOND_MAX);
}

const arr = [12, 35, 1, 10, 34, 1];
const n = arr.length;
secondLargestNumber(n, arr);

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
