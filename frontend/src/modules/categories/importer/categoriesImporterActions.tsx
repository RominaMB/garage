import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/categories/importer/categoriesImporterSelectors';
import CategoriesService from 'src/modules/categories/categoriesService';
import fields from 'src/modules/categories/importer/categoriesImporterFields';
import { i18n } from 'src/i18n';

const categoriesImporterActions = importerActions(
  'CATEGORIES_IMPORTER',
  selectors,
  CategoriesService.import,
  fields,
  i18n('entities.categories.importer.fileName'),
);

export default categoriesImporterActions;