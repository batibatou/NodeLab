import assert from 'assert';
import NodeLab from '../lib';

describe('NodeLab', function () {
  it('should have a version number!', function () {
    assert(typeof NodeLab.VERSION !== 'undefined', 'The Project should have a VERSION, whatever the actual version.');
  });
});
