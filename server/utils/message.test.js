var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'Papa';
    var text = 'Some message';
    var createdAt = new Date().getTime();
    var message = generateMessage(from, text);

//    expect(message.createdAt).toBe(createdAt);
    expect(message).toInclude({from, text});
  });
});
