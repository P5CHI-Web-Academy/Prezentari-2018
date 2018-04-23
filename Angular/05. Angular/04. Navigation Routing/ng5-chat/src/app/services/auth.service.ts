import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import * as io from 'socket.io-client';

import { Message } from '../datatypes/message.type';
import { Contact } from '../datatypes/contact.type';
import { debug } from 'util';

export class AuthService {
    currentUser: string
    observers = [];

    private notifyObservers(nickName:string) {
        if (this.currentUser !== nickName) {
            this.currentUser = nickName
            this.observers.forEach(observer => {
                observer.next({
                    user: this.currentUser
                });
            })
        }
    }

    getUsername():string {
        return this.currentUser;
    }

    auth(nickName:string):boolean {

        if (nickName === null) {
            this.notifyObservers(nickName);
            return false;
        }
        
        if (!!nickName.match(/^[a-z][a-z\d]+[a-z\d]$/i)) {
            this.notifyObservers(nickName);                
            return true;
        }

        return false;
    }

    authState() {
        return new Observable(observer => {
            this.observers.push(
                observer
            );
            observer.next(
                {
                    user : this.currentUser ? this.currentUser : null
                }
            );
            return () => {
                this.observers = this.observers.filter(item => {
                    return !(item === observer) 
                })
            }
        });
    }
}