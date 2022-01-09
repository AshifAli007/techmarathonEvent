window.onload = function () {
    console.log($('.details'))
    $('.details').css("height", "0");
}

$('.close').on("click", function(){
    console.log($('.details'))
    $('.details').css("height", "0");
});
const webgators = `
<h1 class="eventName">Webgators</h1>
<br/>
<p>
    <h2>About the Event:</h2>
    Participants will have to use their knowledge and web development skills to solve the problems provided 
    <br/>
    in the event within the given period of time. The event will have 2 rounds. 
    
    <h2>About the rounds:</h2>
    <h3>First round</h3> will be an elimination round. It will consist of 30 MCQ’s based questions. All the questions will
    <br/>
    be related to web development. The time limit will be 30 minutes. There can be more than 1 correct answers. 
    <br/>
    There will be no negative marking. Top 40% to score the most will proceed to second round.
    <br/>
    <h3>Second round</h3> will be the final round. Time limit will be 120 minutes. Participants will be 
    <br/>
    provided a theme and they will have to make a website based on that theme. 
</p>
<h2>Rules</h2>
<ul>
    <li>Individual or a team consisting of 2 members</li>
    <li>The participants are allowed to use following web languages: HTML, CSS, PHP, JAVASCRIPT, JQUERY and NodeJS.</li> 
    <li>Software that can be used: MYSQL, APACHE with PHP, Express with NodeJS</li>
</ul>
<h2>Prize Distribution:</h2>
Prize will be distributed to best two participants. 

<h2>Contact event head for more details</h2>
<ul>
    <li>Name : Contact</li>
    <li>Name : Contact</li>
</ul>
<button class="register-btn" onclick="location.href='https://forms.gle/cLJRF4wbKrrAdoGt6';">Register Here</button>
`

const techwars = `
<h1 class="eventName">TechWars</h1>
<br/>
<p>
    <h2>About</h2>
    Players have to use their knowledge regarding technical and aptitude solving skills to be on top of the list
    <br/>
    among other players. There will be 3 rounds of the game: Preliminaries, Mains and Finals.
    <h3>Round 1 (Preliminaries)</h3>
    It will be an elimination round in which all the players will participate. There will be 40 objective type 
    <br/>
    questions assessing their technical and aptitude ability. The total time allocated for this round will be 10 minutes.
    <br/>
    Each question will be of 2 points. 0.5 points will be deducted for incorrect answers. Tiebreakers in Round 1 will 
    <br/>
    be based on the time of submission. The top 8 teams from this round will proceed to Round 2.
    <h3>Round 2 (Mains)</h3>
    This round is completely based on visualization. There will be 30 Questions related to logos, tag lines etc. 
    <br/>
    The time allocated will be 15 minutes. 3 points will be awarded for correct answers and 1 point will be deducted
    <br/>
    for incorrect ones. In case of a tie in Round 2, a tie-breaker rapid-fire round will be held.
    <br/>
    4 teams having maximum points will proceed to the third round i.e. Finals (Company Gleam).
    <h3>Round 3 (Finals)</h3>
    Each Team will be given one company and they will be allotted 5 minutes to study about the given company. 
    <br/>
    Any source including the internet can be used. After the given time, five questions will be asked on each company 
    <br/>
    and each team will be given 30 seconds to answer the questions given to them. Each question carries 3 points. 
    <br/>
    There will be no negative marking The winners will be chosen based on the highest points.
</p>
<h2>Rules</h2>
<br/>
<ul>
    <li>No. of team members should not exceed 2</li>
    <li>Individual participation is allowed</li>
    <li>No external help is admissible</li>
</ul>

<h2>Contact event head for more details</h2>
<ul>
    <li>Name : Contact</li>
    <li>Name : Contact</li>
</ul>

<h5>Participants will be briefed on the rules in detail during the event</h5>
<button class="register-btn" onclick="location.href='https://forms.gle/bgo35etfKzfPHAcs6';">Register Here</button>
`

