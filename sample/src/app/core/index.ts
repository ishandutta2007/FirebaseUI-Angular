import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// import { CORE_SERVICES } from './modules';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
  ],
  exports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    // ...CORE_SERVICES
  ]
})
export class CoreModule { }