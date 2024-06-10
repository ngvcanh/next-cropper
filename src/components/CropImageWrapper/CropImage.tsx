/* eslint-disable @next/next/no-img-element */
"use client";
import { FC, useRef, useState } from "react";
import { CROP_IMAGE_DEFAULT_ACCEPT_TYPE, readImage } from "./helper";
import { useCropImage } from "./Context";
import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import { Cropper } from "./Cropper";
import { Container } from "./Container";

export interface CropImageProps {
  oldImage?: string;
  defaultImage?: string;
  viewSize?: number;
}

export const CropImage: FC<CropImageProps> = (props) => {
  const { oldImage, defaultImage, viewSize = 100 } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const [openModal, setOpenModal] = useState(false);
  const { setError, setImage } = useCropImage();

  const handleChangeFile = async () => {
    if (inputRef.current?.files) {
      const file = inputRef.current.files[0];

      if (file && !CROP_IMAGE_DEFAULT_ACCEPT_TYPE.includes(file.type)) {
        setError("Invalid file type");
        inputRef.current.value = "";
        return;
      }

      const imageDataURL = await readImage(file);
      setImage(imageDataURL);
      inputRef.current.value = "";
      setOpenModal(true);
    }
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="file"
        accept={CROP_IMAGE_DEFAULT_ACCEPT_TYPE.join(",")}
        className="hidden"
        onChange={handleChangeFile}
      />
      <div className="flex items-center gap-6">
        <div
          className="rounded-full bg-gray-200"
          style={{ width: viewSize, height: viewSize, minWidth: viewSize, minHeight: viewSize }}
        >
          {oldImage || defaultImage ? (
            <img
              src={oldImage || defaultImage}
              alt="preview"
              className="rounded-full w-full h-full object-cover"
            />
          ) : (
            <div className="flex justify-center items-center w-full h-full text-gray-400">
              <span>+</span>
            </div>
          )}
        </div>
        <div>
          <button
            type="button"
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
            onClick={() => inputRef.current?.click()}
          >
            Choose Image
          </button>
        </div>
      </div>
      <Transition appear show={openModal}>
        <Dialog as="div" className="relative z-10 focus:outline-none" onClose={() => {}}>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-md rounded-xl bg-white w-[448px]">
                  <DialogTitle as="h3" className="text-base/7 font-medium">
                    <span>Cập nhập ảnh đại diện</span>
                  </DialogTitle>
                  <div className="flex justify-center">
                    <div className="relative overflow-hidden flex items-center justify-center" style={{ width: 300, height: 300 }}>
                      <Container>
                        <Cropper />
                      </Container>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button
                      className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                    >
                      Got it, thanks!
                    </Button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
