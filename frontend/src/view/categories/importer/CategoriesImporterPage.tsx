import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/categories/importer/categoriesImporterActions';
import fields from 'src/modules/categories/importer/categoriesImporterFields';
import selectors from 'src/modules/categories/importer/categoriesImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const CategoriesImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.categories.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.categories.menu'), '/categories'],
          [i18n('entities.categories.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.categories.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default CategoriesImportPage;
