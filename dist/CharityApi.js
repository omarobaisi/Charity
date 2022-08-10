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
    $.get(`/getCharity/${charitySpecific}`, async (response) => {
      response.total = await this.getTotalAmount(charitySpecific)
      const renderer = new Renderer(
        $("#charity-container"),
        $("#charity-template")
      );
      renderer.renderCharity(response);
      deleteCharity();
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

  async donate(name, amount, nameOfcharity) {
    const donorInfo = {
      name: name,
      amount: amount,
      nameOfcharity: nameOfcharity,
    };
    await $.post("/donate", donorInfo);
    this.getByName(nameOfcharity);
  }
  async getTotalAmount(charityName) {
    let totalamount = 0;
    try {
      const response = await $.get(`/getCharityAmount/${charityName}`);
      response.doners.forEach((element) => {
        totalamount += element.amount;
      });
      return totalamount;
    } catch(e) {
      console.log(e)
    }
    
  }
};
