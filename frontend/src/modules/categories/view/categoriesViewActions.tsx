import CategoriesService from 'src/modules/categories/categoriesService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'CATEGORIES_VIEW';

const categoriesViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: categoriesViewActions.FIND_STARTED,
      });

      const record = await CategoriesService.find(id);

      dispatch({
        type: categoriesViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: categoriesViewActions.FIND_ERROR,
      });

      getHistory().push('/categories');
    }
  },
};

export default categoriesViewActions;
