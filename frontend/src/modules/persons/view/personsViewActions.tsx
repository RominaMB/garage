import PersonsService from 'src/modules/persons/personsService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'PERSONS_VIEW';

const personsViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: personsViewActions.FIND_STARTED,
      });

      const record = await PersonsService.find(id);

      dispatch({
        type: personsViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: personsViewActions.FIND_ERROR,
      });

      getHistory().push('/persons');
    }
  },
};

export default personsViewActions;
