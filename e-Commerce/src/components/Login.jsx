import { Avatar, Checkbox, FormControlLabel, Grid, Paper, TextField, FormHelperText } from '@mui/material';
import React from 'react';
import LockIcon from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Login() {
    const paperStyle = {
        padding: 20,
        height: '70vh',
        width: 350,
        margin: '20px auto'
    };
    const avatarStyle = {
        backgroundColor: '#1bbd7e',
        color: 'white'
    };

    const stylefield = {
        marginBottom: 20,
        marginTop: 20
    };
    const initialValues = {
        email: '',
        password: '',
        checkbox:''
    };
    const onSubmit = (values,props) => {
        console.log(values);
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Required').matches(/@gmail.com$/, 'Must be a gmail.com email'),
        password: Yup.string().required('Required').min(6, 'Password must be at least 6 characters'),
        checkbox: Yup.boolean().required('You must agree to the terms')
    });

    return (
        <Grid>
            <Paper style={paperStyle} elevation={10}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockIcon /></Avatar>
                    <h2>Sign in</h2>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                        <Form>
                            <Field as={TextField} label='Email' name='email' placeholder='Enter Email' fullWidth style={stylefield} required />
                            <FormHelperText>
                                <ErrorMessage name='email' style={{ color: 'red' }} />
                            </FormHelperText>
                            <Field as={TextField} type="password" label='Password' name='password' placeholder='Enter Password' fullWidth style={stylefield} required />
                            <FormHelperText>
                                <ErrorMessage name='password' style={{ color: 'red' }} />
                            </FormHelperText>
                            <FormControlLabel control={
                                <Checkbox name="checkbox" color="primary" />
                            }
                                label='Remember me' />
                            <FormHelperText>
                                <ErrorMessage name='checkbox' style={{ color: 'red' }} />
                            </FormHelperText>
                            <Button type='submit' color='primary' variant="contained" fullWidth>Sign IN</Button>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    );
}

export default Login;
