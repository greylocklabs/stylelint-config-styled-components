import fs from 'fs';

import stylelint from 'stylelint';

import config from '..';

const validTsx = fs.readFileSync('./test/data/pass.tsx', 'utf-8');
const invalidTsx = fs.readFileSync('./test/data/fail.tsx', 'utf-8');

describe('stylelint config', () => {
  describe('tsx files', () => {
    it('valid: does not throw any errors or warnings', async () => {
      const result = await stylelint.lint({ code: validTsx, config });

      expect(result.errored).toBeFalsy();
      expect(result.results[0].warnings).toHaveLength(0);
    });

    it('invalid: throws error and flags one warning', async () => {
      const result = await stylelint.lint({ code: invalidTsx, config });

      expect(result.errored).toBeTruthy();
      expect(result.results[0].warnings).toHaveLength(1);
    });
  });
});
