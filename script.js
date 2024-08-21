// public/script.js

function showHistory(color) {
    const colorHistory = {
        red: "Red has been associated with passion, love, and anger. It is one of the first colors used in art.",
        blue: "Blue is often seen as a calm and peaceful color, representing the sky and the sea.",
        yellow: "Yellow symbolizes happiness and energy. It is a color often associated with the sun and warmth."
    };

    const historyElement = document.getElementById('color-history');
    historyElement.innerHTML = `<h2>The History of ${color.charAt(0).toUpperCase() + color.slice(1)}</h2>
                                <p>${colorHistory[color]}</p>`;
}
