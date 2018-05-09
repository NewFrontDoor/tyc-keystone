var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Event Model
 * ==========
 */
var Event = new keystone.List('Event');

Event.add({
  name: { type: Types.Text},
	body: { type: Types.Textarea },
  earlyBioffrdCut: { type: Types.Date },
	earlyBirdLeaderPrice: { type: Types.Number },
	earlyBirdPrice: { type: Types.Number },
  fromDate: { type: Types.Date },
  toDate: { type: Types.Date },
  registrationCloseDate: { type: Types.Date },
  registrationOpenDate: { type: Types.Date },
  standardLeaderPrice: { type: Types.Number},
  standardPrice: { type: Types.Number }
});


/**
 * Registration
 */
Event.defualtColumns = 'name, body, fromDate, toDate, standardPrice, standardLeaderPrice';
Event.register();
