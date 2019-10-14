const fs = require('fs');
const path = require('path');

const env = {loglevel: 'debug'};

const dir = path.join(__dirname, 'packages');

module.exports = {
    apps: [
        {
            name: '@vereinsmanager/ui',
            script: 'yarn',
            args: 'start:dev',
            interpreter: '/bin/bash',
            cwd: path.join(dir, 'ui'),
            watch: ['../lib/dist'],
            env
        },
        {
            name: '@vereinsmanager/srv',
            script: 'yarn',
            args: 'start:debug',
            interpreter: '/bin/bash',
            cwd: path.join(dir, 'srv'),
            watch: [path.join(dir, 'srv', 'src')],
            env
        }
    ]
};
