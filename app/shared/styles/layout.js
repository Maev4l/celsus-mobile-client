import { StyleSheet } from 'react-native';

const flex = {
  flex: 1,
};

const flexWrap = {
  flexWrap: 'wrap',
};

const flexNoWrap = {
  flexWrap: 'nowrap',
};

const flexCenter = {
  alignItems: 'center',
};
const flexBaseline = {
  alignItems: 'baseline',
};
const flexStretch = {
  alignItems: 'stretch',
};
const flexStart = {
  alignItems: 'flex-start',
};
const flexEnd = {
  alignItems: 'flex-end',
};

const flexSelfStart = {
  alignSelf: 'flex-start',
};

const flexSelfCenter = {
  alignSelf: 'center',
};

const flexColumn = {
  flexDirection: 'column',
};

const flexRow = {
  flexDirection: 'row',
};

const flexContentCenter = {
  justifyContent: 'center',
};

const flexContentEnd = {
  justifyContent: 'flex-end',
};

const flexContentStart = {
  justifyContent: 'flex-start',
};
const flexContentAround = {
  justifyContent: 'space-around',
};

const flexContentBetween = {
  justifyContent: 'space-between',
};

const flexNoGrow = {
  flexGrow: 0,
};

const flexGrow = {
  flexGrow: 1,
};

export default StyleSheet.create({
  flex,
  flexWrap,
  flexNoWrap,
  flexCenter,
  flexBaseline,
  flexStretch,
  flexStart,
  flexEnd,
  flexSelfStart,
  flexSelfCenter,
  flexColumn,
  flexRow,
  flexContentCenter,
  flexContentEnd,
  flexContentStart,
  flexContentAround,
  flexContentBetween,
  flexNoGrow,
  flexGrow,
});
