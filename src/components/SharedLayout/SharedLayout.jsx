import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import * as SC from './SharedLayout.styled';

export const SharedLayout = () => {
    return (
        <>
            <SC.Header>
                <nav>
                    <SC.Link to="/" end>Home</SC.Link>
                    <SC.Link to="/movies">Movies</SC.Link>
                </nav>
            </SC.Header>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet/>
            </Suspense>
            
        </>
        
    )
}