import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import styles from '../styles';

const { iconRegular, ml1 } = styles;

const HeaderBack = () => {
  return <FontAwesome5 name="chevron-left" style={[iconRegular, ml1]} />;
};

export default {
  headerBackImage: () => <HeaderBack />,
  headerBackAllowFontScaling: true,
  headerBackTitleStyle: { ...ml1 },
};
