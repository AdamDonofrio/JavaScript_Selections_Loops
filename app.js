console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

 for (let i = 1; i <= 100; i++) {

     if(!(i % 2 == 0)){

         console.log(i);
     }
   }

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i <= 100; i++) {

    if(i % 3 == 0 && i % 5 == 0){

        console.log(`FIZZBUZZ ${i}`);
    }
    else{

        if(i % 3 == 0){

            console.log(`FIZZ ${i}`);
        }

        if(i % 5 == 0){

            console.log(`BUZZ ${i}`);
        }
    } 
}

console.log("EXERCISE 3:\n==========\n");

    let i = 1;
    while(i <= 100){

        if(!(i % 2 == 0)){

            console.log(i);
        }

        i++
   } 

   let j = 1;

   do {


        if(j % 3 == 0 && j % 5 == 0){

            console.log(`FIZZBUZZ ${j}`);
        }
        else{

            if(j % 3 == 0){

                console.log(`FIZZ ${j}`);
            }

            if(j % 5 == 0){

                console.log(`BUZZ ${j}`);
            }
        } 

        //console.log("#");
        j++;
    }while (j <= 100);

console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

console.log(`n = ${n}`);
console.log(`value = ${value}`);

let found = false;

for (let i = 0; i <= n; i++) {

    if(i == value){
    
        console.log(`Found Value, value = ${value}`);
        found = true;
        break;
    }
}
if(found == false){

    console.log("Did not find value");
}


console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let m = Math.round(Math.random() * (1000 - 1) + 1); // was n but needed to be changed for the n in the above code to work
let start = Math.round(Math.random() * (10 - 1) + 1);

//2. Re-implement exercise 2, but use `start` as the initial value for `i`, `n` as the range limit in `i <= n`, and `fizzDivisor` and
//`buzzDivisor` as the dependent values for determining "FIZZ" and "BUZZ" print messages.

console.log(`fizzDivisor = ${fizzDivisor}`);
console.log(`buzzDivisor = ${buzzDivisor}`);
console.log(`n = ${m}`);
console.log(`start = ${start}`);

for (let i = start; i <= m; i++) {

    if(i % fizzDivisor == 0 && i % buzzDivisor == 0){

        console.log(`FIZZBUZZ ${i}`);
    }
    else{

        if(i % fizzDivisor == 0){

            console.log(`FIZZ ${i}`);
        }

        if(i % buzzDivisor == 0){

            console.log(`BUZZ ${i}`);
        }
    } 
}