import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TorrentStateComponent} from './components/torrent-state/torrent-state.component';
import {TorrentComponent} from './components/torrent/torrent.component';
import {ProgressBarModule} from 'primeng/progressbar';
import {NgxFilesizeModule} from 'ngx-filesize';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {TooltipModule} from 'primeng/tooltip';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ApiInterceptor} from './api.service';
import {DropdownModule} from 'primeng/dropdown';
import {OrderByPipe} from './order-by.pipe';
import {FormsModule} from '@angular/forms';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {DeleteTorrentOverlayComponent} from './components/delete-torrent-overlay/delete-torrent-overlay.component';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {MomentModule} from 'ngx-moment';
import {MenuModule} from 'primeng/menu';
import {AddTorrentMenuComponent} from './components/add-torrent-menu/add-torrent-menu.component';
import {DialogService, DynamicDialogModule} from 'primeng/dynamicdialog';
import {AddTorrentMagnetInputComponent} from './components/add-torrent-menu/add-torrent-magnet-input/add-torrent-magnet-input.component';
import {InputTextModule} from 'primeng/inputtext';
import {AddTorrentConfigComponent} from './components/add-torrent-menu/add-torrent-config/add-torrent-config.component';
import {AccordionModule} from 'primeng/accordion';
import {InputNumberModule} from 'primeng/inputnumber';
import {CheckboxModule} from 'primeng/checkbox';
import {TorrentDetailsDialogComponent} from './components/torrent-details-dialog/torrent-details-dialog.component';
import {AddTorrentUrlInputComponent} from './components/add-torrent-menu/add-torrent-url-input/add-torrent-url-input.component';
import {MessagesModule} from 'primeng/messages';
import {AddTorrentFileInputComponent} from './components/add-torrent-menu/add-torrent-file-input/add-torrent-file-input.component';
import {FileUploadModule} from 'primeng/fileupload';
import {BreakpointOverlayComponent} from './components/breakpoint-overlay/breakpoint-overlay.component';
import { TorrentSearchPipe } from './torrent-search.pipe';
import { ConnectivityStatusComponent } from './components/connectivity-status/connectivity-status.component';
import { TorrentSearchComponent } from './components/torrent-search/torrent-search.component';

@NgModule({
  declarations: [
    AppComponent,
    TorrentStateComponent,
    TorrentComponent,
    OrderByPipe,
    DeleteTorrentOverlayComponent,
    AddTorrentMenuComponent,
    AddTorrentMagnetInputComponent,
    AddTorrentConfigComponent,
    TorrentDetailsDialogComponent,
    AddTorrentUrlInputComponent,
    AddTorrentFileInputComponent,
    BreakpointOverlayComponent,
    TorrentSearchPipe,
    ConnectivityStatusComponent,
    TorrentSearchComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    NgxFilesizeModule,
    ProgressBarModule,
    MenuModule,
    ButtonModule,
    RippleModule,
    TooltipModule,
    DropdownModule,
    FormsModule,
    OverlayPanelModule,
    ProgressSpinnerModule,
    DynamicDialogModule,
    MomentModule,
    InputTextModule,
    AccordionModule,
    InputNumberModule,
    CheckboxModule,
    MessagesModule,
    FileUploadModule,
  ],
  entryComponents: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
    DialogService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}