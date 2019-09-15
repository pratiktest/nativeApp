import * as Keychain from "react-native-keychain"
import {LoginManager, AccessToken} from "react-native-fbsdk"

import * as c from "./constants"

const saveFbCredentialsStart = () => ({
  type: c.SAVE_FB_CREDENTIALS_START
})

const saveFbCredentialsSuccess = (username) => ({
  type: c.SAVE_FB_CREDENTIALS_SUCCESS,
  username,
})

const saveFbCredentialsFail = (error) => ({
  type: c.SAVE_FB_CREDENTIALS_FAIL,
  error,
})

export const saveFbCredentials = (username, password) => async (dispatch) => {
  dispatch(saveFbCredentialsStart())
  try{
    const loginResult = await LoginManager.logInWithPermissions(['public_profile']).then(
      function(result) {
        if (result.isCancelled) {
          alert('Login was cancelled');
        } else {
          alert('Login was successful with permissions: '
            + result.grantedPermissions.toString());
        }
      },
      function(error) {
        alert('Login failed with error: ' + error);
      }
    );
    const fbAccessToken = await AccessToken.getCurrentAccessToken()
    console.log(fbAccessToken)
  }catch(e){
    console.log(e)
  }
}


const saveCredentials = (username, pw) => async (dispatch) => {

  if (username.length <= 0 || pw.length <= 0){
    console.log("saving credentials "+username+":"+password)
    dispatch(saveFbCredentialsFail("Please insert unsername and password"))
    return
  }
  
  try{
    await Keychain.setGenericPassword(username, pw)
    console.log("success"+username)
    dispatch(saveFbCredentialsSuccess(username))
  }catch(err){
    console.log("ERROR SAVING CREDENTIALS", err)
    dispatch(saveFbCredentialsFail("Error saving credentails in keychain"))
  }
}