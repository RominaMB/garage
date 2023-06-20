import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/products/importer/productsImporterSelectors';
import ProductsService from 'src/modules/products/productsService';
import fields from 'src/modules/products/importer/productsImporterFields';
import { i18n } from 'src/i18n';

const productsImporterActions = importerActions(
  'PRODUCTS_IMPORTER',
  selectors,
  ProductsService.import,
  fields,
  i18n('entities.products.importer.fileName'),
);

export default productsImporterActions;