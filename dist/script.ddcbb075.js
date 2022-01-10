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
document.addEventListener("click", function (e) {
  var detailsdiv = document.querySelector(".details").getBoundingClientRect();
  var check = document.querySelector('.details');

  if (!check.contains(e.target) && detailsdiv.height != 0) {
    console.log($('.details'));
    $('.details').css("height", "0");
  }
});
var webgators = "\n<h1 class=\"eventName\">Webgators</h1>\n<br/>\n<p>\n    <h2>About the Event:</h2>\n    Participants will have to use their knowledge and web development skills to solve the problems provided \n    <br/>\n    in the event within the given period of time. The event will have 2 rounds. \n    \n    <h2>About the rounds:</h2>\n    <h3>First round</h3> will be an elimination round. It will consist of 30 MCQ\u2019s based questions. All the questions will\n    <br/>\n    be related to web development. The time limit will be 30 minutes. There can be more than 1 correct answers. \n    <br/>\n    There will be no negative marking. Top 40% to score the most will proceed to second round.\n    <br/>\n    <h3>Second round</h3> will be the final round. Time limit will be 120 minutes. Participants will be \n    <br/>\n    provided a theme and they will have to make a website based on that theme. \n</p>\n<h2>Rules</h2>\n<ul>\n    <li>Individual or a team consisting of 2 members</li>\n    <li>The participants are allowed to use following web languages: HTML, CSS, PHP, JAVASCRIPT, JQUERY and NodeJS.</li> \n    <li>Software that can be used: MYSQL, APACHE with PHP, Express with NodeJS</li>\n</ul>\n<h2>Prize Distribution:</h2>\nPrize will be distributed to best two participants. \n\n<h2>Contact event head for more details</h2>\n<ul>\n    <li>Name : Contact</li>\n    <li>Name : Contact</li>\n</ul>\n<button class=\"register-btn\" onclick=\"location.href='https://forms.gle/cLJRF4wbKrrAdoGt6';\">Register Here</button>\n";
var techwars = "\n<h1 class=\"eventName\">TechWars</h1>\n<br/>\n<p>\n    <h2>About</h2>\n    Players have to use their knowledge regarding technical and aptitude solving skills to be on top of the list\n    <br/>\n    among other players. There will be 3 rounds of the game: Preliminaries, Mains and Finals.\n    <h3>Round 1 (Preliminaries)</h3>\n    It will be an elimination round in which all the players will participate. There will be 40 objective type \n    <br/>\n    questions assessing their technical and aptitude ability. The total time allocated for this round will be 10 minutes.\n    <br/>\n    Each question will be of 2 points. 0.5 points will be deducted for incorrect answers. Tiebreakers in Round 1 will \n    <br/>\n    be based on the time of submission. The top 8 teams from this round will proceed to Round 2.\n    <h3>Round 2 (Mains)</h3>\n    This round is completely based on visualization. There will be 30 Questions related to logos, tag lines etc. \n    <br/>\n    The time allocated will be 15 minutes. 3 points will be awarded for correct answers and 1 point will be deducted\n    <br/>\n    for incorrect ones. In case of a tie in Round 2, a tie-breaker rapid-fire round will be held.\n    <br/>\n    4 teams having maximum points will proceed to the third round i.e. Finals (Company Gleam).\n    <h3>Round 3 (Finals)</h3>\n    Each Team will be given one company and they will be allotted 5 minutes to study about the given company. \n    <br/>\n    Any source including the internet can be used. After the given time, five questions will be asked on each company \n    <br/>\n    and each team will be given 30 seconds to answer the questions given to them. Each question carries 3 points. \n    <br/>\n    There will be no negative marking The winners will be chosen based on the highest points.\n</p>\n<h2>Rules</h2>\n<br/>\n<ul>\n    <li>No. of team members should not exceed 2</li>\n    <li>Individual participation is allowed</li>\n    <li>No external help is admissible</li>\n</ul>\n\n<h2>Contact event head for more details</h2>\n<ul>\n    <li>Name : Contact</li>\n    <li>Name : Contact</li>\n</ul>\n\n<h5>Participants will be briefed on the rules in detail during the event</h5>\n<button class=\"register-btn\" onclick=\"location.href='https://forms.gle/bgo35etfKzfPHAcs6';\">Register Here</button>\n";
var algoowls = "\n<h1 class=\"eventName\">AlgoOwls</h1>\n<br/>\n<p>\n    <h2>About</h2>\n    Players have to use their general reasoning and problem solving skills in order to proclaim themselves as the \n    <br/>\n    winner of this game. There will be two rounds of the game:\n    <br/>\n    Prelims and Mains.\n    <h3>Round 1: Prelims</h3>\n    The player will be given 30 objective type questions to answer in 25 minutes. Questions will be based on \n    <br/>\n    basic to advanced algorithmic concepts. Each question is of 4 marks and 1 mark will be deducted for every \n    <br/>\n    wrong answer. Participants can attempt this round on the portal.\n    <h3>Round 2: Mains</h3>\n    This round will be based on deducing an algorithm for a set of 4 problems based on a given storyline.\n    <br/>\n    Each question has different weightage and the total marks will be 50. There will be no negative marking.\n    <br/>\n    The time allocated for this round is 1 hour 45 minutes. The solution need not be fully code, but the \n    <br/>\n    approach should be detailed and step based.\n    <h2>Marking</h2>\n    Marking would be done on the basis of optimality, feasibility, space and time complexity of the solution.\n    <br/>\n    In case of a tie, the winner would be decided on the basis of marks in prelims. Platform would be \n    <br/>\n    decided later and notified then.\n</p>\n<h2>Rules</h2>\n<br/>\n<ul>\n    <li>Only an individual can participate in the event. No teams of two or more people are allowed to participate.</li>\n    <li>Individuals going to the main round would be decided on the basis of cutoff generated in the prelims round</li>\n</ul>\n\n<h2>Contact event head for more details</h2>\n<ul>\n    <li>Name : Contact</li>\n    <li>Name : Contact</li>\n</ul>\n<button class=\"register-btn\" onclick=\"location.href='https://forms.gle/7Cre2dWFD4neC9GP6';\">Register Here</button>\n";
var techescapade = "\n<h1 class=\"eventName\">TechEscapade</h1>\n<br/>\n<p>\n    <h2>Event Description</h2>\n    Tech Escapade is a Treasure hunt / Obstacle Course like event. Each player is a given a same beginning point\n    <br/>\n    in a puzzle like format and solving each puzzle leads to another puzzle and finally an end point where the \n    <br/>\n    event for that participant will end and their scores and time taken will be recorded.\n    <h2>Event Structure</h2>\n    The event will be held in online mode and there will be no prelims-finals structure, just one path for the\n    <br/>\n    participants to follow. In due course of event, the difficulty level of puzzles will keep increasing and \n    <br/>\n    since the event is time based, the winners will be decided on the basis of time taken by them to complete the whole event.\n    <h2>Prize Structure</h2>\n    As of now, the winners will be decided by the time they take to complete the event and reach the end point. \n    <br/>\n    There will be two winners:\n    1. Winner - \u20B92500\n    2. 1st Runner Up - \u20B91500\n</p>\n\n<h2>Contact event head for more details</h2>\n<ul>\n    <li>Name : Contact</li>\n    <li>Name : Contact</li>\n</ul>\n<button class=\"register-btn\" onclick=\"location.href='https://forms.gle/Xd5DF8g9XdBYvQVs9';\">Register Here</button>\n";
var codebenders = "\n<h1 class=\"eventName\">CodeBenders</h1>\n<br/>\n<p>\n    <h2>Event Description</h2>\n    Code Benders is a coding contest that will be hosted on the CodeChef. There will be around 5 - 6 coding problems\n    <br/>\n    based on Problem Solving Skills, Data Structures and Algorithms.\n    \n    <h2>Event Structure</h2>\n    The Contest will only have a 1 stage format and no prelims and will be completely online. The contest will\n    <br/>\n    follow IOI Style Rank list which won\u2019t result in any ties between the participants. The duration of the contest\n    <br/>\n    will be 3 hours and timings, as per CodeChef guidelines, need to be from 8:00 PM to 11:00 PM.\n    \n    <h2>Prize Structure (tentative)</h2>\n    The top 2 participants will be awarded with prizes:\n    1. Winner - \u20B92500\n    2. 1st Runner Up - \u20B91500\n</p>\n<h2>Contact event head for more details</h2>\n<ul>\n    <li>Name : Contact</li>\n    <li>Name : Contact</li>\n</ul>\n<button class=\"register-btn\" onclick=\"location.href='https://forms.gle/DKK5K2yk7qTDPg118';\">Register Here</button>\n";
var bgmi = "\n<h1 class=\"eventName\">PUBG/BGMI</h1>\n<br/>\n<p>\n    <h2>General Terms</h2>\n    <h3>Acceptance -</h3>\n    Each Team Member must agree to these General Rules and the applicable Competition-Specific Rules to participate\n    <br/>\n    in any Tournament. A Team Member may accept these General Rules or the applicable Competition-Specific Rules\n    <br/>\n    by registering to participate in an Official Competition in accordance with the Registration Requirements or by \n    <br/>\n    participating in any Tournament.\n    \n    <h3>Players -</h3>\n    <b>Eligibility -</b>\n    <ul>\n        <li>\n        Player\u2019s age: To be eligible to participate in a Tournament as a player, an individual must have reached\n        <br/>\n        13 years of age or older (i.e., the player has lived for at least 13 calendar years) as of the Tournament\n        <br/>\n        start date. If a player is 13 years of age or older but under the age of majority in his or her country of\n        <br/>\n        residence before the start of the Tournament, he or she may still compete in the Tournament if (1) he or \n        <br/>\n        she meets the other eligibility criteria in these General Rules and the applicable Competition Specific Rules,\n        <br/>\n        and (2) a parent or legal guardian accepts these General Rules and the applicable Competition-Specific Rules \n        <br/>\n        on behalf of the player, and consents to the player\u2019s participation in the Tournament using a parental consent \n        <br/>\n        form provided by the Tournament Organizer.\n        </li>\n        <li>\n        Ranking Requirement: All players on a Team\u2019s roster must have held a ranking for BGMI of \u201CPlatinum\u201D or above, \n        <br/>\n        in any mode (TPP or FPP),with min level 30 at the time of registration for any Official Competition.\n        </li>\n        <li>\n        Multiple Teams: Players may not play for or contract with more than one Team at a time. If a player enters \n        <br/>\n        such an arrangement or contract, Tournament Officials reserve the right to bar the player from playing any\n        <br/>\n        future matches until the situation has been resolved and the player is in compliance with the requirements \n        <br/>\n        in this Section.\n        </li>\n        <li>\n        Regional Requirements: To maintain the regional identity of teams that compete in a global competition and \n        <br/>\n        to encourage the type of regional identification that is important to fans and sponsors, each Team must\n        <br/>\n        maintain, at all times during any Official Competition.\n        </li>\n        <li>\n        Team\u2019s Region: A Team\u2019s home Region is identified by the Team Captain at the time of registration and may \n        <br/>\n        not be changed at any time during an Official Competition without the prior written approval of the \n        <br/>\n        Tournament Officials.\n        </li>\n    </ul>\n    <h3>Player\u2019s Name</h3>\n    A player\u2019s gamer tag or in-game nickname (\u201CGamer Tag\u201D) must consist of the player\u2019s Team name (or acronym or\n    <br/>\n    other word representative of the Team name) and player name in the format of \u201CTEAMNAMEPLAYERNAME\u201D. Gamer Tags\n    <br/>\n    will be selected at the time of registration and may not be changed at any time during a Season without the\n    <br/>\n    prior written approval of the Tournament Officials. A Gamer Tag may not include any word or phrase in any\n    <br/>\n    language that is offensive, toxic, or hurtful. A Gamer Tag may not include all or part of a corporate name \n    <br/>\n    or make use of the trademarks or other intellectual property of Proxima, BGMI or any third party without the \n    <br/>\n    prior written approval of the Tournament Organizer.\n    \n    <h2>Rules and Mode of Conduct -</h2>\n    <ul>\n        <li>Emulator / hackers are not allowed.</li>\n        <li>If you have been killed by hacker then record death replay. After seeing the\n        recording only action shall be taken.</li>\n        <li>No abusive language will be tolerated neither with the management nor with the any other team player.</li>\n        <li>Team ups are strictly prohibited. If found your team will be banned from all upcoming events and scrims.</li>\n        <li>We will give ban for not attending customs after doing registration of their squad.</li>\n        <li>Cancellation of slot will only be accepted if you cancel within 1 hour of registration.</li>\n        <li>Do not sit in others slot otherwise it will result in kick from the room.</li>\n        <li>Join on time, match will start on exact time.</li>\n        <li>Using others tag for registration will result in disqualification.</li>\n        <li>Do not share, room id & password with any other unregistered player. If we find you are sharing id & \n        <br/>\n        pass with someone your team will get disqualified from the tournament.</li>\n        <li>As we all know, BGMI has many glitches, so we request you not to exploit any glitches. If any team is\n        <br/>\n        found exploiting any kind of bugs or glitches, they will be disqualified from that match.</li>\n    </ul>\n    <h3>Types of tourneys -</h3>\n    The events will be held in two types:\n    <ol type=1>\n        <li>\n        Battle Royal Mode \u2013 In this mode the admins or hosts will create their custom room in which all the\n        <br/>\n        interested participants required to join within the on their given slot. If someone fails on joining\n        <br/>\n        the room in time their team leader will tell the hosting teams or administrators for hold to start \n        <br/>\n        the game. If the time is taken more then hosts have their on permission to start the game within \n        <br/>\n        given time. The match will be held according to the point system method and judged by our admins only.\n        <br/>\n        Every kills is worth 1 point.\n        </li>\n        <li>\n        Deathmatch Mode \u2013 The match will play among 2 teams. They are going to play BO3 each other. The one who \n        <br/>\n        get more match point, they will qualify to next round. The Semi-Finals and Finals are going through BO5.\n        </li>\n    </ol>\n    <h3>Registration</h3>\n    All players must comply with the Registration Requirements to be eligible to compete in any Tournament.\n    <br/>\n    Player\u2019s EquipmentPlayers may participate in Events only on mobile phone hand held devices running\n    <br/>\n    the Android or the iOS operating systems. Players may not use peripheral devices of any kind without \n    <br/>\n    approval of Tournament Officials (including adapters, controllers, Bluetooth keyboards, and mice).\n    <br/>\n    Players may not use an emulator to play on a PC or other device that is not a handheld device.\n    \n    <h2>Tournament Related Events</h2>\n    Each player agrees to participate in media interviews, streaming sessions, sponsor events, chats\n    <br/>\n    and other media events that Proxima or the Tournament Organizer organize in connection with the marketing\n    <br/>\n    and promotion of the Official Competition, Tournament and/or BGMI (\u201CMedia Events\u201D), provided that these Media\n    <br/>\n    Events do not unduly interfere with a player\u2019s game preparation or participation. The reasonable and pre-approved\n    <br/>\n    expenses incurred by a player in travel to and from a Media Event will be borne by the Tournament Organizer \n    <br/>\n    or Proxima. The Tournament Organizer shall have the right to sanction or disqualify any player or Team that \n    <br/>\n    fails to attend and participate fully in any scheduled Media Event.\n    <br/>\n    <sub>All contents are copyrighted and will be used with their owner\u2019s\n    permission. All content in this document is accurate to the best of our\n    knowledge.</sub>\n</p>\n<h2>Contact event head for more details</h2>\n<ul>\n    <li>Name : Contact</li>\n    <li>Name : Contact</li>\n</ul>\n<button class=\"register-btn\" onclick=\"location.href='https://forms.gle/KED8SaQ4Hf2Az6WV7';\">Register Here</button> \n";
var events = {
  "webgators": webgators,
  "techWars": techwars,
  "algoOwls": algoowls,
  "techEscapade": techescapade,
  "codeBenders": codebenders,
  "bgmi": bgmi
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62280" + '/');

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