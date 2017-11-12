import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { HashLocationStrategy, LocationStrategy, JsonPipe } from '@angular/common';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { ServiceDemoComponent } from './service-demo/service-demo.component';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { ComponentInteractionDemoComponent } from './component-interaction-demo/component-interaction-demo.component';
import { RoutingDemoComponent } from './routing-demo/routing-demo.component';

import { DraggableDirective } from './draggable.directive';

import { CardNumberValidator } from './card-number.validator';

import { DebitCardNumberPipe } from './debit-card-number.pipe';

import { DataService } from './data.service';
import { HttpService } from './http.service';
import { MessageComponent } from './message/message.component';
import { DisplayMessagesComponent } from './display-messages/display-messages.component';
import { ToasterComponent } from './toaster/toaster.component';
import { GlobalMessageService } from './global-message.service';

const routes = [
  { path: 'home', component: HomeComponent },
  { path: 'observables-demo', component: ObservableDemoComponent },
  { path: 'directives-demo', component: DirectiveDemoComponent },
  { path: 'pipes-demo', component: PipeDemoComponent },
  { path: 'services-demo', component: ServiceDemoComponent },
  { path: 'forms-demo', component: FormDemoComponent },
  { path: 'component-interaction-demo', component: ComponentInteractionDemoComponent },
  { path: 'routing-demo', component: RoutingDemoComponent },
  { path: 'routing-demo/contact/:id', component: RoutingDemoComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ObservableDemoComponent,
    DirectiveDemoComponent,
    PipeDemoComponent,
    ServiceDemoComponent,
    FormDemoComponent,
    ComponentInteractionDemoComponent,
    RoutingDemoComponent,
    DraggableDirective,
    DebitCardNumberPipe,
    CardNumberValidator,
    MessageComponent,
    DisplayMessagesComponent,
    ToasterComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    DataService,

    // class provider
    // { provide: LocationStrategy, useClass: HashLocationStrategy },

    // factory provider
    // { 
    //   provide: Http, 
    //   useFactory: (backend: XHRBackend, options: RequestOptions) => {
    //     return new HttpService(backend, options);
    //   },
    //   deps: [XHRBackend, RequestOptions]
    // }
    
    GlobalMessageService,
    JsonPipe    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
