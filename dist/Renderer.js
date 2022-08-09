class Renderer {
  constructor(container, template) {
    this.container = container;
    this.template = template;
  }

  render(data) {
    $(this.container).empty();
    const source = $(this.template).html();
    const temp = Handlebars.compile(source);
    const newHTML = temp({ item: data });
    $(this.container).append(newHTML);
  }
}