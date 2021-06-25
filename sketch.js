
function setup() {
  createCanvas(windowHeight, windowWidth);
  textSize(10);
}
function draw(){
  function homescreen(){
    rect(20,20,20,20)
    text("stuf",150,100)
    fill(200)
    rect(50,50,256,348)
    fill(90)
    rect(50,50,256,30)
    fill(0)
    let s = 'Saving the planet one litter at a time';
    text(s, 70, 60, 250, 30);
    let a = 'Sign up'
    text(a,70,100,290,40)
    let b = "Login"
    text(b,250,100,290,40)
    let c = 'HELP SAVE THE WORLD'
    text(c,70,150,100,40)
    let d = '            Submit your forms here'
    text(d,70,370,290,40)
    fill(500)
    rect(50,300,113,23)
    fill(0)
    let e = 'Email/Username'
    text(e,60,307,290,40)
    fill(500)
    rect(163,300,50,23)
    fill(0)
    let f = 'Sign in'
    text(f,167,307,190,40)

 }
 homescreen()
}
draw()
