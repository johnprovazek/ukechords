import * as React from 'react'
import Layout from '../components/layout'
import { useEffect, useState } from 'react'
import jwt_decode from "jwt-decode"



function SignIn() {

    const [user, setUser] = useState({});

    function handleCallbackResponse(response) {
        console.log(response.credential)
        var userObject = jwt_decode(response.credential)
        console.log(userObject)
        setUser(userObject)
        document.getElementById("signInDiv").hidden = true;
        // localStorage.setItem("signinnavtitle", "Sign Out");
    }

    function handleSignOut(event) {
        setUser({})
        document.getElementById("signInDiv").hidden = false;
        // localStorage.setItem("signinnavtitle", "Sign In");
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
        client_id: "882648076498-mebve0aqktvvd180s5udffucile3g1g3.apps.googleusercontent.com",
        callback: handleCallbackResponse,
        auto_select: true
        });

        google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        { type: "stabdard", theme: "outline", size: "medium", width: 200, text: "signin_with"}
        );

        google.accounts.id.prompt();

    }, []);



    return (
        <Layout pageTitle="Sign In">
            <p>Sign in with Google to keep track of your progress.</p>
            { Object.keys(user).length !== 0 &&
                <button onClick={ (e) => handleSignOut(e)}>Sign Out</button>
            }
            <div id="signInDiv"></div>
            { user && 
                <div>
                <img src={user.picture} alt=""></img>
                <h3>{user.name}</h3>
                </div>
            }
        </Layout>
    )
}

export default SignIn