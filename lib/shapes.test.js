// Jest test for shapes

const { Triangle, Square, Circle, Text } = require('./shapes');

test('Testing shape classes', () => {
    let shape = new Triangle();
    shape.setColor('blue');
    expect(shape.render()).toEqual(
         `<polygon points="150,10 280,150 20,150" fill="blue" />`
    ); 

    shape = new Square();
    shape.setColor('red');
    expect(shape.render()).toEqual(
        `<rect x="75" y="30" width="150" height="150" fill="red" />`
    ); 

    shape = new Circle();
    shape.setColor('green');
    expect(shape.render()).toEqual(
      
       '<circle cx="150" cy="100" r="80" fill="green" />'
    );

    shape = new Text();
    shape.setText('ABC');
    shape.setColor('blue');
    expect(shape.render()).toEqual(
        '<text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">ABC</text>'
    );
});