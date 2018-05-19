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
import { StarRatingComponent } from './star-rating/star-rating.component';
import { NavTransitionComponent } from './nav-transition/nav-transition.component';
import { MenuDrawerComponent } from './menu-drawer/menu-drawer.component';
import { StatsComponent } from './stats/stats.component';
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
    ThreeDotComponent,
    StarRatingComponent,
    NavTransitionComponent,
    MenuDrawerComponent,
    StatsComponent
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
