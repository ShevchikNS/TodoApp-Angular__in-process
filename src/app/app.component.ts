import {Component, OnInit} from '@angular/core';
import {timer} from "rxjs";
import {RouterOutlet} from "@angular/router";
import {animate, group, query, style, transition, trigger} from "@angular/animations";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        trigger('routeAnim', [
            transition(':increment', [
                style({
                    position: 'relative',
                    overflow: 'hidden'
                }),

                query(':enter, :leave', [
                    style({
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%'
                    })
                ], {optional: true}),

                group([
                    query(':leave', [
                        animate('200ms ease-in', style({
                            opacity: 0,
                            transform: 'translateX(-50px)'
                        }))
                    ], {optional: true}),

                    query(':enter', [
                        style({
                            transform: 'translateX(50px)',
                            opacity: 0
                        }),
                        animate('250ms 120ms ease-out', style({
                            opacity: '1',
                            transform: 'translateX(0)'
                        }))
                    ], {optional: true})
                ])

            ]),

            transition(':decrement', [
                style({
                    position: 'relative',
                    overflow: 'hidden'
                }),

                query(':enter, :leave', [
                    style({
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%'
                    })
                ], {optional: true}),

                group([
                    query(':leave', [
                        animate('200ms ease-in', style({
                            opacity: 0,
                            transform: 'translateX(50px)'
                        }))
                    ], {optional: true}),

                    query(':enter', [
                        style({
                            transform: 'translateX(-50px)',
                            opacity: 0
                        }),
                        animate('250ms 120ms ease-out', style({
                            opacity: '1',
                            transform: 'translateX(0)'
                        }))
                    ], {optional: true})
                ])

            ])
        ])
    ]
})
export class AppComponent implements OnInit {
    title = 'todo-app';
    date = Date.now();

    ngOnInit(): void {
        timer(0, 1000).subscribe(() => {
            this.date = Date.now()
        })
    }

    prepareRoute(outlet: RouterOutlet) {
        if (outlet.isActivated)
            return outlet.activatedRouteData['tab']
        else return console.log()
    }
}
