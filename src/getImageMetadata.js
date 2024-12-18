const sharp = require('sharp')
const { getImageSize } = require('./getImageSize.js')


async function getImageMetadata(imgPath) {


    const metadata = await sharp(imgPath).metadata()
    const size = await getImageSize(imgPath)

    const imgMeta = {
        "altura": metadata.height + "px",
        "largura": metadata.width + "px",
        "tamanho": size,
        "format": metadata.format
    }

    console.log(imgMeta)

}

module.exports = {
    getImageMetadata
}