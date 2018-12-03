function setup(){
    createCanvas(1150,800);
}

function draw(){
    var x = width/2;
    var y = height/2;
    var a = width/4;
    var b = height/2;
    var z = width*(3/4);
    var w = height/2;
    fill('white');
    ellipse(x,y,200,200);
    fill('black');
    ellipse(x-50,y,90,100);
    ellipse(x+50,y,90,100);
    fill('white');
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
    
    fill('white');
    ellipse(a,b,200,200);
    fill('black');
    ellipse(a-50,b,90,100);
    ellipse(a+50,b,90,100);
    fill('white');
    ellipse(a-30,b,30,30);
    ellipse(a+30,b,30,30);
    fill('black');
    ellipse(a-30,b,20,20);
    ellipse(a+30,b,20,20);
    ellipse(a,b+35,30,20);
    ellipse(a,b+75,20,20);
    ellipse(a-80,b-85,60,60);
    ellipse(a+80,b-85,60,60);
    fill('white');
    ellipse(a,b+70,40,20);
    
    fill('white');
    ellipse(z,w,200,200);
    fill('black');
    ellipse(z-50,w,90,100);
    ellipse(z+50,w,90,100);
    fill('white');
    ellipse(z-30,w,30,30);
    ellipse(z+30,w,30,30);
    fill('black');
    ellipse(z-30,w,20,20);
    ellipse(z+30,w,20,20);
    ellipse(z,w+35,30,20);
    ellipse(z,w+75,20,20);
    ellipse(z-80,w-85,60,60);
    ellipse(z+80,w-85,60,60);
    fill('white');
    ellipse(z,w+70,40,20);
}