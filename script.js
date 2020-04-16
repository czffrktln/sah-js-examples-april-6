let name = 'Katica';

console.log(`Hello, my dear ${name}`); 

//ez egy comment
// jQuery part
// $('css selector').action

$('h1').text('The jQuery part has started')
// $('h1').text('<strong>The jQuery</strong> part has started')
// $('h1').html('<strong>The jQuery</strong> part has started')
$('h1').css('background','red')
$('h2').toggleClass('green');
$('p').toggleClass('green');

$('main').append('<p id="first">Added element</p>')
$('main').append('<p id="second">Added second element</p>')

$('#first').remove();
// eltavolitja a first id-s cuccot

//gomb megnyomas -> uj p taget hozzaad
$('#add-button').click(() => {
    // (() => {})
    $('main').append('<p>Added a new p tag</>')
});

// ez egy masik modja azt hiszem annak ami az elobb volt
let removeFunction = () => {
    $('main p').remove();
}
$('#remove-button').click(removeFunction)

// elvileg ez ugyanaz mint az elobb
// function removeFunction() {
//   $('main p').remove();
// }

//conditions 
//if something is true, do this
//if (condition) {
    //statements
//} else {
//}

let age = 35;
if (age > 18) {
    console.log("This person's allowed to drink");
} else {
    console.log('This is a kid, no alcohol');
}
// (age === 18) one = is an assignment, ha csak 1 van, beallitja azt az erteket alapvetesnek

$('#add-button').click(() => {
    console.log($('main p').length)
    $('main').append('<p>Added a new p tag</p>');
});

$('#add-button').click(() => {
    if ($('main p').length < 5) {
    $('main').append('<p class="green">Added a new p tag</p>');
    }
});

//loops 
let colors = ['orange', 'yellow', 'purple', 'blue', 'green'];
//$('main').append('<div class="box'></div>);
//$('main div:last-child').css('background', 'orange');
//$('main').append('<div class="box'></div>);
//$('main div:last-child').css('background', 'yellow');
//$('main').append('<div class="box'></div>);
//$('main div:last-child').css('background', 'purple');
//$('main').append('<div class="box'></div>);
//$('main div:last-child').css('background', 'blue');
//$('main').append('<div class="box'></div>);
//$('main div:last-child').css('background', 'green');

colors.forEach((color) => {
    $('main').append('<div class="box"></div>);
    $('main div:last-child').css('background', color;  
})