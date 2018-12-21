class Snowflake {

    constructor() {
        var x = random(width);
        var y = random(-1000, -50);

        //createVector([x], [y], [z]) where z is optionall

        this.pos = createVector(x, y);
        this.vel = createVector(0, random(3, 6)); 
        this.acc = createVector(0, random(0.01, 0.03));
    }

    //Adding accelertaion to velocity and adding velocity to the current position of flake.
    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);

        if (this.pos.y > height) {
            this.pos.y = random(-100, -10);
            this.vel.y = random(3, 6);
            this.acc.y = random(0.01, 0.03);
        }
    }

    render() {
        stroke(255);
        strokeWeight(10);
        point(this.pos.x, this.pos.y);
    }

}