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
const bgmi = `
<h1 class="eventName">PUBG/BGMI</h1>
<br/>
<p>
    <h2>General Terms</h2>
    <h3>Acceptance -</h3>
    Each Team Member must agree to these General Rules and the applicable Competition-Specific Rules to participate
    <br/>
    in any Tournament. A Team Member may accept these General Rules or the applicable Competition-Specific Rules
    <br/>
    by registering to participate in an Official Competition in accordance with the Registration Requirements or by 
    <br/>
    participating in any Tournament.
    
    <h3>Players -</h3>
    <b>Eligibility -</b>
    <ul>
        <li>
        Player’s age: To be eligible to participate in a Tournament as a player, an individual must have reached
        <br/>
        13 years of age or older (i.e., the player has lived for at least 13 calendar years) as of the Tournament
        <br/>
        start date. If a player is 13 years of age or older but under the age of majority in his or her country of
        <br/>
        residence before the start of the Tournament, he or she may still compete in the Tournament if (1) he or 
        <br/>
        she meets the other eligibility criteria in these General Rules and the applicable Competition Specific Rules,
        <br/>
        and (2) a parent or legal guardian accepts these General Rules and the applicable Competition-Specific Rules 
        <br/>
        on behalf of the player, and consents to the player’s participation in the Tournament using a parental consent 
        <br/>
        form provided by the Tournament Organizer.
        </li>
        <li>
        Ranking Requirement: All players on a Team’s roster must have held a ranking for BGMI of “Platinum” or above, 
        <br/>
        in any mode (TPP or FPP),with min level 30 at the time of registration for any Official Competition.
        </li>
        <li>
        Multiple Teams: Players may not play for or contract with more than one Team at a time. If a player enters 
        <br/>
        such an arrangement or contract, Tournament Officials reserve the right to bar the player from playing any
        <br/>
        future matches until the situation has been resolved and the player is in compliance with the requirements 
        <br/>
        in this Section.
        </li>
        <li>
        Regional Requirements: To maintain the regional identity of teams that compete in a global competition and 
        <br/>
        to encourage the type of regional identification that is important to fans and sponsors, each Team must
        <br/>
        maintain, at all times during any Official Competition.
        </li>
        <li>
        Team’s Region: A Team’s home Region is identified by the Team Captain at the time of registration and may 
        <br/>
        not be changed at any time during an Official Competition without the prior written approval of the 
        <br/>
        Tournament Officials.
        </li>
    </ul>
    <h3>Player’s Name</h3>
    A player’s gamer tag or in-game nickname (“Gamer Tag”) must consist of the player’s Team name (or acronym or
    <br/>
    other word representative of the Team name) and player name in the format of “TEAMNAMEPLAYERNAME”. Gamer Tags
    <br/>
    will be selected at the time of registration and may not be changed at any time during a Season without the
    <br/>
    prior written approval of the Tournament Officials. A Gamer Tag may not include any word or phrase in any
    <br/>
    language that is offensive, toxic, or hurtful. A Gamer Tag may not include all or part of a corporate name 
    <br/>
    or make use of the trademarks or other intellectual property of Proxima, BGMI or any third party without the 
    <br/>
    prior written approval of the Tournament Organizer.
    
    <h2>Rules and Mode of Conduct -</h2>
    <ul>
        <li>Emulator / hackers are not allowed.</li>
        <li>If you have been killed by hacker then record death replay. After seeing the
        recording only action shall be taken.</li>
        <li>No abusive language will be tolerated neither with the management nor with the any other team player.</li>
        <li>Team ups are strictly prohibited. If found your team will be banned from all upcoming events and scrims.</li>
        <li>We will give ban for not attending customs after doing registration of their squad.</li>
        <li>Cancellation of slot will only be accepted if you cancel within 1 hour of registration.</li>
        <li>Do not sit in others slot otherwise it will result in kick from the room.</li>
        <li>Join on time, match will start on exact time.</li>
        <li>Using others tag for registration will result in disqualification.</li>
        <li>Do not share, room id & password with any other unregistered player. If we find you are sharing id & 
        <br/>
        pass with someone your team will get disqualified from the tournament.</li>
        <li>As we all know, BGMI has many glitches, so we request you not to exploit any glitches. If any team is
        <br/>
        found exploiting any kind of bugs or glitches, they will be disqualified from that match.</li>
    </ul>
    <h3>Types of tourneys -</h3>
    The events will be held in two types:
    <ol type=1>
        <li>
        Battle Royal Mode – In this mode the admins or hosts will create their custom room in which all the
        <br/>
        interested participants required to join within the on their given slot. If someone fails on joining
        <br/>
        the room in time their team leader will tell the hosting teams or administrators for hold to start 
        <br/>
        the game. If the time is taken more then hosts have their on permission to start the game within 
        <br/>
        given time. The match will be held according to the point system method and judged by our admins only.
        <br/>
        Every kills is worth 1 point.
        </li>
        <li>
        Deathmatch Mode – The match will play among 2 teams. They are going to play BO3 each other. The one who 
        <br/>
        get more match point, they will qualify to next round. The Semi-Finals and Finals are going through BO5.
        </li>
    </ol>
    <h3>Registration</h3>
    All players must comply with the Registration Requirements to be eligible to compete in any Tournament.
    <br/>
    Player’s EquipmentPlayers may participate in Events only on mobile phone hand held devices running
    <br/>
    the Android or the iOS operating systems. Players may not use peripheral devices of any kind without 
    <br/>
    approval of Tournament Officials (including adapters, controllers, Bluetooth keyboards, and mice).
    <br/>
    Players may not use an emulator to play on a PC or other device that is not a handheld device.
    
    <h2>Tournament Related Events</h2>
    Each player agrees to participate in media interviews, streaming sessions, sponsor events, chats
    <br/>
    and other media events that Proxima or the Tournament Organizer organize in connection with the marketing
    <br/>
    and promotion of the Official Competition, Tournament and/or BGMI (“Media Events”), provided that these Media
    <br/>
    Events do not unduly interfere with a player’s game preparation or participation. The reasonable and pre-approved
    <br/>
    expenses incurred by a player in travel to and from a Media Event will be borne by the Tournament Organizer 
    <br/>
    or Proxima. The Tournament Organizer shall have the right to sanction or disqualify any player or Team that 
    <br/>
    fails to attend and participate fully in any scheduled Media Event.
    <br/>
    <sub>All contents are copyrighted and will be used with their owner’s
    permission. All content in this document is accurate to the best of our
    knowledge.</sub>
</p>
<h2>Contact event head for more details</h2>
<ul>
    <li>Name : Contact</li>
    <li>Name : Contact</li>
</ul>
<button class="register-btn" onclick="location.href='https://forms.gle/KED8SaQ4Hf2Az6WV7';">Register Here</button> 
`
const bumblejumble = `
<h1 class="eventName">Bumble Jumble</h1>
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
<a href="https://forms.gle/AvMHUby9a8QQ9GHs5" target="blank"><button class="register">Registration</button></a>
<h2>Contact event head for more details</h2>
<ul style="list-style-type: none; ">
    <li>SIMRAN KUMARI : 7678690111</li>
 
</ul>
`
const bamboozled= `
<h1 class="eventName">BAMBOOZLED</h1>
<br/>
<p>50 questions, each has only one correct answer</p>
<p>3 hints for each question unlockingafter5,10 and 10 tries respectively.</p>
<p>Questions are basically a pic depicting some info or simple pics of something, which in someway</p>
<p>Relate to a proper noun. The task of the player is to brainstorm, may use google or any other search engine and workout the answer.</p>
    <h4>Example of Question :</h4>
        <img src="img/demo4/bird.png" alt="bird">
        <ul style="list-style-type: none; ">
        <li>After 5 incorrect tries : hint 1 : I can't tweet</li>
<li>After 10 incorrect tries: hint 2</li>
<li>After 10 more incorrect tries (i.e 20 total tries): hint 3</li></ul>
    <h3>Scoring System :
Correct</h3>
        <ul style="list-style-type: none; ">
        <li>Correct Answer in the first 5 tries i.e. without any hints: 50 points</li>
<li>Correct Answer when one hint is revealed: 30 pts</li>
<li>Correct Answer when 2 hints are revealed: 20 pts</li>
<li>Correct answer when all 3 hints are revealed: 10 pts</li></ul>
 <h5>Player has Unlimited no. Of tries.</h5>
    <h3>Winning criteria:</h3>
     <ul style="list-style-type: none; ">
        <li>We sum up the scores the player gets at each question he answers.</li>
<li>We maintain a leaderboard which will be available to the players in the side bar at the portal.</li>
<li>At the end of the day the top 3 team/person in the scoreboard will be the winners.</li>
</ul>
<h3>In case of a draw:</h3>
<p>In this scenario, the one who achieved the score first will be considered the winner .
Since the player/team who achieved the score first would already be up in the leader board, therefore in all cases the top three players/teams in the leaderboard at the end of the day will be the final winners.</p>
<a href="https://forms.gle/YtaTzHbG7cMX4Lpu5" target="blank"><button class="register">Registration</button></a>
<h2>Contact event head for more details</h2>
<ul style="list-style-type: none; ">
    <li>VARCHASVA :9286011620</li>
</ul>
`
const pes=`
<h1 class="eventName">PES</h1>
</br>
<p>Application used for the tournament will be eFootball PES 2021 (KONAMI) . Player must have a suitable internet connection to play the game.</p>
<ul>
 <li>Although only 1v1 full match will be going to held between the player followed by penalties if no winner is decided till the full course of match</li>
	<li>The pes 21 strives to emulate real football. As such, gameplay simulates a typical game of association football, with the player controlling either an entire team or a selected player; objectives coincide with the rules of association football. Various game modes have been featured in the series, allowing for gameplay variety, including the Kick Off, Online and Offline modes.</li>
</ul>
<h5>There will be single knockout matches , only finals will be a best of 3.</h5>
<h3>RULES:</h3>
<ul>
	<li>No emulators are not allowed , if found using one will be disqualified.</li>
	<li>If a participant is found using cheats or hacks he/she will be disqualified without any excuse</li>
	<li>Players are required to be online 10 mins prior before the match.</li>
	<li>
	If no player is shown or is late , will be disqualified and other will be given a BYE(advanced to next level)
	</li>
	<li>Total team strength should not exceed more than 3800 (IMPORTANT)</li>
	<li>No more than 5 gold player cards are allowed in whole lineup INCLUDING
SUBSITUTES.(IMPORTANT)</li>
<li>Not a single card higher than gold is allowed like(legendary)</li>
<li>Matches will be of default duration followed by penalties if ended in tie.</li>
</ul>
<button class="register"><a href="https://forms.gle/TAkTMNcHg5qgbS497" target="blank">Register here</a></button>
<h2>Contact event head for more details</h2>
<ul style="list-style-type: none; ">
    <li>ANSH :7303638798</li>
</ul>
`
const social=`
<h1 class="eventName">SOCIAL HUNT</h1>
<h3>Event Description</h3>
<p>Are you adventurous ?</p>
<p>If yes then this is the time we embark on a treasure hunt mate. TM presents “Social Hunt” a treasure
hunt which will test your knowledge on the far faring sea of Tech knowledge, a journey which will have you enthralled and spirits high. From finding the treasure to ending up at a dead end, the one who finds the treasure first takes it all.</p>
<h4>Event Details Duration of event: 1 hour</h4>
<h4>Participation: Solo</h4>
<h3>Rules</h3>
<ul style="list-style-type: none;">
<li>The Social Hunt will take place on your favourite social platform “Instagram” where our team has set-up a virtual Treasure Map.</li>
<li>All participants start-off at the same node where they’ll have to answer tricky questions to move on
to the next node on the Map.</li>
<li>The objective is to reach the final node which holds the key to the treasure chest. As said before winner takes it all.</li>
<li>Yes you guessed it right, the virtual map is a graph, in which each node represents an Instagram account.</li>
<li>In order to reach the next node you must acquire an address for the same, the address is the name of
the next Instagram account which you must figure out from the question/riddle in the preceding
node.</li>
<li>Further details about the competition will be disclosed once you register.</li>
<button class="register"><a href="https://forms.gle/HeaxghakzfeT3PpXA" target="blank">Registration</a></button>
<h2>Contact event head for more details</h2>
<ul style="list-style-type: none; ">
    <li>RAHUL JANGRA :9518015621</li>
</ul>
`
const valorant=` 
<h1 class="eventName">VALORANT</h1>
<br/>
<p>SANGANIKA - The Computer Science Society of Deen Dayal Upadhyaya College, University of Delhi along with TECHMARATHON - The Departmental Fest presents VALORANT Tournament with exciting prize pool of Rs.4000.</p>
 <p>Participant are requested to join the official discord server of our college Non Tech VALORANT Event -</p> <a target="blank" href="https://discord.gg/pCBAk3T8JE"><button class ="register">Click here</button> </a>
<h4>Last Day for form submission - 31st JAN 2022 </h4>
<h3>IMPORTANT INFORMATION:-</h3>
<p>The league administration and hosts have the right to decide outside or even against the rulebook in special cases to guarantee fair play.</p>
<h3FORMAT:-</h3>
<ul><li> All agents are free to play(excluded. Chamber &amp; Neon) </li><li> Single Elimination bracket(under the required   condition)  </li><li> All matches (excl. Semi and Grand Finals) are BO3. </li> <li>Semi Finals and Grand Final are BO5.</li></ul>
<h3>REGISTRATION FORMAT:-</h3>
<ul><li>Before registering for the event read these points so you will not face any difficulties further.</li><li> -A team can have no more than 6 players. </li><li>All games will take place on a game server situated in Mumbai servers only.</li><li> Coach (if your team have) can enter the lobby and sit in the coach slot of their respective team. </li><li> No changes may be made to your team information after registration closes.</li></ul>
<p>Registration for DDUC TM VALORANT TOURNAMENT for registration of entire 6 teams players will be Rs.100 and if you can't make your members to register, you can still register by paying Rs.20 per head. You can pay through via Paytm(will give you the link at the end of this form).</p>
<h3>PRIZE POOL:-</h3>
<p>The amount will spread among the teams as- Winner - Rs.2500 Runner up - Rs.1000 MVP of entire tournament - Rs.500</p>
<p>After filling the form, we will give you the WhatsApp group link. only the leader will have to join the WhatsApp group only. Valo I'D must be like this - xyzabc </p>
<ul style="list-style-type: none; "><li>For any queries contact-</li><li> Praveen - 7982774791</li><li> Ritik - 6201969853</li></ul>
<button class="register"><a href="https://forms.gle/Wsmw4pCrd1qT23Ce9" target="blank">Registration</a></button>
`
const ludo=`
<h1 class="eventName">LUDO</h1>
<br/>
    <h4>Application used for the tournament will be <strong>LUDO KING.</strong> Player must have a suitable internet connection to play the game.</h4>
    <p>This event will consist of 2 rounds.</p>
    <p>
        <ul>
        <li>It’s involves racing around the board with four players. Every player starts from their own “yard” and has four pieces to play with. Each yard and their respective pieces are marked by different colours, predominantly – red, green, yellow and blue. The goal of the game is to move the pieces clockwise around the board and reach the “home” triangles.</li>
    </p>
    <h3>There will be 3 rounds: PRELIMS, SEMI-FINALS, FINALS.</h3>
    <h4>Time limit: 60 min</h4>
    <p>
        <ul >
        <li>Rounds will be of knockout manner. There will be scheduled matches of teams.
Each team will consist of four players. Winner from each team will qualify for
the second round i.e. SEMI-FINALS.</li>
        <li>In SEMI-FINALS qualified participants will play in team of four and winner from each team will qualify for our FINALS</li>
        <li>Similar process is going to be followed for round 3 and the one who wins the last round is the final winner.</li></ul>
    </p>
    <h3>RULES:</h3>
    <ol>
        <li>Participants are required to be online 10 mins before their scheduled matches.</li>
        <li>If a participant is caught cheating, he/she will be directly disqualified rewarding
Opponent the win.</li>
        <li>Emulators are not allowed.</li>
    </ol>
    <br>
<a href="https://forms.gle/rq1UXATNJHtfVzcFA" target="blank"><button class="register">Registration</button></a>
<h2>Contact event head for more details</h2>
<ul style="list-style-type: none; ">
    <li>Mahima : 9560406213</li>
</ul>
`
const fandom=`
<h1 class="eventName">TV FANDOM</h1>
<h3>Description</h3>
<pre>
<p> So no one told you life was gonna be this way?
Wondering if you know that there is only one war that matters and
it is here.
To fight the fastest man alive, you have to be willing to do the
unthinkable.
Do you know that Friends don't lie and Everything...affects
everything.
If you know about "kuckoo ka jadoo", then come out of your mind
palace.
We like big brains and we cannot lie - we know YOUR big brain is
full of the knowledge of your favourite TV shows!
If TV shows are your life,
And you never get bored,
Come and test your memory,
How well they are stored
</p>
</pre>
<h3>ROUNDS</h3>
<ol><li>Prelims:
<p>It will be an objective type round with each participant getting 30
questions to answer. +10 for each correct answer and (-5) for each
incorrect answer. The time limit for the round is 25 mins.</p></li>
<li>The Finals
</li>
<p>This will be a PPT based round for which details will be provided
on the spot.</p>
<a href="https://forms.gle/4tg1uf4671idNYrJ8" target="blank"><button class="register">Registration</button></a>
<h2>Contact event head for more details</h2>
<ul style="list-style-type: none; ">
    <li>Prakriti: 84235 53224</li>
    <li>Himani Vashisht: 78272 74832</li>
    <li>Himank : 8826610870</li>
</ul>
`
const events = {
    "webgators": webgators,
    "techWars" : techwars,
    "algoOwls" : algoowls,
    "techEscapade" : techescapade,
    "codeBenders" : codebenders,
    "bgmi" : bgmi,
    "bumblejumble" : bumblejumble,
    "bamboozled" : bamboozled,
    "social" : social,
    "pes" :pes,
    "valorant" :valorant,
    "ludo": ludo,
    "fandom" :fandom,
}
$('.gallery__item-link').on("click", function(e){
    const event = $(e.target).attr('name');
    $('.rules').html(events[event]);
    $('.details').css("height", "75vh");

});
