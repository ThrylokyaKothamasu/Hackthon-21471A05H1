document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('mycanvas');
    const ctx = canvas.getContext('2d');
    const size = 200;

    const drawDice = (number) => {
        ctx.clearRect(0, 0, size, size);
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, size, size);
        ctx.strokeRect(0, 0, size, size);

        ctx.fillStyle = 'black';
        ctx.font = `${size / 6}px Arial`; // Adjust font size based on the size of the canvas
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(number, size / 2, size / 2);
    };

    const getRandomNumber = () => Math.floor(Math.random() * 6) + 1;

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Space') {
            const randomNumber = getRandomNumber();
            drawDice(randomNumber);
        }
    });

    // Initial draw
    const initialNumber = getRandomNumber();
    drawDice(initialNumber);
});
