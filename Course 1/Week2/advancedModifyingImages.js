//----------------------------------------------------------------------
// Part 1

var fgImage = new SimpleImage("drewRobert.png");
var bgImage = new SimpleImage("dinos.png")
var output = new SimpleImage(fgImage.getWidth(), fgImage.getHeight())

for (var pixel of fgImage.values()) {
    if (pixel.getGreen() > (pixel.getRed() + pixel.getBlue())) {
        var x = pixel.getX();
        var y = pixel.getY();
        var bgPixel = bgImage.getPixel(x, y);
        output.setPixel(x, y, bgPixel);
    } else {
        output.setPixel(pixel.getX(), pixel.getY(), pixel);
    }
}
print(output);

//----------------------------------------------------------------------
// Part 2
// The problem seems to be that the upper left square is Yellow, when it 
// should be red. This indicates that the condition on line 35 is also 
// applied (green and red make yellow)

var img = new SimpleImage(200,200);
for (var px of img.values()){
  var x = px.getX();
  var y = px.getY();
  if (x < img.getWidth()/2){
    px.setRed(255);
  }
  if (y>img.getHeight()/2){
    px.setBlue(255);
  }
  // added if statement to only set green if x is greater than 1
  else if (x > img.getWidth()/2){
    px.setGreen(255);
  }
}
print (img);

//----------------------------------------------------------------------
// Part 3

var image = new SimpleImage("smallpanda.png");
function setBlack(pixel) {
    pixel.setRed(0);
    pixel.setGreen(0);
    pixel.setBlue(0);
    return(pixel);
}
function addBorder(image, thickness) {
    // get the width and height of the image and store them
    var width = image.getWidth();
    var height = image.getHeight();
    for (var pixel of image.values()) {
        // Create a black pixel as long as the
        // value of Y is less than the thickness of the border
        if (pixel.getY() <= thickness) {
            setBlack(pixel);
        }
        // Create a black pixel as long as the value of Y is greater
        // than the height minus the border thickness
        if (pixel.getY() >= (height - thickness)) {
            setBlack(pixel);
        }
        // Create a black pixel as long as the value of x is less than
        // the thickness of the border
        if (pixel.getX() <= thickness) {
            setBlack(pixel);
        }
        // Create a black pixel as long as the value of x is greater
        // than the width minus the thickness of the border
        if (pixel.getX() >= (width - thickness)) {
            setBlack(pixel);
        }
    }
}
addBorder(image, 10);
print(image);