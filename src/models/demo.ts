import { apiMock } from '@/services/demo';

export default {
  namespace: 'demo',
  state: {
    demoState: 'demoState init',
  },
  effects: {
    *demoEffect({ payload }, { call, put }) {
      try {
        const res = yield call(apiMock, payload);
        console.log(res);
      } catch (error) {
        console.log(error);
      }

      yield put({ type: 'demoReducer', payload });
    },
  },
  reducers: {
    demoReducer(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
