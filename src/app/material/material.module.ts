import { NgModule } from '@angular/core';

import {MatButtonModule, MatCheckboxModule,MatToolbarModule,
  MatIconModule,MatMenuModule,MatCardModule,MatStepperModule,MatFormFieldModule,MatGridListModule,
MatInputModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,MatToolbarModule,MatStepperModule,MatFormFieldModule,MatGridListModule,
    MatIconModule,MatMenuModule,MatCardModule,MatInputModule],
  exports: [MatButtonModule, MatCheckboxModule,MatToolbarModule,MatStepperModule,MatFormFieldModule,MatGridListModule,
    MatIconModule,MatMenuModule,MatCardModule,MatInputModule],
})
export class MaterialModule { }
