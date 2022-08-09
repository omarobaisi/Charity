const CharityApi = class {
  async getAllCharity() {
    const data = await $.get("/getCharities");
    console.log(data);
    const renderer = new Renderer(
      $("#charities-container"),
      $("#charities-template")
    );
    renderer.render(data);
  }
  getByName = function (charitySpecific) {
    $.get(`/getCharity/${charitySpecific}`, (response) => {
      const renderer = new Renderer(
        $("#charity-container"),
        $("#charity-template")
      );
      renderer.renderCharity(response);
    });
  };
};
