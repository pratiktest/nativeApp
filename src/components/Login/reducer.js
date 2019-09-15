import * as c from "./constants"

const initalState = { };

function saveCredentialFail(state, action){
  return {
    ... state,
    settingPassword: false,
    settingPasswordError: action.error
  }
}

function saveCredentialSuccess(state, action){
  return {
    ... state,
    settingPassword: false,
    username: action.username,
    settingPasswordError: null
  }
}

function saveCredentialStart(state, action){
  return {
    ... state,
    settingPassword: true,
  }
}


export default(state=initalState, action) => {

  switch(action.type){

    case c.SAVE_CREDENTIALS_FAIL: return saveCredentialFail(state, action)

    case c.SAVE_CREDENTIALS_SUCCESS: return saveCredentialSuccess(state, action)

    case c.SAVE_CREDENTIALS_START: return saveCredentialStart(state, action)

    default: return state
  }
}