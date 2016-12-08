var cp = require('child_process');

cp.spawn('npm', ['install'], { cwd: './client' });