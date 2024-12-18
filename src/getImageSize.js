const sharp = require('sharp')

async function getImageSize(imgPath) {

    const imgBuffer = await sharp(imgPath).toBuffer()
    const imgSize = imgBuffer.length

    return (imgSize / 1024).toFixed(0) + 'kb'
        
}

module.exports = { getImageSize }