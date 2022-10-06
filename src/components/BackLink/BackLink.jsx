import { AiOutlineArrowLeft } from 'react-icons/ai';
import * as SC from './BackLink.styled';

export const BackLink = ({to, children}) => {
    
    return (
        <SC.BackLink  to={to} >
            <AiOutlineArrowLeft />
            {children}
        </SC.BackLink>
    );
};