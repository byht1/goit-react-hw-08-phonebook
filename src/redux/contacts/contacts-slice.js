import { createSlice } from '@reduxjs/toolkit';
import {
  contactsListServer,
  newContact,
  deleteContact,
  updateContact,
} from './contacts-operations';

const initialState = {
  contacts: [],
  isLoadingContacts: true,
  error: false,
  errorMessage: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [contactsListServer.fulfilled](state, { payload }) {
      if (payload.response?.status === 404) {
        state.error = true;
        state.errorMessage = payload.message;
        return;
      }
      state.contacts = payload;
      state.isLoadingContacts = false;
      state.error = false;
      state.errorMessage = '';
    },
    [newContact.fulfilled](state, { payload }) {
      if (payload === 404) {
        return;
      }
      state.contacts.push(payload);
    },
    [deleteContact.fulfilled](state, { payload }) {
      if (payload === 404) {
        return;
      }
      state.contacts = state.contacts.filter(({ id }) => id !== payload);
    },
    [updateContact.fulfilled](state, { payload }) {
      if (payload === 404) {
        return;
      }
      state.contacts = state.contacts.map(contact =>
        contact.id === payload.id ? payload : contact
      );
    },
  },
});

export default contactsSlice;
