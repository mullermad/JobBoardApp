const accountSid = 'AC2872b583f72f605fb102e1e5f2c4e0b2';
const authToken = 'b28bf3e53976168b864d08f1597c7a22';

const client = require('twilio')(accountSid, authToken);

// Function to send SMS notification using Twilio
const sendSMSNotification = async (phoneNumber, messageType) => {
  try {
    let message;
  
    switch (messageType) {
      case 'create':
        message = 'You have successfully create and joined the Equb group.';
        break;
      case 'join':
        message = 'You have successfully joined the Equb group.';
        break;
      case 'start':
        message = 'The Equb group has started.';
        break;
      case 'completed':
        message = 'The Equb group has completed.';
        break;
      case 'payment':
        message = 'Payment announcement for the Equb group.';
        break;
      default:
        message = 'This is a notification from your Equb group.';
    }
  
    const response = await client.messages.create({
      body: message,
      from: '+14065217076',
      to: phoneNumber,
    });
  
    console.log('SMS sent successfully:', response.sid);
  } catch (error) {
    console.error('Error sending SMS:', error);
  }
};

module.exports = sendSMSNotification;
