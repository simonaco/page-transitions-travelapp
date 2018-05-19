import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { FirstNamePipe } from './first-name.pipe';
import { PlaceComponent } from './place/place.component';
import { GroupComponent } from './group/group.component';
import { IndexComponent } from './index/index.component';
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
    IndexComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
