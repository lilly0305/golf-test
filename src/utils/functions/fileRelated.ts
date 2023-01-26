export const ONLY_IMAGE_TYPE = 'jpg, jpeg, png';
export const FILE_SIZE_MAX_LIMIT = 10 * 1024 * 1024; // 5MB

const removeFileName = (originalFileName: string): string => {
  const lastIndex = originalFileName.lastIndexOf('.');

  if (lastIndex < 0) {
    return '';
  }

  return originalFileName.substring(lastIndex + 1).toLowerCase();
};

export const fileExtensionValid = ({ name }: { name: string }): boolean => {
  const extension = removeFileName(name);

  if (!(ONLY_IMAGE_TYPE.indexOf(extension) > -1) || extension === '') {
    return false;
  }
  return true;
};
