import { FC } from "react";
import EasyCropper, { Area } from "react-easy-crop";
import { useCropImage } from "./Context";

export const Cropper: FC = () => {
  const { image, crop, zoom, minZoom, maxZoom, rotate, setCrop, setZoom, setRotate } = useCropImage();

  const onCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
    console.log(croppedArea, croppedAreaPixels)
  }

  if (!image) {
    return null;
  }
  console.log(minZoom);
  return (
    <EasyCropper
      image={image}
      crop={crop}
      zoom={zoom}
      aspect={1}
      minZoom={minZoom}
      maxZoom={maxZoom}
      rotation={rotate}
      onCropChange={setCrop}
      onCropComplete={onCropComplete}
      onZoomChange={setZoom}
      onRotationChange={setRotate}
      showGrid={false}
      cropShape="round"
      cropSize={{ width: 300, height: 300 }}
    />
  );
};