import { AUTO_LANGUAGE } from '../constants';
import { Action, type State } from '../types.d';

export const initialState: State = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false,
};

export const translate = (state: State, action: Action): State => {
  const { type } = action;

  if (type === 'INTERCHANGE_LANGUAGES') {
    if (state.fromLanguage === AUTO_LANGUAGE) return state;
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage,
    };
  }
  if (type === 'SET_FROM_LANGUAGE') {
    return {
      ...state,
      fromLanguage: action.payload,
    };
  }
  if (type === 'SET_TO_LANGUAGE') {
    if (state.toLanguage === action.payload) return state;
    const loading = state.fromText !== '';
    return {
      ...state,
      toLanguage: action.payload,
      loading,
    };
  }
  if (type === 'SET_FROM_TEXT') {
    const loading = action.payload !== '';
    return {
      ...state,
      loading,
      fromText: action.payload,
      result: '',
    };
  }
  if (type === 'SET_RESULT') {
    return {
      ...state,
      loading: false,
      result: action.payload,
    };
  }

  return state;
};
