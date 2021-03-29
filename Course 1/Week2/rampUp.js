//--------------------------------------------------------------

print("----- EXERCISE 1 -----");
function phrase3words(value1, value2, value3) {
    var answer = value1 + " " + value2 + " " + value3;
    return answer;
}

var result1 = phrase3words("smile","at","everyone");
print(result1);
var result2 = phrase3words("everyone","wave","back");
print(result2);
var result3 = phrase3words("coding", "is", "fun");
print(result3);
print();

//--------------------------------------------------------------

print("----- EXERCISE 2 -----");
function reformatName(first, last) {
    var fullName = last + ", " + first;
    return fullName
}

var result = reformatName("Susan", "Rodger");
print(result);
result = reformatName("Robert", "Duvall");
print(result);
print();

//--------------------------------------------------------------

print("----- EXERCISE 3 -----");
function numberPixels(namefile) {
    var someImg = new SimpleImage(namefile);
    var height = someImg.getHeight(); 
    var width = someImg.getWidth();
    totalPixels = height * width;
    return totalPixels
}

var result = numberPixels("chapel.png");
print(result);
result = numberPixels("dinos.png");
print(result);
print();

//--------------------------------------------------------------

print("----- EXERCISE 4 -----");
function perimeter(imageName) {
    img = new SimpleImage(imageName);
    var height = img.getHeight();
    var width = img.getWidth();
    ans = (width + height)*2
    return ans;
}

print(perimeter("rodger.png"));
print();

//--------------------------------------------------------------

print("----- EXERCISE 5 -----");
function printPixel(nameImage, xpos, ypos) {
    var img = new SimpleImage(nameImage);
    r = img.getRed(xpos, ypos);
    g = img.getGreen(xpos, ypos);
    b = img.getBlue(xpos, ypos);
    
    print("red is " + r);
    print("green is " + g);
    print("blue is " + b);
}

printPixel("drewgreen.png",10, 10);
printPixel("drewgreen.png",250, 500);
print();

//--------------------------------------------------------------

print("----- EXERCISE 6 -----");
function sumPixel(nameOfImage, xpos, ypos) {
    img = new SimpleImage(nameOfImage);
    r = img.getRed(xpos, ypos);
    g = img.getGreen(xpos, ypos);
    b = img.getBlue(xpos, ypos);
    ans = r+g+b;
    return ans;
}

var answer = sumPixel("drewgreen.png", 250, 500);
print(answer);
var answer = sumPixel("drewgreen.png",10, 10);
print(answer);
