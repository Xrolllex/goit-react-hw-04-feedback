import React from 'react';
import PropTypes from 'prop-types';

const FeedbackChoices = ({ options, onLeaveFeedback }) => (
    <div>
        {options.map(choice => (
            <button key={choice} onClick={() => onLeaveFeedback(choice)}>{choice}</button>
        ))}
    </div>
)

FeedbackChoices.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackChoices;
