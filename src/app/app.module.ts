import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

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

const routes = [
  { path: 'home', component: HomeComponent },
  { path: 'observables-demo', component: ObservableDemoComponent },
  { path: 'directives-demo', component: DirectiveDemoComponent },
  { path: 'pipes-demo', component: PipeDemoComponent },
  { path: 'services-demo', component: ServiceDemoComponent },
  { path: 'forms-demo', component: FormDemoComponent },
  { path: 'component-interaction-demo', component: ComponentInteractionDemoComponent },
  { path: 'routing-demo', component: RoutingDemoComponent },
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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
