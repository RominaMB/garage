import ProductsService from 'src/modules/products/productsService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'PRODUCTS_VIEW';

const productsViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: productsViewActions.FIND_STARTED,
      });

      const record = await ProductsService.find(id);

      dispatch({
        type: productsViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: productsViewActions.FIND_ERROR,
      });

      getHistory().push('/products');
    }
  },
};

export default productsViewActions;
