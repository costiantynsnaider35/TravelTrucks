export const selectCampers = (state) => state.filters.items;
export const selectLoading = (state) => state.filters.loading;
export const selectError = (state) => state.filters.error;
export const selectLocation = (state) =>
  state.filters && state.filters.location ? state.filters.location : "";

export const selectVehicleFormFilter = (state) => state.filters.selectedForms;
export const selectVehicleEquipmentFilter = (state) =>
  state.filters.selectedEquipment;
