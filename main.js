canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
c1_width = 120;
c1_height = 75;
c1_x = 10;
c1_y = 10;
c1_img = "CAR 1.png";

car2_width = 115;
car2_height = 135;
c2_x = 10;
c2_y = 60;
c2_img = "CAR 2.png";

bg_img = "https://i.pinimg.com/originals/94/16/17/941617d8a9dafd798981e08354d6eb31.jpg";

function add() {
    bg_imgTag = new Image();
    bg_imgTag.onload = uploadBg;
    bg_imgTag.src = bg_img;

    c1_imgTag = new Image();
    c1_imgTag.onload = uploadc1;
    c1_imgTag.src = c1_img;

    c2_imgTag = new Image();
    c2_imgTag.onload = uploadc2;
    c2_imgTag.src = c2_img;
}

function uploadBg(){
    ctx.drawImage(bg_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadc1(){
    ctx.drawImage(c1_imgTag, c1_x, c1_y, c1_width, c1_height);
}

function uploadc2(){
    ctx.drawImage(c2_imgTag, c2_x, c2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if(keypressed == "38"){
        c1_up();
        console.log("up key car 1");
    }
    if(keypressed == "40"){
        c1_down();
        console.log("down key car 1");
    }
    if(keypressed == "39"){
        c1_right();
        console.log("right key car 1");
    }
    if(keypressed == "37"){
        c1_left();
        console.log("left key car 1");
    }
    if(keypressed == "38"){
        c2_up();
        console.log("up key car 2");
    }
    if(keypressed == "40"){
        c2_down();
        console.log("down key car 2");
    }
    if(keypressed == "39"){
        c2_right();
        console.log("right key car 2");
    }
    if(keypressed == "37"){
        c2_left();
        console.log("left key car 2");
    }
}