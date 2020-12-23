/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([258,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(259);
module.exports = __webpack_require__(464);


/***/ }),

/***/ 445:
/***/ (function(module, exports) {

var GlobalCasesWrapper = document.querySelector('.global-cases-wrapper');
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

function appendGCasesInfo(info) {
  var GlobalCasesAmount = document.createElement('p');
  GlobalCasesAmount.classList.add('global-cases--amount');
  GlobalCasesAmount.textContent = info;
  document.querySelector('.lds--global-cases').remove();
  GlobalCasesWrapper.appendChild(GlobalCasesAmount);
}

fetch('https://api.covid19api.com/summary', requestOptions).then(function (response) {
  return response.text();
}).then(function (response) {
  return JSON.parse(response);
}).then(function (result) {
  appendGCasesInfo(result.Global.TotalConfirmed);
}).catch(function () {
  appendGCasesInfo('error: 0');
});

/***/ }),

/***/ 446:
/***/ (function(module, exports) {

var deathsContainer = document.querySelector('.deaths');
var requestOption = {
  method: 'GET'
};

function sortByTotalDeaths(countries) {
  countries.sort(function (a, b) {
    return a.TotalDeaths < b.TotalDeaths ? 1 : -1;
  });
  return countries;
}

function appendGlobalDeaths(global, countries) {
  var deathsByCountriesContainer = document.createElement('div');
  deathsByCountriesContainer.classList.add('deaths__by-countries-container');
  var deathsSubheading = document.createElement('h3');
  deathsSubheading.classList.add('deaths__subheading');
  deathsSubheading.textContent = global.TotalDeaths;
  sortByTotalDeaths(countries);

  for (var i = 0; i < countries.length; i += 1) {
    var countryContainer = document.createElement('div');
    countryContainer.classList.add('deaths__country-container');
    var deathsByCountries = document.createElement('h4');
    deathsByCountries.classList.add('deaths__count-by-countries');
    deathsByCountries.textContent = countries[i].TotalDeaths;
    var descriptorOfNumber = document.createElement('span');
    descriptorOfNumber.classList.add('deaths__number-description');
    descriptorOfNumber.textContent = '  deaths';
    var countryName = document.createElement('h4');
    countryName.classList.add('deaths__country-name');
    countryName.textContent = countries[i].Country;
    deathsByCountries.appendChild(descriptorOfNumber);
    countryContainer.append(deathsByCountries, countryName);
    deathsByCountriesContainer.append(countryContainer);
  }

  document.querySelector('.lds--global-cases').remove();
  deathsContainer.append(deathsSubheading, deathsByCountriesContainer);
}

function getData() {
  fetch('https://api.covid19api.com/summary', requestOption).then(function (response) {
    return response.json();
  }).then(function (json) {
    return appendGlobalDeaths(json.Global, json.Countries);
  });
}

getData();

/***/ }),

/***/ 447:
/***/ (function(module, exports) {

/* eslint-disable linebreak-style */

/* eslint-disable no-console */
var regionStatsContainer = document.querySelector('.cases-by-places');
var requestOptions = {
  method: 'GET'
};

function sortByTotalConfirmed(countries) {
  countries.sort(function (a, b) {
    return a.TotalConfirmed < b.TotalConfirmed ? 1 : -1;
  });
  return countries;
}

function appendTotalCasesByCountries(countries) {
  sortByTotalConfirmed(countries);

  for (var i = 0; i < countries.length; i += 1) {
    var countryContainer = document.createElement('div');
    countryContainer.classList.add('cases-container');
    var confirmedCases = document.createElement('span');
    confirmedCases.classList.add('cases-amount');
    confirmedCases.textContent = countries[i].TotalConfirmed;
    var countryName = document.createElement('span');
    countryName.classList.add('cases-country');
    countryName.textContent = countries[i].Country;
    countryContainer.append(confirmedCases, countryName);
    regionStatsContainer.appendChild(countryContainer);
  }
}

fetch('https://api.covid19api.com/summary', requestOptions).then(function (response) {
  return response.json();
}) // eslint-disable-next-line max-len
.then(function (json) {
  return appendTotalCasesByCountries(json.Countries);
});

/***/ }),

