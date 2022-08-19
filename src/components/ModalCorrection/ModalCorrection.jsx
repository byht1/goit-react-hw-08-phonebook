import {
  FormWrapper,
  Form,
  Label,
  SpanText,
  InputForm,
  ButtonSubmit,
} from 'components/FormNewContacts/FormNewContacts.styled';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useForm } from 'react-hook-form';
import { contactsOperations } from 'redux/contacts';
import { BoxModal, WrapperModal } from './ModalCorrection.styled';
import { useDispatch } from 'react-redux';

export const ModalCorrection = ({ close, name, number, id }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name,
      number,
    },
  });
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('keydown', clickEscate);

    return () => {
      window.removeEventListener('keydown', clickEscate);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function clickEscate(e) {
    if (e.code !== 'Escape') {
      return;
    }
    close(false);
  }

  function clickOverlay(e) {
    if (e.target !== e.currentTarget) return;

    close(false);
  }

  const onSubmit = data => {
    dispatch(contactsOperations.updateContact({ id, ...data }));
    close(false);
  };

  return createPortal(
    <WrapperModal onClick={clickOverlay}>
      <BoxModal>
        <FormWrapper>
          <Form autoComplete="on" onSubmit={handleSubmit(onSubmit)}>
            <Label>
              <SpanText>Name</SpanText>
              <InputForm
                {...register('name')}
                type={'text'}
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                placeholder="Vitalik"
                required
              />
            </Label>
            <Label>
              <SpanText>Number</SpanText>
              <InputForm
                {...register('number')}
                type={'tel'}
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                placeholder="+38(099)999-99-99"
                required
              />
            </Label>
            <ButtonSubmit type="submit" value={'add contact'} />
          </Form>
        </FormWrapper>
      </BoxModal>
    </WrapperModal>,
    document.querySelector('#modal-root')
  );
};
