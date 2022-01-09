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
const bumblejumble = `<h1 class="eventName">Bumble Jumble</h1>
<br/>
    <h2>Programming language - C++</h2>
    <p>This event will consist of 2 rounds.</p>
    <h3>Round 1:</h3>
    <h4>Time limit: 30 min</h4>
    <p>
        <ul>
        <li>The first round will consist of 40-50 questions comprising snippets of code in the
jumbled form, Small functions with fill-ups, MCQ, etc.</li>
        <li>Participants are required to answer the questions in specified formats.</li>
        <li>The top 3 teams solving the maximum
number of correct questions in the stipulated time will qualify for the next round.</li></ul>
    </p>
    <h3>Round 2:</h3>
    <h4>Time limit: 60 min</h4>
    <p>
        <ul style="list-style-type: none; ">
        <li>The second round will consist of two questions as follows</li>
        <li>Question 1: Code having error/ Incorrect code (Time – 15 min)</li>
        <li>Question 2: Code with jumbled or missing lines/ having errors. ( Time – 20 min )</li></ul>
    </p>
    <h3>The teams will be judged on the basis of accuracy and the amount of time
taken.</h3>
<button class="register"><a href="https://forms.gle/AvMHUby9a8QQ9GHs5">Registration</a></button>

<h2>Contact event head for more details</h2>
<ul>
    <li>Name : Contact</li>
    <li>Name : Contact</li>
</ul>`
const events = {
    "webgators" : webgators,
    "bumblejumble" : bumblejumble
    //  "bamboozled" : bamboozled,
    // "pubg" : pubg,
    // "football" :football,
    // "valorant" :valorant
}


$('.gallery__item-link').on("click", function(e){
    // alert("charu");
    const event = $(e.target).attr('name');
    // console.log(event);
    $('.rules').html(events[event]);
    $('.details').css("height", "75vh");

});
