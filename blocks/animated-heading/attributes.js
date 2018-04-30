const attributes = {
  content: {
    type: 'array',
    source: 'children',
    selector: 'h1,h2,h3,h4,h5,h6'
  },
  nodeName: {
    type: 'string',
    source: 'property',
    selector: 'h1,h2,h3,h4,h5,h6',
    property: 'nodeName',
    default: 'H2'
  },
  textAlignment: {
    type: 'string'
  },
  placeholder: {
    type: 'string'
  }
};

export default attributes;
