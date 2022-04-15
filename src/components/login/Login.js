import { Button } from "bootstrap";
import React from "react";

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "username": "",
            "password": ""
        }
    }

    setParams = (event) => {
        this.setState({[event.target.name] : event.target.value})
    }

    login = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        myHeaders.append("Cookie", "__cfduid=d6107583c7fca5b2a327896774537576e1606885557");

        var urlencoded = new URLSearchParams();
        urlencoded.append("username", this.state.username);
        urlencoded.append("password", this.state.password);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };
        fetch("http://localhost:8080/api/user/login", requestOptions)
            .then(response => {
                if(response.ok){
                    return response.json()
                }
                throw Error(response.status)
            })
            .then(result => {
                console.log(result)
                localStorage.setItem("accessToken", result.accessToken)
                alert("Thanh cong")
            })
            .catch(error => {
                console.log('error' ,error)
                alert("Username , password error");
            });

    }

    render() {
        return <form>
            <div>
                <label>UserName:</label>
                <input type="text" name="username" onChange={this.setParams}/>
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="password" onChange={this.setParams}/>
            </div>
            <div>
                <button type="button" onClick={this.login}>Login</button>
            </div>

        </form>
    }
}