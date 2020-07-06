import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'page', loadChildren: 'app/core/modules/second-page/second.module#SecondModule'},
  {path: '', loadChildren: 'app/core/modules/main/main.module#MainModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

