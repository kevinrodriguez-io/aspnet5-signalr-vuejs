const spawn = require('child_process').spawn
var cmd = 'npm.cmd'
spawn(cmd, ['run', 'dev'], { stdio: 'inherit', shell: true })
