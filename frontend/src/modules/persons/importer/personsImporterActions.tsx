import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/persons/importer/personsImporterSelectors';
import PersonsService from 'src/modules/persons/personsService';
import fields from 'src/modules/persons/importer/personsImporterFields';
import { i18n } from 'src/i18n';

const personsImporterActions = importerActions(
  'PERSONS_IMPORTER',
  selectors,
  PersonsService.import,
  fields,
  i18n('entities.persons.importer.fileName'),
);

export default personsImporterActions;