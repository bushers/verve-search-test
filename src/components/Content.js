import React from 'react';
import PropTypes from 'prop-types';
import './Content.css';

const Content = (props) => {
  return (
    <div className='contentBox'>{props.content}</div>
  )
}

export default Content;

Content.propTypes = {
  content: PropTypes.string.isRequired
}
