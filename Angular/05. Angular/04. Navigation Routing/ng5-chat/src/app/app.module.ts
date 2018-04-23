import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { ChatComponent } from './chat/chat.component';
import { ChatContactItemComponent } from './chat/chat-contact-item/chat-contact-item.component';
import { ChatMessageComponent } from './chat/chat-message/chat-message.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactsComponent,
    AboutComponent,
    ChatComponent,
    ChatContactItemComponent,
    ChatMessageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
