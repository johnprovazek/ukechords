// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { useEffect, useState } from 'react'
import jwt_decode from "jwt-decode"

// Step 2: Define your component
const IndexPage = () => {

  const [user, setUser] = useState({});

  function handleCallbackResponse(response) {
    console.log(response.credential)
    var userObject = jwt_decode(response.credential)
    console.log(userObject)
    setUser(userObject)
    document.getElementById("signInDiv").hidden = true; 
  }

  function handleSignOut(event) {
    setUser({})
    document.getElementById("signInDiv").hidden = false; 
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "882648076498-mebve0aqktvvd180s5udffucile3g1g3.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large"}
    );

    google.accounts.id.prompt();

  }, []);

  return (
    <div>
      <Layout pageTitle="Uke Chords">
        <p>This is a website developed to help you learn and memorize ukulele chords. Good luck and have fun!</p>
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
    </div>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage