var pan;
var feed = []; 
var numFood = 10;
var head = 200;
var face = 255;
var face2 = 255;
var face1 = 255;
var a = [1,2,3];
var eyes = ('white');
var score = 0;
function setup(){
    createCanvas(windowWidth,windowHeight);
    pan = new panda();
    
     for(var i = 0; i < numFood; i++) {
        feed.push(new Food(random(width), random(height)));
    }
}

function draw(){
    background(0,0,255);
    pan.display();
    
    for(var i = 0; i < feed.length; i++) {
        feed[i].display();
    }
    if(head == 300){
        face = 50;
        face1 = 154;
        face2 = 205;
    }
    if(head == 310){
        eyes = ('black');
        head = 200;
        score = "zombie panda";
    }
    fill(90);
    textSize(40);
    text(score,100,100);
}

function mousePressed() {
    pan.eat();
}

function Food(x, y) {
    this.x = x;
    this.y = y;
    this.color = color('#B0E0E6');
    this.foodSize = 50;
    
    this.display = function() {
        fill(this.color);
        ellipse(this.x, this.y, this.foodSize, this.foodSize);

    }
}
function panda(){
    var x = mouseX;
    var y = mouseY;
    var diameter = 200;
    
    this.getDistance = function(other) {
        var dist = Math.sqrt(Math.pow(x - other.x, 2) + Math.pow(y - other.y, 2));
        return dist;
    };
    
    this.eat = function() {
        for(var i = 0; i < feed.length ; i++) {
            var food = feed[i];
            var d = this.getDistance(food);
            var r1 = food.foodSize / 2;
            var r2 = diameter / 2;
            if(r1 + r2 > d) {
                feed.splice(i, 1);
                feed.push(new Food(random(width), random(height)));
                head+=10;
                face -= 10;
                score +=1;
            }
        }
    };
    
    this.display = function() {
        x = mouseX;
        y = mouseY;
        noStroke();
        fill(face1,face2,face);
        ellipse(x,y,head,head);
        fill('black');
        ellipse(x-50,y,90,100);
        ellipse(x+50,y,90,100);
        fill(eyes);
        ellipse(x-30,y,30,30);
        ellipse(x+30,y,30,30);
        fill('black');
        ellipse(x-30,y,20,20);
        ellipse(x+30,y,20,20);
        ellipse(x,y+35,30,20);
        ellipse(x,y+75,20,20);
        ellipse(x-80,y-85,60,60);
        ellipse(x+80,y-85,60,60);
        fill('white');
        ellipse(x,y+70,40,20);
    };
}