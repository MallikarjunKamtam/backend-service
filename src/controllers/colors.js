const { data } = require('../data')

const editColors = (req, res) => {
    const currentData = data.find((item) => item.id === +req.params.id)
    currentData.color = req.body.color

    console.log(currentData, 'currentData')

    res.status(201).json(currentData)
}

const postColors = (req, res) => {
    res.status(201).json({ id: data.length + 1, ...req.body })
}

const getColors = (req, res) => {
    res.status(200).json({ status: 'Success', data })
}

module.exports = {
    editColors,
    getColors,
    postColors,
}
