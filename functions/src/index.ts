import * as functions from "firebase-functions";
import { AuthService } from "./service/AuthService";

const authService = new AuthService();

exports.helloWorld = functions.https.onCall((data, context) => {
    return authService.testAuth(data);
});

exports.promoteAdmin = functions.https.onCall((data, context) => {
    return authService.promoteAdmin(data);
});

exports.promotePremium = functions.https.onCall((data, context) => {
    return authService.promotePremium(data);
});

exports.getAllUsers = functions.https.onCall((data, context) => {
    return authService.getAllUsers(data);
})


