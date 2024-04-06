class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }

    draw() {
        return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`;
    }
}

class Triangle {
    constructor(size, color) {
        this.size = size;
        this.color = color;
    }

    draw() {
        return `<polygon points="150,50 100,150 200,150" fill="${this.color}" />`;
    }
}

class Square {
    constructor(size, color) {
        this.size = size;
        this.color = color;
    }

    draw() {
        return `<rect x="100" y="100" width="${this.size}" height="${this.size}" fill="${this.color}" />`;
    }
}

module.exports = { Circle, Triangle, Square };
