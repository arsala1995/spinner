const arr = ['\r|   ','\r/   ', '\r-   ','\r\\   ','\r|   ','\r/   ','\r-   ','\r\\   ','\r|   '];

for( let i = 0; i < 9; i++){
// 
// //  console.log(i);
const delay = (200*i ) + 100;


setTimeout(() => {
  
  process.stdout.write(arr[i]);


  
 }, delay);

}
setTimeout(() => {
 
  console.log("\n");

}, arr.length*200);
