import listActions from 'src/modules/categories/list/categoriesListActions';
import CategoriesService from 'src/modules/categories/categoriesService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'CATEGORIES_DESTROY';

const categoriesDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: categoriesDestroyActions.DESTROY_STARTED,
      });

      await CategoriesService.destroyAll([id]);

      dispatch({
        type: categoriesDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.categories.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/categories');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: categoriesDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: categoriesDestroyActions.DESTROY_ALL_STARTED,
      });

      await CategoriesService.destroyAll(ids);

      dispatch({
        type: categoriesDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.categories.destroyAll.success'),
      );

      getHistory().push('/categories');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: categoriesDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default categoriesDestroyActions;
