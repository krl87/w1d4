/*
Modify the callback function in the previous example
so that logs the index of the array where Waldo is found,
ie. "Found Waldo at index 2!".
(You will need to modify actionWhenFound to receive the index.)
*/
function findWaldo(arr, found) {
  arr.forEach(function(element, i){
    if (element === "Waldo") {
      found(i);   // execute callback
    }
  });
}
// ** additonal way to find index using forEach ** //
// function findWaldo(arr, found) {
//   arr.forEach(function(element) {
//     if (element === "Waldo") {
//       found(arr.indexOf(element));   // execute callback)
//     }
//   });
// }

function actionWhenFound(position) {
  console.log("Found him at index " + position);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

