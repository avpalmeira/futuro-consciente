import FormValidator from "../utils/FormValidator";

const ContactInfoValidator = new FormValidator([
  {
    field: "_name",
    method: "isEmpty",
    validWhen: false,
    message: "Nome é obrigatório"
  },
  {
    field: "_email",
    method: "isEmpty",
    validWhen: false,
    message: "Email é obrigatório"
  },
  {
    field: "_email",
    method: "isEmail",
    validWhen: true,
    message: "Este não é um email válido"
  },
  {
    field: "_telephone",
    method: "isEmpty",
    validWhen: false,
    message: "Telefone é obrigatório"
  },
  {
    field: "_telephone",
    method: "isLength",
    validWhen: true,
    args: [{ min: 14, max: 15 }],
    message: "Este não é um telefone válido"
  }
]);

export default ContactInfoValidator;
