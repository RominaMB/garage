import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/categories/view/categoriesViewActions';
import selectors from 'src/modules/categories/view/categoriesViewSelectors';
import CategoriesView from 'src/view/categories/view/CategoriesView';
import CategoriesViewToolbar from 'src/view/categories/view/CategoriesViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const CategoriesPage = (props) => {
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
          [i18n('entities.categories.menu'), '/categories'],
          [i18n('entities.categories.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.categories.view.title')}
        </PageTitle>

        <CategoriesViewToolbar match={match} />

        <CategoriesView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default CategoriesPage;
