/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["README.md","00c43eb0725b6b00db75232b957a7335"],["allezcine.png","51f259e437b7404e5c7b4fbffcec4974"],["android-chrome-192x192.png","9778a492d7d44d78aacfb7b14df0b297"],["android-chrome-256x256.png","356741623099d1840de3dc91ab9960fb"],["android-chrome-512x512.png","1bcadffa6a118e92956f34e8f6b5c98e"],["apple-touch-icon.png","76032722c1dd1240734dff0008978cf8"],["assets/CSS/style.css","3dd7d7542883741e82704b17e61652f0"],["assets/images/WhatWeDoInTheShadows-2014-comedie.jpg","1bd64d0f8c424193a9d5dbc687d2dea4"],["assets/images/action/0611719.jpg-c_215_290_x-f_jpg-q_x-xxyxx.jpg","7fd51490b5a28bf06d514131110b9f0d"],["assets/images/action/0659238.jpg-c_215_290_x-f_jpg-q_x-xxyxx.jpg","62441b7aab375f3bf88b6e142e650d5a"],["assets/images/action/0850449.jpg-c_215_290_x-f_jpg-q_x-xxyxx.jpg","eb6f32bba7c5469019701b7db077d7d4"],["assets/images/action/0883250.jpg-c_215_290_x-f_jpg-q_x-xxyxx.jpg","328e1a422a78113949dc48b2064088ee"],["assets/images/action/1363911.jpg-c_215_290_x-f_jpg-q_x-xxyxx.jpg","071c4eb6391829d754d19a2fa2564d37"],["assets/images/action/18895516.jpg-c_215_290_x-f_jpg-q_x-xxyxx.jpg","106164a0fa167db7e8dbfb474d3afca2"],["assets/images/action/18949761.jpg-c_215_290_x-f_jpg-q_x-xxyxx.jpg","3c35020fca4ed5e10706e2c345201108"],["assets/images/action/19794371.jpg-c_215_290_x-o_club300a.png_SE_0-f_jpg-q_x-xxyxx.jpg","1c17e1b626ec5ac5384f342e2157c833"],["assets/images/action/20158098.jpg-c_215_290_x-f_jpg-q_x-xxyxx.jpg","6db03a1548e9118f55e3b69b27fdbe91"],["assets/images/action/2317955.jpg-c_215_290_x-f_jpg-q_x-xxyxx.jpg","237260f06ffd618de0900e80769fd29e"],["assets/images/action/2548759.jpg-c_215_290_x-f_jpg-q_x-xxyxx.jpg","5ccc5e41777a94aa1d1017f00ebe758b"],["assets/images/action/3437390.jpg-c_215_290_x-f_jpg-q_x-xxyxx.jpg","5ddcc3eeaa0e8c7bcccdbef58a0161b4"],["assets/images/action/3676882.jpg-c_215_290_x-f_jpg-q_x-xxyxx.jpg","a7f1b154bcf003cf16ec31a14ed9caa0"],["assets/images/action/4036914.jpg-c_215_290_x-f_jpg-q_x-xxyxx.jpg","6c40671106276d8b86feba3fc6074e35"],["assets/images/action/4182383.jpg-c_215_290_x-f_jpg-q_x-xxyxx.jpg","6bb8dd72b8ba0aac1951e80d02add1ec"],["assets/images/action/4187958.jpg-c_215_290_x-f_jpg-q_x-xxyxx.jpg","1046510157f13811068508aae4c13c5b"],["assets/images/action/5339594.jpg-c_215_290_x-f_jpg-q_x-xxyxx.jpg","c9072dc93dbb04090847d5a581fc1501"],["assets/images/action/595449.jpg-c_215_290_x-f_jpg-q_x-xxyxx.jpg","d62314fa77d81423efd8bb32ba74a425"],["assets/images/animation/003422.jpg-c_215_290_x-f_jpg-q_x-xxyxx.jpg","3d71cb837ff7810ad0ec5fcf62fbf188"],["assets/images/animation/0048194.jpg-c_215_290_x-f_jpg-q_x-xxyxx.jpg","514701690b30eb5eca51d69c4e8c8505"],["assets/images/animation/0056825.jpg-c_215_290_x-f_jpg-q_x-xxyxx.jpg","f40fb4cfb7a38b3e4bee0f4bb7939361"],["assets/images/animation/0323277.jpg-c_215_290_x-f_jpg-q_x-xxyxx.jpg","7d06dba8a7286292c22f201736b8004f"],["assets/images/animation/0323902.jpg-c_215_290_x-f_jpg-q_x-xxyxx.jpg","1f45527fb7258773b175740f23e3f047"],["assets/images/animation/0841317.jpg-c_215_290_x-f_jpg-q_x-xxyxx.jpg","5acfde8c1142a7f99611c1cefffc03b9"],["assets/images/animation/1052693.jpg-c_215_290_x-f_jpg-q_x-xxyxx.jpg","4fede597c1953d55966f81fef24f93f0"],["assets/images/animation/1504983.jpg-c_215_290_x-f_jpg-q_x-xxyxx.jpg","469e0e18aebe5f726855db7949acd0a5"],["assets/images/animation/1622249.jpg-c_215_290_x-f_jpg-q_x-xxyxx.jpg","8c820d9776f1f2d364cf8d2614bd7e37"],["assets/images/animation/1748397.jpg-c_215_290_x-f_jpg-q_x-xxyxx.jpg","b0b9e73925a563390cc16bb5a1ba5627"],["assets/images/animation/1760452.jpg-c_215_290_x-f_jpg-q_x-xxyxx.jpg","55bcffa31b919e77eaef79b592072bb6"],["assets/images/animation/2694666.jpg-c_215_290_x-f_jpg-q_x-xxyxx.jpg","12223a050270a697ca08484f9d88b35f"],["assets/images/animation/3087565.jpg-c_215_290_x-f_jpg-q_x-xxyxx.jpg","19122675f3a149256b726f5c6480a731"],["assets/images/animation/4019182.jpg-c_215_290_x-f_jpg-q_x-xxyxx.jpg","0e3f49c88ba962a634afc184eff085f2"],["assets/images/animation/4241392.jpg-c_215_290_x-f_jpg-q_x-xxyxx.jpg","2b94193cf76d424ff6b7e77f639ceda4"],["assets/images/animation/5068927.jpg-c_215_290_x-f_jpg-q_x-xxyxx.jpg","c70f84ebff7bf7153df6a6090306a3d0"],["assets/images/animation/5440157.jpg-c_215_290_x-f_jpg-q_x-xxyxx.jpg","7b1fb215e40512fdb6da20c3dc171226"],["assets/images/animation/5771427.jpg-c_215_290_x-f_jpg-q_x-xxyxx.jpg","9fbd91f0be2bf45b37ebb8619f8fb28e"],["assets/images/ant-man-movie-poster.jpg","04bdf16e6b0de8bb7e168bb2543b6bfb"],["assets/images/honest-movie-posters-7.jpg","dae56f49b9d95f44c2bbac50896095a6"],["assets/images/inception-2010-scifi.jpg","ec3362bc7fc6be357442c4146660d65c"],["assets/images/intouchables-2011-comedie.jpg","b5c6ccde5fb5e0d02f86517e39ba6354"],["assets/images/jumbo_4811873ccd5d9.jpg","127983e0093a0fb5f0dc38a04e80fb0c"],["assets/images/jumbo_Avengers_Infinity_war_poster.jpg","5a95f0782798b279eeee604ef84ef251"],["assets/images/jumbo_Indiana_Jones_and_the_Last_Crusade_A.jpg","b93e50b50711ebb90c951de485481405"],["assets/images/jumbo_rpo_poster.jpg","5f821acf5507aa79256c235bb60f8c41"],["assets/images/thefall-2006-dramatique.jpg","bbc700e4f0c9d3fe9560ed8cadf0277b"],["assets/script/action.json","dc4caaa8ccdc2e7926ce306d876436f5"],["assets/script/animation.json","c62026b4f80667c3ddddda90c259cca9"],["assets/script/movies.json","09073b57231e8b42310d9498836315f8"],["assets/script/script.js","8974e6f70bdb98db4d434f38224bd57d"],["browserconfig.xml","68c9044fa4a08749efb85bb2a4edaede"],["favicon-16x16.png","459ab2b53d8dd583ec7d09281119b6ff"],["favicon-32x32.png","bed9f33705f0ce2f153f66c181c0a907"],["favicon.ico","2186263ae1055eb52daa7a0f2b8691f0"],["index.html","4bf9e0e70beb66fe397823fa4e241169"],["manifest.json","831f05ac2acba5a00c2e7951444385fd"],["mstile-150x150.png","b3e112b5f7a964bf80f986dedcdff2b3"],["newsletter/face1.png","0cb95bfe36279894d20e9c7495421ada"],["newsletter/goo1.png","375b22ecf5e964de15881a92e79af7c1"],["newsletter/in1.png","868f5d991a36f630a5a1665ddd4f4a62"],["newsletter/newsletter_allezcine.html","cb2b4304eddba4f3f307af3c3821a7bc"],["newsletter/twi1.png","189801bc553c0b424fcc74a81dc69dbc"],["newsletter/you1.png","e22b90e7c44152ee7153e71b3bcf1d32"],["safari-pinned-tab.svg","694dc108cfa716124cec1613f0103c89"],["test.html","d41d8cd98f00b204e9800998ecf8427e"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







