import React, { useState, Fragment } from 'react';
import Head from 'next/head';

import axios from 'axios';
import Link from '../src/Link';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';

import ButtonArrow from '../src/ui/ButtonArrow';

const useStyles = makeStyles(theme => ({
  background: {
    backgroundImage: `url('/assets/background.jpg')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '60em',
    paddingBottom: '10em',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url('/assets/mobileBackground')`
    }
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: '1.5rem',
    marginLeft: '2em',
    marginRight: '5em',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
      marginRight: 0
    }
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em'
    }
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: '5em',
    borderRadius: '5px'
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: '1rem',
    backgroundColor: theme.palette.common.orange,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    },
    [theme.breakpoints.down('sm')]: {
      height: 40,
      width: 225
    }
  }
}));

const Contact = props => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailHelper, setEmailHelper] = useState('');

  const [phone, setPhone] = useState('');
  const [phoneHelper, setPhoneHelper] = useState('');

  const [message, setMessage] = useState('');

  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [alert, setAlert] = useState({
    open: false,
    message: '',
    backgroundColor: ''
  });

  const onChange = e => {
    let valid;

    switch (e.target.id) {
      case 'email':
        setEmail(e.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          e.target.value
        );

        if (!valid) {
          setEmailHelper('Invalid email');
        } else {
          setEmailHelper('');
        }
        break;
      case 'phone':
        setPhone(e.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          e.target.value
        );

        if (!valid) {
          setPhoneHelper('Invalid phone');
        } else {
          setPhoneHelper('');
        }

        break;
      default:
        break;
    }
  };

  const onConfirm = () => {
    const cors = 'https://cors-anywhere.herokuapp.com/';

    setLoading(true);
    axios
      .get(
        `${cors}https://us-central1-material-ui-c339d.cloudfunctions.net/sendMail`,
        {
          params: {
            name,
            email,
            phone,
            message
          }
        }
      )
      .then(res => {
        setLoading(false);
        setOpen(false);
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setAlert({
          open: true,
          message: 'Message sent successfully!',
          backgroundColor: '#4bb543'
        });
      })
      .catch(err => {
        setLoading(false);
        setAlert({
          open: true,
          message: 'Something went wrong, please try again!!',
          backgroundColor: '#ff3232'
        });
      });
  };

  const buttonContents = (
    <Fragment>
      Send Message
      <img
        src='/assets/send.svg'
        alt='paper airplane'
        style={{ marginLeft: '1em' }}
      />
    </Fragment>
  );

  return (
    <Grid container direction='row'>
      <Head>
        <title key='title'>Contact Us | Arc Development</title>
        <meta
          name='description'
          key='description'
          content='Let us guide you through the custom software design and development process. Send us a message with any of your ideas or questions to get started!'
        />
        <meta
          property='og:title'
          content='Bringing West Coast Technology to the Midwest | Contact Us'
          key='og:title'
        />
        <meta property='og:url' key='og:url' content='arc.com/contact' />
        <link
          rel='canonical'
          key='canonical'
          href='https://arc.com/contact.js'
        />
      </Head>
      <Grid
        item
        container
        direction='column'
        style={{
          marginBottom: matchesMD ? '5em' : 0,
          marginTop: matchesSM ? '1em' : matchesMD ? '5em' : 0
        }}
        lg={4}
        xl={3}
        justify='center'
        alignItems='center'>
        <Grid item>
          <Grid item>
            <Typography
              variant='h2'
              style={{ lineHeight: 1 }}
              align={matchesMD ? 'center' : undefined}>
              Contact Us
            </Typography>
            <Typography
              variant='body1'
              align={matchesMD ? 'center' : undefined}
              style={{ color: theme.palette.common.blue, fontSize: '1rem' }}>
              We're waiting.
            </Typography>
          </Grid>
          {/* Phone & Email Icons */}
          <Grid item container alignItems='center' style={{ marginTop: '2em' }}>
            <Grid item>
              <img
                src='/assets/phoneIcon.svg'
                alt='phone'
                style={{
                  marginRight: '0.5em'
                }}
              />
            </Grid>
            <Grid
              item
              variant='body1'
              style={{ color: theme.palette.common.blue, fontSize: '1rem' }}>
              <Typography>
                <a
                  href='tel:5555555555'
                  style={{ textDecoration: 'none', color: 'inherit' }}>
                  (555) 555-5555
                </a>
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            alignItems='center'
            style={{ marginBottom: '2em' }}>
            <Grid item>
              <img
                src='/assets/emailIcon.svg'
                alt='envelope'
                style={{
                  marginRight: '0.5em'
                }}
              />
            </Grid>
            <Grid
              item
              variant='body1'
              style={{ color: theme.palette.common.blue }}>
              <Typography>
                <a
                  href='mailto:suonx002@gmail.com'
                  style={{ textDecoration: 'none', color: 'inherit' }}>
                  suonx002@gmail.com
                </a>
              </Typography>
            </Grid>
          </Grid>
          {/* Name, Email, and Phone Field Input */}
          <Grid item container direction='column' style={{ maxWidth: '20em' }}>
            <Grid item style={{ marginBottom: '0.5em' }}>
              <TextField
                label='Name'
                id='name'
                fullWidth
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </Grid>
            <Grid item style={{ marginBottom: '0.5em' }}>
              <TextField
                label='Email'
                error={emailHelper.length !== 0}
                helperText={emailHelper}
                id='email'
                fullWidth
                value={email}
                onChange={onChange}
              />
            </Grid>
            <Grid item style={{ marginBottom: '0.5em' }}>
              <TextField
                label='Phone'
                error={phoneHelper.length !== 0}
                helperText={phoneHelper}
                id='phone'
                fullWidth
                value={phone}
                onChange={onChange}
              />
            </Grid>
          </Grid>
          {/* Message Input */}
          <Grid item style={{ maxWidth: '20em' }}>
            <TextField
              InputProps={{ disableUnderline: true }}
              className={classes.message}
              multiline
              fullWidth
              rows={10}
              id='message'
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </Grid>
          {/* Send button */}
          <Grid item container justify='center' style={{ marginTop: '2em' }}>
            <Button
              variant='contained'
              className={classes.sendButton}
              disabled={
                name.length === 0 ||
                message.length === 0 ||
                phoneHelper.length !== 0 ||
                emailHelper.length !== 0
              }
              onClick={() => setOpen(true)}>
              {buttonContents}
            </Button>
          </Grid>
        </Grid>
      </Grid>
      {/* Dialog component */}
      <Dialog
        style={{ zIndex: 1302 }}
        open={open}
        fullScreen={matchesXS}
        onClose={() => setOpen(false)}
        PaperProps={{
          style: {
            paddingTop: matchesXS ? '1em' : '5em',
            paddingBottom: matchesXS ? '1em' : '5em',
            paddingLeft: matchesXS
              ? 0
              : matchesSM
              ? 0
              : matchesMD
              ? '15em'
              : '25em',
            paddingRight: matchesXS
              ? 0
              : matchesSM
              ? 0
              : matchesMD
              ? '15em'
              : '25em'
          }
        }}>
        <DialogContent>
          <Grid container direction='column'>
            <Grid item>
              <Typography variant='h4' gutterBottom align='center'>
                Confirm Message
              </Typography>
            </Grid>
            <Grid item style={{ marginBottom: '0.5em' }}>
              <TextField
                label='Name'
                id='name'
                fullWidth
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </Grid>
            <Grid item style={{ marginBottom: '0.5em' }}>
              <TextField
                label='Email'
                error={emailHelper.length !== 0}
                helperText={emailHelper}
                id='email'
                fullWidth
                value={email}
                onChange={onChange}
              />
            </Grid>
            <Grid item style={{ marginBottom: '0.5em' }}>
              <TextField
                label='Phone'
                error={phoneHelper.length !== 0}
                helperText={phoneHelper}
                id='phone'
                fullWidth
                value={phone}
                onChange={onChange}
              />
            </Grid>
            {/* Message Input */}
            <Grid item style={{ maxWidth: matchesXS ? '100%' : '20em' }}>
              <TextField
                InputProps={{ disableUnderline: true }}
                className={classes.message}
                multiline
                fullWidth
                rows={10}
                id='message'
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            style={{ marginTop: '2em' }}
            alignItems='center'
            direction={matchesSM ? 'column' : 'row'}>
            <Grid item>
              <Button
                style={{ fontWeight: 300 }}
                color='primary'
                onClick={() => setOpen(false)}>
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant='contained'
                className={classes.sendButton}
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  phoneHelper.length !== 0 ||
                  emailHelper.length !== 0
                }
                onClick={onConfirm}>
                {loading ? <CircularProgress size={30} /> : buttonContents}
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>

      {/* Snackbar alert */}
      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{
          style: {
            backgroundColor: alert.backgroundColor
          }
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={4000}
      />

      {/* Estimate Block */}
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.background}
        lg={8}
        xl={9}
        alignItems='center'
        justify={matchesMD ? 'center' : undefined}>
        <Grid
          item
          style={{
            marginLeft: matchesMD ? 0 : '3em',
            textAlign: matchesMD ? 'center' : 'inherit'
          }}>
          <Grid container direction='column'>
            <Grid item>
              <Typography variant='h2' align={matchesMD ? 'center' : undefined}>
                Simple software. <br /> Revolutionary Results.
              </Typography>
              <Typography
                variant='subtitle2'
                style={{ fontSize: '1.5rem' }}
                align={matchesMD ? 'center' : undefined}>
                Take advantage of the 21st Century.
              </Typography>
              <Grid item container justify={matchesMD ? 'center' : undefined}>
                <Button
                  onClick={() => props.setValue(3)}
                  component={Link}
                  href='/revolution'
                  variant='outlined'
                  className={classes.learnButton}>
                  <span style={{ marginRight: 5 }}>Learn More</span>
                  <ButtonArrow
                    width={10}
                    height={10}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            onClick={() => props.setValue(5)}
            component={Link}
            href='/estimate'
            variant='contained'
            className={classes.estimateButton}>
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
