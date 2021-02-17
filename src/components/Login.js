import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css'


export class Login extends React.Component{
	constructor(props){
		super(props);
		this.state = {email: '', password: '', Logged: this.props.logged};
		this.changeEmail = this.changeEmail.bind(this);
		this.changePassword = this.changePassword.bind(this);
		this.registerUser = this.registerUser.bind(this);
	}
	
    render(){
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="h2">Sign in</Typography>
                        <form className="form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input 
									id="email"
									name="email"
									autoComplete="email"
									autoFocus 
									onChange = {this.changeEmail}
								/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
									onChange={this.changePassword}
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
								onClick = {this.registerUser}
                            >
                                Sign in
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
	/*
	  handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handlePriorityChange(e) {
        this.setState({
            priority: e.target.value
        });
    }

    handleDateChange(date) {
        this.setState({
            dueDate: date
        });
    }

	*/
	changeEmail(p){
		this.setState({
			email: p.target.value
		});
	}
	
	changePassword(p){
		this.setState({
			password: p.target.value
		});
	}

	
	
	registerUser = () => {
		const registrado = localStorage.getItem(this.state.email) === this.state.password;
		console.log(localStorage.getItem(this.state.email));
		if(registrado!=true){
			this.setState({Logged: true});
			localStorage.setItem(this.state.email, this.state.password);
			alert("Gracias por registrarse!");
		}else{
			alert("Ya tenemos registrada esta informacion");
		}
		
	}

}