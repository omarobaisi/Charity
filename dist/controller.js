const charityApi = new CharityApi();

const renderCharities = async () => {
  await charityApi.getAllCharity();
};

getClassifiedCharities = function (choice) {
    let CharityClassification = $(choice).val()
    charityApi.getClassificationCharity(CharityClassification);
  };

getCharityByName = function () {
  let charityName = $("#charitySpecific").val();
  charityApi.getByName(charityName);
};

renderCharities();