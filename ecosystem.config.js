const fs = require('fs');
const path = require('path');

const env = {loglevel: 'debug'};

const dir = path.join(__dirname, 'packages');

module.exports = {
    apps: fs.readdirSync(dir, {withFileTypes: true}).filter(p => p.isDirectory() && fs.existsSync(`${dir}/${p.name}/manifest.yml`)).map(p => ({
        name: '@vereinsmanager/' + p.name,
        script: 'yarn',
        args: 'start:dev',
        interpreter: '/bin/bash',
        cwd: path.join(dir, p.name),
        watch: ['.', '../lib/dist'],
        env
    }))
};
