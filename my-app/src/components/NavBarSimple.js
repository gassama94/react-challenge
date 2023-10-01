import React from 'react';
import styles from './css/NavBarSimple.module.css';

class NavBarSimple extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            welcomeMessage: 'Please sign in'
            /*message: 'Please log in',
            buttonText: 'Login'*/
        };
    }

    /*handleClick = () => {
        this.setState(prevState => {
            return {
                message: prevState.message === 'Please log in' ? 'Welcome back!' : 'Please log in',
                buttonText: prevState.buttonText === 'Login' ? 'Logout' : 'Login'
            }
        }, () => {
            console.log(this.state.message);
        });
    }*/

    handleLoginClick = () => {
        this.setState(prevState => ({
            isLoggedIn: !prevState.isLoggedIn,
            welcomeMessage: !prevState.isLoggedIn ? 'Welcome back!' : 'Please sign in'
        }));
    }

    render() {
        return (
            <div className={styles.NavBar}>
                <h1>My Gallery</h1>
                <span>{this.state.welcomeMessage}</span>
                <button onClick={this.handleLoginClick}>
                    {this.state.isLoggedIn ? 'Sign out' : 'Sign in'}</button>
            </div>
        );
    }
}

export default NavBarSimple;
