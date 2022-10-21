import { AiOutlineArrowLeft } from 'react-icons/ai';
import PropTypes from 'prop-types';
import * as SC from './BackLink.styled';

export const BackLink = ({to, children}) => {
    
    return (
        <SC.BackLink  to={to} >
            <AiOutlineArrowLeft />
            {children}
        </SC.BackLink>
    );
};

BackLink.propTypes = {
    to: PropTypes.object.isRequired,
    children: PropTypes.string.isRequired,
};