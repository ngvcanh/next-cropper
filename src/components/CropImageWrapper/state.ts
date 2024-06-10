import { Point } from "react-easy-crop";

export interface CropImageValue {
  error: string;
  setError(error: string): void;
  image: string;
  setImage(image: string): void;
  crop: Point,
  setCrop(crop: Point): void;
  zoom: number;
  setZoom(zoom: number): void;
  rotate: number;
  setRotate(rotate: number): void;
  minZoom: number;
  setMinZoom(minZoom: number): void;
  maxZoom: number;
  setMaxZoom(maxZoom: number): void;
  minRotation: number;
  setMinRotation(minRotation: number): void;
  maxRotation: number;
  setMaxRotation(maxRotation: number): void;
}

export const initialState: CropImageValue = {
  error: "",
  setError: () => {},
  image: "",
  setImage: () => {},
  crop: { x: 0, y: 0 },
  setCrop: () => {},
  zoom: 1,
  setZoom: () => {},
  rotate: 0,
  setRotate: () => {},
  minZoom: 1,
  setMinZoom: () => {},
  maxZoom: 3,
  setMaxZoom: () => {},
  minRotation: 0,
  setMinRotation: () => {},
  maxRotation: 360,
  setMaxRotation: () => {},
};
