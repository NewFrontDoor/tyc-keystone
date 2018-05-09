var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Speaker Model
 * ==========
 */
var Speaker = new keystone.List('Speaker');

Speaker.add({
  name: { type: Types.Text },
  body: { type: Types.Textarea},
  image: { type: Types.Url}
});


/**
 * Registration
 */
Speaker.defualtColumns = 'name, body, image';
Speaker.register();
