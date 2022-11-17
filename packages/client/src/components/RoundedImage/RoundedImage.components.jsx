import React from 'react';
import PropTypes from 'prop-types';
import './RoundedImage.styles.css';

export const RoundedImage = ({ src, alt, ...props }) => {
  return (
    <img
      className="rounded-image"
      src={src}
      alt={alt}
      width={80}
      height={80}
      title={alt}
    />
  );
};

RoundedImage.propTypes = {
  /**
   * The URL for the image - this is required for component to work.
   */
  src: PropTypes.string.isRequired,

  /**
   * Text to show as alt and title.
   * Optional.
   */
  alt: PropTypes.string,
};

RoundedImage.defaultProps = {
  alt: '',
};
