var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Youth Group Model
 * ==========
 */
var YouthGroup = new keystone.List('Youth Group');

YouthGroup.add({
  approved: { type: Types.Boolean},
	name: { type: Types.Text },
  event: { type: Types.Relationship, ref: 'Event' }
});


/**
 * Registration
 */
YouthGroup.defualtColumns = 'youthGroup, event, approved, email, givenName, familyName, mobileNumber';
YouthGroup.register();
