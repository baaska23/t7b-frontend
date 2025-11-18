import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminPageComponent } from "./pages/admin/admin-page.component";
import { ClassPageComponent } from "./pages/class/class-page.component";
import { GuidePageComponent } from "./pages/guide/guide-page.component";
import { HomePageComponent } from "./pages/home/home-page.component";
import { LoginDialogComponent } from "./dialogs/login/login-dialog.component";
import { ProfilePageComponent } from "./pages/profile/profile-page.component";
import { SendPageComponent } from "./pages/send/send-page.component";
import { ThesesPageComponent } from "./pages/theses/theses-page.component";
import { t7bRoutingModule } from "./t7b-routing.module";
import { NavbarComponent } from "src/t7b/components/navbar/navbar.component";
import { RouterModule } from "@angular/router";
import { FeatureCard } from "./components/feature-card/feature-card.component";
import { FooterComponent } from "./components/footer/footer.component";
import { PostComponent } from "./components/post/post.component";
import { CreatePostComponent } from "./components/create-post/create-post.component";
import { TableModule } from "primeng/table";

@NgModule({
    imports: [
    CommonModule,
    RouterModule,
    t7bRoutingModule,
    NavbarComponent,
    FeatureCard,
    FooterComponent,
    PostComponent,
    CreatePostComponent,
    TableModule
],

    declarations: [
        AdminPageComponent,
        ClassPageComponent,
        GuidePageComponent,
        HomePageComponent,
        LoginDialogComponent,
        ProfilePageComponent,
        SendPageComponent,
        ThesesPageComponent
    ]
})
export class t7bModule {}