import list from 'src/modules/products/list/productsListReducers';
import form from 'src/modules/products/form/productsFormReducers';
import view from 'src/modules/products/view/productsViewReducers';
import destroy from 'src/modules/products/destroy/productsDestroyReducers';
import importerReducer from 'src/modules/products/importer/productsImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
