var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["823faff5-1e16-4ceb-84cd-39e4bda760c7","5ce6a5fd-ee7c-457a-95c8-eeff11cb6dc8","251332b3-7aeb-40af-ac0f-1cceb3d1db5b","a8f36482-803d-4474-94a6-b14b425df10b","54c7b714-082d-432f-b761-58b3991e4165","377280e3-5c26-4e7d-96f3-208272769887","ffb1d29d-0d1e-4c3a-a03e-fea6a55027e7","3d507ab3-8dd9-4cd3-8a9a-4ea2ab90da1d","b6eada5d-2fb0-4299-8d9f-ec8b58f52e22","5b57fb69-cbad-4ef3-b21b-fd5cc1f88ee4","16277792-5134-4ceb-ab00-1c7170d98e6f","447761b1-72f9-48e9-9032-9f74ce5ed776"],"propsByKey":{"823faff5-1e16-4ceb-84cd-39e4bda760c7":{"name":"red","sourceUrl":null,"frameSize":{"x":29,"y":74},"frameCount":1,"looping":true,"frameDelay":12,"version":"DTsSXe6R_7alvtPmsfUcp3ln6jsUvIzK","loadedFromSource":true,"saved":true,"sourceSize":{"x":29,"y":74},"rootRelativePath":"assets/823faff5-1e16-4ceb-84cd-39e4bda760c7.png"},"5ce6a5fd-ee7c-457a-95c8-eeff11cb6dc8":{"name":"green","sourceUrl":null,"frameSize":{"x":29,"y":74},"frameCount":1,"looping":true,"frameDelay":12,"version":"wfwN5vsovt81Cs4UV7tZ46EjNiIGav0B","loadedFromSource":true,"saved":true,"sourceSize":{"x":29,"y":74},"rootRelativePath":"assets/5ce6a5fd-ee7c-457a-95c8-eeff11cb6dc8.png"},"251332b3-7aeb-40af-ac0f-1cceb3d1db5b":{"name":"blue","sourceUrl":null,"frameSize":{"x":29,"y":74},"frameCount":1,"looping":true,"frameDelay":12,"version":"DKZPzFdX8vDinb73HmKMuoiRqypFCzXF","loadedFromSource":true,"saved":true,"sourceSize":{"x":29,"y":74},"rootRelativePath":"assets/251332b3-7aeb-40af-ac0f-1cceb3d1db5b.png"},"a8f36482-803d-4474-94a6-b14b425df10b":{"name":"yellow","sourceUrl":null,"frameSize":{"x":29,"y":74},"frameCount":1,"looping":true,"frameDelay":12,"version":"oikgk8Uw7CmJVHlMCNZpJLCrWNgdAa9z","loadedFromSource":true,"saved":true,"sourceSize":{"x":29,"y":74},"rootRelativePath":"assets/a8f36482-803d-4474-94a6-b14b425df10b.png"},"54c7b714-082d-432f-b761-58b3991e4165":{"name":"arrow","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"niZ93jzVqjIaLYsRoLqQUIJhK3Vv97Ki","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/54c7b714-082d-432f-b761-58b3991e4165.png"},"377280e3-5c26-4e7d-96f3-208272769887":{"name":"arrow_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"k7F68p7k1Ci8h4RZbhSGLFJLkCOAye5s","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/377280e3-5c26-4e7d-96f3-208272769887.png"},"ffb1d29d-0d1e-4c3a-a03e-fea6a55027e7":{"name":"bow","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"5Omzh26KNt__SUjHCXmKtQaxgo4OhDmI","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/ffb1d29d-0d1e-4c3a-a03e-fea6a55027e7.png"},"3d507ab3-8dd9-4cd3-8a9a-4ea2ab90da1d":{"name":"bow_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"ikwDFib6hgIk2Q4ylkhHx7VJUmqcb1hk","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/3d507ab3-8dd9-4cd3-8a9a-4ea2ab90da1d.png"},"b6eada5d-2fb0-4299-8d9f-ec8b58f52e22":{"name":"bow_1.1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":6,"looping":true,"frameDelay":5,"version":"YCmMFHTuZybbfjlYpkNFkExzH2GQXBXd","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":300},"rootRelativePath":"assets/b6eada5d-2fb0-4299-8d9f-ec8b58f52e22.png"},"5b57fb69-cbad-4ef3-b21b-fd5cc1f88ee4":{"name":"bow.1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":7,"looping":true,"frameDelay":4,"version":"iVFuCuQlBPNWnPS7F5FXIEPp3HTJckFd","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/5b57fb69-cbad-4ef3-b21b-fd5cc1f88ee4.png"},"16277792-5134-4ceb-ab00-1c7170d98e6f":{"name":"sunshine_showers_1","sourceUrl":null,"frameSize":{"x":800,"y":800},"frameCount":1,"looping":true,"frameDelay":12,"version":"KkrtFr_Bh4ALqs1RzVsfeWbFv1Ggl3im","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":800},"rootRelativePath":"assets/16277792-5134-4ceb-ab00-1c7170d98e6f.png"},"447761b1-72f9-48e9-9032-9f74ce5ed776":{"name":"city_1","sourceUrl":"assets/api/v1/animation-library/gamelab/37D0bGsit4sN8LdqaxZTXUMXrbix3Fgw/category_backgrounds/city.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"37D0bGsit4sN8LdqaxZTXUMXrbix3Fgw","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/37D0bGsit4sN8LdqaxZTXUMXrbix3Fgw/category_backgrounds/city.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// You can find all animations in  the animation tab 
var bow = createSprite(360, 200,10,10);
bow.setAnimation("bow");

var background1 = createSprite(200, 270);

//score
var count = 0;

var bows = prompt("Which bow do you want?: basic, modern");

var rBalloon = createGroup();
var bBalloon = createGroup();
var yBalloon = createGroup();
var gBalloon = createGroup();
var arrowGroup = createGroup();

var sec = 0;

function draw() {
  bow.y = World.mouseY;
  
  background1.depth = 0;
  
  if (bows == "modern"){
    background1.setAnimation("city_1");
    background1.y = 200;
    background1.velocityX = 0;
  }else{
      background1.setAnimation("sunshine_showers_1");
  background1.velocityX = -1;
  
  if (background1.x < 0){
    background1.x = background1.width/2;
  }
    
  }

  if (keyWentDown("space")&&bows=="basic") {
    bow.setAnimation("bow.1");
  }else if (keyWentUp("space")&&bows=="basic"){
    arrow();
    bow.setAnimation("bow");
  }
  
    if (keyWentDown("space")&&bows=="modern") {
    bow.setAnimation("bow_1.1");
  }else if (keyWentUp("space")&&bows=="modern"){
    arrow();
    bow.setAnimation("bow_1");

  }
  
  
  
  var selectBalloon = randomNumber(1,4);
  if(World.frameCount % 80 == 0){
    if (selectBalloon == 1) {
      balloon1();
    } else if (selectBalloon == 2){
      balloon2();
    }else if (selectBalloon == 3){
      balloon3();
    }else if (selectBalloon == 4){
      balloon4();
  }
  }
  
  if (arrowGroup.isTouching(rBalloon)) {
    rBalloon.destroyEach();
    arrowGroup.destroyEach();
    count += 1;
  }else if (arrowGroup.isTouching(yBalloon)) {
    yBalloon.destroyEach();
    arrowGroup.destroyEach();
    count += 1;
  }else if (arrowGroup.isTouching(bBalloon)) {
    bBalloon.destroyEach();
    arrowGroup.destroyEach();
    count += 1;
  }else if (arrowGroup.isTouching(gBalloon)) {
    gBalloon.destroyEach();
    arrowGroup.destroyEach();
    count += 1;
  }
  
  drawSprites();
  fill("black");
  textSize(18);
  textFont("Georgia");
  text("Score: "+ count, 300, 20);
}



function arrow(){
  
  var temparrow = createSprite(200, 200,10,10);
  temparrow.setAnimation("arrow");
  temparrow.y = bow.y;
  temparrow.x = bow.x;
  temparrow.setCollider("rectangle",0,0,90,5);
  temparrow.lifetime = 90;
  
  if (bows == "modern"){
    temparrow.setAnimation("arrow_1");

  }
  
  temparrow.velocityX = -5;


  arrowGroup.add(temparrow);
}

function balloon1(){
    var redBalloon = createSprite(randomNumber(20,320), 20,10,10);
  redBalloon.setAnimation("red");
  redBalloon.scale = 0.7;
  redBalloon.velocityY = 4;
  redBalloon.lifetime = 100;
  rBalloon.add(redBalloon);
}

function balloon2(){
  var yellowBalloon = createSprite(randomNumber(20,320), 20,10,10);
  yellowBalloon.setAnimation("yellow");
  yellowBalloon.scale = 0.7;
  yellowBalloon.velocityY = 4;
  yellowBalloon.lifetime = 100;
  yBalloon.add(yellowBalloon);

}

function balloon3(){
  var greenBalloon = createSprite(randomNumber(20,320), 20,10,10);
  greenBalloon.setAnimation("green");
  greenBalloon.scale = 0.7;
  greenBalloon.velocityY = 4;
  greenBalloon.lifetime = 100;
  gBalloon.add(greenBalloon);

}

function balloon4(){
  var blueBalloon = createSprite(randomNumber(20,320), 20,10,10);
  blueBalloon.setAnimation("blue");
  blueBalloon.scale = 0.7;
  blueBalloon.velocityY = 4;
  blueBalloon.lifetime = 100;
  bBalloon.add(blueBalloon);

}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
