import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';
import initializeAuthentication from '../Firebase/Firebase.init';

initializeAuthentication();
const Login = () => {
    const { singnInUsingGoogle, handleFrom, isLogin, handleUpdate, handleEmail, handlePassword, toogleLogin, resetPassword, logIn, error, } = useAuth();
    const loaction = useLocation();
    const history = useHistory();
    const redirect_url = Location.state?.from || '/home'
    const handleGoogleLogin = () => {
        singnInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            });
    }
    

    return (
        <div className="mt-5 bg-light p-5 w-50 mx-auto border rounded">

            <Form onSubmit={handleFrom}>
                <h2 className="mb-4">Please {isLogin ? 'Login' : 'Register'}<hr /></h2>
                {!isLogin && <Form.Group as={Col} md="12" controlId="validationCustom01">
                    <Form.Label>Full name</Form.Label>
                    <Form.Control onBlur={handleUpdate}
                        required
                        type="text"
                        placeholder="Full name"
                        defaultValue=""
                    />
                </Form.Group>}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onChange={toogleLogin} type="checkbox" label={isLogin ? 'Create New Account?' : 'Already Registered?'} />
                </Form.Group>
                <Button  className="px-3 me-1" variant="secondary" type="submit">
                    {isLogin ? 'Login' : 'Register'}
                </Button>
                <div className="row mb-3 text-danger">
                    {error}
                </div>
                <button type="button" onClick={resetPassword} className="btn btn-secondary btn-sm">Reset Password</button>
            </Form>
            <div>----------or----------</div>
            <button onClick={handleGoogleLogin} className="btn bg-danger mt-3"><i className="fab fa-google"></i> Google Sign In</button>
        </div>
    );
};

export default Login;