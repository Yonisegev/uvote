import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { PollAppComponent } from './pages/poll-app/poll-app.component';
import { PollDetailsComponent } from './pages/poll-details/poll-details.component';
import { PollEditComponent } from './pages/poll-edit/poll-edit.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PollResolverService } from './services/poll-resolver.service';

const routes: Routes = [
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
    path: 'create',
    component: PollEditComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: HomepageComponent,
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
