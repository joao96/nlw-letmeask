import Modal from "react-modal";
import { IoIosCloseCircleOutline } from "react-icons/io";
import "./styles.scss";
import { Button } from "../Button";

interface DeletionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onRequestTerminate: () => void;
  icon?: HTMLSpanElement;
  title: string;
  paragraph: string;
  terminateText: string;
}

export function DeletionModal({
  isOpen,
  onRequestClose,
  onRequestTerminate,
  paragraph,
  terminateText,
  title,
  icon,
}: DeletionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <main className="container">
        <span>
          <IoIosCloseCircleOutline size={50} color="#E73F5D" />
        </span>
        <h3>{title}</h3>
        <p>{paragraph}</p>
        <div className="buttons-container">
          <Button isCancel onClick={onRequestClose}>
            Cancelar
          </Button>
          <Button isTerminate onClick={onRequestTerminate}>
            {terminateText}
          </Button>
        </div>
      </main>
    </Modal>
  );
}
