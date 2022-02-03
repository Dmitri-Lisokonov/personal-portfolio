import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
//import * as corsModule from "cors";
const serviceAccount = require("../src/firebase-admin.json");
//const cors = require("cors")({ origin: true });

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://portfolio-7e0dd-default-rtdb.europe-west1.firebasedatabase.app"
});

exports.helloWorld = functions.https.onCall((data, context) => {
    return {
        message: "hi"
    }
    // cors(req, res, () => {
    //     res.send(req.body);
    // })
});
