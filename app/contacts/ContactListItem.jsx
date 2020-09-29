import React from 'react';

import { Text, TouchableOpacity } from 'react-native';
import { Card, CardItem, Left, Body, Thumbnail } from 'native-base';

import { ContactAvatarPlaceHolder } from '../shared/assets';

const ContactCard = ({ contact }) => {
  const onPress = () => {};
  const { nickname, thumbnail } = contact;

  const source = thumbnail
    ? { uri: `data:image/png;base64,${thumbnail}` }
    : ContactAvatarPlaceHolder;

  return (
    <TouchableOpacity onPress={() => onPress()}>
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={source} />
            <Body>
              <Text>{nickname}</Text>
            </Body>
          </Left>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};

export default ContactCard;
