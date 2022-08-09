const charity = new Charity();
getCharityByName = function () {
  let charitySpecific = $("#charitySpecific").val();
  charity.getSpecificCharity(charitySpecific);
};
