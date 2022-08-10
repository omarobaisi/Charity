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

const donait = function () {
  let amount = $("#amount").val();
  let nameOfdoner = $("#nameOfdoner").val();
  charityApi.donate(nameOfdoner, amount);
};

const deleteCharity = () => {
  $("#delete").on("click", function(){
    console.log("Delete");
     $("#charity-container").empty();
  });
}

renderCharities();