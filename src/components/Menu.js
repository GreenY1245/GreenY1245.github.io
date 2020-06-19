// Library imports
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';

// Project imports
import Greeny from '../assets/Greeny.svg';

const styles = theme => ({
    root: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    menu: {
        margin: '20px',
        width: '100%',
        height: '25%',
        borderLeft: '5px solid #2B303A',
        paddingLeft: '20px',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    menuLogo: {
        display: 'flex',
        alignItems: 'center',
    },
    menuLogoText: {
        fontWeight: '400',
        fontSize: '1.8em'
    },
    link: {
        color: '#2B303A',
        fontWeight: '400',
        '&:hover': {
            textDecoration: 'none',
            fontWeight: '600',
        }
    }
})

const Menu = (props) => {

    const [titleText, setTitleText] = React.useState('Greeny');
    let changer = null;

    React.useEffect(() => {
        if (titleText.length === 0) {
            clearInterval(changer);
        }
    }, [titleText, changer]);

    const handleChangeText = (evt) => {
        const speed = 500;
        changer = setInterval(textChanger, speed);
    }

    const textChanger = () => {
        setTitleText(titleText.substring(0, titleText.length - 1));
    }

    return (
        <div className={props.classes.root}>
            <div className={props.classes.menu}>
                <div className={props.classes.menuLogo}>
                    <img src={Greeny} alt={"Greeny Logo"} width={"25%"} style={{ paddingRight: '10px' }} />
                    <p className={props.classes.menuLogoText} onMouseOver={handleChangeText}>{titleText}</p>
                </div>

                {props.links && props.links.map((item, index) => (
                    <Link href={item.link} key={index} variant="h6" className={props.classes.link}>{item.name}</Link>
                ))}
            </div>
        </div>
    )
}

Menu.propTypes = {
    classes: PropTypes.object,
    links: PropTypes.array.isRequired,
};

export default withStyles(styles)(Menu);
