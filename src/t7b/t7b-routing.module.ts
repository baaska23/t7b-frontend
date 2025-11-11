import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminPageComponent } from "./pages/admin/admin-page.component";
import { ClassPageComponent } from "./pages/class/class-page.component";
import { DiscussPageComponent } from "./pages/discuss/discuss-page.component";
import { GuidePageComponent } from "./pages/guide/guide-page.component";
import { HomePageComponent } from "./pages/home/home-page.component";
import { LoginDialogComponent } from "./dialogs/login/login-dialog.component";
import { ProfilePageComponent } from "./pages/profile/profile-page.component";
import { SendPageComponent } from "./pages/send/send-page.component";
import { ThesesPageComponent } from "./pages/theses/theses-page.component";

@NgModule({
    imports: [RouterModule.forChild([
        {path: 'admin', component: AdminPageComponent},
        {path: 'class', component: ClassPageComponent},
        {path: 'discuss', component: DiscussPageComponent},
        {path: 'guide', component: GuidePageComponent},
        {path: 'home', component: HomePageComponent},
        {path: 'login', component: LoginDialogComponent},
        {path: 'profile', component: ProfilePageComponent},
        {path: 'send', component: SendPageComponent},
        {path: 'theses', component: ThesesPageComponent},
    ])]
})
export class t7bRoutingModule {}