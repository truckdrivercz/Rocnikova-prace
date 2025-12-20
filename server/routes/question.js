const express = require("express");
const router = express.Router();
const QuestionsController = require("../controllers/question");

router.get("/", QuestionsController.getAllQuestions);
router.get("/:id", QuestionsController.getQuestionById);
router.post("/", QuestionsController.createQuestion);
router.put("/:id", QuestionsController.updateQuestion);
router.delete("/:id", QuestionsController.deleteQuestion);