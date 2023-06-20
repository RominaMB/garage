import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'description',
    label: i18n('entities.products.fields.description'),
    schema: schemas.string(
      i18n('entities.products.fields.description'),
      {},
    ),
  },
  {
    name: 'image',
    label: i18n('entities.products.fields.image'),
    schema: schemas.images(
      i18n('entities.products.fields.image'),
      {},
    ),
  },
  {
    name: 'price',
    label: i18n('entities.products.fields.price'),
    schema: schemas.decimal(
      i18n('entities.products.fields.price'),
      {},
    ),
  },
  {
    name: 'code',
    label: i18n('entities.products.fields.code'),
    schema: schemas.string(
      i18n('entities.products.fields.code'),
      {},
    ),
  },
  {
    name: 'category',
    label: i18n('entities.products.fields.category'),
    schema: schemas.string(
      i18n('entities.products.fields.category'),
      {},
    ),
  },
  {
    name: 'url',
    label: i18n('entities.products.fields.url'),
    schema: schemas.string(
      i18n('entities.products.fields.url'),
      {},
    ),
  },
];