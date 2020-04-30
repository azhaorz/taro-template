module.exports = {
  env: {
    NODE_ENV: '"development"',
  },
  plugins: [
    [
      '@tarojs/plugin-mock',
      {
        mocks: {
          '/api/mock/1': {
            name: 'hanzhaorz',
            desc: 'author',
          },
        },
      },
    ],
  ],
  defineConstants: {},
  mini: {},
  h5: {},
};
