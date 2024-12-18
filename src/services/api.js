const express = require('express')
const multer = require('multer')
const { resizeImage } = require('../../resizeImage')
const sharp = require('sharp')
const app = express()
const port = 3000
const upload = multer({ storage: multer.memoryStorage() }); // Arquivo processado na memória

const writePath = './src/images/processed/'

const data = {
    error: "Método não permitido",
    message: "Utilize o método POST no endpoint /api/resize",
    developer: "joao.souza",
    jira: "TI-00000"
}

app.get('/', (req, res) => {
    res.set('Content-Type', 'application/json')
    res.status(405)
    return res.send(data)
})

app.get('/api/resize', (req, res) => {
    res.set('Content-Type', 'application/json')
    res.status(405)
    return res.send(data)
})



app.post('/api/resize', upload.single('file'), (req, res) => {


    if (!req.file) {
        return res.status(400).json({ error: "Envie uma imagem no corpo da requisição" })
    }

    const file = req.file.buffer

    resizeImage(file)
        .then(data => {
            res.set('Content-Type', 'image/png')

            return res.send(data)
        })
        .catch(error => {
            res.set(500)
            res.send({ erro: error })
        })


})

app.listen(port, () => {
    console.log('Ouvindo na porta ' + port)
})