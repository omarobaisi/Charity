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
        const renderer = new Renderer("#charities-container", "#charities-template");
        renderer.renderCharities(response);
      },
    });
  }
};
