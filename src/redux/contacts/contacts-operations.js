import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// Отримати всі контакти користувача
export const contactsListServer = createAsyncThunk(
  'contacts/contactsListServer',
  async () => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      // Erroe
    }
  }
);

// Створити новий контакт
export const newContact = createAsyncThunk(
  'contacts/new',
  async credentials => {
    try {
      const { data } = await axios.post('/contacts', credentials);
      return data;
    } catch (error) {
      // Error
    }
  }
);

// Видалити контакт
export const deleteContact = createAsyncThunk('contacts/delete', async id => {
  try {
    await axios.delete(`/contacts/${id}`);
    return id;
  } catch (error) {
    // Erroe
  }
});

// Редагувати контакт
export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async (id, credentials) => {
    try {
      const data = await axios.patch(`/contacts/${id}`, credentials);
      return data;
    } catch (error) {
      // Error
    }
  }
);
