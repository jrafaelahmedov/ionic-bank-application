import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {MyCardsPage} from './my-cards.page';
import {CardIO} from '@ionic-native/card-io/ngx';

const routes: Routes = [
    {
        path: '',
        component: MyCardsPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [MyCardsPage],
    providers: [CardIO]
})
export class MyCardsPageModule {
}
