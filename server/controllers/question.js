const Question = require("../models/question")

exports.getAllQuestions = async (req, res) => {
    try {
        const data = await Question.find();
        if (data && data.length !== 0) {
            return res.status(200).send({
                message: "Questions found!",
                payload: data
            })
        }

        res.status(400).send({
            message: "Questions not found!"
        })

    } catch (err) {
        res.status(500).send({
            error: err.message
        })
    }
}
exports.getQuestionById = async (req, res) => {
    try {
        const data = await Question.findById(req.params.id);
        if (data) {
            return res.status(200).send({
                message: "Question found!",
                payload: data
            })
        }

        res.status(400).send({
            message: "Question not found!"
        })

    } catch (err) {
        res.status(500).send({
            error: err.message
        })
    }
}
exports.createQuestion = async (req, res) => {
    try {
        const data = new Question({
            name: req.body.name,
            answerA: req.body.answerA,
            answerB: req.body.answerB,
            answerC: req.body.answerC,
            answerD: req.body.answerD,
            correctAnswer: req.body.correctAnswer,
        })

        const result = await data.save();
        if (result) {
            return res.status(201).send({
                message: "Question created!",
                payload: result
            })
        }

    } catch (err) {
        res.status(500).send({
            error: err.message
        })
    }
}
exports.updateQuestion = async (req, res) => {
    try {
        const data = {
            name: req.body.name,
            answerA: req.body.answerA,
            answerB: req.body.answerB,
            answerC: req.body.answerC,
            answerD: req.body.answerD,
            correctAnswer: req.body.correctAnswer,
        }

        const result = await Question.findByIdAndUpdate(req.params.id, data);
        if (result) {
            return res.status(200).send({
                message: "Question updated!",
                payload: result
            })
        }

    } catch (err) {
        res.status(500).send({
            error: err.message
        })
    }
}

exports.deleteQuestion = async (req, res) => {
    try {

        const result = await Question.findByIdAndDelete(req.params.id);
        if (result) {
            return res.status(200).send({
                message: "Question deleted!",
                payload: result
            })
        }

    } catch (err) {
        res.status(500).send({
            error: err.message
        })
    }
}