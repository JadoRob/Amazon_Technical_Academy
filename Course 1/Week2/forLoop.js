//create a 200 x 200 pixel and print on screen
var img = new SimpleImage(200,200);
print(img);

//iterate through each pixel of the img object 
for (var pixel of img.values()) {
    //set the red and green values to 255 to change each pixel color to yellow
    pixel.setGreen(255);
    pixel.setRed(255);
}
//print the new 200 x 200 pixel
print(img);