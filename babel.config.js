module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins:
    process.env.NODE_ENV === 'production' ? [
      'transform-remove-console',
      '@babel/plugin-proposal-class-properties',
    ] : [
      '@babel/plugin-transform-private-methods',
      '@babel/plugin-proposal-class-properties',
    ],
};
