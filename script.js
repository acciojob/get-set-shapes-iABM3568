//complete this code
class Rectangle {
	constructor(width, height) {
    // Store width and height as private properties
    this._width = width;
    this._height = height;
	}

	// Getter for width
  get width() {
    return this._width;
  }
  
  // Getter for height
  get height() {
    return this._height;
  }
  
  // Method to calculate area
  getArea() {
    return this._width * this._height;
  }
}

class Square extends Animal {
	constructor(side) {
    // Call parent Rectangle constructor with side for both width and height
    super(side, side);
    
    // Store the side value for easy reference
    this._side = side;
  }
  
  // Method to calculate perimeter
  getPerimeter() {
    return this._side * 4;
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
