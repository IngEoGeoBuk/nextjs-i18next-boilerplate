import React from 'react'
import { Button, Container, Typography } from '@material-ui/core';
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
    return (
        <Container maxWidth="lg" style={{ padding: '0px' }}>
            <Header />
            { children }
            <Footer />
        </Container>
    )
}

export default Layout
