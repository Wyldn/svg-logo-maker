const { Circle, Triangle, Square } = require('./shapes');

test('Draw Circle', () => {
    const circle = new Circle(25, 'green');
    expect(circle.draw()).toBe('<circle cx="150" cy="100" r="25" fill="green" />');
});

// Add more tests for Triangle and Square
