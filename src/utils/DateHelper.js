import { format, formatDistance } from "date-fns";
import pt from "date-fns/locale/pt";

function getDeliveryDate(isAfterPandemic, date) {
  let deliveryDate = "Logo após a pandemia do COVID acabar";

  if (!isAfterPandemic) {
    const dateInDistance = formatDistance(new Date(), date, {
      locale: pt
    });
    const formattedDate = format(date, "dd/MM/yy");

    deliveryDate = `${dateInDistance} (${formattedDate})`;
  }

  return deliveryDate;
}

function dateDbFormat(date) {
  return format(date, "yyyy.MM.dd");
}

export { getDeliveryDate, dateDbFormat };
