class Renderer {
  constructor(container, template) {
    this.container = container;
    this.template = template;
  }
  render(data) {
    $(this.container).empty();
    const source = this.template.html();

    const temp = Handlebars.compile(source);
    const newHTML = temp({
      name: data.name,
      description: data.description,
      classification: data.classification,
      website: data.website,
    });
    this.container.append(newHTML);
  }
/*
   // render classification
   renderClassifiedTemplete(data) {
    $(this.container).empty();
    const source = this.template.html();
    const temp = Handlebars.compile(source);
    const newHTML = new temp(data)
    this.container.append(newHTML);

  }
}
*/


