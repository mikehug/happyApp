'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('aiapi service', function() {
  it('registered the aiapis service', () => {
    assert.ok(app.service('aiapis'));
  });
});
