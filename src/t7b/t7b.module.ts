import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminPageComponent } from "./pages/admin/admin-page.component";
import { ClassPageComponent } from "./pages/class/class-page.component";
import { DiscussPageComponent } from "./pages/discuss/discuss-page.component";
import { GuidePageComponent } from "./pages/guide/guide-page.component";
import { HomePageComponent } from "./pages/home/home-page.component";
import { LoginDialogComponent } from "./dialogs/login/login-dialog.component";
import { ProfilePageComponent } from "./pages/profile/profile-page.component";
import { SendPageComponent } from "./pages/send/send-page.component";
import { ThesesPageComponent } from "./pages/theses/theses-page.component";
import { t7bRoutingModule } from "./t7b-routing.module";

@NgModule({
    imports: [
        CommonModule,
        t7bRoutingModule
    ],

    declarations: [
        AdminPageComponent,
        ClassPageComponent,
        DiscussPageComponent,
        GuidePageComponent,
        HomePageComponent,
        LoginDialogComponent,
        ProfilePageComponent,
        SendPageComponent,
        ThesesPageComponent
    ]
})
export class t7bModule {}