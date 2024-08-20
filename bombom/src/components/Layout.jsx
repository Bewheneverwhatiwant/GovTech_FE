import React from 'react';
import styled from 'styled-components';
import Header from './header/all_header/header';
import NewHeader from './header/all_header/newHeader';
import Footer from './footer/footer';
import { Outlet, useLocation } from 'react-router-dom';
import ResetCss from '../ResetCss';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 6vh;
  background-color: transparent;
`;

const Main = styled.main`
  flex: 1;
  overflow-y: auto;
`;

const Layout = () => {
    const location = useLocation();

    const renderHeader = () => {
        if (location.pathname === '/protectorloginpage' || location.pathname === '/dolbomloginpage'
            || location.pathname === '/firstloginpage' || location.pathname === '/protectorsignuppage' ||
            location.pathname === '/dolbomsignuppage' || location.pathname === '/seconddolbomsignuppage' ||
            location.pathname === '/firstdolbomsignuppage' || location.pathname === '/certificatedolbomsignuppage' ||
            location.pathname === '/arbeitdolbomsignuppage') {
            return <NewHeader />;
        }
        return <Header />;
    };

    return (
        <>
            <ResetCss />
            <Container>
                {renderHeader()}
                <Main>
                    <Outlet />
                </Main>
                <Footer />
            </Container>
        </>
    );
};

export default Layout;
