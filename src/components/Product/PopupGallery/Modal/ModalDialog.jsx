import { Dialog, DialogHeader, IconButton } from "@material-tailwind/react";
import ModalContent from "./ModalContent";
import whiteCloseIcon from "../../../../assets/icon-close-white.svg";

const ModalDialog = ({
  mainOptions,
  thumbsOptions,
  sliderIndex,
  open,
  onClose,
}) => {
  return (
    <Dialog open={open} size="lg" className="hidden bg-transparent shadow-none slider-modal md:block">
      <div className="mx-auto max-w-[550px]">
        <DialogHeader className="justify-end px-0 pt-0">
          <IconButton
            color="blue-gray"
            size="sm"
            variant="text"
            onClick={onClose}
          >
            <img src={whiteCloseIcon} alt="icon-close" />
          </IconButton>
        </DialogHeader>
        <ModalContent
          mainOptions={mainOptions}
          thumbsOptions={thumbsOptions}
          sliderIndex={sliderIndex}
        />
      </div>
    </Dialog>
  );
};

export default ModalDialog;
