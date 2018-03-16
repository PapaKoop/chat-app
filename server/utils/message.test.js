var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'Papa';
    var text = 'Some message';
    // var createdAt = new Date().getTime();
    var message = generateMessage(from, text);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toInclude({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Papa';
    var latitude = 15;
    var longitude = 15;
    var url = 'https://www.google.com/maps?q=15,15';
    var message = generateLocationMessage(from, latitude, longitude);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toInclude({from, url});

  });
});
