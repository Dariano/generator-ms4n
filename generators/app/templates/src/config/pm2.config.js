module.exports = {
    apps: [
      {
        name: "<%= name %>",
        script: "./src/bin/www",
        watch: false,
        instances: 1,
        exec_mode: "cluster",
        env: {
          NODE_ENV: process.env.NODE_ENV,
          PORT: process.env.PORT
        },
        env_dev: {
          NODE_ENV: 'dev',
          watch: true
        },
        env_test: {
          NODE_ENV: 'test'
        },
        env_prd: {
          NODE_ENV: 'prd'
        },
        env_hlg: {
          NODE_ENV: 'hlg'
        }
      }
    ]
  };
  