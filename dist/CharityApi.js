const CharityApi = class {
  async getAllCharity() {
    const data = await $.get("/getCharities");
    console.log(data);
    const renderer = new Renderer(
      $("#charities-container"),
      $("#charities-template")
    );
    renderer.renderCharities(data);
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
        const renderer = new Renderer(
          "#charities-container",
          "#charities-template"
        );
        renderer.renderCharities(response);
      },
    });
  }

  donate(name, amount) {
    const donor = {
      name: name,
      amount: amount,
    };
    console.log(name);
    $.post("/donate", donor, function (res) {});
    // $.post("/donate", donor)
    //   .then((response) => {
    //     this.produits = response.donor;
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }
};
