const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      // Thêm rule cho video (MP4)
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]', // Đặt tên tệp và hash
            outputPath: 'videos/', // Lưu video vào thư mục "videos" trong dist
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
  },
  devServer: {
    static: './public',
    hot: true,
    open: true,
    port: 3000,
    historyApiFallback: true, // ✅ Thêm dòng này vào để xử lý lỗi reload với React Router
  },
  mode: 'development',
};
