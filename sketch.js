let ax, ay, bx, by, cx, cy, y, x;

function setup() {
    createCanvas(800, 800);
    background(0);

    // Point A coords
    ax = width / 2;
    ay = 0;

    // Point B coords
    bx = 0;
    by = height;

    // Point C coords
    cx = width;
    cy = height;

    x = random(width);
    y = random(height);

    stroke(255);
    strokeWeight(1);
    point(ax, ay);
    point(bx, by);
    point(cx, cy);
}

function draw() {
    for (let i = 0; i < 100; i++) {
        point(x, y);

        let rand = floor(random(3)); // Choose between one of the 3 points

        switch (rand) {
            case 0:
                stroke(255, 255, 100, 100);
                x = lerp(x, ax, 0.5);
                y = lerp(y, ay, 0.5);
                break;
            case 1:
                stroke(200, 100, 200, 100);
                x = lerp(x, bx, 0.5);
                y = lerp(y, by, 0.5);
                break;
            case 2:
                stroke(255, 0, 20, 100);
                x = lerp(x, cx, 0.5);
                y = lerp(y, cy, 0.5);
                break;
        }
    }
}
