import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { PollAppComponent } from './pages/poll-app/poll-app.component';
import { PollDetailsComponent } from './pages/poll-details/poll-details.component';
import { PollEditComponent } from './pages/poll-edit/poll-edit.component';
import { PollResultsComponent } from './pages/poll-results/poll-results.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { PollResolverService } from './services/resolvers/poll-resolver.service';
import { UserResolver } from './services/resolvers/user.resolver';

const routes: Routes = [
  {
    path: 'poll/:id/results',
    component: PollResultsComponent,
    resolve: { poll: PollResolverService },
    runGuardsAndResolvers: 'paramsChange',
    pathMatch: 'full',
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
    path: 'u/:id',
    component: UserProfileComponent,
    resolve: { user: UserResolver },
    runGuardsAndResolvers: 'paramsChange',
  },
  {
    path: 'poll',
    component: PollAppComponent,
  },
  {
    path: 'create',
    component: PollEditComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    component: HomepageComponent,
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
