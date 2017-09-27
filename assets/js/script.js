$(document).ready(function(){
    $('.sdg-floating').on({
        'cycle': console.log.bind(console, 'example-left', 'cycle'),
        'pause': console.log.bind(console, 'example-left', 'pause'),
        'resume': console.log.bind(console, 'example-left', 'resume'),
        'finish': console.log.bind(console, 'example-left', 'finish')
    });
    $('.sdg-floating').simplemarquee({
        speed: 30,
        direction: 'left',
        cycles: 1,
        space: 40,
        delayBetweenCycles: 2000,
        handleHover: true,
        handleResize: true,
        easing: 'linear'
    });
});