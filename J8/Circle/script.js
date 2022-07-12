// Круг

// Реализуйте класс, описывающий круг. В классе должны находиться следующие компоненты:

// -поле, сохраняющее радиус окружности;
// -get-свойство, возвращающее радиус окружности;
// -set-свойство, задающее радиус окружности;
// -get-свойство, возвращающее диаметр окружности;
// -метод, вычисляющий площадь круга;
// -метод, вычисляющий длину круга.

// Продемонстрируйте работу свойств и методов.

class Circle {
    constructor() {
        this.circleRadius = 35;
    }

    get getRadius() {
        return this.circleRadius;
    }

    set setRadius(setRadius) {
        this.circleRadius = setRadius;
    }

    get getDiameter() {
        return this.circleRadius * 2;
    }

    circleArea() {
        console.log(`Площадь круга: ${Math.round(Math.PI * Math.pow(this.circleRadius, 2))}`);
    }

    circleLength() {
        console.log(`Длина круга: ${Math.round(Math.PI * (this.circleRadius * 2))}`);
    }

}


let circle = new Circle();

	console.log(`Радиус: ${circle.getRadius}`);
	circle.setRadius = 155;
	console.log(`Новый радиус: ${circle.getRadius}`);
	console.log(`Диаметр: ${circle.getDiameter}`);
	circle.circleArea();
	circle.circleLength();