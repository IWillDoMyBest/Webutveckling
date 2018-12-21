function Countdown() {

    this.left_days = 31 - day();
    this.left_hor = 24 - hour();
    this.left_min = 60 - minute();
    this.left_sec = 60 - second();

    this.update = function() {
        this.left_days = 31 - day();
        this.left_hor = 24 - hour();
        this.left_min = 60 - minute();
        this.left_sec = 60 - second();

        if (this.left_days < 10) {this.left_days = "0" + this.left_days;}
        if (this.left_hor < 10) {this.left_hor = "0" + this.left_hor;}
        if (this.left_min < 10) {this.left_min = "0" + this.left_min;}
        if (this.left_sec < 10) {this.left_sec = "0" + this.left_sec;}

    }

    // format : dd:hh:mm:ss
    this.render = function() {
        var text_to_render = this.left_days + ":" + this.left_hor + ":" + this.left_min + ":" + this.left_sec;


        textSize(63);
        textStyle(ITALIC);
        fill(255, 0, 0);
        text("Time before new year!", 550, 430);
        text(text_to_render, 700, 500);
    }

}