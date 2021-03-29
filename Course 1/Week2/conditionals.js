//--------------------------------------------------------------------------
// Exercise 1 - Turn the chapel red. 

var image = new SimpleImage("chapel.png");

// iterate through each pixel of the image object
for (var pixel of image.values()) {
    // check and see if the current pixel is not at maximum red
    if (pixel.getRed() < 255) {
        // not at maximum red evaluates to true, then set red to 255
        pixel.setRed(255)
    }
}
print(image);

//--------------------------------------------------------------------------
// Exercise 2 - Remove all the red.

var image = new SimpleImage("chapel.png");
// iterate through each pixel of the image object
for (var pixel of image.values()) {
    // if the red value of the pixel is greater than 0, set to 0
    if (pixel.getRed() > 0) {
        pixel.setRed(0)
    }
}
print(image);

//--------------------------------------------------------------------------
// Exercise 3 - Turn the eggs less red.

var image = new SimpleImage("eastereggs.jpg");
// iterate through each pixel of the image object
for (var pixel of image.values()) {
    // if the red value of the pixel is greater than 70, set to 70
    if (pixel.getRed() > 70) {
        pixel.setRed(70)
    }
}
print(image);

//--------------------------------------------------------------------------
// Exercise 4 - Add Thick Black Line to Bottom of Owen

var image = new SimpleImage("astrachan.jpg");
// iterate through each pixel of the image object
for (var pixel of image.values()) {
    // if the current pixel Y value is equal to or greater than the 10th 
    // pixel from the bottom, set RGB values to 0 (black)
    if (pixel.getY() >= (image.getHeight() - 10)) {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(0);
    }
}
print(image);

//--------------------------------------------------------------------------
// Exercise 5 - Green square in top left corner

var image = new SimpleImage("chapel.jpg");
// iterate through each pixel of the image object
for (var pixel of image.values()) {
    // evaluate if both X and Y are true (1 - 50) then change RGB to green
    if (pixel.getY() <= 50) {
        if (pixel.getX() <= 50) {
            pixel.setRed(0);
            pixel.setGreen(255);
            pixel.setBlue(0);
        }
    }
}
print(image);

//--------------------------------------------------------------------------
// Exercise 6 - Rectangle of any color in top right corner

function topRightCorner(cornerWidth, cornerHeight, someImage, red, green, blue) {
    // iterate through each pixel of the image object
    for (var pixel of someImage.values()) {
        // check to see if the value of X is equal to the width minus corner width
        // and if the value of Y is equal to or less than cornerHeight
        if (pixel.getX() >= (someImage.getWidth() - cornerWidth)) {
            if (pixel.getY() <= (cornerHeight)) {
                // change the RGB values if both conditionals evaluate true
                pixel.setRed(red);
                pixel.setGreen(green);
                pixel.setBlue(blue);
            }
        }
    }
    return(someImage)
}
var picture = new SimpleImage("chapel.png");
var result = topRightCorner(30, 60, picture, 255, 255, 0);
print(result);
var picture2 = new SimpleImage("smalllion.jpg");
var result2 = topRightCorner(125, 20, picture2, 255, 0, 0);
print(result2);

//--------------------------------------------------------------------------
// Exercise 7 - Changes in Red

function changeRed(width, height) {
    var picture = new SimpleImage(width, height);
    var red = 0;
    for (var pixel of picture.values()) {
        if (pixel.getX() < picture.getWidth()-1) {
            pixel.setRed(red);
        } else {
            red = 0;
        }
        red++;
    }
    return picture;
}
var result = changeRed(256,200);
print(result);