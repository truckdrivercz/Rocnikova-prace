const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
    category: {type: String, require: true},
    name: {type: String, required: true},
    answerA: {type: String, required: true},
    answerB: {type: String, required: true},
    answerC: {type: String, required: true},
    answerD: {type: String, required: true},
    correctAnswer: {type: String, required: true, enum: ["A", "B", "C", "D"]}
})

module.exports = mongoose.model("Question", questionSchema);