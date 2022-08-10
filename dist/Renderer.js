class Renderer {
  constructor(container, template) {
    this.container = container;
    this.template = template;
  }
  renderCharities(data) {
    $(this.container).empty();
    const source = $(this.template).html();
    const temp = Handlebars.compile(source);
    const newHTML = temp({ item: data });
    $(this.container).append(newHTML);
  }
  renderCharity(data) {
    $(this.container).empty();
    const source = this.template.html();

    const temp = Handlebars.compile(source);
    const newHTML = temp({
      name: data.name,
      description: data.description,
      classification: data.classification,
      website: data.website,
      total: data.total
    });
    this.container.append(newHTML);
  }
}
