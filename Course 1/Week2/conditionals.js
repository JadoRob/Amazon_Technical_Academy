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
