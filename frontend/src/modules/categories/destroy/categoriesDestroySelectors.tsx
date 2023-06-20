import { createSelector } from 'reselect';

const selectRaw = (state) => state.categories.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const categoriesDestroySelectors = {
  selectLoading,
};

export default categoriesDestroySelectors;
