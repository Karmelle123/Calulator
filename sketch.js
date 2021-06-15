var n1,n2
var b1,b2,b3
function setup() {
  createCanvas(400, 400);

  num1 = createInput()
  num1.position (5,60)

  num2 = createInput()
  num2.position (200,60)

  b1 = createButton("add")
  b1.position(10,200)
  b1.mousePressed(add)

  b2 = createButton("subtraction")
  b2.position(200,200)
  b2.mousePressed(subtraction)
}
function draw() {
  background(200,10,200)

   text("Number 1",70,50)
    text("Number 2",270,50)

  n1=parseInt(num1.value())
  n2= parseInt(num2.value())
  
}
function add(){
  console.log(n1+n2)
}
function subtraction(){
  console.log(n1-n2)
}