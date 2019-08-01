class Block {
    constructor(col, row) {
        this.col = col;
        this.row = row;
    }
    drawSquare(color) {
        var x = this.col * blockSize;
        var y = this.row * blockSize;
        ctx.fillStyle = color;
        ctx.fillRect(x, y, blockSize, blockSize);
    }
    drawCircle(color) {
        var centerX = this.col * blockSize + blockSize / 2;
        var centerY = this.row * blockSize + blockSize / 2;
        ctx.beginPath();
        ctx.arc(centerX, centerY, blockSize / 2, 0, 2 * Math.PI, false);
        ctx.fillStyle = color;
        ctx.fill();
    }
    equal(otherBlock) {
        return this.col === otherBlock.col && this.row === otherBlock.row;
    }
}



