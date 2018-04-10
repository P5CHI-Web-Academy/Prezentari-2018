/*

we are using the ES6 import syntax to import something from an ES6 module named uuid
we are saying that the module will have a default export because we are using *
We are assigning whatever that single export is and assigning it to a constant named uuid, but what type will it have?

 */

import uuid from 'uuid';

console.log(uuid.v1());

import axios from 'axios';
import {AxiosPromise} from "axios";

const response: AxiosPromise = axios.get('/lessons', {});

import * as _ from 'lodash';

_.each([1, 2, 3, 4, 5], (item: number) => {
    console.log(item);
});
