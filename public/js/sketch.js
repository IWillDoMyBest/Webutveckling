var flakes = [];
var amount_of_flakes = 300;
var countdown;

function setup() {
    createCanvas(window.innerWidth, window.innerWidth);

    for (let i = 0; i < amount_of_flakes; i++) {
        flakes.push(new Snowflake());
    }
    countdown = new Countdown();
}

function draw() {
    //Setting a grayish background.
    background(51);

    flakes.forEach(flake => {
        flake.render();
        flake.update();
    });

    //Count down for new year.
    countdown.render();
    countdown.update();

    //Credits
    textSize(20);
    text("Created by: Harry Lazaridis <harry.laza@outlook.com>", 5, 20);
}