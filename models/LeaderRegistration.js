var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Leader Registration Model
 * ==========
 */
var LeaderRegistration = new keystone.List('Leader Registration');

LeaderRegistration.add({
  approved: { type: Types.Boolean},
	email: { type: Types.Email },
  event: { type: Types.Relationship, ref: 'Event' },
	familyName: { type: Types.Text },
	givenName: { type: Types.Text },
  mobileNumber: { type: Types.Text },
  youthGroup: { type: Types.Relationship, ref: 'Youth Group'}
});


/**
 * Registration
 */
LeaderRegistration.defualtColumns = 'youthGroup, event, approved, email, givenName, familyName, mobileNumber';
LeaderRegistration.register();
