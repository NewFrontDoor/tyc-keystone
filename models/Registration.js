var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Registration Model
 * ==========
 */
var Registration = new keystone.List('Registration');

Registration.add({
  email: { type: Types.Email },
  event: { type: Types.Relationship, ref: 'Event'},
  familyName: { type: Types.Text },
  givenName: { type: Types.Text },
  mobileNumber: { type: Types.Text },
  noYouthGroup: { type: Types.Boolean },
  youthGroup: { type: Types.Relationship, ref: 'Youth Group' },
});


/**
 * Registration
 */
Registration.defualtColumns = 'event, givenName, familyName, email, mobileNumber, noYouthGroup, youthGroup';
Registration.register();
