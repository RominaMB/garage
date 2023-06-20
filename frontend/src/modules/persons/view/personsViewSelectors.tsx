import { createSelector } from 'reselect';

const selectRaw = (state) => state.persons.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const personsViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default personsViewSelectors;
