const sharp = require('sharp')

const writePath = './src/images/processed/'

async function resizeImage(file) {

    /* sharp(file)
    .resize({height: 720})
    .toFile(writePath + 'output.png')
    .then((data) => {
        console.log('Imagem processada e salva no diretório.')
    })
    .catch(err => {
        console.log("Erro ao salvar a imagem")
    }) */
    try {

        const data = await sharp(file)
            .resize({ height: 720 })
            .toBuffer()

        return data
    } catch (err) {
        console.error("Erro ao processar a imagem", err)
        return (err)
    }
    
}



module.exports = { resizeImage }