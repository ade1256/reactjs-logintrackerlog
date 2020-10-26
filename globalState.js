import { createGlobalState } from 'react-hooks-global-state';
export const { GlobalStateProvider, useGlobalState } = createGlobalState({
  tokenGoogle: '',
  token: null,
  user: {
    isLogin: false
  },
  users: []
});
