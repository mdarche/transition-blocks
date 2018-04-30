/**
 * Block dependencies
 */
import classnames from 'classnames';
// import Inspector from './inspector';
import Controls from './controls';
import icon from './icon';
import attributes from './attributes';
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType, RichText } = wp.blocks;

/**
 * Register static block example block
 */
export default registerBlockType('transitionblocks/animated-heading', {
  title: __('Animated Heading', 'transitionblocks'),
  description: __(
    'An example of how to use form fields in the Inspector element.',
    'transitionblocks'
  ),
  category: 'common',
  icon,
  keywords: [
    __('Palette', 'transitionblocks'),
    __('Settings', 'transitionblocks'),
    __('Scheme', 'transitionblocks')
  ],
  attributes,
  edit: props => {
    const {
      attributes: { textAlignment, blockAlignment, message },
      attributes,
      isSelected,
      className,
      setAttributes
    } = props;

    return [
      // isSelected && <Inspector {...{ setAttributes, ...props }} />,
      isSelected && <Controls {...{ setAttributes, ...props }} />,
      <div className={className} style={{ textAlign: textAlignment }}>
        <ul>Test</ul>
      </div>
    ];
  },
  save: props => {
    const { attributes: { textAlignment }, attributes } = props;

    return (
      <div
        // className={`align${blockAlignment}`}
        style={{ textAlign: textAlignment }}
      />
    );
  }
});
