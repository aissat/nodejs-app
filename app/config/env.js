const env = {
  database: 'd9e9vf40ij8444',
  username: 'xvhnjorbruabdc',
  password: '05a027f22870b66ca9b46295e09df92daac3bcd4aa33b511ddc0997c4c6ef0dc',
  host: 'ec2-54-198-252-9.compute-1.amazonaws.com',
  port: 5432,
  dialect: 'postgres',
  logging: console.log,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false 
    }
  },
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};

module.exports = env;