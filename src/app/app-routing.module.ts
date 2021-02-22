import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PollAppComponent } from './pages/poll-app/poll-app.component';
import { PollDetailsComponent } from './pages/poll-details/poll-details.component';
import { PollResolverService } from './services/poll-resolver.service';

const routes: Routes = [
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
