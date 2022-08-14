import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormWrapper,
  ButtonSubmit,
  InputForm,
  SpanText,
  Label,
} from './FormNewContacts.styled';

export const FormNewContacts = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <FormWrapper>
      <Form autoComplete="on" onSubmit={handleSubmit(onSubmit)}>
        <Label>
          <SpanText>Name</SpanText>
          <InputForm
            type={'text'}
            {...register('name')}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Vitalik"
            required
          />
        </Label>
        <Label>
          <SpanText>Number</SpanText>
          <InputForm
            type={'tel'}
            {...register('phone')}
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
