const charity = new Charity();
getCharityByName = function () {
  let charitySpecific = $("#charitySpecific").val();
  charity.getSpecificCharity(charitySpecific);
};

getClassifiedCharities = function (choice) {
    let CharityClassification = $(choice).val()
    console.log(CharityClassification)
    charity.getClassificationCharity(CharityClassification);
  };