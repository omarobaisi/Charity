class Renderer {
  render(container, template, data) {
    $(container).empty();
    const source = $(template).html();
    const temp = Handlebars.compile(source);
    const newHTML = temp({ item: data });
    $(container).append(newHTML);
  }
}