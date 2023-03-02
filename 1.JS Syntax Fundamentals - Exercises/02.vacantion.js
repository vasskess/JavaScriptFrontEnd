function calculatePrice(numberOfPeople, groupType, dayOfWeek) {
  let pricePerPerson;

  switch (groupType) {
    case "Students":
      switch (dayOfWeek) {
        case "Friday":
          pricePerPerson = 8.45;
          break;
        case "Saturday":
          pricePerPerson = 9.8;
          break;
        case "Sunday":
          pricePerPerson = 10.46;
          break;
        default:
          return "Invalid day of week";
      }
      break;
    case "Business":
      switch (dayOfWeek) {
        case "Friday":
          pricePerPerson = 10.9;
          break;
        case "Saturday":
          pricePerPerson = 15.6;
          break;
        case "Sunday":
          pricePerPerson = 16.0;
          break;
        default:
          return "Invalid day of week";
      }
      break;
    case "Regular":
      switch (dayOfWeek) {
        case "Friday":
          pricePerPerson = 15.0;
          break;
        case "Saturday":
          pricePerPerson = 20.0;
          break;
        case "Sunday":
          pricePerPerson = 22.5;
          break;
        default:
          return "Invalid day of week";
      }
      break;
    default:
      return "Invalid group type";
  }

  let totalPrice = pricePerPerson * numberOfPeople;

  if (groupType === "Students" && numberOfPeople >= 30) {
    totalPrice *= 0.85;
  } else if (groupType === "Business" && numberOfPeople >= 100) {
    totalPrice -= pricePerPerson * 10;
  } else if (
    groupType === "Regular" &&
    numberOfPeople >= 10 &&
    numberOfPeople <= 20
  ) {
    totalPrice *= 0.95;
  }

  return `Total price: ${totalPrice.toFixed(2)}`;
}
