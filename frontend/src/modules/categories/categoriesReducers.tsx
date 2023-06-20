import list from 'src/modules/categories/list/categoriesListReducers';
import form from 'src/modules/categories/form/categoriesFormReducers';
import view from 'src/modules/categories/view/categoriesViewReducers';
import destroy from 'src/modules/categories/destroy/categoriesDestroyReducers';
import importerReducer from 'src/modules/categories/importer/categoriesImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
