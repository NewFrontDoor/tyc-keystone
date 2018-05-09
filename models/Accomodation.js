var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Accomodation Model
 * ==========
 */
var Accomodation = new keystone.List('Accomodation');

Accomodation.add({
  name: { type: Types.Text },
	address: { type: Types.Text },
  description: { type: Types.Text },
	email: { type: Types.Email },
	phone: { type: Types.Text },
  website: { type: Types.Url }
});


/**
 * Registration
 */
Accomodation.defualtColumns = 'name, address, description, email, phone, website';
Accomodation.register();
