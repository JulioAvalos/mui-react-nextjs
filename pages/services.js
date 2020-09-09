import React from 'react';
import Head from 'next/head';
import Link from '../src/Link';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import ButtonArrow from '../src/UI/ButtonArrow';

const useStyle = makeStyles(theme => ({
    specialText: {
        fontFamily: 'Pacifico',
        color: theme.palette.common.orange
    },
    subtitle: {
        marginBottom: "1em"
    },
    icon: {
        marginLeft: '2em',
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0
        }
    },
    serviceContainer: {
        marginTop: '10em',
        [theme.breakpoints.down('sm')]: {
            padding: 25
        }
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: '0.7rem',
        height: 35,
        padding: 5,
        [theme.breakpoints.down('sm')]: {
            marginBottom: '2em'
        }
    },
}));

const Service = props => {
    const classes = useStyle();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid container direction="column">{/*-----Services Block (iOS/Android)-----*/}
            <Head>
                <title key="title">
                    Top Custom Software Development Services | Arc Development
                </title>
                <meta 
                    name="description" 
                    key="description" 
                    content="Cutting-edge software, mobile app, and website development services with sleek custom design - get a free online estimate instantly!" 
                />
                <meta property="og:title" key="og:title" content="Bringing West Coast Technology to the Midwest | Services" />
                {/* todo: change url to the real one when its deployed to production! */}
                <meta property="og:title" key="og:url" content="arc.com/services" />
                <link rel="canonical" key="canonical" href="arc.com/services"/>
            </Head>
            <Grid item style={{ marginLeft: matchesSM ? 0 : '5em', marginTop: matchesSM ? '1em' : '2em'}}>
                <Typography 
                    variant="h1"
                    align={ matchesSM ? 'center' : undefined }
                    gutterBottom 
                >
                    Services
                </Typography>
            </Grid>
            <Grid
                container
                direction="row"
                justify={matchesSM ? 'center' : 'flex-end'}
                className={classes.serviceContainer}
                style={{marginTop: matchesSM ? '1em': '5em'}}
            >
                <Grid
                    item
                    style={{
                        textAlign: matchesSM ? 'center' : undefined,
                        width: matchesSM ? undefined : '35em'
                    }}
                >
                    <Typography variant="h4">
                        iOS/Android Development
                    </Typography>
                    <Typography variant="subtitle1" className={classes.subtitle}>
                        Extend Functionality. Extend Access. Increase Engagemenet.
                    </Typography>
                    <Typography variant="subtitle1">
                        Integrate your web experience or create a standalone app {matchesSM ? null : <br />} with either mobile platform
                    </Typography>
                    <Button 
                        component={Link} 
                        href="/mobileapps"
                        variant="outlined" 
                        className={classes.learnButton}    
                        onClick={() => {props.setValue(1); props.setSelectedIndex(2);}}
                    >
                        <span style={{ marginRight: 10 }}>Learn More</span>
                        <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                    </Button>
                </Grid>
                <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
                    <img
                        className={classes.icon}
                        alt="mobile apps icon"
                        src="/assets/mobileIcon.svg"
                        width="250em"
                    />
                </Grid>
            </Grid>
            {" "}
            {/*-----Services Block (Custom Software)-----*/}
            <Grid
                container
                direction="row"
                justify={matchesSM ? 'center' : undefined}
                className={classes.serviceContainer}
            >
                <Grid
                    item
                    style={{
                        marginLeft: matchesSM ? 0 : '5em',
                        textAlign: matchesSM ? 'center' : undefined
                    }}
                >
                    <Typography variant="h4">
                        Custom Software Development
                    </Typography>
                    <Typography variant="subtitle1" className={classes.subtitle}>
                        Save Energy. Save Time. Save Money
                    </Typography>
                    <Typography variant="subtitle1">
                        Complete digital solutions, from investigation to {" "}
                        <span className={classes.specialText}>celebration</span>
                    </Typography>
                    <Button 
                        component={Link} 
                        href="/customsoftware"
                        variant="outlined" 
                        className={classes.learnButton}
                        onClick={() => {props.setValue(1); props.setSelectedIndex(1);}}
                    >
                        <span style={{ marginRight: 10 }}>Learn More</span>
                        <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                    </Button>
                </Grid>
                <Grid item>
                    <img 
                        className={classes.icon} 
                        alt="custom software icon" 
                        src="/assets/customSoftware.svg" 
                    />
                </Grid>
            </Grid>
            {" "}
            {/*-----Services Block (Website)-----*/}
            <Grid
                container
                direction="row"
                justify={matchesSM ? 'center' : 'flex-end'}
                className={classes.serviceContainer}
                style={{marginBottom: '10em'}}
            >
                <Grid
                    item
                    style={{
                        textAlign: matchesSM ? 'center' : undefined,
                        width: matchesSM ? undefined : '35em'
                    }}
                >
                    <Typography variant="h4">
                        Website Development
                    </Typography>
                    <Typography variant="subtitle1" className={classes.subtitle}>
                        Reach More. Discover More. Sell More.
                    </Typography>
                    <Typography variant="subtitle1">
                        Optimized for Search Engines, built for speed.
                    </Typography>
                    <Button
                        component={Link} 
                        href="/websites"
                        variant="outlined" 
                        className={classes.learnButton}
                        onClick={() => {props.setValue(1); props.setSelectedIndex(3);}}
                    >
                        <span style={{ marginRight: 10 }}>Learn More</span>
                        <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                    </Button>
                </Grid>
                <Grid item style={{marginRight: matchesSM ? 0 : '5em'}}>
                    <img
                        className={classes.icon}
                        alt="website icon"
                        src="/assets/website.svg"
                        width="250em"
                    />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Service;