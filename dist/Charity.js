render = new Renderer("#charities-container", "#charities-template");
const Charity = class {
  getClassificationCharity(charityClassification) {
    $.ajax({
      type: "get",
      cache: false,
      url: `/charities/${charityClassification}`,
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
