const path = require('path');

module.exports = {
  entry: './src/index.js', // Ваш вхідний файл
  output: {
    filename: 'bundle.js', // Вихідний файл
    path: path.resolve(__dirname, 'dist'), // Директорія для збірки
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Використовуємо Babel для трансформації JavaScript
        },
      },
    ],
  },
};
