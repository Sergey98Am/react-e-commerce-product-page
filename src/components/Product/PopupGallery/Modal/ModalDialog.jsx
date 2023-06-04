import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ModalContent from "./ModalContent";
import whiteCloseIcon from "@/assets/icon-close-white.svg";

const ModalDialog = ({
  mainOptions,
  thumbsOptions,
  sliderIndex,
  open,
  onClose,
}) => {
  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 slider-modal md:block"
          onClose={onClose}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Panel className="transition w-full">
                  <div className="mx-auto max-w-[550px]">
                    <div className="close-modal flex justify-end mb-5">
                      <button onClick={onClose}>
                        <img src={whiteCloseIcon} alt="icon-close" />
                      </button>
                    </div>

                    <ModalContent
                      mainOptions={mainOptions}
                      thumbsOptions={thumbsOptions}
                      sliderIndex={sliderIndex}
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ModalDialog;
