// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { NativeScriptModule, platformNativeScriptDynamic } from "nativescript-angular/platform";
import { NativeScriptDevToolsMonitors } from "ngrx-devtools-nativescript";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { NgModule } from "@angular/core";
import { StoreModule } from '@ngrx/store';

import { AppComponent } from "./app.component";
import { boardReducer } from './board.reducer';
import { logger } from './logger.metareducer';
import { BoardComponent } from './board.component';
import { PlayerPipe } from './player.pipe';

@NgModule({
  declarations: [AppComponent, BoardComponent, PlayerPipe],
  imports: [
    NativeScriptModule,
    NativeScriptDevToolsMonitors,
    StoreModule.provideStore({ board: logger(boardReducer) }),
    StoreDevtoolsModule.instrumentStore()
  ],
  bootstrap: [AppComponent]
})
class AppModule { };

platformNativeScriptDynamic().bootstrapModule(AppModule);