const _ = require("lodash");



exports.pickRegistrationResponse = data => {
  var response = _.pick(data, ["_id", "name", "email", "phone", "token"]);
  return response;
};




// exports.pickUserProfileResponse = data => {
//   let response = _.pick(data, ["_id", "name", "email", "phone"]);
//   return response;
// };
// exports.pickRegistrationData = data => {
//   var response = _.pick(data, ["name", "email", "phone", "password", "acceptTerms"]);
//   return response;
// };
// exports.pickRegistrationResponse = data => {
//   var response = _.pick(data, ["_id", "name", "email", "phone", "token"]);
//   return response;
// };

// exports.pickUserCredentials = data => {
//   return _.pick(data, ["email", "password"]);
// };

// exports.pickSociailAccountCredentials = data => {
//   return _.pick(data, [
//     "name",
//     "email",
//     "phone",
//     "isGoogle",
//     "googleData",
//     "isFacebook",
//     "facebookData",
//     "isLinkedln",
//     "linkedlnData",
//     "isTwitter",
//     "twitterData"
//   ]);
// };

// exports.pickRestrauntResponse = data => {
//   return _.pick(data, ["name", "address", "rating", "menu", "costForTwo", "image"]);
// };

// exports.pickItemResponse = data => {
//   return _.pick(data, ["restrauntId", "category", "price", "name", "image"]);
// };

// exports.pickOrderResponse = data => {
//   return _.pick(data, [
//     "promoCode",
//     "originalPrice",
//     "discount",
//     "finalPrice",
//     "contact",
//     "instructions",
//     "foodItems",
//     "status"
//   ]);
// };

// exports.pickCarResponse = data => {
//   return _.pick(data, [
//     "Number",
//     "EngineNo",
//     "chasisNo",
//     "color",
//     "ManufactureDate",
//     "CarMake",
//     "CarModel"
//   ]);
// };

// exports.pickOwnerResponse = data => {
//   return _.pick(data, ["Name", "Num", "phone", "Address", "PurchaseDate"]);
// };
