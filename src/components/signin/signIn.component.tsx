import React from "react";
import {signInWithGooglePopup} from "../../utils/firbase/firebase.utils";



export const SignIn = () => {

  const logGoogleUser = async () => {
    const res = await signInWithGooglePopup()
    console.log(res)
  }

  return (
    <div>
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </div>
  )
}
