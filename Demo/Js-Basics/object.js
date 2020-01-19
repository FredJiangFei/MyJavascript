function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  };
}

// Circle1 is as same as Circle
const Circle1 = new Function(
  'radius',
  `
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  };
`
);

Circle.call({}, 1); // {} 等于Circle里的this对象
Circle.apply({}, [1]); // 参数是数组

// Circle.length 参数个数

const circle = new Circle(1);
