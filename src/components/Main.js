import React from "react";
import {auth} from "./firebase";
import {signOut} from "firebase/auth";

function Main() {

    function logout() {
        signOut(auth)
            .then(() => {
                console.log("Succesfully");
                //...
            })
            .catch((error) => {
                console.log("Error" + error.toString());
                //...
            })
    }

    return (
        <div>
            <h1>Hello!</h1>
            <button onClick={logout}>Sign Out</button>
        </div>
    );
}

export default Main;