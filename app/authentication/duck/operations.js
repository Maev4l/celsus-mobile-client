import { Auth } from '@aws-amplify/auth';

import { saveCredentials } from '../secure-storage';
import actions from './actions';

const {
  authenticating,
  authenticationSucceeded,
  authenticationFailed,
  disconnecting,
  disconnectionSucceeded,
  disconnectionFailed,
} = actions;

const signIn = (username, password) => async (dispatch) => {
  dispatch(authenticating());
  try {
    await saveCredentials(username, password);

    await Auth.signIn(username, password);

    dispatch(authenticationSucceeded());
  } catch (e) {
    dispatch(authenticationFailed(e));
    throw e;
  }
};

const signOut = () => async (dispatch) => {
  dispatch(disconnecting());
  try {
    await Auth.signOut();
    dispatch(disconnectionSucceeded());
  } catch (e) {
    dispatch(disconnectionFailed(e));
  }
};

export default {
  signIn,
  signOut,
};
