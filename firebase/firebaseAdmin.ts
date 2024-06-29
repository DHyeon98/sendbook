var admin = require("firebase-admin");

var serviceAccount = require("@/adminsdk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
