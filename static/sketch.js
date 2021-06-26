var mgr;
let img;


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
    btn3.position(164,300)
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
  }
  function form(){
    mgr.showScene(formPage)
    btn.hide()
    btn2.hide()
    btn3.hide()
    btn6.hide()
    btn9.hide()
    }
  function greet(){
    mgr.showScene(loginPage)
    btn.hide()
    btn2.hide()
    btn3.hide()
    btn6.hide()
    btn9.hide()
    btn4.show()
    btn7.show()
    btn10.show()
    inp1.show()
    inp2.show()
  }
  function signIn(){
    mgr.showScene(signInPage)
    btn2.hide()
    btn.hide()
    btn3.hide()
    btn6.hide()
    btn9.hide()
    btn5.show()
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
    textSize(20)
    let c = 'HELP SAVE THE WORLD'
    text(c,70,150,100,100)
    fill(500)
    rect(50,300,113,23)
    fill(0)
    textSize(10)
    let e = 'Email/Username'
    text(e,60,307,290,40)
  }
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
    fill(220,220,220);
    rect(50,50,256,348)
    let g = 'Username:'
    fill(10)
    text(g,70,150,100,40)
    let h = "Password:"
    fill(10)
    text(h,70,170,100,40)
  }

}

function sentPage(){
  this.setup = function(){
    btn8 = createButton("Back")
    btn8.position(150,350)
    let col = color(220,220,220)
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
  }
  this.draw = function(sentPage){
    fill(220,220,220)
    rect(50,50,256,348)
    let p = "Check your inbox for the next steps. If you don't receive an email, and it's not in your spam folder this could mean you signed up with a different address."
    fill(0)
    text(p,100,100,170,170)
  }
}

function signInPage(){
  this.setup = function(){
    btn5 = createButton('Create account')
    btn5.style('background-color',col)
    btn5.position(120,350)
    btn5.mousePressed(user)
  }
  function user(){
    btn5.hide()
    mgr.showScene(userPage)
    inp1.hide()
    inp2.hide()
  }
  this.draw = function(Signinpage){
    fill(220,220,220);
    rect(50,50,256,348)
    let i = 'Email:'
    fill(10)
    text(i,70,150,100,40)
    let j = "Username:"
    fill(10)
    text(j,70,170,100,40)
    let k = "Password:"
    text(k,70,190,100,40)
    let l = "Create account"
    text(l,130,350,100,40)
  }

}

function userPage(){
  this.draw = function(userPage){
    fill(220,220,220);
    rect(50,50,256,348)
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
  this.draw = function(formPage){
    fill(220,220,220)
    rect(50,50,256,348)
  }
}
