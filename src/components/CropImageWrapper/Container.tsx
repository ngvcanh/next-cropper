/* eslint-disable react-hooks/exhaustive-deps */
import { FC, PropsWithChildren, useEffect, useState } from "react";
import { useCropImage } from "./Context";

export const Container: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  const [originWidth, setOriginWidth] = useState<number>();
  const [originHeight, setOriginHeight] = useState<number>();

  const { image, setZoom, setMaxZoom } = useCropImage();

  useEffect(() => {
    if (image) {
      const img = new Image();
      img.src = image;

      img.onload = () => {
        setOriginWidth(img.width);
        setOriginHeight(img.height);
        const nextZoom = 300 / Math.min(img.width, img.height);
        setZoom(nextZoom);
        setMaxZoom(nextZoom);
      };
    }
  }, [image]);

  if (!image) {
    return null;
  }

  return (
    <div
      className="absolute"
      style={{
        width: originWidth || "100%",
        height: originHeight || "100%",
      }}
    >
      {children}
    </div>
  );
};
