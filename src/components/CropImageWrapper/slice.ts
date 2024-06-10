import { Point } from "react-easy-crop";

export enum CropImageActionType {
  SET_ERROR = "CROP_IMAGE/SET_ERROR",
  SET_IMAGE = "CROP_IMAGE/SET_IMAGE",
  SET_ZOOM = "CROP_IMAGE/SET_ZOOM",
  SET_ROTATE = "CROP_IMAGE/SET_ROTATE",
  SET_CROP = "CROP_IMAGE/SET_CROP",
  SET_MIN_ZOOM = "CROP_IMAGE/SET_MIN_ZOOM",
  SET_MAX_ZOOM = "CROP_IMAGE/SET_MAX_ZOOM",
  SET_MIN_ROTATION = "CROP_IMAGE/SET_MIN_ROTATION",
  SET_MAX_ROTATION = "CROP_IMAGE/SET_MAX_ROTATION",
}

export interface CropImageSetErrorAction {
  type: CropImageActionType.SET_ERROR;
  payload: string;
}

export interface CropImageSetImageAction {
  type: CropImageActionType.SET_IMAGE;
  payload: string;
}

export interface CropImageSetZoomAction {
  type: CropImageActionType.SET_ZOOM;
  payload: number;
}

export interface CropImageSetRotateAction {
  type: CropImageActionType.SET_ROTATE;
  payload: number;
}

export interface CropImageSetCropAction {
  type: CropImageActionType.SET_CROP;
  payload: Point;
}

export interface CropImageSetMinZoomAction {
  type: CropImageActionType.SET_MIN_ZOOM;
  payload: number;
}

export interface CropImageSetMaxZoomAction {
  type: CropImageActionType.SET_MAX_ZOOM;
  payload: number;
}

export interface CropImageSetMinRotationAction {
  type: CropImageActionType.SET_MIN_ROTATION;
  payload: number;
}

export interface CropImageSetMaxRotationAction {
  type: CropImageActionType.SET_MAX_ROTATION;
  payload: number;
}

export type CropImageAction =
  | CropImageSetErrorAction
  | CropImageSetImageAction
  | CropImageSetZoomAction
  | CropImageSetRotateAction
  | CropImageSetCropAction
  | CropImageSetMinZoomAction
  | CropImageSetMaxZoomAction
  | CropImageSetMinRotationAction
  | CropImageSetMaxRotationAction;

export const cropImageSlice = {
  setError(payload: string): CropImageSetErrorAction {
    return {
      type: CropImageActionType.SET_ERROR,
      payload,
    };
  },
  setImage(payload: string): CropImageSetImageAction {
    return {
      type: CropImageActionType.SET_IMAGE,
      payload,
    };
  },
  setZoom(payload: number): CropImageSetZoomAction {
    return {
      type: CropImageActionType.SET_ZOOM,
      payload,
    };
  },
  setRotate(payload: number): CropImageSetRotateAction {
    return {
      type: CropImageActionType.SET_ROTATE,
      payload,
    };
  },
  setCrop(payload: Point): CropImageSetCropAction {
    return {
      type: CropImageActionType.SET_CROP,
      payload,
    };
  },
  setMinZoom(payload: number): CropImageSetMinZoomAction {
    return {
      type: CropImageActionType.SET_MIN_ZOOM,
      payload,
    };
  },
  setMaxZoom(payload: number): CropImageSetMaxZoomAction {
    return {
      type: CropImageActionType.SET_MAX_ZOOM,
      payload,
    };
  },
  setMinRotation(payload: number): CropImageSetMinRotationAction {
    return {
      type: CropImageActionType.SET_MIN_ROTATION,
      payload,
    };
  },
  setMaxRotation(payload: number): CropImageSetMaxRotationAction {
    return {
      type: CropImageActionType.SET_MAX_ROTATION,
      payload,
    };
  },
};
