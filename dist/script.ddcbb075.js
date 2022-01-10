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
$('.close').on("click", function () {
  console.log($('.details'));
  $('.details').css("height", "0");
});
var bumblejumble = "<h1 class=\"eventName\">Bumble Jumble</h1>\n<br/>\n    <h2>Programming language - C++</h2>\n    <p>This event will consist of 2 rounds.</p>\n    <h3>Round 1:</h3>\n    <h4>Time limit: 30 min</h4>\n    <p>\n        <ul>\n        <li>The first round will consist of 40-50 questions comprising snippets of code in the\njumbled form, Small functions with fill-ups, MCQ, etc.</li>\n        <li>Participants are required to answer the questions in specified formats.</li>\n        <li>The top 3 teams solving the maximum\nnumber of correct questions in the stipulated time will qualify for the next round.</li></ul>\n    </p>\n    <h3>Round 2:</h3>\n    <h4>Time limit: 60 min</h4>\n    <p>\n        <ul style=\"list-style-type: none; \">\n        <li>The second round will consist of two questions as follows</li>\n        <li>Question 1: Code having error/ Incorrect code (Time \u2013 15 min)</li>\n        <li>Question 2: Code with jumbled or missing lines/ having errors. ( Time \u2013 20 min )</li></ul>\n    </p>\n    <h3>The teams will be judged on the basis of accuracy and the amount of time\ntaken.</h3>\n<a href=\"https://forms.gle/AvMHUby9a8QQ9GHs5\" target=\"blank\"><button class=\"register\">Registration</button></a>\n\n<h2>Contact event head for more details</h2>\n<ul>\n    <li>Name : Contact</li>\n    <li>Name : Contact</li>\n</ul>";
var bamboozled = "<h1 class=\"eventName\">BAMBOOZLED</h1>\n<br/>\n<p>50 questions, each has only one correct answer</p>\n<p>3 hints for each question unlockingafter5,10 and 10 tries respectively.</p>\n<p>Questions are basically a pic depicting some info or simple pics of something, which in someway</p>\n<p>Relate to a proper noun. The task of the player is to brainstorm, may use google or any other search engine and workout the answer.</p>\n    <h4>Example of Question :</h4>\n\n        <img src=\"img/demo4/bird.png\" alt=\"bird\">\n        <ul style=\"list-style-type: none; \">\n        <li>After 5 incorrect tries : hint 1 : I can't tweet</li>\n<li>After 10 incorrect tries: hint 2</li>\n<li>After 10 more incorrect tries (i.e 20 total tries): hint 3</li></ul>\n\n    <h3>Scoring System :\nCorrect</h3>\n        <ul style=\"list-style-type: none; \">\n        <li>Correct Answer in the first 5 tries i.e. without any hints: 50 points</li>\n<li>Correct Answer when one hint is revealed: 30 pts</li>\n<li>Correct Answer when 2 hints are revealed: 20 pts</li>\n<li>Correct answer when all 3 hints are revealed: 10 pts</li></ul>\n <h5>Player has Unlimited no. Of tries.</h5>\n    <h3>Winning criteria:</h3>\n     <ul style=\"list-style-type: none; \">\n        <li>We sum up the scores the player gets at each question he answers.</li>\n<li>We maintain a leaderboard which will be available to the players in the side bar at the portal.</li>\n<li>At the end of the day the top 3 team/person in the scoreboard will be the winners.</li>\n</ul>\n<h3>In case of a draw:</h3>\n<p>In this scenario, the one who achieved the score first will be considered the winner .\nSince the player/team who achieved the score first would already be up in the leader board, therefore in all cases the top three players/teams in the leaderboard at the end of the day will be the final winners.</p>\n<a href=\"https://forms.gle/YtaTzHbG7cMX4Lpu5\" target=\"blank\"><button class=\"register\">Registration</button></a>\n<h2>Contact event head for more details</h2>\n<ul>\n    <li>Name : Contact</li>\n    <li>Name : Contact</li>\n</ul>";
var pes = "<h1 class=\"eventName\">PES</h1>\n</br>\n<p>Application used for the tournament will be eFootball PES 2021 (KONAMI) . Player must have a suitable internet connection to play the game.</p>\n<ul>\n <li>Although only 1v1 full match will be going to held between the player followed by penalties if no winner is decided till the full course of match</li>\n\t<li>The pes 21 strives to emulate real football. As such, gameplay simulates a typical game of association football, with the player controlling either an entire team or a selected player; objectives coincide with the rules of association football. Various game modes have been featured in the series, allowing for gameplay variety, including the Kick Off, Online and Offline modes.</li>\n</ul>\n<h5>There will be single knockout matches , only finals will be a best of 3.</h5>\n<h3>RULES:</h3>\n<ul>\n\t<li>No emulators are not allowed , if found using one will be disqualified.</li>\n\t<li>If a participant is found using cheats or hacks he/she will be disqualified without any excuse</li>\n\t<li>Players are required to be online 10 mins prior before the match.</li>\n\t<li>\n\tIf no player is shown or is late , will be disqualified and other will be given a BYE(advanced to next level)\n\t</li>\n\t<li>Total team strength should not exceed more than 3800 (IMPORTANT)</li>\n\t<li>No more than 5 gold player cards are allowed in whole lineup INCLUDING\nSUBSITUTES.(IMPORTANT)</li>\n<li>Not a single card higher than gold is allowed like(legendary)</li>\n<li>Matches will be of default duration followed by penalties if ended in tie.</li>\n</ul>\n<button class=\"register\"><a href=\"https://forms.gle/TAkTMNcHg5qgbS497\" target=\"blank\">Register here</a></button>\n<h2>Contact event head for more details</h2>\n<ul>\n    <li>Name : Contact</li>\n    <li>Name : Contact</li>\n</ul>\n";
var social = "<h1 class=\"eventName\">SOCIAL HUNT</h1>\n<h3>Event Description</h3>\n<p>Are you adventurous ?</p>\n<p>If yes then this is the time we embark on a treasure hunt mate. TM presents \u201CSocial Hunt\u201D a treasure\nhunt which will test your knowledge on the far faring sea of Tech knowledge, a journey which will have you enthralled and spirits high. From finding the treasure to ending up at a dead end, the one who finds the treasure first takes it all.</p>\n<h4>Event Details Duration of event: 1 hour</h4>\n<h4>Participation: Solo</h4>\n<h3>Rules</h3>\n<ul style=\"list-style-type: none;\">\n<li>The Social Hunt will take place on your favourite social platform \u201CInstagram\u201D where our team has set-up a virtual Treasure Map.</li>\n<li>All participants start-off at the same node where they\u2019ll have to answer tricky questions to move on\nto the next node on the Map.</li>\n<li>The objective is to reach the final node which holds the key to the treasure chest. As said before winner takes it all.</li>\n<li>Yes you guessed it right, the virtual map is a graph, in which each node represents an Instagram account.</li>\n<li>In order to reach the next node you must acquire an address for the same, the address is the name of\nthe next Instagram account which you must figure out from the question/riddle in the preceding\nnode.</li>\n<li>Further details about the competition will be disclosed once you register.</li>\n\n<button class=\"register\"><a href=\"https://forms.gle/wxz9mkRg6b5Mxfsr5\" target=\"blank\">Registration</a></button>\n<h2>Contact event head for more details</h2>\n<ul>\n    <li>Name : Contact</li>\n    <li>Name : Contact</li>\n</ul>\n";
var valorant = " <h1 class=\"eventName\">VALORANT</h1>\n<br/>\n<h3>Main Rule \u2013</h3>\n<p>The league administration and hosts have the right to decide outside or even against the rulebook in special cases to guarantee fair play.</p>\n<h3>Code of Conduct-</h3>\n<p>Every participant must behave with respect towards the representatives of the DDUCSL, press, viewers, partners, and other players. The participants are requested to represent esports, the DDUCSL, and their Sponsors honourably. This applies to behaviour in-game and also in chats, messengers, comments and other media. We expect players to conduct themselves according to the following values:\n    <ul><li>Compassion: treat others as you would be treated.</li>\n    <li>Integrity: be honest, be committed, play fair.</li>\n    <li>Respect: show respect all other humans, including teammates, competitors, and event staff.</li>\n    <li>Courage: be courageous in competition and in standing up for what is right</li></ul>\n    Participants must not engage in harassment or hate speech in any form. This includes, but is not limited to:\n    <ul><li>Hate speech, offensive behaviour, or verbal abuse related to sex, gender identity and expression, sexual orientation, race, ethnicity, disability, physical appearance, body size, age, or religion.</li>\n    <li>Stalking or intimidation (physically or online).</li>\n    <li>Spamming, raiding, hijacking, or inciting disruption of streams or social media.</li>\n    <li>Posting or threatening to post other people\u2019s personally identifying information (\u201Cdoxing\u201D).</li>\n    <li>Unwelcome sexual attention. This includes unwelcome sexualized comments, jokes, and sexual advances.</li>\n    <li>Advocating for, or encouraging, any of the above behaviour.</li></ul></p>\n</p>\n<h3>Insults and Offensive Behaviour-</h3>\n<p>All insults that happen during an DDUCSL-Match or on the DDUCSL platform, may be punished. This includes but is not limited to in-game chat of the corresponding game, guestbooks, forums, Match- or News-Comments, DDUCSL Messages, Match-\nChat, game IDs. Insults that happen on external messengers are not considered.</p>\n<p>Penalties are no longer limited to Penalty Points and barrages, but may also contain the following depending on the incident, location and frequency of the insult:</p>\n<ul><li>Penalty Points & barrages are given for incidents within DDUCSL-Matches</li>\n<li>Insults or inappropriate behaviour within Comments or other options for contacting a player, will result in a Forum- & Comment ban</li></ul>\n\n<p>Severe incidents including, but not limited to the following points, may be punished in other ways:</p>\n<ul>\n    <li>Extremist statements</li>\n    <li>Threat of violence</li>\n    <li>Sexual harassment</li>\n    <li>Stalking</li>\n    <li>severe insults</li>\n    <li>pornographic linking</li>\n</ul>\n<p>The right to appeal is only with the injured.</p>\n<h4>Spamming-</h4>\n<p>The excessive posting of futile, annoying or offensive contributions within the DDUCSL is considered as spamming. Spamming on the website (forums, match comments, player comments, support- and protest pages, etc) is penalized as follows:</p>\n<ul>\n    <li>Written warning for the first offence</li>\n    <li>1 penalty point + 1 match comment ban for the second spamming incident</li>\n    <li>2 penalty points + 2 match comment ban for the third spamming incident.</li>\n    <li>3 penalty points + 3 match comment ban for the fourth and any further spamming incidents</li>\n    \n</ul>\n<p>The decisive factor therefore is the number of active penalties for spamming.</p>\n<h4>Public Behaviour-\nAll participants</h4>\n<p>All participants shall abstain, always, from poor, undesirable, or negative behaviour towards anybody involved with the tournament in any way.</p>\n<p>All participants shall abstain, always, from any action or inaction that brings anybody involved with the tournament in any way into public disrepute, contempt, scandal or ridicule or reduces the public relations or commercial value of any involved party. This includes derogatory comments aimed at DDUCSL, its partners or products in interviews, statements and/or social media channels.</p>\n<h4>Matches, Competition, Meetings-</h4>\n<p>The matches are considered and will be played according to the total no. of team\u2019s participation. If more no. of teams are there than the prelims round will be considered and if the less no. of the teams then it will be going through qualifiers round.</p>\n<p>In all competitions there should be a fair playing field for all players.</p>\n<p>Every encounter, whether a ladder match or other competition must be played according to the rules until it is complete and the result on the DDUCSL discord server entered, or at events the result sheet is completed. Any encounter that did not take place, should be deleted. Matches will be opened only by admins & hosts to delete exceptions. Matches that did not take place will be considered fake matches and will be punished.</p>\n<p>It is not allowed for participants to bet on matches in their own competition. Betting against yourself (in team leagues: against your own team) will get you (in team leagues: your team) disqualified and the betting player(s) banned.</p>\n<p>Players and teams that are already qualified for or participating in an event or the later stages of a tournament are not allowed to participate in any of its ongoing or upcoming qualifiers. In the case of a player or team breaching this rule, they will be disqualified from the current qualifier and may face further punishment, up to and including disqualification from the event.</p>\n<h4>Game Coverage-</h4>\n<p>The DDUCSL all Valorant tournaments will be shown or streamed either on their discord server or their YouTube channel.</p>\n<h4>Match Fixing \u2013 </h4>\n<p>If we found any of the player or the team is going to match fixing, they will be punished accordingly. Engaging in any action that improperly influences the outcome of a game or match by any means.</p>\n<h3>Accounts \u2013</h3>\n<h4>Multiaccounts-</h4>\n<p>Each player in the DDUCSL must only have one account! If a player cannot access his account and then creates a new one, then he/she must write a support ticket explaining in detail the reason for not being able to access the account. They must have send their only one account which they gonna play their tourney</p>\n<h3>Nicknames, Team names and URL Aliases-</h3>\n<p>We reserve the right to edit Nicknames and/or URL aliases if they fail to comply with the following requirements.</p>\n<p>Nicknames/aliases are forbidden if they:\n    <ul><li>are protected by third-party rights and the user has no written permission </li>\n    \n    <li>resemble or if they are identical to a brand or trademark, no matter whether it has been registered or not</li>\n    <li>resemble or if they are identical to a real person other than themselves</li>\n    <li>use names of DDUCSL Gaming products</li>\n    <li>resemble or if they are identical to the names of DDUCSL Gaming employees</li>\n    <li>are nonsense</li>\n    </ul>\n\n</p>\n<p>In addition to the above, any nicknames/team names/aliases that are purely commercial (e.g., product names), defamatory, pejorative, offensive, vulgar, obscene, anti-Semitic, inciting hatred, or offending against good manners are forbidden. Using alternative spelling, gibberish, or wrong spelling to avoid the requirements mentioned above is illegal. We reserve the right to extend, change, exchange or delete these rules if necessary</p>\n<h3>Teams \u2013</h3>\n<p>A team's name does not have to be unique, but the DDUCSL reserves the right to refuse clans with the same or similar names as a well-known clan (e.g., If you named your team to any nationality or any company or any relevant, that would not be allowed).</p>\n<p>Names which are restricted by law will not be accepted and will be deleted and punished with penalty points if found. Also, names which go against all forms of etiquette and good manners will not be accepted.</p>\n<p>If a team deletes its account because of a certain amount of active penalty points and registers a new account, the penalty points will be transferred to the new account if the team re-joins the same ladder. Furthermore 1 additional penalty will be added for the attempted deception.</p>\n<p>The logo must represent the team and have some reference to the team's name or to the team's short handle. Copyrighted logos, or logos which go against etiquette and good manners will not be accepted.</p>\n<p>The teams name must be written in front of all their player\u2019s name like as \u2013 (Team or Clan Name) (Player\u2019s Name)</p>\n<h3>Changing Team Names-</h3>\n\n<p>A team can change its name at any time. This also applies when a team is restructured.</p>\n<p>Changing a team's name to fool other teams is forbidden. Extremely long names, or consistent changing of team names is prohibited and can be punished with penalty points.</p>\n<h3>Players in Team-</h3>\n<p>A player may only play for one team in a tournament or league. Participants in one clan or team may not also play in other team or clan underneath it.</p>\n<p>In tournaments or leagues that require Premium or Trusted then only players with this status are eligible to play. In general players that are marked inactive or honorary on a team page are not eligible to play.</p>\n<p>If a homepage is required for a tournament or league, then every player that is on the team account must also be on the homepage.</p>\n<h3>Sponsors/Partnerships-</h3>\n<p>The DDUCSL administration reserves the right to prohibit or remove teams with sponsors or partners that are solely or widely known for pornographic, drug use or other adult/mature themes and products from partaking in DDUCSL Play events at any time.</p>\n<h2>All contents are copyrighted and will be used with their owner\u2019s permission. All content in this document is accurate to the best of our knowledge.</h2>\n<h2>Contact event head for more details</h2>\n<ul>\n    <li>Name : Contact</li>\n    <li>Name : Contact</li>\n</ul>\n<button class=\"register\"><a href=\"https://forms.gle/8HJfH9rcdhLscSXV8\" target=\"blank\">Registration</a></button>";
var ludo = " <h1 class=\"eventName\">LUDO</h1>\n<br/>\n    <h4>Application used for the tournament will be <strong>LUDO KING.</strong> Player must have a suitable internet connection to play the game.</h4>\n    <p>This event will consist of 2 rounds.</p>\n    <p>\n        <ul>\n        <li>It\u2019s involves racing around the board with four players. Every player starts from their own \u201Cyard\u201D and has four pieces to play with. Each yard and their respective pieces are marked by different colours, predominantly \u2013 red, green, yellow and blue. The goal of the game is to move the pieces clockwise around the board and reach the \u201Chome\u201D triangles.</li>\n    </p>\n    <h3>There will be 3 rounds: PRELIMS, SEMI-FINALS, FINALS.</h3>\n    <h4>Time limit: 60 min</h4>\n    <p>\n        <ul >\n        <li>Rounds will be of knockout manner. There will be scheduled matches of teams.\nEach team will consist of four players. Winner from each team will qualify for\nthe second round i.e. SEMI-FINALS.</li>\n        <li>In SEMI-FINALS qualified participants will play in team of four and winner from each team will qualify for our FINALS</li>\n        <li>Similar process is going to be followed for round 3 and the one who wins the last round is the final winner.</li></ul>\n    </p>\n    <h3>RULES:</h3>\n    <ol>\n        <li>Participants are required to be online 10 mins before their scheduled matches.</li>\n        <li>If a participant is caught cheating, he/she will be directly disqualified rewarding\nOpponent the win.</li>\n        <li>Emulators are not allowed.</li>\n    </ol>\n    <br>\n<a href=\"https://forms.gle/rq1UXATNJHtfVzcFA\" target=\"blank\"><button class=\"register\">Registration</button></a>\n<h2>Contact event head for more details</h2>\n<ul>\n    <li>Name : Contact</li>\n    <li>Name : Contact</li>\n</ul>";
var fandom = "<h1 class=\"eventName\">TV FANDOM</h1>\n<h3>Description</h3>\n<pre>\n<p> So no one told you life was gonna be this way?\nWondering if you know that there is only one war that matters and\nit is here.\nTo fight the fastest man alive, you have to be willing to do the\nunthinkable.\nDo you know that Friends don't lie and Everything...affects\neverything.\nIf you know about \"kuckoo ka jadoo\", then come out of your mind\npalace.\nWe like big brains and we cannot lie - we know YOUR big brain is\nfull of the knowledge of your favourite TV shows!\nIf TV shows are your life,\nAnd you never get bored,\nCome and test your memory,\nHow well they are stored\n</p>\n</pre>\n<h3>ROUNDS</h3>\n<ol><li>Prelims:\n<p>It will be an objective type round with each participant getting 30\nquestions to answer. +10 for each correct answer and (-5) for each\nincorrect answer. The time limit for the round is 25 mins.</p></li>\n<li>The Finals\n</li>\n<p>This will be a PPT based round for which details will be provided\non the spot.</p>\n<a href=\"https://forms.gle/4tg1uf4671idNYrJ8\" target=\"blank\"><button class=\"register\">Registration</button></a>\n\n<h2>Contact event head for more details</h2>\n<ul>\n    <li>Prakriti: 84235 53224</li>\n    <li>Himani Vashisht: 78272 74832</li>\n    <li>Himank : 8826610870</li>\n</ul>\n\n\n\n\n\n\n";
var events = {
  "bumblejumble": bumblejumble,
  "bamboozled": bamboozled,
  "social": social,
  "pes": pes,
  "valorant": valorant,
  "ludo": ludo,
  "fandom": fandom
};
$('.gallery__item-link').on("click", function (e) {
  // alert("charu");
  var event = $(e.target).attr('name'); // console.log(event);

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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57903" + '/');

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