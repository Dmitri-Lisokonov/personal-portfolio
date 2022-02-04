import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui'
import { auth } from '../../service/firebase';

export const OAuthLoginComponent = () => {
    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
    ui.start('#firebaseui-auth-container', {
        signInOptions: [
            // List of OAuth providers supported.
            //firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID

        ],

        // Other config options...
    });

    return (
        <div id="firebaseui-auth-container"></div>
    )
}

