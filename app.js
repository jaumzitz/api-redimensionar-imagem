const sharp = require('sharp')
const fs = require('fs')

const { getImageMetadata } = require('./src/getImageMetadata.js')

const imgPath = './src/images/originals/sample.jpg'
const writePath = './src/images/processed/'


getImageMetadata(imgPath)

sharp(imgPath)
    .resize({height: 720})
    .toFile(writePath + 'output.png')
    .then((data) => {
        console.log('Imagem processada e salva no diretório.')
    })
    .catch(err => {
        console.log("Erro ao salvar a imagem")
    })



