import listActions from 'src/modules/products/list/productsListActions';
import ProductsService from 'src/modules/products/productsService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'PRODUCTS_DESTROY';

const productsDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: productsDestroyActions.DESTROY_STARTED,
      });

      await ProductsService.destroyAll([id]);

      dispatch({
        type: productsDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.products.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/products');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: productsDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: productsDestroyActions.DESTROY_ALL_STARTED,
      });

      await ProductsService.destroyAll(ids);

      dispatch({
        type: productsDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.products.destroyAll.success'),
      );

      getHistory().push('/products');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: productsDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default productsDestroyActions;