/***/ 448:
/***/ (function(module, exports) {

var recoveredContainer = document.querySelector('.recovered');
var requestOption = {
  method: 'GET'
};

function sortByTotalRecovered(countries) {
  countries.sort(function (a, b) {
    return a.TotalRecovered < b.TotalRecovered ? 1 : -1;
  });
  return countries;
}

function appendGlobalRecovered(global, countries) {
  var recoveredByCountriesContainer = document.createElement('div');
  recoveredByCountriesContainer.classList.add('recovered__by-countries-container');
  var recoveredSubheading = document.createElement('h3');
  recoveredSubheading.classList.add('recovered__subheading');
  recoveredSubheading.textContent = global.TotalRecovered;
  sortByTotalRecovered(countries);

  for (var i = 0; i < countries.length; i += 1) {
    var countryContainer = document.createElement('div');
    countryContainer.classList.add('recovered__country-container');
    var recoveredByCountries = document.createElement('h4');
    recoveredByCountries.classList.add('recovered__count-by-countries');
    recoveredByCountries.textContent = countries[i].TotalRecovered;
    var descriptorOfNumber = document.createElement('span');
    descriptorOfNumber.classList.add('recovered__number-description');
    descriptorOfNumber.textContent = '  recovered';
    var countryName = document.createElement('h4');
    countryName.classList.add('recovered__country-name');
    countryName.textContent = countries[i].Country;
    recoveredByCountries.appendChild(descriptorOfNumber);
    countryContainer.append(recoveredByCountries, countryName);
    recoveredByCountriesContainer.append(countryContainer);
  }

  document.querySelector('.lds--global-cases').remove();
  recoveredContainer.append(recoveredSubheading, recoveredByCountriesContainer);
}

function getData() {
  fetch('https://api.covid19api.com/summary', requestOption).then(function (response) {
    return response.json();
  }).then(function (json) {
    return appendGlobalRecovered(json.Global, json.Countries);
  });
}

getData();

/***/ }),

