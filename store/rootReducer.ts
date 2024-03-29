import { combineReducers } from 'redux';
import appUnitReducer from './unit';
import appMaterialReducer from './material';
import appProsedureReducer from './prosedure';
import appReceiptReducer from './receipt';

const rootReducer = combineReducers({
  appUnit: appUnitReducer,
  appMaterial: appMaterialReducer,
  appProsedure: appProsedureReducer,
  appReceipt: appReceiptReducer,
})

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;