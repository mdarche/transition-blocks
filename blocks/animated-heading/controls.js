/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { AlignmentToolbar, BlockControls } = wp.blocks;

/**
 * Create a Block Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor() {
    super(...arguments);
  }
  render() {
    const { attributes: { textAlignment }, setAttributes } = this.props;
    return (
      <BlockControls
        controls={'234'.split('').map(level => ({
          icon: 'heading',
          title: sprintf(__('Heading %s'), level),
          isActive: 'H' + level === nodeName,
          onClick: () => setAttributes({ nodeName: 'H' + level }),
          subscript: level
        }))}
      >
        <AlignmentToolbar
          value={textAlignment}
          onChange={textAlignment => setAttributes({ textAlignment })}
        />
      </BlockControls>
    );
  }
}