/***/ 449:
/***/ (function(module, exports) {

/* eslint-disable max-len */

/* eslint-disable no-console */

/* eslint-disable no-undef */
var mapContainer = document.getElementById('map');
var mapOptions = {
  center: [41.3775, 64.5853],
  zoom: 2
};
var map;

function appendMap() {
  map = new L.Map(mapContainer, mapOptions);
  new L.TileLayer('https://api.mapbox.com/styles/v1/shaxxkh/ckj1fzzvv4rlp19t7828bld61/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2hheHhraCIsImEiOiJja2oxOWZsNTEwNGdvMnhwaXc5eXQ0a3RiIn0.SgD1Ef3GQYXxf2P1BpvlUw').addTo(map);
}
/* function addCircles(lat, lon, cases) {
  const circleCenter = [lat, lon];
  const circleOptions = {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 1,
  };
  let radius;
  if (cases > 1000000) {
    radius = 100000;
  } else {
    radius = 50000;
  }
  const circle = L.circle(circleCenter, radius, circleOptions);
  circle.addTo(map);
} */

/* function asd(countries) {
  for (let i = 0; i < countries.length; i += 1) {
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${countries[i].Slug}&key=610b62815e424a0784e5ac16906fe367`)
      .then((response) => response.json())
      .then((json) => addCircles(json.results[0].geometry.lat, json.results[0].geometry.lng, countries[i].Confirmed));
  }
} */

/* function getCountries() {
  fetch('https://api.covid19api.com/summary')
    .then((response) => response.json())
    .then((json) => asd(json.Countries));
}

getCountries(); */


appendMap();

/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 122,
	"./af.js": 122,
	"./ar": 123,
	"./ar-dz": 124,
	"./ar-dz.js": 124,
	"./ar-kw": 125,
	"./ar-kw.js": 125,
	"./ar-ly": 126,
	"./ar-ly.js": 126,
	"./ar-ma": 127,
	"./ar-ma.js": 127,
	"./ar-sa": 128,
	"./ar-sa.js": 128,
	"./ar-tn": 129,
	"./ar-tn.js": 129,
	"./ar.js": 123,
	"./az": 130,
	"./az.js": 130,
	"./be": 131,
	"./be.js": 131,
	"./bg": 132,
	"./bg.js": 132,
	"./bm": 133,
	"./bm.js": 133,
	"./bn": 134,
	"./bn-bd": 135,
	"./bn-bd.js": 135,
	"./bn.js": 134,
	"./bo": 136,
	"./bo.js": 136,
	"./br": 137,
	"./br.js": 137,
	"./bs": 138,
	"./bs.js": 138,
	"./ca": 139,
	"./ca.js": 139,
	"./cs": 140,
	"./cs.js": 140,
	"./cv": 141,
	"./cv.js": 141,
	"./cy": 142,
	"./cy.js": 142,
	"./da": 143,
	"./da.js": 143,
	"./de": 144,
	"./de-at": 145,
	"./de-at.js": 145,
	"./de-ch": 146,
	"./de-ch.js": 146,
	"./de.js": 144,
	"./dv": 147,
	"./dv.js": 147,
	"./el": 148,
	"./el.js": 148,
	"./en-au": 149,
	"./en-au.js": 149,
	"./en-ca": 150,
	"./en-ca.js": 150,
	"./en-gb": 151,
	"./en-gb.js": 151,
	"./en-ie": 152,
	"./en-ie.js": 152,
	"./en-il": 153,
	"./en-il.js": 153,
	"./en-in": 154,
	"./en-in.js": 154,
	"./en-nz": 155,
	"./en-nz.js": 155,
	"./en-sg": 156,
	"./en-sg.js": 156,
	"./eo": 157,
	"./eo.js": 157,
	"./es": 158,
	"./es-do": 159,
	"./es-do.js": 159,
	"./es-mx": 160,
	"./es-mx.js": 160,
	"./es-us": 161,
	"./es-us.js": 161,
	"./es.js": 158,
	"./et": 162,
	"./et.js": 162,
	"./eu": 163,
	"./eu.js": 163,
	"./fa": 164,
	"./fa.js": 164,
	"./fi": 165,
	"./fi.js": 165,
	"./fil": 166,
	"./fil.js": 166,
	"./fo": 167,
	"./fo.js": 167,
	"./fr": 168,
	"./fr-ca": 169,
	"./fr-ca.js": 169,
	"./fr-ch": 170,
	"./fr-ch.js": 170,
	"./fr.js": 168,
	"./fy": 171,
	"./fy.js": 171,
	"./ga": 172,
	"./ga.js": 172,
	"./gd": 173,
	"./gd.js": 173,
	"./gl": 174,
	"./gl.js": 174,
	"./gom-deva": 175,
	"./gom-deva.js": 175,
	"./gom-latn": 176,
	"./gom-latn.js": 176,
	"./gu": 177,
	"./gu.js": 177,
	"./he": 178,
	"./he.js": 178,
	"./hi": 179,
	"./hi.js": 179,
	"./hr": 180,
	"./hr.js": 180,
	"./hu": 181,
	"./hu.js": 181,
	"./hy-am": 182,
	"./hy-am.js": 182,
	"./id": 183,
	"./id.js": 183,
	"./is": 184,
	"./is.js": 184,
	"./it": 185,
	"./it-ch": 186,
	"./it-ch.js": 186,
	"./it.js": 185,
	"./ja": 187,
	"./ja.js": 187,
	"./jv": 188,
	"./jv.js": 188,
	"./ka": 189,
	"./ka.js": 189,
	"./kk": 190,
	"./kk.js": 190,
	"./km": 191,
	"./km.js": 191,
	"./kn": 192,
	"./kn.js": 192,
	"./ko": 193,
	"./ko.js": 193,
	"./ku": 194,
	"./ku.js": 194,
	"./ky": 195,
	"./ky.js": 195,
	"./lb": 196,
	"./lb.js": 196,
	"./lo": 197,
	"./lo.js": 197,
	"./lt": 198,
	"./lt.js": 198,
	"./lv": 199,
	"./lv.js": 199,
	"./me": 200,
	"./me.js": 200,
	"./mi": 201,
	"./mi.js": 201,
	"./mk": 202,
	"./mk.js": 202,
	"./ml": 203,
	"./ml.js": 203,
	"./mn": 204,
	"./mn.js": 204,
	"./mr": 205,
	"./mr.js": 205,
	"./ms": 206,
	"./ms-my": 207,
	"./ms-my.js": 207,
	"./ms.js": 206,
	"./mt": 208,
	"./mt.js": 208,
	"./my": 209,
	"./my.js": 209,
	"./nb": 210,
	"./nb.js": 210,
	"./ne": 211,
	"./ne.js": 211,
	"./nl": 212,
	"./nl-be": 213,
	"./nl-be.js": 213,
	"./nl.js": 212,
	"./nn": 214,
	"./nn.js": 214,
	"./oc-lnc": 215,
	"./oc-lnc.js": 215,
	"./pa-in": 216,
	"./pa-in.js": 216,
	"./pl": 217,
	"./pl.js": 217,
	"./pt": 218,
	"./pt-br": 219,
	"./pt-br.js": 219,
	"./pt.js": 218,
	"./ro": 220,
	"./ro.js": 220,
	"./ru": 221,
	"./ru.js": 221,
	"./sd": 222,
	"./sd.js": 222,
	"./se": 223,
	"./se.js": 223,
	"./si": 224,
	"./si.js": 224,
	"./sk": 225,
	"./sk.js": 225,
	"./sl": 226,
	"./sl.js": 226,
	"./sq": 227,
	"./sq.js": 227,
	"./sr": 228,
	"./sr-cyrl": 229,
	"./sr-cyrl.js": 229,
	"./sr.js": 228,
	"./ss": 230,
	"./ss.js": 230,
	"./sv": 231,
	"./sv.js": 231,
	"./sw": 232,
	"./sw.js": 232,
	"./ta": 233,
	"./ta.js": 233,
	"./te": 234,
	"./te.js": 234,
	"./tet": 235,
	"./tet.js": 235,
	"./tg": 236,
	"./tg.js": 236,
	"./th": 237,
	"./th.js": 237,
	"./tk": 238,
	"./tk.js": 238,
	"./tl-ph": 239,
	"./tl-ph.js": 239,
	"./tlh": 240,
	"./tlh.js": 240,
	"./tr": 241,
	"./tr.js": 241,
	"./tzl": 242,
	"./tzl.js": 242,
	"./tzm": 243,
	"./tzm-latn": 244,
	"./tzm-latn.js": 244,
	"./tzm.js": 243,
	"./ug-cn": 245,
	"./ug-cn.js": 245,
	"./uk": 246,
	"./uk.js": 246,
	"./ur": 247,
	"./ur.js": 247,
	"./uz": 248,
	"./uz-latn": 249,
	"./uz-latn.js": 249,
	"./uz.js": 248,
	"./vi": 250,
	"./vi.js": 250,
	"./x-pseudo": 251,
	"./x-pseudo.js": 251,
	"./yo": 252,
	"./yo.js": 252,
	"./zh-cn": 253,
	"./zh-cn.js": 253,
	"./zh-hk": 254,
	"./zh-hk.js": 254,
	"./zh-mo": 255,
	"./zh-mo.js": 255,
	"./zh-tw": 256,
	"./zh-tw.js": 256
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 451;

/***/ }),

