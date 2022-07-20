import { FC, Dispatch, SetStateAction } from 'react';

interface IModal {
    title: string;
    toggleModal: Dispatch<SetStateAction<boolean>>;
}
export const Modal:FC<IModal> = ({ title, children, toggleModal }) => {
  return (
    <div className='generic-modal__container-modal'>
        <header>
            <h1>{title}</h1>
            <button onClick={() => toggleModal(prevState => !prevState)}>Cerrar</button>
        </header>
        
        <div className='generic-modal__content-children-modal'>{children}</div>
    </div>
  )
}
