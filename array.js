const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let totalAmount = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 3 === 0 || arr[i] % 5 === 0) {
    console.log(`row - ${arr[i]} - Premium row`);
    totalAmount = totalAmount + 800;
  } else {
    console.log(`row - ${arr[i]} - normal row`);
    totalAmount = totalAmount + 500;
  }
}
console.log(totalAmount);
