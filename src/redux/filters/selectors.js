export const selectCampers = (state) => {
  return state.filters.items;
};
export const selectLoading = (state) => state.filters.loading;
export const selectError = (state) => state.filters.error;
export const selectVehicleFormFilter = (state) => state.filters.selectedForms;
export const selectLocation = (state) => state.filters.location;
