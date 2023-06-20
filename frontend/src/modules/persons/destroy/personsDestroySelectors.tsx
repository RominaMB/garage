import { createSelector } from 'reselect';

const selectRaw = (state) => state.persons.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const personsDestroySelectors = {
  selectLoading,
};

export default personsDestroySelectors;
