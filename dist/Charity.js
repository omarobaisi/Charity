const renderer = new Renderer($("#charity-container"), $("#charity-template"));
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
        console.log(response);
        // render.render(response);
      },
    });
  }
  getSpecificCharity = function (charitySpecific) {
    // const data = await $.ajax({
    //   type: "get",
    //   cache: false,
    //   url: `/getCharity/${charitySpecific}`,
    // });
    // console.log(data);
    // await render.render({ data });
    $.get(`/getCharity/${charitySpecific}`, (response) => {
      renderer.render(response);
    });
  };
};
