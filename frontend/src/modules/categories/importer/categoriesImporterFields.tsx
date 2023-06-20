import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'code',
    label: i18n('entities.categories.fields.code'),
    schema: schemas.string(
      i18n('entities.categories.fields.code'),
      {},
    ),
  },
  {
    name: 'description',
    label: i18n('entities.categories.fields.description'),
    schema: schemas.string(
      i18n('entities.categories.fields.description'),
      {},
    ),
  },
];