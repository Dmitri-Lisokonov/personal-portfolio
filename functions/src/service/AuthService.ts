import { ResponseObject } from "../entities/ResponseObject";
import { ResponseStatus } from "../entities/ResponseStatus";
import { app } from "../firebase";

export class AuthService {
    public testAuth(data: any) {
        console.log("data: ", data);
        return app.auth().verifyIdToken(data.user.token)
            .then((claims) => {
                if (claims.admin === true) {
                    return new ResponseObject(ResponseStatus.SUCCESS, "You are an admin");
                }
                else if (claims.premium === true) {
                    return new ResponseObject(ResponseStatus.SUCCESS, "You are a premium user");
                }
                else {
                    return new ResponseObject(ResponseStatus.SUCCESS, "You are an normal user");
                }
            })
            .catch((error) => {
                return new ResponseObject(ResponseStatus.SUCCESS, "Something went");
            })
    }

    public promoteAdmin(data: any) {
        return app.auth().verifyIdToken(data.user.token)
            .then((user) => {
                if (user.admin === true) {
                    return app.auth().setCustomUserClaims(data.target, { admin: true })
                        .then((result) => {
                            return new ResponseObject(ResponseStatus.SUCCESS, "Promoted to admin")
                        })
                        .catch((error) => {
                            return new ResponseObject(ResponseStatus.FAILED, "Unauthorized")
                        })
                }
                else {
                    return new ResponseObject(ResponseStatus.FAILED, "Something went wrong")
                }

            })
    }

    public promotePremium(data: any) {
        return app.auth().verifyIdToken(data.user.token)
            .then((user) => {
                if (user.admin === true) {
                    return app.auth().setCustomUserClaims(data.target, { premium: true })
                        .then((result) => {
                            return new ResponseObject(ResponseStatus.SUCCESS, "Promoted to premium");
                        })
                        .catch((error) => {
                            return new ResponseObject(ResponseStatus.FAILED, "Something went wrong");
                        })
                }
                else {
                    return new ResponseObject(ResponseStatus.FAILED, "Unauthorized");
                }

            })
            .catch((error) => {
                return new ResponseObject(ResponseStatus.FAILED, "Unauthorized");
            })
    }

    public getAllUsers(data: any) {
        //const pageToken = ""
        return app.auth().verifyIdToken(data.user.token)
            .then((user) => {
                if (user.admin === true) {
                    return app.auth().listUsers(Number(data.target))
                        .then((result) => {
                            return new ResponseObject(ResponseStatus.SUCCESS, result);
                        })
                        .catch((error) => {
                            return new ResponseObject(ResponseStatus.FAILED, "Something went wrong");
                        })
                }
                else {
                    return new ResponseObject(ResponseStatus.FAILED, "Unauthorized");
                }
            });
    }

}