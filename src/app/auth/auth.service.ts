import * as firebase from 'firebase';
import { tokenKey } from '@angular/core/src/view';

export class AuthService {
    token: string;
    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(
                response => console.log(response)
            )             
            .catch(
                error => console.log(error)
            )
    }
    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)          
            .then(
                response => {
                    firebase.auth().currentUser.getIdToken()
                        .then(
                            (token: string) => this.token = token
                        )
                }
            )               
            .catch(
                error => console.log(error)
            )
    }

    logout() {
        firebase.auth().signOut();
        this.token = null;
    }

    getToken() {
        firebase.auth().currentUser.getIdToken()
            .then(
                (token: string) => this.token = token
            )
        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }
}