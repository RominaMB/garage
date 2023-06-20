import listActions from 'src/modules/persons/list/personsListActions';
import PersonsService from 'src/modules/persons/personsService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'PERSONS_DESTROY';

const personsDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: personsDestroyActions.DESTROY_STARTED,
      });

      await PersonsService.destroyAll([id]);

      dispatch({
        type: personsDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.persons.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/persons');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: personsDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: personsDestroyActions.DESTROY_ALL_STARTED,
      });

      await PersonsService.destroyAll(ids);

      dispatch({
        type: personsDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.persons.destroyAll.success'),
      );

      getHistory().push('/persons');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: personsDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default personsDestroyActions;
