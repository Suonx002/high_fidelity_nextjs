import React from 'react';
import Lottie from 'react-lottie';
import Link from '../src/Link';
import Head from 'next/head';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import CallToAction from '../src/ui/CallToAction';
import ButtonArrow from '../src/ui/ButtonArrow';

import animationData from '../src/animations/landinganimation/data';

const useStyles = makeStyles(theme => ({
  animation: {
    maxWidth: '50em',
    minWidth: '21em',
    marginTop: '2em',
    marginLeft: '10%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '30em'
    }
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    }
  },
  buttonContainer: {
    marginTop: '1em'
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: '0.9rem',
    height: 45,
    width: 145
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
  mainContainer: {
    marginTop: '5em',
    [theme.breakpoints.down('md')]: {
      marginTop: '3em'
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2em'
    }
  },
  heroTextContainer: {
    minWidth: '21.5em',
    marginLeft: '1em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0
    }
  },
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.orange
  },
  subtitle: {
    marginBottom: '1em'
  },
  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0
    }
  },
  serviceContainer: {
    marginTop: '12em',
    [theme.breakpoints.down('sm')]: {
      padding: 25
    }
  },
  revolutionBackground: {
    backgroundImage: `url('/assets/repeatingBackground.svg')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%'
  },
  revolutionCard: {
    position: 'absolute',
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: '10em',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '8em',
      paddingBottom: '8em',
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: '100%'
    }
  },
  infoBackground: {
    backgroundImage: `url('/assets/infoBackground.svg')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%'
  }
}));

