import Login from './Login'
import {saveFbCredentials} from './actions'
import { connect } from 'react-redux';


  const mapDispatchToProps = dispatch => ({
    saveCredentials: (username, password) => {
      dispatch(saveFbCredentials(username, password));
    },
    useLatestManifest: () => {
      dispatch(useLatestManifest());
    },
  });
  
  const mapStateToProps = state => ({
    
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login);