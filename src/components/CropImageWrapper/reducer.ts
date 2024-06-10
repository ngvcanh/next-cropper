import { CropImageAction, CropImageActionType } from "./slice";
import { CropImageValue } from "./state";

export const reducer = (state: CropImageValue, action: CropImageAction) => {
  switch (action.type) {
    case CropImageActionType.SET_ERROR:
      return { ...state, error: action.payload };

    case CropImageActionType.SET_IMAGE:
      return { ...state, image: action.payload };

    case CropImageActionType.SET_ZOOM:
      return { ...state, zoom: action.payload };

    case CropImageActionType.SET_ROTATE:
      return { ...state, rotate: action.payload };

    case CropImageActionType.SET_CROP:
      return { ...state, crop: { ...action.payload } };
    
    case CropImageActionType.SET_MIN_ZOOM:
      return { ...state, minZoom: action.payload };

    case CropImageActionType.SET_MAX_ZOOM:
      return { ...state, maxZoom: action.payload };

    case CropImageActionType.SET_MIN_ROTATION:
      return { ...state, minRotation: action.payload };

    case CropImageActionType.SET_MAX_ROTATION:
      return { ...state, maxRotation: action.payload };

    default:
      return {...state};
  }
};