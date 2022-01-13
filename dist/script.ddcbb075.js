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
var bumblejumble = "<h1 class=\"eventName\">Bumble Jumble</h1>\n<br/>\n    <h2>Programming language - C++</h2>\n    <p>This event will consist of 2 rounds.</p>\n    <h3>Round 1:</h3>\n    <h4>Time limit: 30 min</h4>\n    <p>\n        <ul>\n        <li>The first round will consist of 40-50 questions comprising snippets of code in the\njumbled form, Small functions with fill-ups, MCQ, etc.</li>\n        <li>Participants are required to answer the questions in specified formats.</li>\n        <li>The top 3 teams solving the maximum\nnumber of correct questions in the stipulated time will qualify for the next round.</li></ul>\n    </p>\n    <h3>Round 2:</h3>\n    <h4>Time limit: 60 min</h4>\n    <p>\n        <ul style=\"list-style-type: none; \">\n        <li>The second round will consist of two questions as follows</li>\n        <li>Question 1: Code having error/ Incorrect code (Time \u2013 15 min)</li>\n        <li>Question 2: Code with jumbled or missing lines/ having errors. ( Time \u2013 20 min )</li></ul>\n    </p>\n    <h3>The teams will be judged on the basis of accuracy and the amount of time\ntaken.</h3>\n<a href=\"https://forms.gle/AvMHUby9a8QQ9GHs5\" target=\"blank\"><button class=\"register\">Registration</button></a>\n\n<h2>Contact event head for more details</h2>\n<ul style=\"list-style-type: none; \">\n    <li>SIMRAN KUMARI : 7678690111</li>\n \n</ul>";
var bamboozled = "<h1 class=\"eventName\">BAMBOOZLED</h1>\n<br/>\n<p>50 questions, each has only one correct answer</p>\n<p>3 hints for each question unlockingafter5,10 and 10 tries respectively.</p>\n<p>Questions are basically a pic depicting some info or simple pics of something, which in someway</p>\n<p>Relate to a proper noun. The task of the player is to brainstorm, may use google or any other search engine and workout the answer.</p>\n    <h4>Example of Question :</h4>\n\n        <img src=\"img/demo4/bird.png\" alt=\"bird\">\n        <ul style=\"list-style-type: none; \">\n        <li>After 5 incorrect tries : hint 1 : I can't tweet</li>\n<li>After 10 incorrect tries: hint 2</li>\n<li>After 10 more incorrect tries (i.e 20 total tries): hint 3</li></ul>\n\n    <h3>Scoring System :\nCorrect</h3>\n        <ul style=\"list-style-type: none; \">\n        <li>Correct Answer in the first 5 tries i.e. without any hints: 50 points</li>\n<li>Correct Answer when one hint is revealed: 30 pts</li>\n<li>Correct Answer when 2 hints are revealed: 20 pts</li>\n<li>Correct answer when all 3 hints are revealed: 10 pts</li></ul>\n <h5>Player has Unlimited no. Of tries.</h5>\n    <h3>Winning criteria:</h3>\n     <ul style=\"list-style-type: none; \">\n        <li>We sum up the scores the player gets at each question he answers.</li>\n<li>We maintain a leaderboard which will be available to the players in the side bar at the portal.</li>\n<li>At the end of the day the top 3 team/person in the scoreboard will be the winners.</li>\n</ul>\n<h3>In case of a draw:</h3>\n<p>In this scenario, the one who achieved the score first will be considered the winner .\nSince the player/team who achieved the score first would already be up in the leader board, therefore in all cases the top three players/teams in the leaderboard at the end of the day will be the final winners.</p>\n<a href=\"https://forms.gle/YtaTzHbG7cMX4Lpu5\" target=\"blank\"><button class=\"register\">Registration</button></a>\n<h2>Contact event head for more details</h2>\n<ul style=\"list-style-type: none; \">\n    <li>VARCHASVA :9286011620</li>\n</ul>";
var pes = "<h1 class=\"eventName\">PES</h1>\n</br>\n<p>Application used for the tournament will be eFootball PES 2021 (KONAMI) . Player must have a suitable internet connection to play the game.</p>\n<ul>\n <li>Although only 1v1 full match will be going to held between the player followed by penalties if no winner is decided till the full course of match</li>\n\t<li>The pes 21 strives to emulate real football. As such, gameplay simulates a typical game of association football, with the player controlling either an entire team or a selected player; objectives coincide with the rules of association football. Various game modes have been featured in the series, allowing for gameplay variety, including the Kick Off, Online and Offline modes.</li>\n</ul>\n<h5>There will be single knockout matches , only finals will be a best of 3.</h5>\n<h3>RULES:</h3>\n<ul>\n\t<li>No emulators are not allowed , if found using one will be disqualified.</li>\n\t<li>If a participant is found using cheats or hacks he/she will be disqualified without any excuse</li>\n\t<li>Players are required to be online 10 mins prior before the match.</li>\n\t<li>\n\tIf no player is shown or is late , will be disqualified and other will be given a BYE(advanced to next level)\n\t</li>\n\t<li>Total team strength should not exceed more than 3800 (IMPORTANT)</li>\n\t<li>No more than 5 gold player cards are allowed in whole lineup INCLUDING\nSUBSITUTES.(IMPORTANT)</li>\n<li>Not a single card higher than gold is allowed like(legendary)</li>\n<li>Matches will be of default duration followed by penalties if ended in tie.</li>\n</ul>\n<button class=\"register\"><a href=\"https://forms.gle/TAkTMNcHg5qgbS497\" target=\"blank\">Register here</a></button>\n<h2>Contact event head for more details</h2>\n<ul style=\"list-style-type: none; \">\n    <li>ANSH :7303638798</li>\n</ul>\n";
var social = "<h1 class=\"eventName\">SOCIAL HUNT</h1>\n<h3>Event Description</h3>\n<p>Are you adventurous ?</p>\n<p>If yes then this is the time we embark on a treasure hunt mate. TM presents \u201CSocial Hunt\u201D a treasure\nhunt which will test your knowledge on the far faring sea of Tech knowledge, a journey which will have you enthralled and spirits high. From finding the treasure to ending up at a dead end, the one who finds the treasure first takes it all.</p>\n<h4>Event Details Duration of event: 1 hour</h4>\n<h4>Participation: Solo</h4>\n<h3>Rules</h3>\n<ul style=\"list-style-type: none;\">\n<li>The Social Hunt will take place on your favourite social platform \u201CInstagram\u201D where our team has set-up a virtual Treasure Map.</li>\n<li>All participants start-off at the same node where they\u2019ll have to answer tricky questions to move on\nto the next node on the Map.</li>\n<li>The objective is to reach the final node which holds the key to the treasure chest. As said before winner takes it all.</li>\n<li>Yes you guessed it right, the virtual map is a graph, in which each node represents an Instagram account.</li>\n<li>In order to reach the next node you must acquire an address for the same, the address is the name of\nthe next Instagram account which you must figure out from the question/riddle in the preceding\nnode.</li>\n<li>Further details about the competition will be disclosed once you register.</li>\n\n<button class=\"register\"><a href=\"https://forms.gle/HeaxghakzfeT3PpXA\" target=\"blank\">Registration</a></button>\n<h2>Contact event head for more details</h2>\n<ul style=\"list-style-type: none; \">\n    <li>RAHUL JANGRA :9518015621</li>\n</ul>\n";
var valorant = " <h1 class=\"eventName\">VALORANT</h1>\n<br/>\n\n\n<p>SANGANIKA - The Computer Science Society of Deen Dayal Upadhyaya College, University of Delhi along with TECHMARATHON - The Departmental Fest presents VALORANT Tournament with exciting prize pool of Rs.4000.</p>\n\n <p>Participant are requested to join the official discord server of our college Non Tech VALORANT Event -</p> <a target=\"blank\" href=\"https://discord.gg/pCBAk3T8JE\"><button class =\"register\">Click here</button> </a>\n\n<h4>Last Day for form submission - 31st JAN 2022 </h4>\n\n<h3>IMPORTANT INFORMATION:-</h3>\n\n<p>The league administration and hosts have the right to decide outside or even against the rulebook in special cases to guarantee fair play.</p>\n\n<h3FORMAT:-</h3>\n\n<ul><li> All agents are free to play(excluded. Chamber &amp; Neon) </li><li> Single Elimination bracket(under the required   condition)  </li><li> All matches (excl. Semi and Grand Finals) are BO3. </li> <li>Semi Finals and Grand Final are BO5.</li></ul>\n\n<h3>REGISTRATION FORMAT:-</h3>\n\n<ul><li>Before registering for the event read these points so you will not face any difficulties further.</li><li> -A team can have no more than 6 players. </li><li>All games will take place on a game server situated in Mumbai servers only.</li><li> Coach (if your team have) can enter the lobby and sit in the coach slot of their respective team. </li><li> No changes may be made to your team information after registration closes.</li></ul>\n\n<p>Registration for DDUC TM VALORANT TOURNAMENT for registration of entire 6 teams players will be Rs.100 and if you can't make your members to register, you can still register by paying Rs.20 per head. You can pay through via Paytm(will give you the link at the end of this form).</p>\n\n<h3>PRIZE POOL:-</h3>\n\n<p>The amount will spread among the teams as- Winner - Rs.2500 Runner up - Rs.1000 MVP of entire tournament - Rs.500</p>\n\n<p>After filling the form, we will give you the WhatsApp group link. only the leader will have to join the WhatsApp group only. Valo I'D must be like this - xyzabc </p>\n\n<ul style=\"list-style-type: none; \"><li>For any queries contact-</li><li> Praveen - 7982774791</li><li> Ritik - 6201969853</li></ul>\n<button class=\"register\"><a href=\"https://forms.gle/Wsmw4pCrd1qT23Ce9\" target=\"blank\">Registration</a></button>";
var ludo = " <h1 class=\"eventName\">LUDO</h1>\n<br/>\n    <h4>Application used for the tournament will be <strong>LUDO KING.</strong> Player must have a suitable internet connection to play the game.</h4>\n    <p>This event will consist of 2 rounds.</p>\n    <p>\n        <ul>\n        <li>It\u2019s involves racing around the board with four players. Every player starts from their own \u201Cyard\u201D and has four pieces to play with. Each yard and their respective pieces are marked by different colours, predominantly \u2013 red, green, yellow and blue. The goal of the game is to move the pieces clockwise around the board and reach the \u201Chome\u201D triangles.</li>\n    </p>\n    <h3>There will be 3 rounds: PRELIMS, SEMI-FINALS, FINALS.</h3>\n    <h4>Time limit: 60 min</h4>\n    <p>\n        <ul >\n        <li>Rounds will be of knockout manner. There will be scheduled matches of teams.\nEach team will consist of four players. Winner from each team will qualify for\nthe second round i.e. SEMI-FINALS.</li>\n        <li>In SEMI-FINALS qualified participants will play in team of four and winner from each team will qualify for our FINALS</li>\n        <li>Similar process is going to be followed for round 3 and the one who wins the last round is the final winner.</li></ul>\n    </p>\n    <h3>RULES:</h3>\n    <ol>\n        <li>Participants are required to be online 10 mins before their scheduled matches.</li>\n        <li>If a participant is caught cheating, he/she will be directly disqualified rewarding\nOpponent the win.</li>\n        <li>Emulators are not allowed.</li>\n    </ol>\n    <br>\n<a href=\"https://forms.gle/rq1UXATNJHtfVzcFA\" target=\"blank\"><button class=\"register\">Registration</button></a>\n<h2>Contact event head for more details</h2>\n<ul style=\"list-style-type: none; \">\n    <li>Mahima : 9560406213</li>\n</ul>";
var fandom = "<h1 class=\"eventName\">TV FANDOM</h1>\n<h3>Description</h3>\n<pre>\n<p> So no one told you life was gonna be this way?\nWondering if you know that there is only one war that matters and\nit is here.\nTo fight the fastest man alive, you have to be willing to do the\nunthinkable.\nDo you know that Friends don't lie and Everything...affects\neverything.\nIf you know about \"kuckoo ka jadoo\", then come out of your mind\npalace.\nWe like big brains and we cannot lie - we know YOUR big brain is\nfull of the knowledge of your favourite TV shows!\nIf TV shows are your life,\nAnd you never get bored,\nCome and test your memory,\nHow well they are stored\n</p>\n</pre>\n<h3>ROUNDS</h3>\n<ol><li>Prelims:\n<p>It will be an objective type round with each participant getting 30\nquestions to answer. +10 for each correct answer and (-5) for each\nincorrect answer. The time limit for the round is 25 mins.</p></li>\n<li>The Finals\n</li>\n<p>This will be a PPT based round for which details will be provided\non the spot.</p>\n<a href=\"https://forms.gle/4tg1uf4671idNYrJ8\" target=\"blank\"><button class=\"register\">Registration</button></a>\n\n<h2>Contact event head for more details</h2>\n<ul style=\"list-style-type: none; \">\n    <li>Prakriti: 84235 53224</li>\n    <li>Himani Vashisht: 78272 74832</li>\n    <li>Himank : 8826610870</li>\n</ul>\n";
var bgmi = "<h1 class=\"eventName\">BGMI</h1>\n<h2>There will be 2 tournaments under this event. battle Royale and Multiplayer(TDM)</h2>.\n\n<ul><li>For Battle Royale there will be 3 Room Matches and your positions will be decided by the points system of Official BGMI Tournaments.</li>\n\n<li>For TDM there will be 3 matches between 2 teams and the team who win 2 out of 3 matches will be considered Winner. Later this will be carried out further till finals. And at last 5 matches will be played between the finalists and the team who win 3 matches out of 5 will be considered the final winner.</li>\n\n<p>A player\u2019s gamer tag or in-game nickname (\u201CGamer Tag\u201D) must consist of the player\u2019s Team name (or acronym or other word representative of the Team name) and player name in the format of \u201CTEAMNAMEPLAYERNAME\u201D. Gamer Tags will be selected at the time of registration and may not be changed at any time during a Season without the prior written approval of the Tournament Officials. A Gamer Tag may not include any word or phrase in any language that is offensive, toxic, or hurtful. A Gamer Tag may not include all or part of a corporate name or make use of the trademarks or other intellectual property of Proxima, BGMI or any third party without the prior written approval of the Tournament Organizer.</p>\n<a href=\"https://forms.gle/aHkDhaqWC4ZN2dFM8\" target=\"blank\"><button class=\"register\">Registration</button></a>\n\n<h2>Contact event head for more details</h2>\n<ul style=\"list-style-type: none; \">\n    <li>SUSHANT KUMAR : 8447990060</li>\n \n</ul>";
var events = {
  "bumblejumble": bumblejumble,
  "bamboozled": bamboozled,
  "social": social,
  "pes": pes,
  "valorant": valorant,
  "ludo": ludo,
  "fandom": fandom,
  "bgmi": bgmi
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55228" + '/');

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