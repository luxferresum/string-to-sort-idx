const stsi = require('../index');
const assert = require('chai').assert;

describe('stringToSortIdx', function() {
  it('should sort alphanumeric values', function() {
  	assert(stsi('a') < stsi('b'), 'single chars are sorted');
  	assert(stsi('d') < stsi('dd'), 'multiples of same char are sorted');
  	assert(stsi('aa') < stsi('ab'), 'non-first char is sorted');
  });

  it('should treat non-alphanumeric values as lowest', function() {
  	assert(stsi('a') < stsi('a?'), 'non alphanumeric is sorted after none');
  	assert(stsi('a?') < stsi('aa'), 'non alphanumeric is sorted first');
  });

  it('should treat uppercase and lowercase the same', function() {
  	assert(stsi('a') === stsi('A'));
  });

  it('works at the nth char', function() {
  	assert(stsi('aaaaaaaab') < stsi('aaaaaaaac'));
  });
});