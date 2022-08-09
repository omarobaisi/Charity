const { response } = require("express");

render = new Renderer();
const Charity = class {
  getAllCharity() {
    $.get("/getCharities", function (error, response) {
      console.log(response);
      //render.render(response);
    });
  }
  getClassificationCharity() {
    let charityClassification = $("#charityClassification").val();
    $.ajax({
      type: "get",
      cache: false,
      url: `/getCharities/${charityClassification}`,
      error: function (request, error) {
        alert(" charity Not found or invlid input");
        return;
      },
      success: function (response) {
        render.render(response);
      },
    });
  }
  getSpecificCharity() {
    let charitySpecific = $("#charitySpecific").val();
    $.ajax({
      type: "get",
      cache: false,
      url: `/getCharity/${charitySpecific}`,
      error: function (request, error) {
        alert(" charity Not found or invlid input");
        return;
      },
      success: function (response) {
        render.render(response);
      },
    });
  }

  donate(){
    
    const donor= {
      name: name,
      amount:amount
    }
  axios
    .post("/donate", donor )
    .then((response) => {
      this.produits = response.donor
    })
    .catch(function (error) {
      console.log(error)
    })
  }
  

}
