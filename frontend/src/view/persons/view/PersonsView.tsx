import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';


const PersonsView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {Boolean(record.name) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.persons.fields.name')}
        >
          {record.name}
        </Form.Item>
      )}

      {Boolean(record.company) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.persons.fields.company')}
        >
          {record.company}
        </Form.Item>
      )}

      {Boolean(record.phone) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.persons.fields.phone')}
        >
          {record.phone}
        </Form.Item>
      )}
    </ViewWrapper>
  );
};

export default PersonsView;
