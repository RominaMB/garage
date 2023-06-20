import PersonsService from 'src/modules/persons/personsService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'PERSONS_FORM';

const personsFormActions = {
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
        type: personsFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await PersonsService.find(id);
      }

      dispatch({
        type: personsFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: personsFormActions.INIT_ERROR,
      });

      getHistory().push('/persons');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: personsFormActions.CREATE_STARTED,
      });

      await PersonsService.create(values);

      dispatch({
        type: personsFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.persons.create.success'),
      );

      getHistory().push('/persons');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: personsFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: personsFormActions.UPDATE_STARTED,
      });

      await PersonsService.update(id, values);

      dispatch({
        type: personsFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.persons.update.success'),
      );

      getHistory().push('/persons');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: personsFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default personsFormActions;
