import * as Keychain from 'react-native-keychain';

export const readCredentials = async () =>
  Keychain.getGenericPassword({
    service: 'celsus',
    accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_ANY,
  });

export const saveCredentials = async (username, password) => {
  await Keychain.setGenericPassword(username, password, {
    service: 'celsus',
    accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_ANY,
    accessible: Keychain.ACCESSIBLE.WHEN_PASSCODE_SET_THIS_DEVICE_ONLY,
  });
};

export const resetCredentials = async () =>
  Keychain.resetGenericPassword({ service: 'celsus' });
