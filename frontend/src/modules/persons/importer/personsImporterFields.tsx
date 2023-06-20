import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.persons.fields.name'),
    schema: schemas.string(
      i18n('entities.persons.fields.name'),
      {},
    ),
  },
  {
    name: 'company',
    label: i18n('entities.persons.fields.company'),
    schema: schemas.string(
      i18n('entities.persons.fields.company'),
      {},
    ),
  },
  {
    name: 'phone',
    label: i18n('entities.persons.fields.phone'),
    schema: schemas.string(
      i18n('entities.persons.fields.phone'),
      {},
    ),
  },
];