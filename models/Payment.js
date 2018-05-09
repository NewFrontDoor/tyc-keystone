var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Payment Model
 * ==========
 */
var Payment = new keystone.List('Payment');

Payment.add({
  amountPaid: { type: Types.Number },
  familyName: { type: Types.Text },
  givenName: { type: Types.Text },
  paymentId: { type: Types.Text },
  paymentToken: { type: Types.Text },
  paypalPayerId: { type: Types.Text },
  registration: { type: Types.Relationship, ref: 'Registration'},
  registrationId: { type: Types.Text }
});


/**
 * Registration
 */
Payment.defualtColumns = 'event, givenName, familyName, email, mobileNumber, noYouthGroup, youthGroup';
Payment.register();
