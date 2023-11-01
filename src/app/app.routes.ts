import { Routes } from "@angular/router";
import { GroupComponent } from "./group/group.component";
import { IndexComponent } from "./index/index.component";
import { PlaceComponent } from "./place/place.component";

export const routes: Routes = [
  { path: "", redirectTo: "index", pathMatch: "full" },
  { path: "index", component: IndexComponent, data: { state: "index" } },
  { path: "place", component: PlaceComponent, data: { state: "place" } },
  { path: "group", component: GroupComponent, data: { state: "group" } },
];
