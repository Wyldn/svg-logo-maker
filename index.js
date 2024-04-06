const readline = require('readline');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter up to three characters: ', (text) => {
    rl.question('Enter text color: ', (textColor) => {
        rl.question('Choose a shape (circle, triangle, square): ', (shape) => {
            rl.question('Enter shape color: ', (shapeColor) => {
                rl.close();
                createSVG(text, textColor, shape, shapeColor);
            });
        });
    });
});

function createSVG(text, textColor, shape, shapeColor) {
    let svgContent = `<svg width="300" height="200">\n`;

    switch (shape) {
        case 'circle':
            const circle = new Circle(50, shapeColor);
            svgContent += circle.draw();
            break;
        case 'triangle':
            const triangle = new Triangle(50, shapeColor);
            svgContent += triangle.draw();
            break;
        case 'square':
            const square = new Square(50, shapeColor);
            svgContent += square.draw();
            break;
        default:
            console.log('Invalid shape choice.');
    }

    svgContent += `<text x="50" y="20" fill="${textColor}">${text}</text>\n</svg>`;
    
    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');
}
