import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';


const CategoriesView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {Boolean(record.code) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.categories.fields.code')}
        >
          {record.code}
        </Form.Item>
      )}

      {Boolean(record.description) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.categories.fields.description')}
        >
          {record.description}
        </Form.Item>
      )}
    </ViewWrapper>
  );
};

export default CategoriesView;
