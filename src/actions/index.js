export const selectLibrary = (libraryId) => {
  return {
    type: 'SelectedLibrary',
    payload: libraryId
  };
};
