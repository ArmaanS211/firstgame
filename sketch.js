var bg, bg_image;
var platform, platform_img, platformGroup;

function preload(){
    bg_image = loadImage("Images/Background.jpeg");
    platform_img = loadImage("Images/platform.png");
}

function setup(){
    createCanvas(1200, 700);
    bg = createSprite(1000, 350);
    bg.addImage(bg_image);
    bg.scale = 2.0;

    platformGroup = new Group;
    

}

function draw(){
    background(0);

    bg.velocityX = -3;

    if(bg.x < 200){
        bg.x = bg.width/2;

    }


    spawnPlatforms();
    drawSprites();

}

function spawnPlatforms(){
    
    if(World.frameCount % 100 === 0){
        platform = createSprite(700, 600);
        platform.y = Math.round(random(600, 300));
        platform.addImage(platform_img);
        platform.velocityX = -3;
        platformGroup.add(platform);
        platform.scale = 0.25;
    }

    
    
}