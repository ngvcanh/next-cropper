export const CROP_IMAGE_DEFAULT_ACCEPT_TYPE = ["image/jpg", "image/jpeg", "image/png"];

export function readImage(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      resolve(reader.result as string);
    };

    reader.onerror = () => {
      resolve("");
    };

    reader.readAsDataURL(file);
  });
}
