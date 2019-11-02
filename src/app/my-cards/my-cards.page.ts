import {Component, OnInit} from '@angular/core';
import {CardIO, CardIOResponse} from '@ionic-native/card-io/ngx';

@Component({
    selector: 'app-my-cards',
    templateUrl: './my-cards.page.html',
    styleUrls: ['./my-cards.page.scss'],
})
export class MyCardsPage implements OnInit {

    constructor(private cardIO: CardIO) {
    }

    ngOnInit() {
    }

    addCard() {
        this.cardIO.canScan()
            .then(
                (res: boolean) => {
                    if (res) {
                        const options = {
                            requireExpiry: true,
                            requireCVV: true,
                            requirePostalCode: false,
                            requireCardholderName: true,
                            scanExpiry: true,
                            useCardIOLogo: false,
                            hideCardIOLogo: true,
                            keepApplicationTheme: true
                        };
                        this.cardIO.scan(options).then((data: CardIOResponse) => {
                            alert(data.cardholderName + ' ' + data.cardNumber + ' ' + data.cardType + ' '
                                + data.expiryMonth + ' ' + data.expiryYear);
                        });
                    }
                }
            );
    }

}
