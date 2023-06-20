import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.products.fields.id'),
  },
  {
    name: 'description',
    label: i18n('entities.products.fields.description'),
  },
  {
    name: 'image',
    label: i18n('entities.products.fields.image'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'price',
    label: i18n('entities.products.fields.price'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'code',
    label: i18n('entities.products.fields.code'),
  },
  {
    name: 'category',
    label: i18n('entities.products.fields.category'),
  },
  {
    name: 'url',
    label: i18n('entities.products.fields.url'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.products.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.products.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
