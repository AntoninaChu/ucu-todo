class StepanError extends Error{
  constructor(message) {
    super(message)
    this.name = 'StepanError'
    this.message = message
  }
}

export default class Stepan {
  static createElement(element, parent, attributes = {}) {
    // TODO: check if this is a valid tag name
    const newElement = document.createElement(element);

    const { innerHTML, innerText } = attributes;

    for (let attribute in attributes) {
      if (['innerHTML', 'innerText'].includes(attribute)) {
        continue;
      }

      newElement.setAttribute(attribute, attributes[attribute]);
    }

    innerHTML && (newElement.innerHTML = innerHTML);
    innerText && (newElement.innerText = innerText);

    parent.appendChild(newElement);

    return newElement;
  }

  static Component = class {
    constructor(parent) {

      // TODO: 1. Create StepanError class to define all framework errors
      //       2. throw an error if parent is null or undefined, or if it's not a valid DOM object
      if(parent == undefined){
        throw new StepanError('Parent is undefined!')
      }else if(parent == null){
        throw new StepanError('Parent is null!')
      }else if(!(parent instanceof Element || parent instanceof HTMLDocument)){
        throw new StepanError('Parent is not DOM object!')
      }
      this.parent = parent;
    }

    // TODO (Bonus): Ensure that every component returns a top-level root element
  }
}

