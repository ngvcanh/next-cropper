import { FC } from "react";
import { CropImageProvider } from "./Context";
import { CropImage } from "./CropImage";

export const CropImageWrapper: FC = () => {
  return (
    <CropImageProvider>
      <CropImage />
    </CropImageProvider>
  );
};