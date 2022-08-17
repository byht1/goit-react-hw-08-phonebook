import React, { useState } from 'react';
import { contactsOperations } from 'redux/contacts';
import { useDispatch } from 'react-redux';
import {
  Form,
  FormWrapper,
  ButtonSubmit,
  InputForm,
  SpanText,
  Label,
} from './FormNewContacts.styled';

export const FormNewContacts = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const onSubmit = async event => {
    event.preventDefault();
    try {
      dispatch(contactsOperations.newContact({ name, number }));
      setName('');
      setNumber('');
    } catch (error) {}
  };

  return (
    <FormWrapper>
      <Form autoComplete="on" onSubmit={event => onSubmit(event)}>
        <Label>
          <SpanText>Name</SpanText>
          <InputForm
            onChange={event => setName(event.target.value)}
            type={'text'}
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Vitalik"
            required
          />
        </Label>
        <Label>
          <SpanText>Number</SpanText>
          <InputForm
            onChange={event => setNumber(event.target.value)}
            type={'tel'}
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="+38(099)999-99-99"
            required
          />
        </Label>
        <ButtonSubmit type="submit" value={'add contact'} />
      </Form>
    </FormWrapper>
  );
};
