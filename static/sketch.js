var mgr;
var img;
function preload() {
  img = loadImage('../assets/nature1.jpeg');
  img2 = loadImage('../assets/sand.jpeg')
  img3 = loadImage('../assets/wave.jpeg')
  img4 = loadImage('../assets/account image.jpg')
  img5 = loadImage('../assets/form photo.jpeg')
  img6 = loadImage('../assets/plastic problem.jpeg')
  img7 = loadImage('../assets/arrow.jpg')
  img8 = loadImage('../assets/daniel-olah-1nUNsmWfcSk-unsplash.jpg')
  img9 = loadImage('../assets/nature lol.jpeg')
  img10 = loadImage('../assets/profile.jpeg')
}
var btn
var btn2
var btn3
var btn4
var btn5
var btn6
var btn7
var btn8
var btn9
var btn10
var btn11
var btn12
var btn13
var btn14
var btn15
var btn16
var but
var but1
var but2
var but3
var inp
var inp1
var inp2
var inp3
var inp4
var inp5
var inp6
var inp7
var inp8


function setup() {

  createCanvas(windowHeight, windowWidth);
  textSize(10);
  mgr = new SceneManager()
  mgr.addScene(homescreen)
  mgr.addScene(loginPage)
  mgr.addScene(signInPage)
  mgr.addScene(forgotPassword)


  mgr.showNextScene()
}


function draw(){
  mgr.draw()
  }



function loginPage(){
  this.setup = function(){
    inp1 = createInput()
    btn7 = createButton('Login')
    inp1.position(122,145)
    btn7.position(170,350)
    let col = color(220,220,220)
    btn7.style('background-color',col)
    btn7.mousePressed(hi)
    background(250,250,250)
    btn4 = createButton("Forgot password?")
    btn4.style('background-color',col)
    btn4.position(70,190)
    btn4.mousePressed(email)
    inp2 = createInput()
    inp2.position(122,167)
    btn10 = createButton("Back")
    btn10.style('background',col)
    btn10.position(230,350)
    btn10.mousePressed(home)
  }
  function home(){
    mgr.showScene(homescreen)
    btn10.hide()
    btn7.hide()
    inp1.hide()
    inp2.hide()
    btn4.hide()
    btn.show()
    btn2.show()
    btn3.show()
    btn6.show()
    btn9.show()
    inp6.show()
  }
  function hi(){
    btn10.hide()
    btn4.hide()
    btn7.hide()
    mgr.showScene(userPage)
    inp1.hide()
    inp2.hide()
  }

  function email(){
    btn10.hide()
    btn4.hide()
    btn7.hide()
    inp1.hide()
    mgr.showScene(forgotPassword)
    inp2.hide()
    but.show()
    inp.show()
  }
    this.draw  = function(loginPage){
    image(img8,50,50,256,348)
    fill(220,220,220);
    rect(50,50,256,348)
    image(img8,50,50,256,348)
    textSize(10)
    let g = 'Username:'
    fill(500)
    text(g,70,150,100,40)
    textSize(10)
    let h = "Password:"
    fill(500)
    text(h,70,170,100,40)

  }

}

function sentPage(){
  this.setup = function(){
    btn8 = createButton("Back")
    btn8.position(150,350)
    let col = color(0,0,0)
    btn8.style('background-color',col)
    btn8.mousePressed(troll)
  }
  function troll(){
    btn8.hide()
    mgr.showScene(loginPage)
    btn4.show()
    btn7.show()
    inp1.show()
    inp2.show()
    btn10.show()
  }
  this.draw = function(sentPage){
    fill(220,220,220)
    rect(50,50,256,348)
    let p = "Check your inbox for the next steps. If you don't receive an email, and it's not in your spam folder this could mean you signed up with a different address."
    fill(0)
    text(p,100,100,170,170)
  }
}

