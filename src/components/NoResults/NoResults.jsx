import * as SC from './NoResults.styled';

export const NoResults = ({children}) => {
    return (
        <SC.NoResults src={children} alt='no results'/>
    )
}