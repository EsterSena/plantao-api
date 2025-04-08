const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

router.put(
  "/",
  [
    body("nome_fantasia")
      .notEmpty()
      .withMessage("O nome fantasia é obrigatório")
      .isLength({ min: 7 })
      .withMessage("O nome fantasia deve ter no mínimo 7 caracteres"),
    body("razao_social")
      .notEmpty()
      .withMessage("A razão social é obrigatória")
      .isLength({ min: 7 })
      .withMessage("A razão social é deve ter no mínimo 7 caracteres"),
    body("email").isEmail().withMessage("E-mail inválido"),
    body("documento")
      .notEmpty()
      .withMessage("O documento é obrigatório")
      .isLength({ min: 14, max: 14 })
      .withMessage("O documento deve ter 14 caracteres"),
    body("documento")
      .notEmpty()
      .withMessage("O documento é obrigatório")
      .isLength({ min: 9 })
      .withMessage("O documento deve ter no mínimo 9 caracteres"),
  ],
  async function (req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      res.status(200).send("Cadastro realizado com sucesso!");
    } catch (error) {
      console.log(error);
      res.status(500).send("Erro ao tentar cadastrar a empresa. Tente novamente ou entre em contato com o suporte.");
    }
  }
);

module.exports = router;
