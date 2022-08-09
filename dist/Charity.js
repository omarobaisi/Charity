const renderer = new Renderer($("#charity-container"), $("#charity-template"));
const CharityApi = class {
  getAll() {
    $.get("/getCharities", function (error, response) {
      console.log(response);

      //render.render(response);
    });
  }
  getClassification() {
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
        console.log(response);
        // render.render(response);
      },
    });
  }
  getByName = function (charitySpecific) {
    $.get(`/getCharity/${charitySpecific}`, (response) => {
      renderer.render(response);
    });
  };
};
