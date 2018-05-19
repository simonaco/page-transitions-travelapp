import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { FirstNamePipe } from './first-name.pipe';
import { PlaceComponent } from './place/place.component';
import { GroupComponent } from './group/group.component';
import { IndexComponent } from './index/index.component';
import { BaseComponent } from './icons/base.component';
import { CalendarComponent } from './icons/calendar.component';
import { MailComponent } from './icons/mail.component';
import { MailPinComponent } from './icons/mail-pin.component';
import { PlusComponent } from './icons/plus.component';
import { StarEmptyComponent } from './icons/star-empty.component';
import { StarFullComponent } from './icons/star-full.component';
import { ThreeDotComponent } from './icons/three-dot.component';
const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'place', component: PlaceComponent },
  { path: 'group', component: GroupComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    FirstNamePipe,
    PlaceComponent,
    GroupComponent,
    IndexComponent,
    BaseComponent,
    CalendarComponent,
    MailComponent,
    MailPinComponent,
    PlusComponent,
    StarEmptyComponent,
    StarFullComponent,
    ThreeDotComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
