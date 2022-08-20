import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';

export const useModalCorrection = ({ close, name, number, id }) => {
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

  return { clickOverlay, onSubmit, register, handleSubmit };
};
