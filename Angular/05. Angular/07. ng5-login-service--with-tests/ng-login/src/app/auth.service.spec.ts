import {
  JsonpModule,
  Jsonp,
  BaseRequestOptions,
  Response,
  ResponseOptions,
  Http
} from "@angular/http";

import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClient, HttpParams, HttpClientModule } from '@angular/common/http';
import {MockBackend} from "@angular/http/testing";


describe('AuthService', () => {
  let service: AuthService;
  let backend: MockBackend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        AuthService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: HttpClient,
          useFactory: (backend, options) => HttpClient,
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });

    // Get the MockBackend
    backend = TestBed.get(MockBackend);

    service = TestBed.get(AuthService);
  });

  it('login should return status', fakeAsync(() => {
    let loginCredentials = 'user=' + encodeURIComponent("username") + '&' +
    'password=' + encodeURIComponent("password");

    backend.connections.subscribe(connection => {
      connection.mockRespond(new Response(<ResponseOptions>{
        body: loginCredentials
      }));
    });

    // // Perform a request and make sure we get the response we expect
    // service.login("username", "password");
    tick();

    expect(service.token).toBe('');
  }));

});
