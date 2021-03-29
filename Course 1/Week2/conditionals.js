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