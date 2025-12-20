const mongose = require("mongoose");

const questionSchema = mongose.Schema({
    name: {type: String, required: true},
    answerA: {type: String, required: true},
    answerB: {type: String, required: true},
    answerC: {type: String, required: true},
    answerD: {type: String, required: true},
    correctAnswer: {type: String, required: true, enum: ["A", "B", "C", "D"]}
})

module.exports = mongose.model("Question", questionSchema);