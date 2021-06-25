var mgr;


function setup() {
  createCanvas(windowHeight, windowWidth);
  textSize(10);
  mgr = new SceneManager()
  mgr.addScene(homescreen)
  mgr.addScene(loginPage)
  mgr.addScene(signInPage)


  mgr.showNextScene()
}


function draw(){
  mgr.draw()
  }

function homescreen(){
  this.setup = function(){
    btn = createButton("Login")
    btn.position(250,100)
    btn.mousePressed(greet)

    btn2 = createButton("Sign up")
    btn2.position(70,100)
    btn2.mousePressed(signIn)

    btn3 = createButton("Sign in")
    btn3.position(164,300)
    btn3.mousePressed(greet)
  }
  function greet(){
    mgr.showScene(loginPage)
    btn.hide()
    btn2.hide()
    btn3.hide()
  }
  function signIn(){
    mgr.showScene(signInPage)
    btn2.hide()
    btn.hide()
    btn3.hide()
  }
  this.draw = function(){
    fill(200)
    rect(50,50,256,348)
    fill(90)
    rect(50,50,256,30)
    fill(0)
    let s = 'Saving the planet one litter at a time';
    text(s, 70, 60, 250, 30);
    let a = 'Sign up'
    text(a,70,100,290,40)
    let c = 'HELP SAVE THE WORLD'
    text(c,70,150,100,40)
    let d = '            Submit your forms here'
    text(d,70,370,290,40)
    fill(500)
    rect(50,300,113,23)
    fill(0)
    let e = 'Email/Username'
    text(e,60,307,290,40)
  }
}
function loginPage(){
  this.draw = function(){
    fill(100,100,100);
    rect(50,50,256,348)
    let g = 'Username:'
    fill(10)
    text(g,70,150,100,40)
    let h = "Password:"
    fill(10)
    text(h,70,170,100,40)
    let m = "Login"
    text(m,170,350,100,40)
  }

}

function signInPage(){
  this.draw = function(Signinpage){
    fill(100,100,100);
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
    fill(100,100,100);
    rect()
  }
}
