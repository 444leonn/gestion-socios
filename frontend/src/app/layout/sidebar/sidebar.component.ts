import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from '@angular/common';

@Component({
    selector: "app-sidebar",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./sidebar.component.html",
    styleUrls: ["./sidebar.component.css"]
})

export class Sidebar {
    @Input() selectedIndex: number = 0;
    @Output() selectedIndexChange = new EventEmitter<number>();

    links = [
        { label: "Inicio" },
        { label: "Socios" },
        { label: "Grupos" },
        { label: "Deportes" },
        { label: "Tipos y Cuotas" }
    ];

    selectLink(index: number) {
        this.selectedIndex = index;
        this.selectedIndexChange.emit(index);
    }
}