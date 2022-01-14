// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/demo4/script.js":[function(require,module,exports) {
window.onload = function () {
  console.log($('.details'));
  $('.details').css("height", "0");
};

$('.close').on("click", function () {
  console.log($('.details'));
  $('.details').css("height", "0");
});
var webgators = "\n<h1 class=\"eventName\">Webgators</h1>\n<br/>\n<p>\n    <h2>About the Event:</h2>\n    Participants will have to use their knowledge and web development skills to solve the problems provided \n    <br/>\n    in the event within the given period of time. The event will have 2 rounds. \n    \n    <h2>About the rounds:</h2>\n    <h3>First round</h3> will be an elimination round. It will consist of 30 MCQ\u2019s based questions. All the questions will\n    <br/>\n    be related to web development. The time limit will be 30 minutes. There can be more than 1 correct answers. \n    <br/>\n    There will be no negative marking. Top 40% to score the most will proceed to second round.\n    <br/>\n    <h3>Second round</h3> will be the final round. Time limit will be 120 minutes. Participants will be \n    <br/>\n    provided a theme and they will have to make a website based on that theme. \n</p>\n<h2>Rules</h2>\n<ul>\n    <li>Individual or a team consisting of 2 members</li>\n    <li>The participants are allowed to use following web languages: HTML, CSS, PHP, JAVASCRIPT, JQUERY and NodeJS.</li> \n    <li>Software that can be used: MYSQL, APACHE with PHP, Express with NodeJS</li>\n</ul>\n<h2>Prize Distribution:</h2>\nPrize will be distributed to best two participants. \n<h2>Contact event head for more details</h2>\n<ul>\n    <li>Name : Contact</li>\n    <li>Name : Contact</li>\n</ul>\n<button class=\"register-btn\" onclick=\"location.href='https://forms.gle/cLJRF4wbKrrAdoGt6';\">Register Here</button>\n";
var techwars = "\n<h1 class=\"eventName\">TechWars</h1>\n<br/>\n<p>\n    <h2>About</h2>\n    Players have to use their knowledge regarding technical and aptitude solving skills to be on top of the list\n    <br/>\n    among other players. There will be 3 rounds of the game: Preliminaries, Mains and Finals.\n    <h3>Round 1 (Preliminaries)</h3>\n    It will be an elimination round in which all the players will participate. There will be 40 objective type \n    <br/>\n    questions assessing their technical and aptitude ability. The total time allocated for this round will be 10 minutes.\n    <br/>\n    Each question will be of 2 points. 0.5 points will be deducted for incorrect answers. Tiebreakers in Round 1 will \n    <br/>\n    be based on the time of submission. The top 8 teams from this round will proceed to Round 2.\n    <h3>Round 2 (Mains)</h3>\n    This round is completely based on visualization. There will be 30 Questions related to logos, tag lines etc. \n    <br/>\n    The time allocated will be 15 minutes. 3 points will be awarded for correct answers and 1 point will be deducted\n    <br/>\n    for incorrect ones. In case of a tie in Round 2, a tie-breaker rapid-fire round will be held.\n    <br/>\n    4 teams having maximum points will proceed to the third round i.e. Finals (Company Gleam).\n    <h3>Round 3 (Finals)</h3>\n    Each Team will be given one company and they will be allotted 5 minutes to study about the given company. \n    <br/>\n    Any source including the internet can be used. After the given time, five questions will be asked on each company \n    <br/>\n    and each team will be given 30 seconds to answer the questions given to them. Each question carries 3 points. \n    <br/>\n    There will be no negative marking The winners will be chosen based on the highest points.\n</p>\n<h2>Rules</h2>\n<br/>\n<ul>\n    <li>No. of team members should not exceed 2</li>\n    <li>Individual participation is allowed</li>\n    <li>No external help is admissible</li>\n</ul>\n<h2>Contact event head for more details</h2>\n<ul>\n    <li>Name : Contact</li>\n    <li>Name : Contact</li>\n</ul>\n<h5>Participants will be briefed on the rules in detail during the event</h5>\n<button class=\"register-btn\" onclick=\"location.href='https://forms.gle/bgo35etfKzfPHAcs6';\">Register Here</button>\n";
var algoowls = "\n<h1 class=\"eventName\">AlgoOwls</h1>\n<br/>\n<p>\n    <h2>About</h2>\n    Players have to use their general reasoning and problem solving skills in order to proclaim themselves as the \n    <br/>\n    winner of this game. There will be two rounds of the game:\n    <br/>\n    Prelims and Mains.\n    <h3>Round 1: Prelims</h3>\n    The player will be given 30 objective type questions to answer in 25 minutes. Questions will be based on \n    <br/>\n    basic to advanced algorithmic concepts. Each question is of 4 marks and 1 mark will be deducted for every \n    <br/>\n    wrong answer. Participants can attempt this round on the portal.\n    <h3>Round 2: Mains</h3>\n    This round will be based on deducing an algorithm for a set of 4 problems based on a given storyline.\n    <br/>\n    Each question has different weightage and the total marks will be 50. There will be no negative marking.\n    <br/>\n    The time allocated for this round is 1 hour 45 minutes. The solution need not be fully code, but the \n    <br/>\n    approach should be detailed and step based.\n    <h2>Marking</h2>\n    Marking would be done on the basis of optimality, feasibility, space and time complexity of the solution.\n    <br/>\n    In case of a tie, the winner would be decided on the basis of marks in prelims. Platform would be \n    <br/>\n    decided later and notified then.\n</p>\n<h2>Rules</h2>\n<br/>\n<ul>\n    <li>Only an individual can participate in the event. No teams of two or more people are allowed to participate.</li>\n    <li>Individuals going to the main round would be decided on the basis of cutoff generated in the prelims round</li>\n</ul>\n<h2>Contact event head for more details</h2>\n<ul>\n    <li>Name : Contact</li>\n    <li>Name : Contact</li>\n</ul>\n<button class=\"register-btn\" onclick=\"location.href='https://forms.gle/7Cre2dWFD4neC9GP6';\">Register Here</button>\n";
var techescapade = "\n<h1 class=\"eventName\">TechEscapade</h1>\n<br/>\n<p>\n    <h2>Event Description</h2>\n    Tech Escapade is a Treasure hunt / Obstacle Course like event. Each player is a given a same beginning point\n    <br/>\n    in a puzzle like format and solving each puzzle leads to another puzzle and finally an end point where the \n    <br/>\n    event for that participant will end and their scores and time taken will be recorded.\n    <h2>Event Structure</h2>\n    The event will be held in online mode and there will be no prelims-finals structure, just one path for the\n    <br/>\n    participants to follow. In due course of event, the difficulty level of puzzles will keep increasing and \n    <br/>\n    since the event is time based, the winners will be decided on the basis of time taken by them to complete the whole event.\n    <h2>Prize Structure</h2>\n    As of now, the winners will be decided by the time they take to complete the event and reach the end point. \n    <br/>\n    There will be two winners:\n    1. Winner - \u20B92500\n    2. 1st Runner Up - \u20B91500\n</p>\n<h2>Contact event head for more details</h2>\n<ul>\n    <li>Name : Contact</li>\n    <li>Name : Contact</li>\n</ul>\n<button class=\"register-btn\" onclick=\"location.href='https://forms.gle/Xd5DF8g9XdBYvQVs9';\">Register Here</button>\n";
var codebenders = "\n<h1 class=\"eventName\">CodeBenders</h1>\n<br/>\n<p>\n    <h2>Event Description</h2>\n    Code Benders is a coding contest that will be hosted on the CodeChef. There will be around 5 - 6 coding problems\n    <br/>\n    based on Problem Solving Skills, Data Structures and Algorithms.\n    \n    <h2>Event Structure</h2>\n    The Contest will only have a 1 stage format and no prelims and will be completely online. The contest will\n    <br/>\n    follow IOI Style Rank list which won\u2019t result in any ties between the participants. The duration of the contest\n    <br/>\n    will be 3 hours and timings, as per CodeChef guidelines, need to be from 8:00 PM to 11:00 PM.\n    \n    <h2>Prize Structure (tentative)</h2>\n    The top 2 participants will be awarded with prizes:\n    1. Winner - \u20B92500\n    2. 1st Runner Up - \u20B91500\n</p>\n<h2>Contact event head for more details</h2>\n<ul>\n    <li>Name : Contact</li>\n    <li>Name : Contact</li>\n</ul>\n<button class=\"register-btn\" onclick=\"location.href='https://forms.gle/DKK5K2yk7qTDPg118';\">Register Here</button>\n";
var bgmi = "\n<h1 class=\"eventName\">PUBG/BGMI</h1>\n<br/>\n<p>\n    <h2>General Terms</h2>\n    <h3>Acceptance -</h3>\n    Each Team Member must agree to these General Rules and the applicable Competition-Specific Rules to participate\n    <br/>\n    in any Tournament. A Team Member may accept these General Rules or the applicable Competition-Specific Rules\n    <br/>\n    by registering to participate in an Official Competition in accordance with the Registration Requirements or by \n    <br/>\n    participating in any Tournament.\n    \n    <h3>Players -</h3>\n    <b>Eligibility -</b>\n    <ul>\n        <li>\n        Player\u2019s age: To be eligible to participate in a Tournament as a player, an individual must have reached\n        <br/>\n        13 years of age or older (i.e., the player has lived for at least 13 calendar years) as of the Tournament\n        <br/>\n        start date. If a player is 13 years of age or older but under the age of majority in his or her country of\n        <br/>\n        residence before the start of the Tournament, he or she may still compete in the Tournament if (1) he or \n        <br/>\n        she meets the other eligibility criteria in these General Rules and the applicable Competition Specific Rules,\n        <br/>\n        and (2) a parent or legal guardian accepts these General Rules and the applicable Competition-Specific Rules \n        <br/>\n        on behalf of the player, and consents to the player\u2019s participation in the Tournament using a parental consent \n        <br/>\n        form provided by the Tournament Organizer.\n        </li>\n        <li>\n        Ranking Requirement: All players on a Team\u2019s roster must have held a ranking for BGMI of \u201CPlatinum\u201D or above, \n        <br/>\n        in any mode (TPP or FPP),with min level 30 at the time of registration for any Official Competition.\n        </li>\n        <li>\n        Multiple Teams: Players may not play for or contract with more than one Team at a time. If a player enters \n        <br/>\n        such an arrangement or contract, Tournament Officials reserve the right to bar the player from playing any\n        <br/>\n        future matches until the situation has been resolved and the player is in compliance with the requirements \n        <br/>\n        in this Section.\n        </li>\n        <li>\n        Regional Requirements: To maintain the regional identity of teams that compete in a global competition and \n        <br/>\n        to encourage the type of regional identification that is important to fans and sponsors, each Team must\n        <br/>\n        maintain, at all times during any Official Competition.\n        </li>\n        <li>\n        Team\u2019s Region: A Team\u2019s home Region is identified by the Team Captain at the time of registration and may \n        <br/>\n        not be changed at any time during an Official Competition without the prior written approval of the \n        <br/>\n        Tournament Officials.\n        </li>\n    </ul>\n    <h3>Player\u2019s Name</h3>\n    A player\u2019s gamer tag or in-game nickname (\u201CGamer Tag\u201D) must consist of the player\u2019s Team name (or acronym or\n    <br/>\n    other word representative of the Team name) and player name in the format of \u201CTEAMNAMEPLAYERNAME\u201D. Gamer Tags\n    <br/>\n    will be selected at the time of registration and may not be changed at any time during a Season without the\n    <br/>\n    prior written approval of the Tournament Officials. A Gamer Tag may not include any word or phrase in any\n    <br/>\n    language that is offensive, toxic, or hurtful. A Gamer Tag may not include all or part of a corporate name \n    <br/>\n    or make use of the trademarks or other intellectual property of Proxima, BGMI or any third party without the \n    <br/>\n    prior written approval of the Tournament Organizer.\n    \n    <h2>Rules and Mode of Conduct -</h2>\n    <ul>\n        <li>Emulator / hackers are not allowed.</li>\n        <li>If you have been killed by hacker then record death replay. After seeing the\n        recording only action shall be taken.</li>\n        <li>No abusive language will be tolerated neither with the management nor with the any other team player.</li>\n        <li>Team ups are strictly prohibited. If found your team will be banned from all upcoming events and scrims.</li>\n        <li>We will give ban for not attending customs after doing registration of their squad.</li>\n        <li>Cancellation of slot will only be accepted if you cancel within 1 hour of registration.</li>\n        <li>Do not sit in others slot otherwise it will result in kick from the room.</li>\n        <li>Join on time, match will start on exact time.</li>\n        <li>Using others tag for registration will result in disqualification.</li>\n        <li>Do not share, room id & password with any other unregistered player. If we find you are sharing id & \n        <br/>\n        pass with someone your team will get disqualified from the tournament.</li>\n        <li>As we all know, BGMI has many glitches, so we request you not to exploit any glitches. If any team is\n        <br/>\n        found exploiting any kind of bugs or glitches, they will be disqualified from that match.</li>\n    </ul>\n    <h3>Types of tourneys -</h3>\n    The events will be held in two types:\n    <ol type=1>\n        <li>\n        Battle Royal Mode \u2013 In this mode the admins or hosts will create their custom room in which all the\n        <br/>\n        interested participants required to join within the on their given slot. If someone fails on joining\n        <br/>\n        the room in time their team leader will tell the hosting teams or administrators for hold to start \n        <br/>\n        the game. If the time is taken more then hosts have their on permission to start the game within \n        <br/>\n        given time. The match will be held according to the point system method and judged by our admins only.\n        <br/>\n        Every kills is worth 1 point.\n        </li>\n        <li>\n        Deathmatch Mode \u2013 The match will play among 2 teams. They are going to play BO3 each other. The one who \n        <br/>\n        get more match point, they will qualify to next round. The Semi-Finals and Finals are going through BO5.\n        </li>\n    </ol>\n    <h3>Registration</h3>\n    All players must comply with the Registration Requirements to be eligible to compete in any Tournament.\n    <br/>\n    Player\u2019s EquipmentPlayers may participate in Events only on mobile phone hand held devices running\n    <br/>\n    the Android or the iOS operating systems. Players may not use peripheral devices of any kind without \n    <br/>\n    approval of Tournament Officials (including adapters, controllers, Bluetooth keyboards, and mice).\n    <br/>\n    Players may not use an emulator to play on a PC or other device that is not a handheld device.\n    \n    <h2>Tournament Related Events</h2>\n    Each player agrees to participate in media interviews, streaming sessions, sponsor events, chats\n    <br/>\n    and other media events that Proxima or the Tournament Organizer organize in connection with the marketing\n    <br/>\n    and promotion of the Official Competition, Tournament and/or BGMI (\u201CMedia Events\u201D), provided that these Media\n    <br/>\n    Events do not unduly interfere with a player\u2019s game preparation or participation. The reasonable and pre-approved\n    <br/>\n    expenses incurred by a player in travel to and from a Media Event will be borne by the Tournament Organizer \n    <br/>\n    or Proxima. The Tournament Organizer shall have the right to sanction or disqualify any player or Team that \n    <br/>\n    fails to attend and participate fully in any scheduled Media Event.\n    <br/>\n    <sub>All contents are copyrighted and will be used with their owner\u2019s\n    permission. All content in this document is accurate to the best of our\n    knowledge.</sub>\n</p>\n<h2>Contact event head for more details</h2>\n<ul>\n    <li>Name : Contact</li>\n    <li>Name : Contact</li>\n</ul>\n<button class=\"register-btn\" onclick=\"location.href='https://forms.gle/KED8SaQ4Hf2Az6WV7';\">Register Here</button> \n";
var bumblejumble = "\n<h1 class=\"eventName\">Bumble Jumble</h1>\n<br/>\n    <h2>Programming language - C++</h2>\n    <p>This event will consist of 2 rounds.</p>\n    <h3>Round 1:</h3>\n    <h4>Time limit: 30 min</h4>\n    <p>\n        <ul>\n        <li>The first round will consist of 40-50 questions comprising snippets of code in the\njumbled form, Small functions with fill-ups, MCQ, etc.</li>\n        <li>Participants are required to answer the questions in specified formats.</li>\n        <li>The top 3 teams solving the maximum\nnumber of correct questions in the stipulated time will qualify for the next round.</li></ul>\n    </p>\n    <h3>Round 2:</h3>\n    <h4>Time limit: 60 min</h4>\n    <p>\n        <ul style=\"list-style-type: none; \">\n        <li>The second round will consist of two questions as follows</li>\n        <li>Question 1: Code having error/ Incorrect code (Time \u2013 15 min)</li>\n        <li>Question 2: Code with jumbled or missing lines/ having errors. ( Time \u2013 20 min )</li></ul>\n    </p>\n    <h3>The teams will be judged on the basis of accuracy and the amount of time\ntaken.</h3>\n<a href=\"https://forms.gle/AvMHUby9a8QQ9GHs5\" target=\"blank\"><button class=\"register\">Registration</button></a>\n<h2>Contact event head for more details</h2>\n<ul style=\"list-style-type: none; \">\n    <li>SIMRAN KUMARI : 7678690111</li>\n \n</ul>\n";
var bamboozled = "\n<h1 class=\"eventName\">BAMBOOZLED</h1>\n<br/>\n<p>50 questions, each has only one correct answer</p>\n<p>3 hints for each question unlockingafter5,10 and 10 tries respectively.</p>\n<p>Questions are basically a pic depicting some info or simple pics of something, which in someway</p>\n<p>Relate to a proper noun. The task of the player is to brainstorm, may use google or any other search engine and workout the answer.</p>\n    <h4>Example of Question :</h4>\n        <img src=\"img/demo4/bird.png\" alt=\"bird\">\n        <ul style=\"list-style-type: none; \">\n        <li>After 5 incorrect tries : hint 1 : I can't tweet</li>\n<li>After 10 incorrect tries: hint 2</li>\n<li>After 10 more incorrect tries (i.e 20 total tries): hint 3</li></ul>\n    <h3>Scoring System :\nCorrect</h3>\n        <ul style=\"list-style-type: none; \">\n        <li>Correct Answer in the first 5 tries i.e. without any hints: 50 points</li>\n<li>Correct Answer when one hint is revealed: 30 pts</li>\n<li>Correct Answer when 2 hints are revealed: 20 pts</li>\n<li>Correct answer when all 3 hints are revealed: 10 pts</li></ul>\n <h5>Player has Unlimited no. Of tries.</h5>\n    <h3>Winning criteria:</h3>\n     <ul style=\"list-style-type: none; \">\n        <li>We sum up the scores the player gets at each question he answers.</li>\n<li>We maintain a leaderboard which will be available to the players in the side bar at the portal.</li>\n<li>At the end of the day the top 3 team/person in the scoreboard will be the winners.</li>\n</ul>\n<h3>In case of a draw:</h3>\n<p>In this scenario, the one who achieved the score first will be considered the winner .\nSince the player/team who achieved the score first would already be up in the leader board, therefore in all cases the top three players/teams in the leaderboard at the end of the day will be the final winners.</p>\n<a href=\"https://forms.gle/YtaTzHbG7cMX4Lpu5\" target=\"blank\"><button class=\"register\">Registration</button></a>\n<h2>Contact event head for more details</h2>\n<ul style=\"list-style-type: none; \">\n    <li>VARCHASVA :9286011620</li>\n</ul>\n";
var pes = "\n<h1 class=\"eventName\">PES</h1>\n</br>\n<p>Application used for the tournament will be eFootball PES 2021 (KONAMI) . Player must have a suitable internet connection to play the game.</p>\n<ul>\n <li>Although only 1v1 full match will be going to held between the player followed by penalties if no winner is decided till the full course of match</li>\n\t<li>The pes 21 strives to emulate real football. As such, gameplay simulates a typical game of association football, with the player controlling either an entire team or a selected player; objectives coincide with the rules of association football. Various game modes have been featured in the series, allowing for gameplay variety, including the Kick Off, Online and Offline modes.</li>\n</ul>\n<h5>There will be single knockout matches , only finals will be a best of 3.</h5>\n<h3>RULES:</h3>\n<ul>\n\t<li>No emulators are not allowed , if found using one will be disqualified.</li>\n\t<li>If a participant is found using cheats or hacks he/she will be disqualified without any excuse</li>\n\t<li>Players are required to be online 10 mins prior before the match.</li>\n\t<li>\n\tIf no player is shown or is late , will be disqualified and other will be given a BYE(advanced to next level)\n\t</li>\n\t<li>Total team strength should not exceed more than 3800 (IMPORTANT)</li>\n\t<li>No more than 5 gold player cards are allowed in whole lineup INCLUDING\nSUBSITUTES.(IMPORTANT)</li>\n<li>Not a single card higher than gold is allowed like(legendary)</li>\n<li>Matches will be of default duration followed by penalties if ended in tie.</li>\n</ul>\n<button class=\"register\"><a href=\"https://forms.gle/TAkTMNcHg5qgbS497\" target=\"blank\">Register here</a></button>\n<h2>Contact event head for more details</h2>\n<ul style=\"list-style-type: none; \">\n    <li>ANSH :7303638798</li>\n</ul>\n";
var social = "\n<h1 class=\"eventName\">SOCIAL HUNT</h1>\n<h3>Event Description</h3>\n<p>Are you adventurous ?</p>\n<p>If yes then this is the time we embark on a treasure hunt mate. TM presents \u201CSocial Hunt\u201D a treasure\nhunt which will test your knowledge on the far faring sea of Tech knowledge, a journey which will have you enthralled and spirits high. From finding the treasure to ending up at a dead end, the one who finds the treasure first takes it all.</p>\n<h4>Event Details Duration of event: 1 hour</h4>\n<h4>Participation: Solo</h4>\n<h3>Rules</h3>\n<ul style=\"list-style-type: none;\">\n<li>The Social Hunt will take place on your favourite social platform \u201CInstagram\u201D where our team has set-up a virtual Treasure Map.</li>\n<li>All participants start-off at the same node where they\u2019ll have to answer tricky questions to move on\nto the next node on the Map.</li>\n<li>The objective is to reach the final node which holds the key to the treasure chest. As said before winner takes it all.</li>\n<li>Yes you guessed it right, the virtual map is a graph, in which each node represents an Instagram account.</li>\n<li>In order to reach the next node you must acquire an address for the same, the address is the name of\nthe next Instagram account which you must figure out from the question/riddle in the preceding\nnode.</li>\n<li>Further details about the competition will be disclosed once you register.</li>\n<button class=\"register\"><a href=\"https://forms.gle/HeaxghakzfeT3PpXA\" target=\"blank\">Registration</a></button>\n<h2>Contact event head for more details</h2>\n<ul style=\"list-style-type: none; \">\n    <li>RAHUL JANGRA :9518015621</li>\n</ul>\n";
var valorant = " \n<h1 class=\"eventName\">VALORANT</h1>\n<br/>\n<p>SANGANIKA - The Computer Science Society of Deen Dayal Upadhyaya College, University of Delhi along with TECHMARATHON - The Departmental Fest presents VALORANT Tournament with exciting prize pool of Rs.4000.</p>\n <p>Participant are requested to join the official discord server of our college Non Tech VALORANT Event -</p> <a target=\"blank\" href=\"https://discord.gg/pCBAk3T8JE\"><button class =\"register\">Click here</button> </a>\n<h4>Last Day for form submission - 31st JAN 2022 </h4>\n<h3>IMPORTANT INFORMATION:-</h3>\n<p>The league administration and hosts have the right to decide outside or even against the rulebook in special cases to guarantee fair play.</p>\n<h3FORMAT:-</h3>\n<ul><li> All agents are free to play(excluded. Chamber &amp; Neon) </li><li> Single Elimination bracket(under the required   condition)  </li><li> All matches (excl. Semi and Grand Finals) are BO3. </li> <li>Semi Finals and Grand Final are BO5.</li></ul>\n<h3>REGISTRATION FORMAT:-</h3>\n<ul><li>Before registering for the event read these points so you will not face any difficulties further.</li><li> -A team can have no more than 6 players. </li><li>All games will take place on a game server situated in Mumbai servers only.</li><li> Coach (if your team have) can enter the lobby and sit in the coach slot of their respective team. </li><li> No changes may be made to your team information after registration closes.</li></ul>\n<p>Registration for DDUC TM VALORANT TOURNAMENT for registration of entire 6 teams players will be Rs.100 and if you can't make your members to register, you can still register by paying Rs.20 per head. You can pay through via Paytm(will give you the link at the end of this form).</p>\n<h3>PRIZE POOL:-</h3>\n<p>The amount will spread among the teams as- Winner - Rs.2500 Runner up - Rs.1000 MVP of entire tournament - Rs.500</p>\n<p>After filling the form, we will give you the WhatsApp group link. only the leader will have to join the WhatsApp group only. Valo I'D must be like this - xyzabc </p>\n<ul style=\"list-style-type: none; \"><li>For any queries contact-</li><li> Praveen - 7982774791</li><li> Ritik - 6201969853</li></ul>\n<button class=\"register\"><a href=\"https://forms.gle/Wsmw4pCrd1qT23Ce9\" target=\"blank\">Registration</a></button>\n";
var ludo = "\n<h1 class=\"eventName\">LUDO</h1>\n<br/>\n    <h4>Application used for the tournament will be <strong>LUDO KING.</strong> Player must have a suitable internet connection to play the game.</h4>\n    <p>This event will consist of 2 rounds.</p>\n    <p>\n        <ul>\n        <li>It\u2019s involves racing around the board with four players. Every player starts from their own \u201Cyard\u201D and has four pieces to play with. Each yard and their respective pieces are marked by different colours, predominantly \u2013 red, green, yellow and blue. The goal of the game is to move the pieces clockwise around the board and reach the \u201Chome\u201D triangles.</li>\n    </p>\n    <h3>There will be 3 rounds: PRELIMS, SEMI-FINALS, FINALS.</h3>\n    <h4>Time limit: 60 min</h4>\n    <p>\n        <ul >\n        <li>Rounds will be of knockout manner. There will be scheduled matches of teams.\nEach team will consist of four players. Winner from each team will qualify for\nthe second round i.e. SEMI-FINALS.</li>\n        <li>In SEMI-FINALS qualified participants will play in team of four and winner from each team will qualify for our FINALS</li>\n        <li>Similar process is going to be followed for round 3 and the one who wins the last round is the final winner.</li></ul>\n    </p>\n    <h3>RULES:</h3>\n    <ol>\n        <li>Participants are required to be online 10 mins before their scheduled matches.</li>\n        <li>If a participant is caught cheating, he/she will be directly disqualified rewarding\nOpponent the win.</li>\n        <li>Emulators are not allowed.</li>\n    </ol>\n    <br>\n<a href=\"https://forms.gle/rq1UXATNJHtfVzcFA\" target=\"blank\"><button class=\"register\">Registration</button></a>\n<h2>Contact event head for more details</h2>\n<ul style=\"list-style-type: none; \">\n    <li>Mahima : 9560406213</li>\n</ul>\n";
var fandom = "\n<h1 class=\"eventName\">TV FANDOM</h1>\n<h3>Description</h3>\n<pre>\n<p> So no one told you life was gonna be this way?\nWondering if you know that there is only one war that matters and\nit is here.\nTo fight the fastest man alive, you have to be willing to do the\nunthinkable.\nDo you know that Friends don't lie and Everything...affects\neverything.\nIf you know about \"kuckoo ka jadoo\", then come out of your mind\npalace.\nWe like big brains and we cannot lie - we know YOUR big brain is\nfull of the knowledge of your favourite TV shows!\nIf TV shows are your life,\nAnd you never get bored,\nCome and test your memory,\nHow well they are stored\n</p>\n</pre>\n<h3>ROUNDS</h3>\n<ol><li>Prelims:\n<p>It will be an objective type round with each participant getting 30\nquestions to answer. +10 for each correct answer and (-5) for each\nincorrect answer. The time limit for the round is 25 mins.</p></li>\n<li>The Finals\n</li>\n<p>This will be a PPT based round for which details will be provided\non the spot.</p>\n<a href=\"https://forms.gle/4tg1uf4671idNYrJ8\" target=\"blank\"><button class=\"register\">Registration</button></a>\n<h2>Contact event head for more details</h2>\n<ul style=\"list-style-type: none; \">\n    <li>Prakriti: 84235 53224</li>\n    <li>Himani Vashisht: 78272 74832</li>\n    <li>Himank : 8826610870</li>\n</ul>\n";
var events = {
  "webgators": webgators,
  "techWars": techwars,
  "algoOwls": algoowls,
  "techEscapade": techescapade,
  "codeBenders": codebenders,
  "bgmi": bgmi,
  "bumblejumble": bumblejumble,
  "bamboozled": bamboozled,
  "social": social,
  "pes": pes,
  "valorant": valorant,
  "ludo": ludo,
  "fandom": fandom
};
$('.gallery__item-link').on("click", function (e) {
  var event = $(e.target).attr('name');
  $('.rules').html(events[event]);
  $('.details').css("height", "75vh");
});
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58336" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/demo4/script.js"], null)
//# sourceMappingURL=/script.ddcbb075.js.map