/***/ 452:
/***/ (function(module, exports) {

var Developers = document.querySelector('.developers-wrapper');
Developers.addEventListener('click', function (e) {
  if (e.target.className === 'developer') {
    document.location.href = e.target.dataset.link;
  }
});

/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 460:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 461:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./js/global-cases/global-cases.js
var global_cases = __webpack_require__(445);

// EXTERNAL MODULE: ./js/death-stats/death-stats.js
var death_stats = __webpack_require__(446);

// EXTERNAL MODULE: ./js/region-stats/region-stats.js
var region_stats = __webpack_require__(447);

// EXTERNAL MODULE: ./js/death-stats/recovered-stats.js
var recovered_stats = __webpack_require__(448);

// EXTERNAL MODULE: ./js/map/map.js
var map = __webpack_require__(449);

// EXTERNAL MODULE: ../node_modules/chart.js/dist/Chart.js
var Chart = __webpack_require__(257);
var Chart_default = /*#__PURE__*/__webpack_require__.n(Chart);

// EXTERNAL MODULE: ../node_modules/moment/moment.js
var moment = __webpack_require__(0);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);

// CONCATENATED MODULE: ./js/graph/graph.js


var GraphWrapper = document.querySelector('.graph-wrapper');
var Graph = document.createElement('canvas');
Graph.classList.add('graph');
GraphWrapper.appendChild(Graph);
var GraphControls = document.createElement('div');
GraphControls.classList.add('graph-controls');
GraphWrapper.appendChild(GraphControls);
var RightArrow = document.createElement('button');
RightArrow.classList.add('graph-arrow--right');
var LeftArrow = document.createElement('button');
LeftArrow.classList.add('graph-arrow--left');
var GraphDescription = document.createElement('p');
GraphDescription.classList.add('graph--description');
GraphDescription.innerText = 'Daily cases';
GraphControls.appendChild(LeftArrow);
GraphControls.appendChild(GraphDescription);
GraphControls.appendChild(RightArrow);
var ChartData = [];
var chart = new Chart_default.a(Graph, {
  type: 'bar',
  data: {
    datasets: [{
      label: 'cases',
      data: ChartData,
      backgroundColor: 'rgba(255, 159, 64, 1)',
      borderColor: 'rgba(255, 159, 64, 1)',
      borderWidth: 0.5,
      barThickness: 2
    }]
  },
  options: {
    responsive: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: false,
          maxTicksLimit: 5,
          callback: function callback(value) {
            var letter = 'K';
            var number = value;

            if (value >= 1000) {
              letter = 'M';
              number /= 100;
            }

            return "".concat(number).concat(letter);
          }
        }
      }],
      xAxes: [{
        type: 'time',
        time: {
          unit: 'month'
        },
        ticks: {
          fontSize: 8,
          maxTicksLimit: 0
        }
      }]
    },
    legend: {
      display: false
    }
  }
});
Graph.style.width = '100%';
var requestOptions = {
  method: 'GET'
};
var APIData = [];
var graphCaption = {
  next: 'Daily deaths',
  previous: 'Daily Recovered',
  current: 'Daily Cases',
  forward: function forward() {
    var _ref = [this.previous, this.next, this.current];
    this.next = _ref[0];
    this.current = _ref[1];
    this.previous = _ref[2];
  },
  back: function back() {
    var _ref2 = [this.next, this.previous, this.current];
    this.previous = _ref2[0];
    this.current = _ref2[1];
    this.next = _ref2[2];
  }
};
var graphMode = {
  next: 'total_deaths',
  previous: 'total_recovered',
  current: 'total_cases',
  forward: function forward() {
    var _ref3 = [this.previous, this.next, this.current];
    this.next = _ref3[0];
    this.current = _ref3[1];
    this.previous = _ref3[2];
    graphCaption.forward();
  },
  back: function back() {
    var _ref4 = [this.next, this.previous, this.current];
    this.previous = _ref4[0];
    this.current = _ref4[1];
    this.next = _ref4[2];
    graphCaption.back();
  }
};

