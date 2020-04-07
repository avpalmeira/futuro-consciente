import contactInfoValidator from "./ContactInfoValidator";
import futureMessageValidator from "./FutureMessageValidator";

const validators = ignoreDate => [
  null,
  contactInfoValidator,
  futureMessageValidator(ignoreDate)
];

export default validators;
