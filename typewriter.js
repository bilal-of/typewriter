const sentence = "hello there from lighthouse labs"; 
let previousTime = 0
for (const char of sentence) { 
  previousTime = previousTime + 50
  setTimeout(() => {
    console.log(char); 
  }, previousTime) 
} 