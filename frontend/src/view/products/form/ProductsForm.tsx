import {
  CloseOutlined,
  SaveOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { Button, Form } from 'antd';
import { useForm, FormProvider } from 'react-hook-form';
import React, { useState } from 'react';
import { i18n } from 'src/i18n';
import FormWrapper, {
  formItemLayout,
  tailFormItemLayout,
} from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import Storage from 'src/security/storage';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';

const schema = yup.object().shape({
  description: yupFormSchemas.string(
    i18n('entities.products.fields.description'),
    {},
  ),
  image: yupFormSchemas.images(
    i18n('entities.products.fields.image'),
    {},
  ),
  price: yupFormSchemas.decimal(
    i18n('entities.products.fields.price'),
    {},
  ),
  code: yupFormSchemas.string(
    i18n('entities.products.fields.code'),
    {},
  ),
  category: yupFormSchemas.string(
    i18n('entities.products.fields.category'),
    {},
  ),
  url: yupFormSchemas.string(
    i18n('entities.products.fields.url'),
    {},
  ),
});

const ProductsForm = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      description: record.description,
      image: record.image || [],
      price: record.price,
      code: record.code,
      category: record.category,
      url: record.url,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues as any,
  });

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  const onSubmit = (values) => {
    props.onSubmit(props?.record?.id, values);
  };

  const { saveLoading } = props;
  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <InputFormItem
            name="description"
            label={i18n('entities.products.fields.description')}  
            required={false}
            layout={formItemLayout}
            autoFocus
          />
          <ImagesFormItem
            name="image"
            label={i18n('entities.products.fields.image')}
            required={false}
            storage={Storage.values.productsImage}
            max={undefined}
            layout={formItemLayout}
          />
          <InputFormItem
            name="price"
            label={i18n('entities.products.fields.price')}  
            required={false}
            layout={formItemLayout}
          />
          <InputFormItem
            name="code"
            label={i18n('entities.products.fields.code')}  
            required={false}
            layout={formItemLayout}
          />
          <InputFormItem
            name="category"
            label={i18n('entities.products.fields.category')}  
            required={false}
            layout={formItemLayout}
          />
          <InputFormItem
            name="url"
            label={i18n('entities.products.fields.url')}  
            required={false}
            layout={formItemLayout}
          />

          <Form.Item
            className="form-buttons"
            {...tailFormItemLayout}
          >
            <Button
              loading={saveLoading}
              type="primary"
              onClick={form.handleSubmit(onSubmit)}
              icon={<SaveOutlined />}
            >
              {i18n('common.save')}
            </Button>

            <Button
              disabled={saveLoading}
              onClick={onReset}
              icon={<UndoOutlined />}
            >
              {i18n('common.reset')}
            </Button>

            {props.onCancel && (
              <Button
                disabled={saveLoading}
                onClick={() => props.onCancel()}
                icon={<CloseOutlined />}
              >
                {i18n('common.cancel')}
              </Button>
            )}
          </Form.Item>
        </form>
      </FormProvider>
    </FormWrapper>
  );
};

export default ProductsForm;
