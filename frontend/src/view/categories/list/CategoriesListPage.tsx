import React from 'react';
import { i18n } from 'src/i18n';
import CategoriesListFilter from 'src/view/categories/list/CategoriesListFilter';
import CategoriesListTable from 'src/view/categories/list/CategoriesListTable';
import CategoriesListToolbar from 'src/view/categories/list/CategoriesListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const CategoriesListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.categories.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.categories.list.title')}
        </PageTitle>

        <CategoriesListToolbar />
        <CategoriesListFilter />
        <CategoriesListTable />
      </ContentWrapper>
    </>
  );
};

export default CategoriesListPage;
