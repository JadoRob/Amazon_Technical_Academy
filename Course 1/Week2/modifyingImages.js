//Programming Exercise: Modifying Images
//Part 1
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