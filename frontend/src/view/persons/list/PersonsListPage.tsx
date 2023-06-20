import React from 'react';
import { i18n } from 'src/i18n';
import PersonsListFilter from 'src/view/persons/list/PersonsListFilter';
import PersonsListTable from 'src/view/persons/list/PersonsListTable';
import PersonsListToolbar from 'src/view/persons/list/PersonsListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const PersonsListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.persons.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.persons.list.title')}
        </PageTitle>

        <PersonsListToolbar />
        <PersonsListFilter />
        <PersonsListTable />
      </ContentWrapper>
    </>
  );
};

export default PersonsListPage;
