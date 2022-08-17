import { createSlice } from '@reduxjs/toolkit';
import {
  contactsListServer,
  newContact,
  deleteContact,
  updateContact,
} from './contacts-operations';

const initialState = {
  contacts: [],
  isLoadingContacts: false,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [contactsListServer.fulfilled](state, action) {
      // state.contacts = [...action.payload];
      state.contacts = action.payload;
    },
    [newContact.fulfilled](state, action) {
      state.contacts.push(action.payload);
    },
    [deleteContact.fulfilled](state, action) {
      console.log('🚀 ~ action', action);
      state.contacts = state.contacts.filter(({ id }) => id !== action.payload);
    },
    [updateContact.fulfilled](state, { payload }) {
      state.contacts = state.contacts.map(contact =>
        contact.id === payload.id ? payload : contact
      );
    },
  },
});

export default contactsSlice;