function homescreen(){
  this.setup = function(){

    let col = color(220,220,220)
    btn = createButton("Login")
    btn.style('background-color',col)
    btn.style('outline',0)
    btn.position(250,90)
    btn.mousePressed(greet)

    btn2 = createButton("Sign up")
    btn2.style('background-color',col)
    btn2.position(60,90)
    btn2.mousePressed(signIn)

    btn3 = createButton("Sign in")
    btn3.position(178,301)
    btn3.style('background-color',col)
    btn3.mousePressed(greet)

    btn6 = createButton("Submit your forms here")
    btn6.style('background-color',col)
    btn6.position(100,360)
    btn6.mousePressed(form)

    btn9 = createButton("Guest user")
    btn9.position(155,90)
    btn9.style('background-color',col)
    btn9.mousePressed(form)

    inp6 = createInput()
    inp6.position(70,300)
    inp6.size(100,18)

  }
  function form(){
    mgr.showScene(formPage)
    btn.hide()
    btn2.hide()
    btn3.hide()
    btn6.hide()
    btn9.hide()
    inp6.hide()
    inp7.show()
    btn12.show()
    }
  function greet(){
    mgr.showScene(loginPage)
    btn.hide()
    btn2.hide()
    btn3.hide()
    btn6.hide()
    btn9.hide()
    inp6.hide()
    btn4.show()
    btn7.show()
    btn10.show()
    inp1.show()
    inp2.show()
  }
  function signIn(){
    mgr.showScene(signInPage)
    btn2.hide()
    inp6.hide()
    btn.hide()
    btn3.hide()
    btn6.hide()
    btn9.hide()
    btn5.show()
    inp3.show()
    inp4.show()
    inp5.show()
    btn11.show()
  }
  this.draw = function(){
    fill(200)
    rect(50,50,256,348)
    fill(150)
    rect(50,50,256,30)
    fill(0)
    textSize(10)
    textStyle(BOLD)
    let s = 'Saving the planet one litter at a time';
    text(s, 90, 60, 200, 30);
    image(img, 50,80,256,318);
    textSize(20)
    let c = 'HELP SAVE THE WORLD'
    text(c,70,150,100,100)
  }
}

function signInPage(){
  this.setup = function(){
    btn5 = createButton('Create account')
    let col = color(220,220,220)
    btn5.style('background-color',col)
    btn5.position(120,350)
    btn5.mousePressed(user)
    btn11 = createButton("Back")
    btn11.position(230,350)
    btn11.style('background-color',col)
    btn11.mousePressed(you)
    inp3 = createInput()
    inp3.position(103,145)
    inp4 = createInput()
    inp4.position(125,175)
    inp5 = createInput()
    inp5.position(125,205)
  }
  function you(){
    btn11.hide()
    btn5.hide()
    inp3.hide()
    inp4.hide()
    inp5.hide()
    mgr.showScene(homescreen)
    btn.show()
    btn2.show()
    btn3.show()
    btn6.show()
    btn9.show()
    inp6.show()
  }
  function user(){
    inp3.hide()
    inp4.hide()
    inp5.hide()
    btn11.hide()
    btn5.hide()
    but1 = createButton("Login page")
    but1.show()
    mgr.showScene(userPage)
  }
  this.draw = function(signInPage){
    fill(220,220,220);
    rect(50,50,256,348)
    image(img9,50,50,256,348)
    textSize(10)
    fill(500)
    let i = 'Email:'
    fill(500)
    text(i,70,150,100,40)
    textSize(10)
    let j = "Username:"
    fill(500)
    text(j,70,180,100,40)
    textSize(10)
    let k = "Password:"
    text(k,70,210,100,40)
  }

}

function userPage(){
  this.setup = function(){
    let col3 = color(255,255,255)
    but1 = createButton("Log out")
    but1.position(240,65)
    but1.style('background-color',col3)
    but1.mousePressed(ok)
    fill(0)
    let ac = "Photos you have submitted"
    text(ac,70,130,150,80)
    but2 = createButton("Your profile")
    but2.style('background-color',col3)
    but2.position(80,350)
    but2.mousePressed(tuf)
  }
  function tuf(){
    but2.hide()
    but1.hide()
    mgr.showScene(profilePage)
    but3.show()
  }
  function ok(){
    but1.hide()
    but2.hide()
    mgr.showScene(loginPage)
    inp1 = createInput()
    inp1.show()
    inp2 = createInput()
    inp2.show()
    btn7.show()
    btn4.show()
    btn10.show()

  }
  this.draw = function(userPage){
    fill(255,255,255);
    rect(50,50,256,348)
    fill(500)
    rect(50,50,256,50)
    image(img4,60,55,40,40)
    fill(0)
    textSize(15)
    let ab = "Johnteo"
    text(ab,110,60,150,80)
    textSize(10)
    let aa = "online"
    text(aa,110,80,150,80)
    let ac = "Photos you have submitted"
    text(ac,70,120,150,80)
    image(img5,55,150,100,100)
    image(img6,160,150,100,100)
    image(img7,260,150,40,100)
  }
}


