#!/usr/bin/env node

import { run } from './runner';

process.on('uncaughtException', (err) => {
  console.error('It looks like you may have hit a bug in graphql-schema-linter.');
  console.error('');
  console.error('It would be super helpful if you could report this here: https://github.com/cjoudrey/graphql-schema-linter/issues/new');
  console.error('');
  console.error(err);
  process.exit(2);
});

const exitCode = run(process.stdout, process.stdin, process.argv);

process.exit(exitCode);