const algoowls = `
<h1 class="eventName">AlgoOwls</h1>
<br/>
<p>
    <h2>About</h2>
    Players have to use their general reasoning and problem solving skills in order to proclaim themselves as the 
    <br/>
    winner of this game. There will be two rounds of the game:
    <br/>
    Prelims and Mains.
    <h3>Round 1: Prelims</h3>
    The player will be given 30 objective type questions to answer in 25 minutes. Questions will be based on 
    <br/>
    basic to advanced algorithmic concepts. Each question is of 4 marks and 1 mark will be deducted for every 
    <br/>
    wrong answer. Participants can attempt this round on the portal.
    <h3>Round 2: Mains</h3>
    This round will be based on deducing an algorithm for a set of 4 problems based on a given storyline.
    <br/>
    Each question has different weightage and the total marks will be 50. There will be no negative marking.
    <br/>
    The time allocated for this round is 1 hour 45 minutes. The solution need not be fully code, but the 
    <br/>
    approach should be detailed and step based.
    <h2>Marking</h2>
    Marking would be done on the basis of optimality, feasibility, space and time complexity of the solution.
    <br/>
    In case of a tie, the winner would be decided on the basis of marks in prelims. Platform would be 
    <br/>
    decided later and notified then.
</p>
<h2>Rules</h2>
<br/>
<ul>
    <li>Only an individual can participate in the event. No teams of two or more people are allowed to participate.</li>
    <li>Individuals going to the main round would be decided on the basis of cutoff generated in the prelims round</li>
</ul>

<h2>Contact event head for more details</h2>
<ul>
    <li>Name : Contact</li>
    <li>Name : Contact</li>
</ul>
<button class="register-btn" onclick="location.href='https://forms.gle/7Cre2dWFD4neC9GP6';">Register Here</button>
`

const techescapade = `
<h1 class="eventName">TechEscapade</h1>
<br/>
<p>
    <h2>Event Description</h2>
    Tech Escapade is a Treasure hunt / Obstacle Course like event. Each player is a given a same beginning point
    <br/>
    in a puzzle like format and solving each puzzle leads to another puzzle and finally an end point where the 
    <br/>
    event for that participant will end and their scores and time taken will be recorded.
    <h2>Event Structure</h2>
    The event will be held in online mode and there will be no prelims-finals structure, just one path for the
    <br/>
    participants to follow. In due course of event, the difficulty level of puzzles will keep increasing and 
    <br/>
    since the event is time based, the winners will be decided on the basis of time taken by them to complete the whole event.
    <h2>Prize Structure</h2>
    As of now, the winners will be decided by the time they take to complete the event and reach the end point. 
    <br/>
    There will be two winners:
    1. Winner - ₹2500
    2. 1st Runner Up - ₹1500
</p>

<h2>Contact event head for more details</h2>
<ul>
    <li>Name : Contact</li>
    <li>Name : Contact</li>
</ul>
<button class="register-btn" onclick="location.href='https://forms.gle/Xd5DF8g9XdBYvQVs9';">Register Here</button>
`

const codebenders = `
<h1 class="eventName">CodeBenders</h1>
<br/>
<p>
    <h2>Event Description</h2>
    Code Benders is a coding contest that will be hosted on the CodeChef. There will be around 5 - 6 coding problems
    <br/>
    based on Problem Solving Skills, Data Structures and Algorithms.
    
    <h2>Event Structure</h2>
    The Contest will only have a 1 stage format and no prelims and will be completely online. The contest will
    <br/>
    follow IOI Style Rank list which won’t result in any ties between the participants. The duration of the contest
    <br/>
    will be 3 hours and timings, as per CodeChef guidelines, need to be from 8:00 PM to 11:00 PM.
    
    <h2>Prize Structure (tentative)</h2>
    The top 2 participants will be awarded with prizes:
    1. Winner - ₹2500
    2. 1st Runner Up - ₹1500
</p>
<h2>Contact event head for more details</h2>
<ul>
    <li>Name : Contact</li>
    <li>Name : Contact</li>
</ul>
<button class="register-btn" onclick="location.href='https://forms.gle/DKK5K2yk7qTDPg118';">Register Here</button>
`

const events = {
    "webgators": webgators,
    "techWars" : techwars,
    "algoOwls" : algoowls,
    "techEscapade" : techescapade,
    "codeBenders" : codebenders,
}


$('.gallery__item-link').on("click", function(e){
    const event = $(e.target).attr('name');
    $('.rules').html(events[event]);
    $('.details').css("height", "75vh");

});
