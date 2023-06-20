import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/persons/view/personsViewActions';
import selectors from 'src/modules/persons/view/personsViewSelectors';
import PersonsView from 'src/view/persons/view/PersonsView';
import PersonsViewToolbar from 'src/view/persons/view/PersonsViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const PersonsPage = (props) => {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.persons.menu'), '/persons'],
          [i18n('entities.persons.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.persons.view.title')}
        </PageTitle>

        <PersonsViewToolbar match={match} />

        <PersonsView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default PersonsPage;
