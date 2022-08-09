const renderer = new Renderer("#charities-container", "#charities-template");

const Charity = class {
  async getAllCharity() {
    const data = await $.get("/getCharities")
    console.log(data);
    renderer.render(data);
  }
};
