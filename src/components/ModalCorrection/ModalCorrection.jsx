import { FormNewContacts } from 'components/FormNewContacts/FormNewContacts';
import React from 'react';
import { createPortal } from 'react-dom';
import { BoxModal, WrapperModal } from './ModalCorrection.styled';

export const ModalCorrection = ({ close, ...dataProps }) => {
  return createPortal(
    <WrapperModal>
      <BoxModal>
        <FormNewContacts data={dataProps} />
      </BoxModal>
    </WrapperModal>,
    document.querySelector('#modal-root')
  );
};
