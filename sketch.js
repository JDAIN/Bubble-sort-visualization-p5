'use strict';


//change for more bars (rec. 4)
const scl =4;
let numArray;
let lenOfArray;
let i;
function setup() {
    //change for other canvas size
    createCanvas(800, 400);
    background("black");
    numArray = new Array(floor(width/scl));
    lenOfArray= numArray.length;
    i = 0;
    //fill array
    for (let i = 0; i < numArray.length; i++) {
        numArray[i] = random(0, height);
    }
    console.log(numArray.length)
}


function draw() {

    background("black");


    if (numArray[i] > numArray[i + 1]) {
        let a = numArray[i];
        let b = numArray[i + 1];
        //swap
        numArray[i] = b;
        numArray[i + 1] = a;
    }
    i++;
    //minus the already checked, gets faster if less elements are checked
    if(i===width/scl + (lenOfArray-(width/scl))){
        i=0;
        lenOfArray--;
    }
    show();

    if(lenOfArray<=0){
        noLoop();
        background("green");
        show();
    }


}

function show() {
    for (let i = 0; i < numArray.length; i++) {
        strokeWeight(3.8);
        stroke(150);
        strokeCap(SQUARE);
        line(i*scl, height, i*scl, height - numArray[i]);
    }
}

