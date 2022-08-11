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
  let nameOfcharity = $("#name").text();
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
  let continar = document.getElementById("charity-container");
  continar.style.display = "block";
};
filltritng = function () {
  charityApi.filltringCharity($("#charitySpecific").val());
};
closeCharityInfo = function () {
  let continar = document.getElementById("charity-container");
  continar.style.display = "none";
};
const getRandomImage = () => {
  let images = ["https://img.freepik.com/free-vector/flat-ramadan-charity-background-with-muslim-people-giving-money-food-hungry-homeless-illustration_1284-61988.jpg?w=996&t=st=1660153693~exp=1660154293~hmac=b2ffe555ef58541812313c31897120f5119da34363fa607a4161701b22cb5fcc", 
  "https://static.vecteezy.com/system/resources/previews/001/880/049/large_2x/volunteers-collecting-donations-for-charity-free-vector.jpg", 
  "https://img.freepik.com/premium-vector/hand-puts-money-coin-into-charity-box-concept-charity-caring-people-illustration-flat-style_198838-259.jpg?w=740", 
  "https://img.freepik.com/premium-vector/homeless-man-with-his-dog-needing-job-cartoon-vector-illustration-isolated-white-background_223337-3349.jpg?w=740", 
  "https://i.pinimg.com/564x/c6/39/4b/c6394b2d857fc6435845139116a5de82.jpg",
  "https://i.pinimg.com/564x/c6/39/4b/c6394b2d857fc6435845139116a5de82.jpg",
  "https://img.freepik.com/free-vector/drawn-clothing-donation-concept_23-2148832529.jpg?w=740&t=st=1660154503~exp=1660155103~hmac=996920e85153a7391671073db78d384789d2e7c9b8df3a89a6e4eb9c5da72426"]

  var image = images[Math.floor(Math.random()*images.length)];
  return image
}
// const topFive = doners => {
//   let topFive = [...doners]
//   console.log(topFive);
// }
renderCharities();