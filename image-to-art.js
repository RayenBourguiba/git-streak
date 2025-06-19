const sharp = require('sharp');

async function imageToMatrix(imagePath, width = 53, height = 7) {
    const image = sharp(imagePath)
        .resize(width, height)
        .greyscale()
        .raw();

    const { data, info } = await image.toBuffer({ resolveWithObject: true });

    const matrix = [];
    for (let y = 0; y < info.height; y++) {
        const row = [];
        for (let x = 0; x < info.width; x++) {
            const pixel = data[y * info.width + x];
            const level = Math.floor((pixel / 255) * 5);
            row.push(level);
        }
        matrix.push(row);
    }

    return matrix;
}

module.exports = { imageToMatrix };
