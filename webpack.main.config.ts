import type { Configuration } from 'webpack';

import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';

rules.push({
  test: /\.(png|jpeg|jpg|gif|ico)$/,
  use: {
    loader: 'file-loader',
    options: {
      name: 'images/[name].[ext]',
    }
  }
});

export const mainConfig: Configuration = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: [
    './src/index.ts',
    './src/images/app_icon.png',
    './src/images/app_icon.ico',
    './src/images/app_icon_fill.png',
    './src/images/app_icon_fill.ico',
    './src/images/close_icon.png',
    './src/images/install_icon.ico'
  ],
  plugins,
  // Put your normal webpack config below here
  module: {
    rules,
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json', '.png', 'ico', 'icns'],
  },
  optimization: { minimize: false }
};