function forgotPassword(){
  this.entry = function(){
    background('white')
   }
  this.setup = function(){
    inp = createInput()
    but = createButton('Submit')
    inp.position(100,190)
    but.position(200,300)
    let col = color(220,220,220)
    but.style('background-color',col)
    but.mousePressed(submitReq)
  }
  function submitReq(){
    but.hide()
    inp.hide()
    inp2.hide()
    mgr.showScene(sentPage)
    btn8.show()
  }
  this.draw = function(forgotPassword){
    fill(220,220,220)
    rect(50,50,256,348)
    let o = "email:"
    fill(0)
    text(o,70,195,100,40)
  }
}

function formPage(){
  this.setup = function(){
    inp7 = createInput()
    inp7.position(140,97)
    btn12 = createButton("Submit")
    let col = color(220,220,220)
    btn12.position(230,350)
    btn12.style('background-color',col)
    btn12.mousePressed(submit)

  }
  function submit(){
    mgr.showScene(verifyPage)
    btn12.hide()
    inp7.hide()
    inp8.show()
    btn13.show()
    btn16.show()
  }
  this.draw = function(formPage){
    fill(220,220,220)
    image(img10,50,50,256,348)
    rect(50,50,256,348)
    fill(0)
    textSize(13)
    let u = "Username:"
    text(u,70,100,100,40)
    let q = "Submit photos here"
    text(q,70,130,150,80)
    textSize(15)
    let r = "FORM"
    text(r,150,70,150,80)
    rect(99,169,102,102)
    image(img5,100,170,100,100)
  }
}

function verifyPage(){
  this.setup = function(){
    inp8 = createInput()
    inp8.position(120,350)
    inp8.size(100,18)
    btn13 = createButton("Submit")
    let col = color(220,220,220)
    btn13.position(230,350)
    btn13.style('background-color',col)
    btn13.mousePressed(bruh)
    btn16 = createButton("trash")
    let col2 = color(0,139,139)
    btn16.style('background-color',col2)
    btn16.position(70,290)
    btn16.mousePressed(why)
  }
  function why(){
    btn16.hide()
  }

  function bruh(){
    mgr.showScene(successfulPage)
    btn16.hide()
    btn13.hide()
    inp8.hide()
    inp7.hide()
    btn14.show()
    btn15.show()
  }


  this.draw = function(verifyPage){
    fill(220,220,220)
    image(img10,50,50,256,348)
    rect(50,50,256,348)
    fill(0)
    textSize(15)
    let z = "Verify if you are a "
    text(z,120,80,150,80)
    let x = "human"
    text(x,150,100,150,80)
    textSize(10)
    let w = "Click on the trash in the sea and count how many you clicked"
    text(w,60,120,256,80)
    image(img3,50,155,256,180)
    image(img2,50,155,256,100)


  }
}

function successfulPage(){
  this.setup = function(){
    btn14 = createButton("Go to user page")
    btn14.position(130,350)
    let col = color(220,220,220)
    btn14.style('background-color',col)
    btn14.mousePressed(go)
    btn15 = createButton("Back")
    btn15.position(250,350)
    btn15.style('background',col)
    btn15.mousePressed(qwerty)
  }
  function qwerty(){
    btn15.hide()
    btn14.hide()
    mgr.showScene(homescreen)
    btn.show()
    btn2.show()
    btn3.show()
    btn6.show()
    btn9.show()
    inp6.show()
  }
  function go(){
    btn14.hide()
    btn15.hide()
    mgr.showScene(userPage)
  }
  this.draw = function(){
    fill(220,220,220)
    rect(50,50,256,348)
    fill(0)
    textSize(36)
    let v = "VERIFIED"
    text(v,100,200,150,80)
    textSize(11)
    let u = "Form sent successfully"
    text(u,115,240,150,80)
    image(img10,50,50,256,348)
  }

}

function profilePage(){
  this.setup = function(){
    but3 = createButton("Back")
    let col3 = color(255,255,255)
    but3.style('background-color',col3)
    but3.position(220,360)
    but3.mousePressed(final)
  }
  function final(){
    but3.hide()
    mgr.showScene(userPage)
    but1.show()
    but2.show()
  }
  this.draw = function(){
  fill(255,255,255)
  rect(50,50,256,348)
  fill(0)
  let ad = "Your username: Johnteo"
  text(ad,60,180,150,100)
  let ae = "Your password: Johnteo69"
  text(ae,60,200,150,100)
  image(img4,70,70,100,100)

  }
}
