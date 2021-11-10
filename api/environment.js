const envPort = !!process && process.env.PORT;

const env = {
  host: 'http://localhost',
  port: envPort || 3500,
  getServerPath: () => `${this.host}:${this.port}`
};
module.exports = env;
//export default env;
