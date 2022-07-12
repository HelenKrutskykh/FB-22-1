
class Marker {
    volume = 1;

    constructor(color) {
        this.color = color;
    }

    print(text) {
        let textToPrint = String(text);
        let symbolsToPrint = textToPrint.replace(' ', '').length * 0.005;

        if (symbolsToPrint <= this.volume) {
            this.volume -= symbolsToPrint;
        } else {
            let couldPrintText = '';
            for (let i = 0; i < this.volume + (textToPrint.split(' ').length - 1) * 0.005; i++) {
                couldPrintText += textToPrint[i];
            }
            textToPrint = couldPrintText;
            this.volume = 0;
            alert(`${this.color} маркер закінчився!`)
        }
        return textToPrint;
    }
}

function printText(marker, idGet, idPrint) {
    let text = document.getElementById(idGet).value;
    let textField = document.getElementById(idPrint);

    textField.style.color = marker.color;
    textField.innerHTML = marker.print(text);

    console.log(`Інформація : маркер - ${marker.color} залишилось чорнил- :`, marker.volume);
}

let marker = new Marker('blue');