const LandingPage = props => {
  const { setValue, setSelectedIndex } = props;
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <Grid container direction='column' className={classes.mainContainer}>
      <Head>
        <title key='title'>
          Custom Software, Mobile Apps, and Websites | Arc Development
        </title>
        <meta
          name='description'
          key='description'
          content='Pristine software custom-designed from the ground up with cutting-edge optimizations. Use our free estimate calculator to check your project cost!'
        />
        <meta
          property='og:title'
          content='Bringing West Coast Technology to the Midwest | Arc Development'
          key='og:title'
        />
        <meta property='og:url' key='og:url' content='arc.com' />
        <link rel='canonical' key='canonical' href='arc.com' />
      </Head>
      {/* ----- Hero Block ----- */}
      <Grid item>
        <Grid container direction='row' justify='flex-end' alignItems='center'>
          <Grid item sm className={classes.heroTextContainer}>
            <Typography align='center' variant='h2'>
              Bringing West Coast Technology <br /> to the Midwest
            </Typography>
            <Grid
              container
              justify='center'
              direction='row'
              className={classes.buttonContainer}>
              <Grid item>
                <Button
                  onClick={() => setValue(5)}
                  component={Link}
                  href='/estimate'
                  variant='contained'
                  className={classes.estimateButton}>
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button
                  onClick={() => setValue(2)}
                  component={Link}
                  href='/revolution'
                  variant='outlined'
                  className={classes.learnButtonHero}>
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm className={classes.animation}>
            <Lottie options={defaultOptions} height={'100%'} width={'100%'} />
          </Grid>
        </Grid>
      </Grid>
      {/* -----Custom Software Block ----- */}
      <Grid item>
        <Grid
          container
          direction='row'
          className={classes.serviceContainer}
          justify={matchesSM ? 'center' : undefined}>
          <Grid
            item
            style={{
              marginLeft: matchesSM ? '0' : '5em',
              textAlign: matchesSM ? 'center' : undefined
            }}>
            <Typography variant='h4'>Custom Software Development</Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant='subtitle1'>
              Complete digital solutions, from investigation to{' '}
              <span className={classes.specialText}>celebration.</span>
            </Typography>
            <Button
              onClick={() => {
                setValue(1);
                setSelectedIndex(1);
              }}
              component={Link}
              href='/customsoftware'
              variant='outlined'
              className={classes.learnButton}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              src='/assets/customSoftware.svg'
              alt='custom software icon'
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>
      {/* -----iOS/Android Block ----- */}
      <Grid item>
        <Grid
          container
          direction='row'
          className={classes.serviceContainer}
          justify={matchesSM ? 'center' : 'flex-end'}>
          <Grid
            item
            style={{
              textAlign: matchesSM ? 'center' : undefined
            }}>
            <Typography variant='h4'>iOS/Android App Development</Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant='subtitle1'>
              Integrate your web experience or create a standalone app
              {matchesSM ? null : <br />} with either mobile platform.
            </Typography>
            <Button
              onClick={() => {
                setValue(1);
                setSelectedIndex(2);
              }}
              component={Link}
              href='/mobileapps'
              variant='outlined'
              className={classes.learnButton}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? '0' : '5em' }}>
            <img
              src='/assets/mobileIcon.svg'
              alt='iOS/Android App Icon'
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>
      {/* -----Websites Block ----- */}
      <Grid item>
        <Grid
          container
          direction='row'
          className={classes.serviceContainer}
          justify={matchesSM ? 'center' : undefined}>
          <Grid
            item
            style={{
              marginLeft: matchesSM ? '0' : '5em',
              textAlign: matchesSM ? 'center' : undefined
            }}>
            <Typography variant='h4'>Website Development</Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant='subtitle1'>
              Optimized for Search Engines, built for speed.
            </Typography>
            <Button
              onClick={() => {
                setValue(1);
                setSelectedIndex(3);
              }}
              component={Link}
              href='/websites'
              variant='outlined'
              className={classes.learnButton}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              src='/assets/websiteIcon.svg'
              alt='Website Icon'
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>
      {/* The revolution block */}
      <Grid item>
        <Grid
          container
          alignItems='center'
          justify='center'
          style={{ height: '100em', marginTop: '12em' }}>
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid
                container
                direction='column'
                style={{ textAlign: 'center' }}>
                <Grid item>
                  <Typography variant='h3' gutterBottom>
                    The Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant='subtitle1' gutterBottom>
                    Visionary insights coupled with cutting-edge technology is a
                    recipe for revolution.
                  </Typography>
                  <Button
                    onClick={() => setValue(2)}
                    component={Link}
                    href='/revolution'
                    variant='outlined'
                    className={classes.learnButton}>
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow
                      width={10}
                      height={10}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground} />
        </Grid>
      </Grid>
      {/* Information Block */}
      <Grid item>
        <Grid
          container
          direction='row'
          style={{ height: '80em' }}
          alignItems='center'
          className={classes.infoBackground}>
          <Grid
            item
            container
            style={{
              textAlign: matchesXS ? 'center' : 'inherit'
            }}
            direction={matchesXS ? 'column' : 'row'}>
            <Grid
              item
              sm
              style={{ marginLeft: matchesXS ? 0 : matchesSM ? '2em' : '5em' }}>
              <Grid
                container
                direction='column'
                style={{ marginBottom: matchesXS ? '10em' : 0 }}>
                <Typography variant='h2' style={{ color: 'white' }}>
                  About Us
                </Typography>
                <Typography variant='subtitle2'>Let's get personal</Typography>
                <Grid item>
                  <Button
                    onClick={() => setValue(3)}
                    component={Link}
                    href='/about'
                    variant='outlined'
                    className={classes.learnButton}
                    style={{ color: 'white', borderColor: 'white' }}>
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow width={10} height={10} fill={'white'} />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sm
              style={{
                marginRight: matchesXS ? 0 : matchesSM ? '2em' : '5em',
                textAlign: matchesXS ? 'center' : 'right'
              }}>
              <Grid container direction='column'>
                <Typography variant='h2' style={{ color: 'white' }}>
                  Contact Us
                </Typography>
                <Typography variant='subtitle2'>
                  Say hello!{' '}
                  <span role='img' aria-label='waving hand'>
                    🖐
                  </span>
                </Typography>
                <Grid item>
                  <Button
                    onClick={() => setValue(4)}
                    component={Link}
                    href='/contact'
                    variant='outlined'
                    className={classes.learnButton}
                    style={{ color: 'white', borderColor: 'white' }}>
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow width={10} height={10} fill={'white'} />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Call To Action Block */}
      <Grid item>
        <CallToAction setValue={setValue} />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
