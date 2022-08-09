const charityApi = new CharityApi();
getCharityByName = function () {
  let charityName = $("#charitySpecific").val();
  charityApi.getByName(charityName);
};
