import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const contactsListServer = createAsyncThunk(
  'contacts/contacts',
  async () => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      // Erroe
    }
  }
);

export const newContact = createAsyncThunk(
  'contacts/new',
  async credentials => {
    try {
      await axios.post('/contacts', credentials);
    } catch (error) {
      // Error
    }
  }
);

export const deleteContact = createAsyncThunk('contacts/delete', async id => {
  try {
    await axios.delete(`/contacts/${id}`);
  } catch (error) {
    // Erroe
  }
});

export const updateContact = createAsyncThunk(
  'contacts/new',
  async (id, credentials) => {
    try {
      const data = await axios.patch(`/contacts/${id}`, credentials);
      return data;
    } catch (error) {
      // Error
    }
  }
);
