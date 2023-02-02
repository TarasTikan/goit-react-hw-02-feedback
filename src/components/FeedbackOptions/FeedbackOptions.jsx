import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import { FeedbackList, FeedbackBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackList>
      {options.map(option => (
        <FeedbackBtn key={shortid.generate()} onClick={onLeaveFeedback}>
          {option}
        </FeedbackBtn>
      ))}
    </FeedbackList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
