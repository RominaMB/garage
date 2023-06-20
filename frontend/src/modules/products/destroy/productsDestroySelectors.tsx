import { createSelector } from 'reselect';

const selectRaw = (state) => state.products.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const productsDestroySelectors = {
  selectLoading,
};

export default productsDestroySelectors;
