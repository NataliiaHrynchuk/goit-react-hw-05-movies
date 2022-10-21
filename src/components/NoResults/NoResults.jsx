import * as SC from './NoResults.styled';
import PropTypes from 'prop-types';

export const NoResults = ({imageUrl}) => {
    return (
        <SC.NoResults src={imageUrl} alt='no results'/>
    )
}

NoResults.propTypes = {
    imageUrl: PropTypes.string.isRequired,
};