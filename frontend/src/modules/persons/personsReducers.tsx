import list from 'src/modules/persons/list/personsListReducers';
import form from 'src/modules/persons/form/personsFormReducers';
import view from 'src/modules/persons/view/personsViewReducers';
import destroy from 'src/modules/persons/destroy/personsDestroyReducers';
import importerReducer from 'src/modules/persons/importer/personsImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
