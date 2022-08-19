import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// Отримати всі контакти користувача
export const contactsListServer = createAsyncThunk(
  'contacts/contactsListServer',
  async () => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return error;
    }
  }
);

// Створити новий контакт
export const newContact = createAsyncThunk(
  'contacts/new',
  async credentials => {
    try {
      const { data } = await axios.post('/contacts', credentials);
      toast.success(`Contact successfully added`);
      return data;
    } catch (error) {
      toast.error("Sorry, we couldn't add a new contact");
      return error.response.status;
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
    toast.error('Sorry, we could not delete the contact');
    return error.response.status;
  }
});

// Редагувати контакт
export const updateContact = createAsyncThunk(
  'contacts/update',
  async ({ id, ...credentials }) => {
    try {
      const { data } = await axios.patch(`/contacts/${id}`, credentials);
      toast.success(`The contact has been successfully repaired`);
      return data;
    } catch (error) {
      toast.error(`${error.massage}`);
      return error.response.status;
      // Error
    }
  }
);
