import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { SystemComponent } from './system.component';
import { BillPageComponent } from './bill-page/bill-page.component';
import { PlaningPageComponent } from './planing-page/planing-page.component';
import { RecordsPageComponent } from './records-page/records-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';

const routes: Routes = [
    {path: 'system', component: SystemComponent, children: [
        {path: 'bill', component: BillPageComponent},
        {path: 'records', component: RecordsPageComponent},
        {path: 'history', component: HistoryPageComponent},
        {path: 'planinig', component: PlaningPageComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SystemRoutingModule { }