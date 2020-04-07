import FormValidator from "../utils/FormValidator";
import { addWeeks, addYears } from "date-fns";

const minDeliveryDate = addWeeks(new Date(), 1);
const maxDeliveryDate = addYears(new Date(), 2);

const FutureMessageValidator = ignoreDate => {
  return new FormValidator([
    {
      field: "_message",
      method: "isEmpty",
      validWhen: false,
      message: "A mensagem é obrigatória"
    },
    {
      field: "_message",
      method: FormValidator.hasMinWords,
      validWhen: true,
      args: [{ minWords: 5 }],
      message: "A mensagem deve ter, no mínimo, 5 palavras"
    },
    {
      field: "_deliveryDate",
      method: FormValidator.isValidDate,
      validWhen: true,
      message: "Insira uma data válida"
    },
    {
      field: "_deliveryDate",
      method: FormValidator.isFutureDate,
      args: [
        {
          minDeliveryDate,
          ignoreValidation: ignoreDate
        }
      ],
      validWhen: true,
      message: "A data de envio deve ser, no mínimo, daqui a 1 semana"
    },
    {
      field: "_deliveryDate",
      method: FormValidator.isFutureDate,
      args: [
        {
          maxDeliveryDate,
          ignoreValidation: ignoreDate
        }
      ],
      validWhen: true,
      message: "A data de envio deve ser, no máximo, até daqui a 2 anos"
    }
  ]);
};

export default FutureMessageValidator;
