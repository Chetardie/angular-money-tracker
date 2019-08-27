import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    private isAuthenticted = false;

    login() {
        this.isAuthenticted = true;
    }

    logout() {
        this.isAuthenticted = false;

        window.localStorage.clear();
    }

    isLoggedIn(): boolean {
        return this.isAuthenticted;
    }
}
