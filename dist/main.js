const charity = new Charity();

getClassifiedCharities = function (choice) {
    let CharityClassification = $(choice).val()
    charity.getClassificationCharity(CharityClassification);
  };