import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminPageComponent } from "./pages/admin/admin-page.component";
import { ClassPageComponent } from "./pages/class/class-page.component";
import { GuideListPageComponent } from "./pages/guide-list/guide-list-page.component";
import { HomePageComponent } from "./pages/home/home-page.component";
import { LoginDialogComponent } from "./dialogs/login/login-dialog.component";
import { ProfilePageComponent } from "./pages/profile/profile-page.component";
import { SendPageComponent } from "./pages/send/send-page.component";
import { ThesesListPageComponent } from "./pages/theses-list/theses-list-page.component";
import { TemplateListPageComponent } from "./pages/template-list/template-list-page.component";
import { ClassListPageComponent } from "./pages/class-list/class-list-page.component";
import { GuidePageComponent } from "./pages/guide/guide-page.component";
import { TemplatePageComponent } from "./pages/template/template-page.component";
import { ThesisPageComponent } from "./pages/thesis/thesis-page.component";

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        {path: 'admin', component: AdminPageComponent},
        {path: 'class-list', component: ClassListPageComponent},
        {path: 'class-list/:classId', component: ClassPageComponent},
        {path: 'guide-list', component: GuideListPageComponent},
        {path: 'guide-list/:guideId', component: GuidePageComponent},
        {path: 'home', component: HomePageComponent},
        {path: 'login', component: LoginDialogComponent},
        {path: 'profile', component: ProfilePageComponent},
        {path: 'send', component: SendPageComponent},
        {path: 'theses-list', component: ThesesListPageComponent},
        {path: 'theses-list/:thesisId', component: ThesisPageComponent},
        {path: 'template-list', component: TemplateListPageComponent},
        {path: 'template-list/:templateId', component: TemplatePageComponent}
    ])]
})
export class t7bRoutingModule {}