import { Navbar } from "../../layout/navbar/navbar.component";
import { Sidebar } from "../../layout/sidebar/sidebar.component";
import { Footer } from "../../layout/footer/footer.component";
import { Component } from "@angular/core";

@Component({
    selector: "deportes-page",
    standalone: true,
    imports: [ Navbar, Sidebar, Footer ],
    templateUrl: "./deportes-page.component.html"
})

export class Deportes { };
