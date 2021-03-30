//------------------------------------------------------------------------
// Programming Exercise: Modifying Images
// Part 1
var picture = new SimpleImage("astrachan.jpg");
var width = picture.getWidth();
for (var pixel of picture.values()) {
    x = pixel.getX();
    if (x < (width/3)) {
        pixel.setRed(255);
    } else if ((x > width/3) && (x < width - (width/3))) {
        pixel.setGreen(255);
    } else {
        pixel.setBlue(255);
    }
}
print(picture);

//------------------------------------------------------------------------
// Part 2
// Swap Red and Grreen
var picture = new SimpleImage("drewRobert.png");
print(picture);
for (var pixel of picture.values()) {
    var swap = pixel.getRed();
    pixel.setRed(pixel.getGreen());
    pixel.setGreen(swap);
}
print(picture);

//------------------------------------------------------------------------
// Part 3
// Change the Duke blue devil
var picture = new SimpleImage("duke_blue_devil.png");
print(picture);
for (var pixel of picture.values()) {
    if (pixel.getBlue() >= 227) {
        if (pixel.getRed() != 255) {
            if (pixel.getGreen() != 255) {
                pixel.setBlue(0);
                pixel.setRed(255);
                pixel.setGreen(255);
            }
        }
    }
}
print(picture);