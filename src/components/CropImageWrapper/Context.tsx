"use client";
import { FC, PropsWithChildren, createContext, useContext, useReducer } from "react";
import { CropImageValue, initialState } from "./state";
import { reducer } from "./reducer";
import { cropImageSlice } from "./slice";
import { Point } from "react-easy-crop";

export const CropImageContext = createContext<CropImageValue>(initialState);

export const useCropImage = () => useContext(CropImageContext);

export interface CropImageProviderProps {}

export const CropImageProvider: FC<PropsWithChildren<CropImageProviderProps>> = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  const setError = (error: string) => dispatch(cropImageSlice.setError(error));
  const setImage = (image: string) => dispatch(cropImageSlice.setImage(image));
  const setZoom = (zoom: number) => dispatch(cropImageSlice.setZoom(zoom));
  const setCrop = (crop: Point) => dispatch(cropImageSlice.setCrop(crop));
  const setRotate = (rotate: number) => dispatch(cropImageSlice.setRotate(rotate));

  return (
    <CropImageContext.Provider
      value={{
        ...state,
        setError,
        setImage,
        setZoom,
        setCrop,
        setRotate,
      }}
    >
      {children}
    </CropImageContext.Provider>
  );
};
