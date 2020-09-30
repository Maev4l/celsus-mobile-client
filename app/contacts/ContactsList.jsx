import React, { useEffect, useState } from 'react';
import { Container, Content } from 'native-base';

import { graphql } from '../shared/api-client';
import { ListContacts } from './queries';

import { Loading } from '../shared/ui';
import ContactListItem from './ContactListItem';

const ContactsList = () => {
  const [state, setState] = useState({ loading: false, contacts: [] });

  const fetchData = async () => {
    setState({ ...state, loading: true });
    graphql(ListContacts).then(({ contacts }) => {
      setState({ ...state, contacts, loading: false });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { loading, contacts } = state;

  if (loading) {
    return <Loading size="medium" />;
  }

  return (
    <Container>
      <Content padder>
        {contacts.map((contact) => {
          const { id } = contact;
          return <ContactListItem key={id} contact={contact} />;
        })}
      </Content>
    </Container>
  );
};

export default ContactsList;
