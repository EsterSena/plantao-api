const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

router.put(
  "/",
  [
    body("nome")
      .notEmpty()
      .withMessage("O nome é obrigatório")
      .isLength({ min: 3 })
      .withMessage("O nome deve ter no mínimo 3 caracteres"),
    body("email").isEmail().withMessage("E-mail inválido"),
    body("documento")
      .notEmpty()
      .withMessage("O documento é obrigatório")
      .isLength({ min: 9, max: 11 })
      .withMessage(
        "O documento deve ter no mínimo 9 e no máximo 11 caracteres"
      ),
    body("documento")
      .notEmpty()
      .withMessage("O documento é obrigatório")
      .isLength({ min: 9 })
      .withMessage("O documento deve ter no mínimo 9 caracteres"),
  ],
  async function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.status(200).send("Cadastro realizado com sucesso!");
  }
);

module.exports = router;
