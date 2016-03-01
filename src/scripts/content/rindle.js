/*jslint indent: 2 */
/*global $: false, document: false, togglbutton: false*/
'use strict';

togglbutton.render('.card__footer:not(.toggl)', { observe: true }, function (elem) {
    var link;
    var cardTitle = $('.toggl__card-title', elem);

    var descFunc = function () {
        return cardTitle.innerText;
    };

    link = togglbutton.createTimerLink({
        className: 'rindle',
        buttonType: 'minimal',
        description: descFunc,
        projectName: ''
    });

    $('.toggl__container', elem).appendChild(link);
});

togglbutton.render('.card__header:not(.toggl)', { observe: true }, function (elem) {
    var link;
    var cardTitle = $('.toggl__card-title', elem);

    var descFunc = function () {
        return cardTitle.innerText;
    };

    link = togglbutton.createTimerLink({
        className: 'rindle',
        description: descFunc,
        projectName: ''
    });

    $('.toggl__container', elem).appendChild(link);
});