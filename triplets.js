function findTriplets(arr) {
  let n = arr.length;
  let triplets = [];

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (arr[i] + arr[j] + arr[k] == 0) {
          let triplet = [arr[i], arr[j], arr[k]];
          if (!triplets.some(t => t.toString() === triplet.toString())) {
            triplets.push(triplet);
          }
        }
      }
    }
  }

  return triplets;
}

let arr = [1, 2, -3, 4, -1, -2, 5, -4];
let triplets = findTriplets(arr);

console.log(triplets);
