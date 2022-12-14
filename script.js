let rectangle = {
    // leftX: -10,
    // leftY: 15,
    // rightX: 10,
    // rightY:-15,
    topLeft: {
        X: -10,
        Y: 15
    },
    botRight: {
        X: 10,
        Y: -15
    },

}
function info(rectangle) {
    console.log(`topLeft: ${rectangle.topLeft.X}:${rectangle.topLeft.Y}`);
    console.log(`botRight: ${rectangle.botRight.X}:${rectangle.botRight.Y}`);
}

function width(rectangle) {
    w = 0;
    for (i = rectangle.topLeft.X; i < rectangle.botRight.X; i++) {
        w++;
    }
    return w;
}

function hight(rectangle) {
    w = 0;
    for (i = rectangle.topLeft.Y; i > rectangle.botRight.Y; i--) {
        w++;
    }
    return w;
}

function square(rectangle) {
    return width(rectangle) * hight(rectangle);
}

function perimeter(rectangle) {
    return width(rectangle) * 2 + hight(rectangle) * 2;
}

function editWidth(rectangle, w) {
    rectangle.botRight.X += w;
}

function editX(rectangle, x) {
    rectangle.topLeft.X += x;
    rectangle.botRight.X += x;
}

function point(rectangle, x, y) {
    if (x <= rectangle.botRight.X && x >= rectangle.topLeft.X && y >= rectangle.botRight.Y && y <= rectangle.topLeft.Y) {
        return true;
    }
    else {
        return false;
    }
}