import type { Configuration } from 'webpack';

import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';

rules.push({
  test: /\.(png|jpeg|jpg|gif)$/,
  use: {
    loader: 'file-loader',
    options: {
      name: '[name].[ext]',
    }
  }
});

export const mainConfig: Configuration = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: ['./src/index.ts', './src/app_icon.png', './src/close_icon.png'],
  plugins,
  // Put your normal webpack config below here
  module: {
    rules,
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json', '.png'],
  },
  optimization: { minimize: false }
};
