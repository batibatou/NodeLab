import assert from 'assert';
import { should } from 'chai';
import NodeLab from '../lib';

describe('NodeLab', function () {
  it('should have a version number!', function () {
    assert(typeof NodeLab.VERSION !== 'undefined', 'The Project should have a VERSION, whatever the actual version.');
  });
});
should();

describe('NodeLab', function () {
  it('should have a version number!', function () {
    NodeLab.should.have.property('VERSION');
  });
});
