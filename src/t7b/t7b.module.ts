import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminPageComponent } from "./pages/admin/admin-page.component";
import { ClassPageComponent } from "./pages/class/class-page.component";
import { GuideListPageComponent } from "./pages/guide-list/guide-list-page.component";
import { HomePageComponent } from "./pages/home/home-page.component";
import { LoginDialogComponent } from "./dialogs/login/login-dialog.component";
import { ProfilePageComponent } from "./pages/profile/profile-page.component";
import { SendPageComponent } from "./pages/send/send-page.component";
import { ThesesListPageComponent } from "./pages/theses-list/theses-list-page.component";
import { t7bRoutingModule } from "./t7b-routing.module";
import { NavbarComponent } from "src/t7b/components/navbar/navbar.component";
import { RouterModule } from "@angular/router";
import { FeatureCard } from "./components/feature-card/feature-card.component";
import { FooterComponent } from "./components/footer/footer.component";
import { PostComponent } from "./components/post/post.component";
import { CreatePostComponent } from "./components/create-post/create-post.component";
import { TableModule } from "primeng/table";
import { ThesisCard } from "./components/thesis-card/thesis-card.component";
import { GuideCard } from "src/t7b/components/guide-card/guide-card.component";
import { TemplateListPageComponent } from "./pages/template-list/template-list-page.component";
import { TemplateCard } from "src/t7b/components/template-card/template-card.component";
import { ClassCard } from "./components/class-card/class-card.component";
import { ClassListPageComponent } from "./pages/class-list/class-list-page.component";
import { GuidePageComponent } from "./pages/guide/guide-page.component";
import { TemplatePageComponent } from "./pages/template/template-page.component";
import { ThesisPageComponent } from "./pages/thesis/thesis-page.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";

@NgModule({
    imports: [
    CommonModule,
    RouterModule,
    t7bRoutingModule,
    NavbarComponent,
    SidebarComponent,
    FeatureCard,
    FooterComponent,
    PostComponent,
    CreatePostComponent,
    TableModule,
    ThesisCard,
    GuideCard,
    TemplateCard,
    CreatePostComponent,
    ClassCard
],

    declarations: [
        AdminPageComponent,
        ClassPageComponent,
        GuideListPageComponent,
        HomePageComponent,
        LoginDialogComponent,
        ProfilePageComponent,
        SendPageComponent,
        ThesesListPageComponent,
        TemplateListPageComponent,
        ClassListPageComponent,
        GuidePageComponent,
        TemplatePageComponent,
        ThesisPageComponent
    ]
})
export class t7bModule {}