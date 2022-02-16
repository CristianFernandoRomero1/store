import React from "react";
import { Button, InputLabel, Input, FormGroup } from '@mui/material';
import { Outlet} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

//create react component
function Login (){
        let navigate = useNavigate();
       //create state for email, password, error
        const [email, setEmail] = React.useState('');
        const [password, setPassword] = React.useState('');
        const [error, setError] = React.useState('');
 
   
    //handle input changes
   const handleChange = e => {
        /* this.setState({
            [e.target.name]: e.target.value
        }); */
        if (e.target.name === 'email') {
            setEmail(e.target.value);
        } else if (e.target.name === 'password') {
            setPassword(e.target.value);
        } 
        else if (e.target.name === 'error') {
            setError(e.target.value);
        }

    };
    
    
    //post username and password using react-router
   const handleSubmit = async e => {

        e.preventDefault();
      
        axios.post('http://localhost:5000/api/auth', {
            email,
            password
        })
            .then(function (response) {
                console.log(response);
                    //console.log(response);
                    localStorage.setItem('token', response.token);
                    navigate('/homepage');
                    //this.props.history.push('/');
                    alert('Login Successful');
                
            })
            .catch(function (error) {
                console.log(error);
            handleChange({target: {name: 'error', value: 'Credenciales inválidas'}});
         
            });


    };




    
        return (

            <div className="login">
                <nav
                    style={{
                        borderBottom: "solid 1px",
                        paddingBottom: "1rem"
                    }}
                >
                  
                </nav>
                <h1>Sign In
                    <span>.</span>
                </h1>
                <form onSubmit={handleSubmit
                }>
                    <FormGroup>
                        <InputLabel>Email</InputLabel>
                        <Input
                            type="email"
                            name="email"
                            id="exampleEmail"
                            placeholder="with a placeholder"
                            value={email}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <InputLabel>Password</InputLabel>
                        <Input
                            type="password"
                            name="password"
                            id="examplePassword"
                            placeholder="password placeholder"
                            value={password}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <Button type="submit">Submit</Button>
                </form>
                {error &&
                    <Typography style={{ color: "#E53935" }} variant="h5" >{error}</Typography>
                }
                <Outlet />
            </div>
        );
    
}

export default Login;