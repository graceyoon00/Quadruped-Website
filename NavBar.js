import React from 'react' 
import {makeStyles} from "@material-ui/core/styles"; 

const styles = makeStyles ({ 
    bar: { 
        paddingTop: "1.15rem", 
        backgroundColor: "#fff", 
        ['@media (max-width:780px)'] : {
            flexDirection: "column"
        }, 
    }, 
    logo: { 
        width: "15%", 
        ['@media (max-width:780px)'] : { 
            display: "inline-block"
        }
    }, 
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1, 
        "&:hover": { 
            color: "#4f25c8"
        },
        ['&media (max-width:780px)'] : { 
            paddingBotton: "1rem"
        }
    }
})

function NavBar () { 
    const classes = styles() 
    return (
        // <div class="topnav">
        //     <a class="active" href="#home">Home</a>
        //     <a href="#ourstory">Our Story</a>
        //     <a href="#setup">Starting Up Your Robot</a>
        //     <a href="#faq">FAQs</a>
        // </div>
        <Toolbar position="sticky" color="rgba(0,0,0,0.87)" className={classes.bar}>
            <img src={logo} className={classes.logo}/>
            <img src={logoMobile} className={classes.logoMobile}/>
            <Typography variant="h6" className={classes.menuItem}>
                Home 
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                About Us 
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                Starting Up Your Robot 
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                FAQs 
            </Typography>
        </Toolbar>
    );
}

export default NavBar; 