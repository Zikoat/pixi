function playSetup () {
    
    player.scale.set(8, 8);
    player.vx = 0;
    player.vy = 0;
    player.anchor.set(0.5,0.5);
    player.position.set(100, 200);
    
    
    background.anchor.set(0.5,0.5)
    background.position.set(window.innerWidth / 2, window.innerHeight / 2);
    // if (window.innerWidth < window.innerHeight) background.rotation = Math.PI / 2;
    background.width = window.innerWidth;
    background.height = window.innerHeight;
    
    
    graphics.lineStyle(5, 0xFF0000);
    
}


function play() {
    graphics.clear();
    
    playerMovement();
    // flashBackground();
    //drawLines();
    // player.position.set(400,300);
    player.rotation += 0.07;
    // planet.clear();
    drawPlanet(200, 200, 20);
    
}


function playerMovement() {
    
    if (controlState == "bounce"){
        player.rotation += 0.019 * player.vx;
        // player.x += speed * direction;
        if (player.x < 0) player.vx = 5;
        if (player.x > window.innerWidth) player.vx = -5;
        
        if (player.y < 0) player.vy = 5;
        if (player.y > window.innerHeight) player.vy = -5;
        
        
        player.x += player.vx;
        player.y += player.vy;
        
    } else if (controlState == "rotate") {
        var newPos = rotate_point(player.x, player.y, 200, 200, 1);
        
        player.position.set(newPos.x, newPos.y);
        
    } else if (controlState == "move") {
        
        /*
        player.vx = 0;
        player.vy = 0;
        */
        
        player.x += player.vx;
        player.y += player.vy;
    }
}

function flashBackground(color, color) {
    renderer.backgroundColor = 0x9c6767;
}

function drawLines() {
    //will fill the insides of the shapes, including the lines
    // graphics.beginFill(0x00FF00, 0);
    graphics.lineStyle(5, 0xFF0000);

    graphics.moveTo(200, 200);
    graphics.lineTo(200, 400);
    graphics.lineTo(400, 400);
    
    graphics.moveTo(100, 100);
    
    graphics.lineTo(player.x, player.y);
    graphics.beginFill(0xff0000);
    graphics.drawCircle(100, 100, 10);
    graphics.endFill();
    
    
    graphics.drawRect(20,200,100,100);
    // draw circle around player
    graphics.drawCircle(player.x, player.y, 40);
    
}

function drawPlanet(x, y, r) {
    graphics.beginFill(0x0000ff);
    graphics.drawCircle(x, y, r);
    graphics.endFill();
}

function rotate_point(pointX, pointY, originX, originY, angle) {
    angle = angle * Math.PI / 180.0;
    return {
        x: Math.cos(angle) * (pointX-originX) - Math.sin(angle) * (pointY-originY) + originX,
        y: Math.sin(angle) * (pointX-originX) + Math.cos(angle) * (pointY-originY) + originY
    };
}


document.addEventListener('keydown', function(event) {
    //  LEFT
    if(event.keyCode == 37) {
        player.vx = -5;
        console.log("left");
    }
    // RIGHT
    if(event.keyCode == 39) {
        player.vx = 5;
    }
    // UP
    if(event.keyCode == 38) {
        player.vy = -5;
    }
    // DOWN
    if(event.keyCode == 40) {
        player.vy = 5;
    }
});
