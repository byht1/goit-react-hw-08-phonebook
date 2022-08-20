import React from 'react';
import { useForm } from 'react-hook-form';
import { InputForm } from '../../components/FormNewContacts/FormNewContacts.styled';
import { ButtonSubmit } from 'components/FormNewContacts/FormNewContacts.styled';
import { WrapperSingIn, Text, Label, FormText } from './SingIn.styled';
import { useDispatch } from 'react-redux';
import { AuthOperations } from 'redux/user';

export default function SingIn() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSubmit = data => dispatch(AuthOperations.logIn(data));

  return (
    <WrapperSingIn>
      <Text>Sign in to PhoneBook</Text>
      <form autoComplete="on" onSubmit={handleSubmit(onSubmit)}>
        <Label>
          <FormText>User name</FormText>
          <InputForm type="email" {...register('email')} required />
        </Label>
        <Label>
          <FormText>Password</FormText>
          <InputForm type="password" {...register('password')} required />
        </Label>

        <ButtonSubmit type="submit" value={'Sing In'} />
      </form>
    </WrapperSingIn>
  );
}
