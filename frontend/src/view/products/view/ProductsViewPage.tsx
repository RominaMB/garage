import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/products/view/productsViewActions';
import selectors from 'src/modules/products/view/productsViewSelectors';
import ProductsView from 'src/view/products/view/ProductsView';
import ProductsViewToolbar from 'src/view/products/view/ProductsViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const ProductsPage = (props) => {
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
          [i18n('entities.products.menu'), '/products'],
          [i18n('entities.products.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.products.view.title')}
        </PageTitle>

        <ProductsViewToolbar match={match} />

        <ProductsView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default ProductsPage;
