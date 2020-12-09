import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';

const Header = () => {
    return(
        <AppBar position="static">
            <Container className="Header">
                <div>
                    <div className="photo"/>
                </div>
                <div className="bio">
                    <h1>Gabriel Espinosa</h1>
                    <h4>
                    Loyalty is a two-way route if I ask you it from you'll have it from me.
                    </h4>
                </div>
            </Container>
        </AppBar>
    )
}

export default Header;
