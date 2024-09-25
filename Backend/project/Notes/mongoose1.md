# Schema: Shape of document inside a perticular collection.

The permitted SchemaTypes are:

String
Number
Date
Buffer :  way to store and manipulate binary data.
Boolean
Mixed
ObjectId
Array
Decimal128
Map
UUID

e.g date: { type: Date, default: Date.now },

did u know?
POJO : plain old Java object (POJO) is an ordinary Java object, not bound by any special restriction.

# SchemaType Options:
You can add any property you want to your SchemaType options.
Many plugins rely on custom SchemaType options. For example, the mongoose-autopopulate plugin

- required: boolean or function, if true adds a required validator for this property
- default: Any or function, sets a default value for the path. If the value is a function, the return value of the function is used as the default.
- select: boolean, specifies default projections for queries
- validate: function, adds a validator function for this property
- get: function, defines a custom getter for this property using Object.defineProperty().
- set: function, defines a custom setter for this property using Object.defineProperty().
- alias: string, mongoose >= 4.10.0 only. Defines a virtual with the given name that gets/sets this path.
- immutable: boolean, defines path as immutable. Mongoose prevents you from changing immutable paths unless the parent document has isNew: true.
- transform: function, Mongoose calls this function when you call Document#toJSON() function, including when you JSON.stringify() a document.

# Indexes
You can also define MongoDB indexes using schema type options.

index: boolean, whether to define an index on this property.
unique: boolean, whether to define a unique index on this property.
sparse: boolean, whether to define a sparse index on this property.
const schema2 = new Schema({
  test: {
    type: String,
    index: true,
    unique: true // Unique index. If you specify `unique: true`
    // specifying `index: true` is optional if you do `unique: true`
  }
});

# String
lowercase: boolean, whether to always call .toLowerCase() on the value
uppercase: boolean, whether to always call .toUpperCase() on the value
trim: boolean, whether to always call .trim() on the value
match: RegExp, creates a validator that checks if the value matches the given regular expression
enum: Array, creates a validator that checks if the value is in the given array.
minLength: Number, creates a validator that checks if the value length is not less than the given number
maxLength: Number, creates a validator that checks if the value length is not greater than the given number
populate: Object, sets default populate options

# Number
min: Number, creates a validator that checks if the value is greater than or equal to the given minimum.
max: Number, creates a validator that checks if the value is less than or equal to the given maximum.
enum: Array, creates a validator that checks if the value is strictly equal to one of the values in the given array.
populate: Object, sets default populate options

# Date
min: Date, creates a validator that checks if the value is greater than or equal to the given minimum.
max: Date, creates a validator that checks if the value is less than or equal to the given maximum.
expires: Number or String, creates a TTL index with the value expressed in seconds.

# ObjectId
populate: Object, sets default populate options


<!-- ---------------------------------------------------------------------------------------------------------- -->

# Instance methods

Instances of Models are documents. Documents have many of their own built-in instance methods. We may also define our own custom document instance methods.

const animalSchema = new Schema({ name: String, type: String },
  {
  // Assign a function to the "methods" object of our animalSchema through schema options.
  // By following this approach, there is no need to create a separate TS type to define the type of the instance functions.
    methods: {
      findSimilarTypes(cb) {
        return mongoose.model('Animal').find({ type: this.type }, cb);
      }
    }
  });


// Or, assign a function to the "methods" object of our animalSchema
animalSchema.methods.findSimilarTypes = function(cb) {
  return mongoose.model('Animal').find({ type: this.type }, cb);
};


Now all of our animal instances have a findSimilarTypes method available to them.

const Animal = mongoose.model('Animal', animalSchema);
const dog = new Animal({ type: 'dog' });

dog.findSimilarTypes((err, dogs) => {
  console.log(dogs); // woof
});

# statics
# Query Helpers
# Indexes
# Virtuals
# Aliases  <!-- check this all -->