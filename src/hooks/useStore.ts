import { useReducer } from 'react';
import { initialState, translate } from '../reducers/translate';
import { FromLanguage, Language } from '../types';

export function useStore() {
  const [{ fromLanguage, toLanguage, fromText, result, loading }, dispatch] =
    useReducer(translate, initialState);

  const interchangeLanguages = () => {
    dispatch({ type: 'INTERCHANGE_LANGUAGES' });
  };

  const setFromLanguage = (payload: FromLanguage): void => {
    dispatch({
      type: 'SET_FROM_LANGUAGE',
      payload,
    });
  };

  const setToLanguage = (payload: Language) => {
    dispatch({
      type: 'SET_TO_LANGUAGE',
      payload,
    });
  };

  const setFromText = (payload: string) => {
    dispatch({
      type: 'SET_FROM_TEXT',
      payload,
    });
  };

  const setResult = (payload: string) => {
    dispatch({
      type: 'SET_RESULT',
      payload,
    });
  };

  return {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult,
  };
}
