const renderer = new Renderer("#charities-container", "#charities-template");

const Charity = class {
  async getAllCharity() {
    const data = await $.get("/getCharities")
    console.log(data);
    renderer.render(data);
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
};
