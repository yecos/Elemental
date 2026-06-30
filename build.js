// Cross-platform build wrapper: ensures DATABASE_URL is set for Prisma, then runs next build
process.env.DATABASE_URL = process.env.DATABASE_URL || 'file:./dev.db';

const { execSync } = require('child_process');
const isWindows = process.platform === 'win32';
const npx = isWindows ? 'npx.cmd' : 'npx';
const cmd = `${npx} prisma generate && ${npx} next build`;
execSync(cmd, { stdio: 'inherit', env: process.env, shell: true });
