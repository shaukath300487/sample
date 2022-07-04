
var marks=[30,35,40,45,48]

function avg(){
  var sum=marks[0]+marks[1]+marks[2]+marks[3]+marks[4]
  var len=marks.length

  avrg=sum/len
  console.log(avrg)
}

function setup() {

  createCanvas(400, 400);

  avg()
}

function draw() {
  background(220);
}