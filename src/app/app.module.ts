import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PollAppComponent } from './pages/poll-app/poll-app.component';
import { PollDetailsComponent } from './pages/poll-details/poll-details.component';
import { PollPreviewComponent } from './cmps/poll-preview/poll-preview.component';
import { PollFilterComponent } from './cmps/poll-filter/poll-filter.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { PollEditComponent } from './pages/poll-edit/poll-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { PopoverComponent } from './cmps/popover/popover.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DividerModule } from 'primeng/divider';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PollAppComponent,
    PollDetailsComponent,
    PollPreviewComponent,
    PollFilterComponent,
    AppHeaderComponent,
    PollEditComponent,
    PopoverComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RadioButtonModule,
    FormsModule,
    InputSwitchModule,
    HttpClientModule,
    DividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
