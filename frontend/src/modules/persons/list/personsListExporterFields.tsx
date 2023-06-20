import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.persons.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.persons.fields.name'),
  },
  {
    name: 'company',
    label: i18n('entities.persons.fields.company'),
  },
  {
    name: 'phone',
    label: i18n('entities.persons.fields.phone'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.persons.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.persons.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
