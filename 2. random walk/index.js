let x, y;
let xoff, yoff;
let inc = 0.01;
let bgColorList = [{r: 132, g: 94, b: 194}, {r: 155, g: 137, b: 179},
    {r: 253, g: 247, b: 255}, {r: 254, g: 254, b: 223}]
let colorIndex = 0;
let pointColorList = [{r: 255, g: 111, b: 145 }, {r: 156, g: 88, b: 101},
    {r: 255, g: 227, b: 235 }, {r: 0, g: 91, b: 72 }]
let pointIndex = 0;

function setup() {
    createCanvas(400, 400);
    x = 200;
    y = 200;

    yoff = 0;
    pixelDensity(1);
    loadPixels();
    for(let y = 0; y < height; y++) {
        xoff = 0;
        for(let x = 0; x < width; x++) {
            let index = (x + y * width) * 4;
            colorIndex = floor(noise(xoff, yoff) * 4);
            pixels[index] = bgColorList[colorIndex].r;
            pixels[index + 1] = bgColorList[colorIndex].g;
            pixels[index + 2] = bgColorList[colorIndex].b;
            pixels[index + 3] = 255;
            xoff += inc;
        }
        yoff += inc;
    }
    updatePixels();
}

function draw() {
    stroke(pointColorList[pointIndex].r, pointColorList[pointIndex].g, pointColorList[pointIndex].b);
    strokeWeight(5);
    point(x, y)

    pointIndex = floor(random(4));

    switch (pointIndex) {
        case 0:
            if(x < 400)
                x += 5
            break;
        case 1:
            if(x > 0)
                x -= 5;
            break;
        case 2:
            if(y < 400)
                y += 5;
            break;
        case 3:
            if(y > 0)
            y -= 5;
            break;
    }
}