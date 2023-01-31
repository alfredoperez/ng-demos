import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ngrxDemoRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ngrxDemoRoutes)],
})
export class NgrxDemoModule {}
