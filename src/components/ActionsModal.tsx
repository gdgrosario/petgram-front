import { Dispatch, FC, SetStateAction } from "react";
interface IActionsModal {
  setToggleModal: Dispatch<boolean>;
}
export const ActionsModal: FC<IActionsModal> = ({
  children,
  setToggleModal,
}) => {
  return (
    <div
      className="container-modal-actions"
      onClick={() => setToggleModal(false)}
    >
      <div className="container-modal-actions__card">{children}</div>
    </div>
  );
};
