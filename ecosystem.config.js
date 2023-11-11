module.exports = {
	apps: [{
		name: 'containers-iso-api',
		script: 'build/server.js',
		instances: '2',
		exec_mode: 'cluster',
		restart_delay: 3000,
		instance_var: 'INSTANCE_ID',

		// Logs
		output: 'logs/output.log',
		error: 'logs/error.log',
		log_type: 'json',
		log_date_format: 'DD.MM.YYYY HH:mm:ss',
		merge_logs: true,
		append_env_to_name: true
	}],

	deploy: {
		production: {
			host: '81.200.119.204',
			user: 'www',
			repo: 'git@bitbucket.org:apptech-team/containers-iso-api.git',
			ref: 'origin/master',
			path: '/home/www/containers-iso-api',
			'pre-deploy-local': 'echo "Deploying code to servers"',
			'post-deploy': 'yarn; yarn run build; pm2 startOrGracefulReload ecosystem.config.js s --env production'
		},
		development: {
			host: '193.176.79.140',
			user: 'www',
			repo: 'git@bitbucket.org:apptech-team/containers-iso-api.git',
			ref: 'origin/develop',
			path: '/home/www/containers-iso-api',
			'pre-deploy-local': 'echo "Deploying code to servers"',
			'post-deploy': 'yarn; yarn run build; pm2 startOrGracefulReload ecosystem.config.js --env development'
		}
	}
}
