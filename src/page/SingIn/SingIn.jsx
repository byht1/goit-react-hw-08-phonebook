import React from 'react';
import { useForm } from 'react-hook-form';
import { InputForm } from '../../components/FormNewContacts/FormNewContacts.styled';
import { ButtonSubmit } from 'components/FormNewContacts/FormNewContacts.styled';
import { WrapperSingIn, Text, Label, FormText } from './SingIn.styled';

export default function SingIn() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <WrapperSingIn>
      <Text>Sign in to PhoneBook</Text>
      <form autoComplete="on" onSubmit={handleSubmit(onSubmit)}>
        <Label>
          <FormText>User name</FormText>
          <InputForm type="name" {...register('name')} required />
        </Label>
        <Label>
          <FormText>Password</FormText>
          <InputForm type="password" {...register('password')} required />
        </Label>

        <ButtonSubmit type="submit" value={'register'} />
      </form>
    </WrapperSingIn>
  );
}
