import * as firebase from 'firebase';
import { tokenKey } from '@angular/core/src/view';

export class AuthService {
    token ='';
    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
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
    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                response => console.log(response)
            )
                
            .catch(
                error => console.log(error)
            )
    }

    getToken() {
        firebase.auth().currentUser.getIdToken()
            .then(
                (token: string) => this.token = token
            )
        return this.token;
    }
}