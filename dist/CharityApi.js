const CharityApi = class {
  constructor() {
    this.data = [];
  }
  async getAllCharity() {
    this.data = await $.get("/getCharities");
    console.log(this.data);
    const renderer = new Renderer(
      $("#charities-container"),
      $("#charities-template")
    );
    renderer.renderCharities(this.data);
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

  donate(name, amount, nameOfcharity) {
    const donorInfo = {
      name: name,
      amount: amount,
      nameOfcharity: nameOfcharity,
    };
    $.post("/donate", donorInfo, function (res) {});
  }

  getTotalAmount(charityName) {
    let totalamount = 0;
    $.get(`/getCharityAmount/${charityName}`, function (response) {
      response.doners.forEach((element) => {
        totalamount += element.amount;
      });
      return totalamount;
    });
  }
  async filltringCharity(name) {
    let newArray = this.data.filter((e) => {
      if (e.name.toLowerCase().includes(name.toLowerCase())) {
        return e;
      }
    });
    const renderer = new Renderer(
      $("#charities-container"),
      $("#charities-template")
    );
    renderer.renderCharities(newArray);
  }
};
