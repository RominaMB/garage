import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.categories.fields.id'),
  },
  {
    name: 'code',
    label: i18n('entities.categories.fields.code'),
  },
  {
    name: 'description',
    label: i18n('entities.categories.fields.description'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.categories.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.categories.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
