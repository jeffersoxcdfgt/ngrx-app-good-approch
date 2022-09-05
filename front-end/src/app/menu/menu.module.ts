import { NgModule} from '@angular/core';
import { menuRoutedComponents , MenuRoutingModule} from './menu-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TraceService } from '../shared/utils/traceService';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    SharedModule,
    MenuRoutingModule,
    FormsModule,
  ],
  declarations: [
    menuRoutedComponents,
  ],
  providers: [
    TraceService,
  ]
})
export class MenuModule {}