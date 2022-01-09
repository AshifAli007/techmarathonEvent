$('.close').on("click", function(){
    console.log($('.details'))
    $('.details').css("height", "0");
});
const webgators = `
<h1 class="eventName">Webgators</h1>
<br/>
<p>Website design - as easy as it may seem, as creative as you want,
    An appealing design can turn the business game upside down.
    <br/>
    Using your knowledge of languages and ingenuity , answer simple questions and work on a given situation.
    <br/>
    Presenting to you all WebGators- Competition of designing using languages that open the gate of web.</p>
<h2>Rules</h2>
<br/>
<ul>
    <li>Information will be given about website looks i.e. guidelines but NOT images.</li>
    <li>Information will be given about website looks i.e. guidelines but NOT images.</li>
    <li>Information will be given about website looks i.e. guidelines but NOT images.</li>
    <li>Information will be given about website looks i.e. guidelines but NOT images.</li>
    <li>Information will be given about website looks i.e. guidelines but NOT images.</li>
</ul>

<h2>Contact event head for more details</h2>
<ul>
    <li>Name : Contact</li>
    <li>Name : Contact</li>
</ul>
`

const techwars = `
    
`

const events = {
    "webgators": webgators,
}


$('.gallery__item-link').on("click", function(e){
    const event = $(e.target).attr('name');
    $('.rules').html(events[event]);
    $('.details').css("height", "75vh");

});
