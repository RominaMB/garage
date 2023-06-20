import ProductsService from 'src/modules/products/productsService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'PRODUCTS_FORM';

const productsFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: productsFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ProductsService.find(id);
      }

      dispatch({
        type: productsFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: productsFormActions.INIT_ERROR,
      });

      getHistory().push('/products');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: productsFormActions.CREATE_STARTED,
      });

      await ProductsService.create(values);

      dispatch({
        type: productsFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.products.create.success'),
      );

      getHistory().push('/products');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: productsFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: productsFormActions.UPDATE_STARTED,
      });

      await ProductsService.update(id, values);

      dispatch({
        type: productsFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.products.update.success'),
      );

      getHistory().push('/products');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: productsFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default productsFormActions;
