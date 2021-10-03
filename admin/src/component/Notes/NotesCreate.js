
import React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';
import { alpha } from '@material-ui/core/styles';
const NotesCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="text" required />
        <TextInput disabled source="id" />
      </SimpleForm>
    </Create>
  );
};

export default NotesCreate;