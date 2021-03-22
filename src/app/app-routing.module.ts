import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PollAppComponent } from './pages/poll-app/poll-app.component';
import { PollDetailsComponent } from './pages/poll-details/poll-details.component';
import { PollEditComponent } from './pages/poll-edit/poll-edit.component';
import { PollResolverService } from './services/poll-resolver.service';

const routes: Routes = [
  {
    path: 'poll/new',
    component: PollEditComponent,
  },
  {
    path: 'poll/:id/edit',
    component: PollEditComponent,
    resolve: { poll: PollResolverService },
    runGuardsAndResolvers: 'paramsChange',
  },
  {
    path: 'poll/:id',
    component: PollDetailsComponent,
    resolve: { poll: PollResolverService },
    runGuardsAndResolvers: 'paramsChange',
  },
  {
    path: 'poll',
    component: PollAppComponent,
  },
  {
    path: '',
    component: HomepageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
