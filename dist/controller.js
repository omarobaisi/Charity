const charityApi = new CharityApi();

const renderCharities = async () => {
  await charityApi.getAllCharity();
};

getClassifiedCharities = function (choice) {
  let CharityClassification = $(choice).val();
  charityApi.getClassificationCharity(CharityClassification);
};

getCharityByName = function () {
  let charityName = $("#charitySpecific").val();
  charityApi.getByName(charityName);
};

const donait = function (donaitButton) {
  let div = $(donaitButton).closest(".charityInfo");
  nameOfcharity = $(div).find("#name").text();
  let amount = $("#amount").val();
  let nameOfdoner = $("#nameOfdoner").val();
  charityApi.donate(nameOfdoner, amount, nameOfcharity);
};

const deleteCharity = () => {
  $("#delete").on("click", function(){
    console.log("Delete");
     $("#charity-container").empty();
  });
}

getInfoFromDiv = function (div) {
  let name = $(div).find("h3").text();
  charityApi.getByName(name);
};
renderCharities();
