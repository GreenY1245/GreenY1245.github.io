// Library imports
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

// Project imports
import Noise from '../../../assets/noise.png';
import Menu from '../../../components/Menu';

const styles = theme => ({
    root: {
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${Noise})`,
        backgroundColor: '#F0E2E7',
        display: 'flex',
        flexGrow: 1,
    },
    menu: {
        width: '100%',
        height: '100%',
    },
    content: {
        width: '100%',
        height: '100%',
    },
})

const menuLinks = [
    { name: "Projects", link: "/projects", },
    { name: "GitHub", link: "/github", },
    { name: "About", link: "/about", },
    { name: "Contact", link: "/contact", },
];

const Landing = (props) => {

    return (
        <div className={props.classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12} lg={2}>
                    <div className={props.classes.menu}>
                        <Menu links={menuLinks} />
                    </div>
                </Grid>
                <Grid item xs={12} lg={10}>
                    <div className={props.classes.content}>

                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

Landing.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(Landing);