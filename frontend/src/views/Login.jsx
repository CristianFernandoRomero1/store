import React, {Component} from "react";
import { Button, InputLabel, Input, FormGroup } from '@mui/material';
import { Outlet, Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";

//create react component
class Login extends Component {
    //define the initial state
    state = {
        email: "",
        password: "",
        error: null
    };
    
    //handle input changes
    handleChange = e => {
        this.setState({
        [e.target.name]: e.target.value
        });
    };
    

    //post username and password using react-router
    handleSubmit = async e => {
        console.log("handleSubmit");
        e.preventDefault();
        const { email, password } = this.state;
        try {
            const response = await fetch('http://localhost:5000/api/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
            const data = await response.json();
            console.log(data);
            if (data.error) {
                this.setState({ error: data.error });
            } else {
                localStorage.setItem('token', data.token);
                //this.props.history.push('/');
                alert('Login Successful');
            }
        } catch (error) {
            console.error(error);
            this.setState({ error: error });
        }
    };




    render() {
        const { email, password, error } = this.state;
        return (
            
            <div className="login">
                      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/productos">Productos</Link> |{" "}
        <Link to="/contacto">Contacto</Link>
      </nav>
                <h1>Sign In
                    <span>.</span>
                </h1>
                <form onSubmit={this.handleSubmit 
                }>
                    <FormGroup>
                        <InputLabel>Email</InputLabel>
                        <Input
                            type="email"
                            name="email"
                            id="exampleEmail"
                            placeholder="with a placeholder"
                            value={email}
                            onChange={this.handleChange}
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
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <Button type="submit">Submit</Button>
                </form>
                {error && 
                <Typography style={{color:"#E53935"}}  variant="h5" >{error.message}</Typography>
               }
                <Outlet />
            </div>
        );
    }
}

export default Login;