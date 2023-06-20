import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';
import ImagesViewer from 'src/view/shared/ImagesViewer';

const ProductsView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {Boolean(record.description) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.products.fields.description')}
        >
          {record.description}
        </Form.Item>
      )}

      {Boolean(record.image) && Boolean(record.image.length) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.products.fields.image')}
          >
            <ImagesViewer value={record.image} />
          </Form.Item>
        )}

      {(Boolean(record.price) ||
        record.price === 0) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.products.fields.price')}
          >
            {record.price}
          </Form.Item>
        )}

      {Boolean(record.code) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.products.fields.code')}
        >
          {record.code}
        </Form.Item>
      )}

      {Boolean(record.category) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.products.fields.category')}
        >
          {record.category}
        </Form.Item>
      )}

      {Boolean(record.url) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.products.fields.url')}
        >
          {record.url}
        </Form.Item>
      )}
    </ViewWrapper>
  );
};

export default ProductsView;
