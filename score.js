function Score(cone) {
    this.points = 0;
    this.increase = 250;
    this.maxscore = 0;


    this.show = function () {
        textSize(70);
        stroke('brown');
        strokeWeight(0);
        textStyle(BOLD);
        fill(255,242,55);
        text(this.points,750,0,100,50);
        textSize(70);
        text('High-Score: ' +this.maxscore,0,1080);
    }

    this.update = function() {
        this.points += this.increase;

        if (this.maxscore < this.points) {
                this.maxscore = this.points;
        }
    }
}
