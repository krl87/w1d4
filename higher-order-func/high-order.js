var ghibliMovies = ["Spirited Away", "Princess Mononoke", "My Neighbour Totoro", "Howl's Moving Castle", "Ponyo", "My Neighbours the Yamadas"];


function map(arr, f) {
  var ghibliTitles = [];
  for (var i = 0; i < arr.length; i++) {
    ghibliTitles.push(f(arr[i]));
  }
  return ghibliTitles;
}

console.log(
  map(ghibliMovies, function(word) {
    return word.length;
}));

// = ghibliMovies.map(..)
// [ghibliMovies[0].length, ghibliMovies[1].length]

console.log(
  map(ghibliMovies, function(word) {
    return word.toUpperCase();
}));

console.log(
  map(ghibliMovies, function(word) {
    return word.split('').reverse().join('');
}));

