const charity = new CharityApi();

const renderCharities = async () => {
  await charity.getAllCharity();
};
getCharityByName = function () {
  let charityName = $("#charitySpecific").val();
  charityApi.getByName(charityName);
};

renderCharities();
