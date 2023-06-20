import React from 'react';
import { i18n } from 'src/i18n';
import ProductsListFilter from 'src/view/products/list/ProductsListFilter';
import ProductsListTable from 'src/view/products/list/ProductsListTable';
import ProductsListToolbar from 'src/view/products/list/ProductsListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const ProductsListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.products.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.products.list.title')}
        </PageTitle>

        <ProductsListToolbar />
        <ProductsListFilter />
        <ProductsListTable />
      </ContentWrapper>
    </>
  );
};

export default ProductsListPage;
