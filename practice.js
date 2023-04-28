const bcrypt = require('bcrypt')
const { MongoClient, ServerApiVersion } = require('mongodb')

function login(email, password, callback) {
  const uri =
    'mongodb+srv://Admin:0kIYOGSzgyIdEJpb@cluster0.4fg0hx2.mongodb.net/?retryWrites=true&w=majority'
  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  })
  try {
    client.connect(function (err) {
      if (err) return callback(err)

      const db = client.db('iron-vault')
      const users = db.collection('gymMembers')

      users.findOne({ email: email }, function (err, user) {
        if (err || !user) {
          client.close()
          return callback(err || new WrongUsernameOrPasswordError(email))
        }

        bcrypt.compare(password, user.password, function (err, isValid) {
          client.close()
          if (err || !isValid)
            return callback(err || new WrongUsernameOrPasswordError(email))
          return callback(null, {
            user_id: user._id.toString(),
            username: user.username,
            email: user.email,
          })
        })
      })
    })
  } finally {
    console.log('did we make it?')
  }
}
