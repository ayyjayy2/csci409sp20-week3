function scriptOne(){
let counter =0;
for (let i=0; i<101; i++){
  counterr++;
  if(counter%3 == 0) {
    console.log("fizz");
  }
  if(counter%5==0){
    console.log("buzz");
  }
  if(counter%3==0 && counter%5==0){
    console.log("fizzbuzz");
  }
  if(counter%3 != 0 && counter%5 != 0){
    console.log(counter);
  }
  return counter;
  }
}
