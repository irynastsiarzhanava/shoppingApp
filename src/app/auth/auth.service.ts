import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    token: string;

    constructor(private rouder: Router) {}
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
                    this.rouder.navigate(['/']);
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
        this.rouder.navigate(['/signin']);
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