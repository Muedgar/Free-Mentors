const assert = require('chai').assert;
const app = require('../index');

describe('This hold all the test', function() {
    it('user should sign up', function (){
      assert.response(app.body.status, '200' );
    });
});