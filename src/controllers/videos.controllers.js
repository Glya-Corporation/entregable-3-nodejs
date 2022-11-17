const VideoServices = require('../services/video.sevices');

const createVideo = async (req, res, next) => {
    try {
        const newVideo = req.body;
        const result = await VideoServices.createVideo(newVideo);
        res.status(201).json(result);
    } catch (error) {
        next({
            status: 418,
            errorContent: error,
            message: 'the information sent has an error'
        })
    }
}

const deleteVideo = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await VideoServices.deleteVideo(id);
        res.status(200).json(result);
    } catch (error) {
        next(error)
    }
}

module.exports = { createVideo, deleteVideo };