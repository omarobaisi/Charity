const CharityApi = class {
  constructor() {
    this.data = [];
  }
  async getAllCharity() {
    this.data = await $.get("/getCharities");
    this.data.forEach(charity => {
      charity.img = this.getRandomImage();
    })
    console.log(this.data);
    const renderer = new Renderer(
      $("#charities-container"),
      $("#charities-template")
    );
    renderer.renderCharities(this.data);
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
        alert("charity Not found or invlid input");
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
  async filltringCharity(name) {
    let newArray = this.data.filter((e) => {
      if (e.name.toLowerCase().includes(name.toLowerCase())) {
        return e;
      }
    });
    // if(name !== "") {
    //   $("#classification-choice").val("Choose Organization").change();
    // }
    const renderer = new Renderer(
      $("#charities-container"),
      $("#charities-template")
    );
    renderer.renderCharities(newArray);
  }
  getRandomImage() {
    let images = ["https://img.freepik.com/free-vector/flat-ramadan-charity-background-with-muslim-people-giving-money-food-hungry-homeless-illustration_1284-61988.jpg?w=996&t=st=1660153693~exp=1660154293~hmac=b2ffe555ef58541812313c31897120f5119da34363fa607a4161701b22cb5fcc", 
    "https://static.vecteezy.com/system/resources/previews/001/880/049/large_2x/volunteers-collecting-donations-for-charity-free-vector.jpg", 
    "https://img.freepik.com/premium-vector/hand-puts-money-coin-into-charity-box-concept-charity-caring-people-illustration-flat-style_198838-259.jpg?w=740", 
    "https://img.freepik.com/premium-vector/homeless-man-with-his-dog-needing-job-cartoon-vector-illustration-isolated-white-background_223337-3349.jpg?w=740", 
    "https://i.pinimg.com/564x/c6/39/4b/c6394b2d857fc6435845139116a5de82.jpg",
    "https://i.pinimg.com/564x/c6/39/4b/c6394b2d857fc6435845139116a5de82.jpg",
    "https://img.freepik.com/free-vector/drawn-clothing-donation-concept_23-2148832529.jpg?w=740&t=st=1660154503~exp=1660155103~hmac=996920e85153a7391671073db78d384789d2e7c9b8df3a89a6e4eb9c5da72426"]

    var image = images[Math.floor(Math.random()*images.length)];
    return image
  }
};