import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// import { SHARED_MODELS } from './models';
import { SHARED_SERVICES } from './services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    // ...SHARED_MODELS
  ],
  exports: [
    CommonModule,
    FormsModule//,
    // ...SHARED_MODELS
  ],
  providers: [
    ...SHARED_SERVICES
  ]
})
export class SharedModule { }