import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { MessagesComponent } from './messages/messages.component';
import { ChatComponent } from './chat/chat.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({ declarations: [
        AppComponent,
        DashboardComponent,
        ChatComponent,
        MessagesComponent,
        HeroSearchComponent,
        DemoComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