function updateGrapCaption() {
  GraphDescription.innerText = graphCaption.current;
}

function updateGraph() {
  ChartData.length = 0;
  APIData.forEach(function (e) {
    var chunk = {};
    chunk.x = new Date(e.date).toISOString().substring(0, 10);
    chunk.y = parseFloat((e[graphMode.current] / 1e5).toFixed(3));
    ChartData.push(chunk);
  });
  chart.update();
}

function updateData(rawData) {
  rawData.forEach(function (e) {
    var chunk = {};
    chunk.date = moment_default()(e.last_update).format();
    chunk.total_cases = e.total_cases;
    chunk.total_deaths = e.total_deaths;
    chunk.total_recovered = e.total_recovered;
    APIData.push(chunk);
  });
  updateGraph();
}

function getGraphData() {
  fetch('https://covid19-api.org/api/timeline', requestOptions).then(function (response) {
    return response.json();
  }).then(function (data) {
    return updateData(data);
  });
}

function getPreviousGraph() {
  graphMode.back();
  updateGraph();
  updateGrapCaption();
}

function getNextGraph() {
  graphMode.forward();
  updateGraph();
  updateGrapCaption();
}

RightArrow.addEventListener('click', getNextGraph);
LeftArrow.addEventListener('click', getPreviousGraph);
getGraphData();
// EXTERNAL MODULE: ./js/footer/footer.js
var footer = __webpack_require__(452);

// EXTERNAL MODULE: ./styles/reset.sass
var styles_reset = __webpack_require__(453);

// EXTERNAL MODULE: ./assets/fonts/fonts.sass
var fonts = __webpack_require__(454);

// EXTERNAL MODULE: ./styles/styles.sass
var styles = __webpack_require__(455);

// EXTERNAL MODULE: ./styles/header/header.sass
var header = __webpack_require__(456);

// EXTERNAL MODULE: ./styles/region-stats/cases.sass
var cases = __webpack_require__(457);

// EXTERNAL MODULE: ./styles/map/map.sass
var map_map = __webpack_require__(458);

// EXTERNAL MODULE: ./styles/death-stats/death-recovered.sass
var death_recovered = __webpack_require__(459);

// EXTERNAL MODULE: ./styles/footer/footer.sass
var footer_footer = __webpack_require__(460);

// EXTERNAL MODULE: ./styles/loading-wheel.sass
var loading_wheel = __webpack_require__(461);

// EXTERNAL MODULE: ./styles/global-cases/global-cases.sass
var global_cases_global_cases = __webpack_require__(462);

// EXTERNAL MODULE: ./styles/graph/graph.sass
var graph = __webpack_require__(463);

// CONCATENATED MODULE: ./js/main.js
// all imports for js






 // main imports!













/***/ })

/******/ });