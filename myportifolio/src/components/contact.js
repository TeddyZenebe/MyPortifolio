import React from 'react';
import '../App.css'
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { MdEmail, MdMessage, MdPerson, MdPhone } from 'react-icons/md';
import {
  Button,
  Slide,
  Dialog,
  DialogTitle,
  Typography,
  DialogContent,
  DialogActions,
  Container
} from '@material-ui/core';
import { FaFacebook, FaGithub, FaLinkedin, FaExclamation } from 'react-icons/fa';
import ThankYou from './thankYou';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

  inputWraper: {
    padding: '2%'
  },
  
  butWrapper: {
    margin: '2%',
    marginLeft: '35%'
  },
  butSubmit: {
    background: '#99ff99',
    marginLeft: '10%'
  }
}));

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Must be less than 100 characters')
    .required('Must enter a Name'),
  email: Yup.string()
    .email('Must be a valid email address')
    .max(255, 'Email entered was too long')
    .required('Must enter an Email Address'),
  message: Yup.string()
    .min(8, 'Message must be at least 8 characters')
    .max(255, 'Message is too long')
    .required('Must enter a Message')
});


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ContactForm() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const encode = data => {
    return Object.keys(data)
      .map(
        key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };

  return (
    <div className={classes.contactRaper} className='contactRaper'>

      <div className='contactMessage'>
        <h2>Contact Me</h2>
        <Formik
          validationSchema={validationSchema}
          initialValues={{
            name: '',
            email: '',
            message: '',
            'bot-field': '',
            'form-name': 'contact'
          }}
          onSubmit={(values, { resetForm }) => {
            fetch('/', {
              method: 'POST',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              body: encode({
                'form-name': 'contact',
                ...values
              })
            })
              .then(() => {
                resetForm();
                handleOpen();
              })
              .catch(err => console.error(err));
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <div className={classes.inputWraper}>
                <label htmlFor="name">
                  <MdPerson /> {' '}
                  Name
                 </label>{' '}
                <Field placeholder="Enter your name" 
                       name="name" 
                       type="text" 
                       className={classes.input} 
                       className='input'/>
                {errors.name && touched.name ? (<div style={{ color: 'red', marginLeft: '20%', fontSize: '1.5rem' }}><FaExclamation />{errors.name}</div>) : null}
              </div>
              <div className={classes.inputWraper}>
                <label htmlFor="email">
                  <MdEmail />
                  {' '}
                  Email
              </label> {' '}
                <Field
                  placeholder="Enter your email address"
                  name="email"
                  type="email"
                  className={classes.input}
                  className='input'
                />
                {errors.email && touched.email ? (<div style={{ color: 'red', marginLeft: '20%', fontSize: '1.5rem' }}><FaExclamation />{errors.email}</div>) : null}
              </div>
              <div className={classes.inputWraper}>
                <label htmlFor="message">
                  <MdMessage />
                  {' '}
                  Message
              </label> <br />
                <Field
                  as="textarea"
                  rows="4"
                  placeholder="Enter your message"
                  name="message"
                  type="text"
                  className={classes.inputMessage}
                  className='inputMessage'
                />
                {errors.message && touched.message ? (<div style={{ color: 'red', marginLeft: '20%', fontSize: '1.5rem' }}><FaExclamation />{errors.message}</div>) : null}
              </div>
              <div className={classes.butWrapper}>
                <button
                  className={classes.butSubmit}
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                  </button>
              </div>
            </Form>
          )}
        </Formik>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <Container>
            <DialogTitle disableTypography id="alert-dialog-slide-title">
              <h5>Form Submitted!</h5>
            </DialogTitle>
            <ThankYou viewBox="0 0 1035 627" width={500} />
            <DialogContent>
              <Typography align="center">Thank you for contacting me!</Typography>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose} color="primary">
                Close
            </Button>
            </DialogActions>
          </Container>
        </Dialog>
      </div>
      <div className='contactInfo'>
        <div >
          <MdEmail className="icon" />
          <p>tzenebe3@gmail.com</p>
        </div>
        <div >
          <MdPhone className="icon" />
          <p>+1 202-569-4706</p>
        </div>
        <h3>Follow Me</h3>
        <div className="contactIcons">
          <a href="https://github.com/TeddyZenebe" target="_blank" ><FaGithub /></a>{' '}
          <a href="https://www.linkedin.com/" target ="_blank" ><FaLinkedin /></a>{' '}
          <a href="https://www.facebook.com/" target ="_blank" ><FaFacebook /></a>
        </div>
      </div>
    </div>
  );
}
