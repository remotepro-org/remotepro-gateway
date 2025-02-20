import { EnvironmentPlugin } from 'webpack';
import { config } from 'dotenv';

config();

module.exports = {
  plugins: [new EnvironmentPlugin(['AUTH_API_URL', 'API_URL'])],
};
