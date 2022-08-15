import { ButtonSubmit } from 'components/FormNewContacts/FormNewContacts.styled';
import React from 'react';
import { useForm } from 'react-hook-form';
import { WrapperSingUp, Text, Label, FormText } from './SingUp.styled';
import { InputForm } from '../../components/FormNewContacts/FormNewContacts.styled';
import { AuthOperations } from 'redux/user';
import { useDispatch } from 'react-redux';

export default function SingIn() {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const onSubmit = async data => {
    try {
      const a = await dispatch(AuthOperations.register(data));
      console.log('🚀 ~ a', a);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <WrapperSingUp>
      <Text>Let's start registration?</Text>
      <form autoComplete="on" onSubmit={handleSubmit(onSubmit)}>
        <Label>
          <FormText>User name</FormText>
          <InputForm
            type="name"
            {...register('name')}
            required
            placeholder="IHdPA"
          />
        </Label>
        <Label>
          <FormText>Email</FormText>
          <InputForm
            type="email"
            {...register('email')}
            required
            placeholder="ihdpa@gmail.com"
          />
        </Label>
        <Label>
          <FormText>Password</FormText>
          <InputForm
            type="password"
            {...register('password')}
            minLength="5"
            maxLength="12"
            required
          />
        </Label>

        <ButtonSubmit type="submit" value={'register'} />
      </form>
    </WrapperSingUp>
  );
}
