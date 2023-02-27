

import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TestScheduler } from "rxjs/testing"
import { LoginService } from "../services/login-profile.service";
import { LoginEffects } from "./login.effects"
import { Observable, of } from 'rxjs'
import { Action } from "@ngrx/store";
import { LoginActionTypes } from "../actions/login.actions";
import { Login } from "../../model/login";
import { Router } from "@angular/router";
import { MenuComponent } from "src/app/menu/menu.component";
import { provideMockStore } from "@ngrx/store/testing";
import { Pipe, PipeTransform } from "@angular/core";
import { MATERIAL_MODULES } from "src/app/shared/shared.module";

const MockData = {
    requestdata: {
        email: "admin@admin.com",
        password: "admin"
    },
    responsedata: {
        status: "success",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWF0IjoxNjc3MjY4MTc1LCJleHAiOjE2NzcyNjk2MTV9.YNkV8v6oNrVf1wdiZhNusmfpPQOZO3_J60Bup9rwsco",
        email: "admin@admin.com",
        password: "admin"
    },
    error: null
}

const loginData = {
    email: 'admin@admin.com',
    password: 'admin'
}
const LoginServiceMock = {
    logIn(payload: Login) {
        return of(payload)
    }
}

const mockRouter: any = {
    navigate: (() => {
        return {
            then: (() => { })
        }
    }),
    navigateByUrl: jasmine.createSpy('navigateByUrl')
}

@Pipe({
    name: 'nullObjectToConvert'
  })
  class NullObjectToConvertMockPipe implements PipeTransform  {
    transform(): string {
      return ''
    }
  }

describe('LoginEffects', () => {
    let actions$: Observable<Action>;
    let component: MenuComponent;
    let fixture: ComponentFixture<MenuComponent>;


    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                MenuComponent,
                NullObjectToConvertMockPipe
            ],
            imports: [
                MATERIAL_MODULES
            ],
            providers: [
                { provide: LoginService, useValue: LoginServiceMock },
                { provide: Router, useValue: mockRouter },
                provideMockStore({
                    initialState: MockData
                })
            ],
        })
        .compileComponents();

        fixture = TestBed.createComponent(MenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should correctly call LoginEffects loginSuccess', () => {
        const scheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        })

        scheduler.run(() => {
            actions$ = of({ type: LoginActionTypes.GET_LOGIN_SUCCESS });
            // mock the service to prevent an HTTP request
            const loginServiceSpy = TestBed.inject(LoginService);
            loginServiceSpy.logIn(loginData);
            const effects = new LoginEffects(actions$, loginServiceSpy, mockRouter);

            // subscribe to the Effect stream and verify it dispatches a SUCCESS action
            effects.loginSuccess$.subscribe(action => {
                expect(action).toEqual({
                    type: LoginActionTypes.GET_LOGIN_SUCCESS
                });

            });
        })
    })


    it('should correctly call LoginEffects logOut', () => {
        const scheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        })

        scheduler.run(() => {
            actions$ = of({ type: LoginActionTypes.LOGOUT });
            // mock the service to prevent an HTTP request
            const loginServiceSpy = TestBed.inject(LoginService);
            component.logout();
            const effects = new LoginEffects(actions$, loginServiceSpy, mockRouter);

            // subscribe to the Effect stream and verify it dispatches a SUCCESS action
            effects.loginSuccess$.subscribe(action => {
                expect(action).toEqual({
                    type: LoginActionTypes.LOGOUT
                });

            });
        })
    })


})
