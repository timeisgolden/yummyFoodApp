(self["webpackChunkYummy"] = self["webpackChunkYummy"] || []).push([["src_app_onboarding_onboarding_module_ts"],{

/***/ 28516:
/*!******************************************************!*\
  !*** ./node_modules/@firebase/app/dist/index.cjs.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var component = __webpack_require__(/*! @firebase/component */ 69202);
var tslib = __webpack_require__(/*! tslib */ 42321);
var logger$1 = __webpack_require__(/*! @firebase/logger */ 70323);
var util = __webpack_require__(/*! @firebase/util */ 54074);
var idb = __webpack_require__(/*! idb */ 10712);

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var PlatformLoggerServiceImpl = /** @class */ (function () {
    function PlatformLoggerServiceImpl(container) {
        this.container = container;
    }
    // In initial implementation, this will be called by installations on
    // auth token refresh, and installations will send this string.
    PlatformLoggerServiceImpl.prototype.getPlatformInfoString = function () {
        var providers = this.container.getProviders();
        // Loop through providers and get library/version pairs from any that are
        // version components.
        return providers
            .map(function (provider) {
            if (isVersionServiceProvider(provider)) {
                var service = provider.getImmediate();
                return "".concat(service.library, "/").concat(service.version);
            }
            else {
                return null;
            }
        })
            .filter(function (logString) { return logString; })
            .join(' ');
    };
    return PlatformLoggerServiceImpl;
}());
/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */
function isVersionServiceProvider(provider) {
    var component = provider.getComponent();
    return (component === null || component === void 0 ? void 0 : component.type) === "VERSION" /* ComponentType.VERSION */;
}

var name$o = "@firebase/app";
var version$1 = "0.9.16";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var logger = new logger$1.Logger('@firebase/app');

var name$n = "@firebase/app-compat";

var name$m = "@firebase/analytics-compat";

var name$l = "@firebase/analytics";

var name$k = "@firebase/app-check-compat";

var name$j = "@firebase/app-check";

var name$i = "@firebase/auth";

var name$h = "@firebase/auth-compat";

var name$g = "@firebase/database";

var name$f = "@firebase/database-compat";

var name$e = "@firebase/functions";

var name$d = "@firebase/functions-compat";

var name$c = "@firebase/installations";

var name$b = "@firebase/installations-compat";

var name$a = "@firebase/messaging";

var name$9 = "@firebase/messaging-compat";

var name$8 = "@firebase/performance";

var name$7 = "@firebase/performance-compat";

var name$6 = "@firebase/remote-config";

var name$5 = "@firebase/remote-config-compat";

var name$4 = "@firebase/storage";

var name$3 = "@firebase/storage-compat";

var name$2 = "@firebase/firestore";

var name$1 = "@firebase/firestore-compat";

var name = "firebase";
var version = "10.2.0";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a$1;
/**
 * The default app name
 *
 * @internal
 */
var DEFAULT_ENTRY_NAME = '[DEFAULT]';
var PLATFORM_LOG_STRING = (_a$1 = {},
    _a$1[name$o] = 'fire-core',
    _a$1[name$n] = 'fire-core-compat',
    _a$1[name$l] = 'fire-analytics',
    _a$1[name$m] = 'fire-analytics-compat',
    _a$1[name$j] = 'fire-app-check',
    _a$1[name$k] = 'fire-app-check-compat',
    _a$1[name$i] = 'fire-auth',
    _a$1[name$h] = 'fire-auth-compat',
    _a$1[name$g] = 'fire-rtdb',
    _a$1[name$f] = 'fire-rtdb-compat',
    _a$1[name$e] = 'fire-fn',
    _a$1[name$d] = 'fire-fn-compat',
    _a$1[name$c] = 'fire-iid',
    _a$1[name$b] = 'fire-iid-compat',
    _a$1[name$a] = 'fire-fcm',
    _a$1[name$9] = 'fire-fcm-compat',
    _a$1[name$8] = 'fire-perf',
    _a$1[name$7] = 'fire-perf-compat',
    _a$1[name$6] = 'fire-rc',
    _a$1[name$5] = 'fire-rc-compat',
    _a$1[name$4] = 'fire-gcs',
    _a$1[name$3] = 'fire-gcs-compat',
    _a$1[name$2] = 'fire-fst',
    _a$1[name$1] = 'fire-fst-compat',
    _a$1['fire-js'] = 'fire-js',
    _a$1[name] = 'fire-js-all',
    _a$1);

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @internal
 */
var _apps = new Map();
/**
 * Registered components.
 *
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var _components = new Map();
/**
 * @param component - the component being added to this app's container
 *
 * @internal
 */
function _addComponent(app, component) {
    try {
        app.container.addComponent(component);
    }
    catch (e) {
        logger.debug("Component ".concat(component.name, " failed to register with FirebaseApp ").concat(app.name), e);
    }
}
/**
 *
 * @internal
 */
function _addOrOverwriteComponent(app, component) {
    app.container.addOrOverwriteComponent(component);
}
/**
 *
 * @param component - the component to register
 * @returns whether or not the component is registered successfully
 *
 * @internal
 */
function _registerComponent(component) {
    var e_1, _a;
    var componentName = component.name;
    if (_components.has(componentName)) {
        logger.debug("There were multiple attempts to register component ".concat(componentName, "."));
        return false;
    }
    _components.set(componentName, component);
    try {
        // add the component to existing app instances
        for (var _b = tslib.__values(_apps.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var app = _c.value;
            _addComponent(app, component);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return true;
}
/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 *
 * @returns the provider for the service with the matching name
 *
 * @internal
 */
function _getProvider(app, name) {
    var heartbeatController = app.container
        .getProvider('heartbeat')
        .getImmediate({ optional: true });
    if (heartbeatController) {
        void heartbeatController.triggerHeartbeat();
    }
    return app.container.getProvider(name);
}
/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 * @param instanceIdentifier - service instance identifier in case the service supports multiple instances
 *
 * @internal
 */
function _removeServiceInstance(app, name, instanceIdentifier) {
    if (instanceIdentifier === void 0) { instanceIdentifier = DEFAULT_ENTRY_NAME; }
    _getProvider(app, name).clearInstance(instanceIdentifier);
}
/**
 * Test only
 *
 * @internal
 */
function _clearComponents() {
    _components.clear();
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;
var ERRORS = (_a = {},
    _a["no-app" /* AppError.NO_APP */] = "No Firebase App '{$appName}' has been created - " +
        'call initializeApp() first',
    _a["bad-app-name" /* AppError.BAD_APP_NAME */] = "Illegal App name: '{$appName}",
    _a["duplicate-app" /* AppError.DUPLICATE_APP */] = "Firebase App named '{$appName}' already exists with different options or config",
    _a["app-deleted" /* AppError.APP_DELETED */] = "Firebase App named '{$appName}' already deleted",
    _a["no-options" /* AppError.NO_OPTIONS */] = 'Need to provide options, when not being deployed to hosting via source.',
    _a["invalid-app-argument" /* AppError.INVALID_APP_ARGUMENT */] = 'firebase.{$appName}() takes either no argument or a ' +
        'Firebase App instance.',
    _a["invalid-log-argument" /* AppError.INVALID_LOG_ARGUMENT */] = 'First argument to `onLog` must be null or a function.',
    _a["idb-open" /* AppError.IDB_OPEN */] = 'Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.',
    _a["idb-get" /* AppError.IDB_GET */] = 'Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.',
    _a["idb-set" /* AppError.IDB_WRITE */] = 'Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.',
    _a["idb-delete" /* AppError.IDB_DELETE */] = 'Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.',
    _a);
var ERROR_FACTORY = new util.ErrorFactory('app', 'Firebase', ERRORS);

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var FirebaseAppImpl = /** @class */ (function () {
    function FirebaseAppImpl(options, config, container) {
        var _this = this;
        this._isDeleted = false;
        this._options = tslib.__assign({}, options);
        this._config = tslib.__assign({}, config);
        this._name = config.name;
        this._automaticDataCollectionEnabled =
            config.automaticDataCollectionEnabled;
        this._container = container;
        this.container.addComponent(new component.Component('app', function () { return _this; }, "PUBLIC" /* ComponentType.PUBLIC */));
    }
    Object.defineProperty(FirebaseAppImpl.prototype, "automaticDataCollectionEnabled", {
        get: function () {
            this.checkDestroyed();
            return this._automaticDataCollectionEnabled;
        },
        set: function (val) {
            this.checkDestroyed();
            this._automaticDataCollectionEnabled = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "name", {
        get: function () {
            this.checkDestroyed();
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "options", {
        get: function () {
            this.checkDestroyed();
            return this._options;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "config", {
        get: function () {
            this.checkDestroyed();
            return this._config;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "container", {
        get: function () {
            return this._container;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "isDeleted", {
        get: function () {
            return this._isDeleted;
        },
        set: function (val) {
            this._isDeleted = val;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */
    FirebaseAppImpl.prototype.checkDestroyed = function () {
        if (this.isDeleted) {
            throw ERROR_FACTORY.create("app-deleted" /* AppError.APP_DELETED */, { appName: this._name });
        }
    };
    return FirebaseAppImpl;
}());

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The current SDK version.
 *
 * @public
 */
var SDK_VERSION = version;
function initializeApp(_options, rawConfig) {
    var e_1, _a;
    if (rawConfig === void 0) { rawConfig = {}; }
    var options = _options;
    if (typeof rawConfig !== 'object') {
        var name_1 = rawConfig;
        rawConfig = { name: name_1 };
    }
    var config = tslib.__assign({ name: DEFAULT_ENTRY_NAME, automaticDataCollectionEnabled: false }, rawConfig);
    var name = config.name;
    if (typeof name !== 'string' || !name) {
        throw ERROR_FACTORY.create("bad-app-name" /* AppError.BAD_APP_NAME */, {
            appName: String(name)
        });
    }
    options || (options = util.getDefaultAppConfig());
    if (!options) {
        throw ERROR_FACTORY.create("no-options" /* AppError.NO_OPTIONS */);
    }
    var existingApp = _apps.get(name);
    if (existingApp) {
        // return the existing app if options and config deep equal the ones in the existing app.
        if (util.deepEqual(options, existingApp.options) &&
            util.deepEqual(config, existingApp.config)) {
            return existingApp;
        }
        else {
            throw ERROR_FACTORY.create("duplicate-app" /* AppError.DUPLICATE_APP */, { appName: name });
        }
    }
    var container = new component.ComponentContainer(name);
    try {
        for (var _b = tslib.__values(_components.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var component$1 = _c.value;
            container.addComponent(component$1);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    var newApp = new FirebaseAppImpl(options, config, container);
    _apps.set(name, newApp);
    return newApp;
}
/**
 * Retrieves a {@link @firebase/app#FirebaseApp} instance.
 *
 * When called with no arguments, the default app is returned. When an app name
 * is provided, the app corresponding to that name is returned.
 *
 * An exception is thrown if the app being retrieved has not yet been
 * initialized.
 *
 * @example
 * ```javascript
 * // Return the default app
 * const app = getApp();
 * ```
 *
 * @example
 * ```javascript
 * // Return a named app
 * const otherApp = getApp("otherApp");
 * ```
 *
 * @param name - Optional name of the app to return. If no name is
 *   provided, the default is `"[DEFAULT]"`.
 *
 * @returns The app corresponding to the provided app name.
 *   If no app name is provided, the default app is returned.
 *
 * @public
 */
function getApp(name) {
    if (name === void 0) { name = DEFAULT_ENTRY_NAME; }
    var app = _apps.get(name);
    if (!app && name === DEFAULT_ENTRY_NAME && util.getDefaultAppConfig()) {
        return initializeApp();
    }
    if (!app) {
        throw ERROR_FACTORY.create("no-app" /* AppError.NO_APP */, { appName: name });
    }
    return app;
}
/**
 * A (read-only) array of all initialized apps.
 * @public
 */
function getApps() {
    return Array.from(_apps.values());
}
/**
 * Renders this app unusable and frees the resources of all associated
 * services.
 *
 * @example
 * ```javascript
 * deleteApp(app)
 *   .then(function() {
 *     console.log("App deleted successfully");
 *   })
 *   .catch(function(error) {
 *     console.log("Error deleting app:", error);
 *   });
 * ```
 *
 * @public
 */
function deleteApp(app) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        var name;
        return tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    name = app.name;
                    if (!_apps.has(name)) return [3 /*break*/, 2];
                    _apps.delete(name);
                    return [4 /*yield*/, Promise.all(app.container
                            .getProviders()
                            .map(function (provider) { return provider.delete(); }))];
                case 1:
                    _a.sent();
                    app.isDeleted = true;
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    });
}
/**
 * Registers a library's name and version for platform logging purposes.
 * @param library - Name of 1p or 3p library (e.g. firestore, angularfire)
 * @param version - Current version of that library.
 * @param variant - Bundle variant, e.g., node, rn, etc.
 *
 * @public
 */
function registerVersion(libraryKeyOrName, version, variant) {
    var _a;
    // TODO: We can use this check to whitelist strings when/if we set up
    // a good whitelist system.
    var library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
    if (variant) {
        library += "-".concat(variant);
    }
    var libraryMismatch = library.match(/\s|\//);
    var versionMismatch = version.match(/\s|\//);
    if (libraryMismatch || versionMismatch) {
        var warning = [
            "Unable to register library \"".concat(library, "\" with version \"").concat(version, "\":")
        ];
        if (libraryMismatch) {
            warning.push("library name \"".concat(library, "\" contains illegal characters (whitespace or \"/\")"));
        }
        if (libraryMismatch && versionMismatch) {
            warning.push('and');
        }
        if (versionMismatch) {
            warning.push("version name \"".concat(version, "\" contains illegal characters (whitespace or \"/\")"));
        }
        logger.warn(warning.join(' '));
        return;
    }
    _registerComponent(new component.Component("".concat(library, "-version"), function () { return ({ library: library, version: version }); }, "VERSION" /* ComponentType.VERSION */));
}
/**
 * Sets log handler for all Firebase SDKs.
 * @param logCallback - An optional custom log handler that executes user code whenever
 * the Firebase SDK makes a logging call.
 *
 * @public
 */
function onLog(logCallback, options) {
    if (logCallback !== null && typeof logCallback !== 'function') {
        throw ERROR_FACTORY.create("invalid-log-argument" /* AppError.INVALID_LOG_ARGUMENT */);
    }
    logger$1.setUserLogHandler(logCallback, options);
}
/**
 * Sets log level for all Firebase SDKs.
 *
 * All of the log types above the current log level are captured (i.e. if
 * you set the log level to `info`, errors are logged, but `debug` and
 * `verbose` logs are not).
 *
 * @public
 */
function setLogLevel(logLevel) {
    logger$1.setLogLevel(logLevel);
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DB_NAME = 'firebase-heartbeat-database';
var DB_VERSION = 1;
var STORE_NAME = 'firebase-heartbeat-store';
var dbPromise = null;
function getDbPromise() {
    if (!dbPromise) {
        dbPromise = idb.openDB(DB_NAME, DB_VERSION, {
            upgrade: function (db, oldVersion) {
                // We don't use 'break' in this switch statement, the fall-through
                // behavior is what we want, because if there are multiple versions between
                // the old version and the current version, we want ALL the migrations
                // that correspond to those versions to run, not only the last one.
                // eslint-disable-next-line default-case
                switch (oldVersion) {
                    case 0:
                        db.createObjectStore(STORE_NAME);
                }
            }
        }).catch(function (e) {
            throw ERROR_FACTORY.create("idb-open" /* AppError.IDB_OPEN */, {
                originalErrorMessage: e.message
            });
        });
    }
    return dbPromise;
}
function readHeartbeatsFromIndexedDB(app) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        var db, result, e_1, idbGetError;
        return tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, getDbPromise()];
                case 1:
                    db = _a.sent();
                    return [4 /*yield*/, db
                            .transaction(STORE_NAME)
                            .objectStore(STORE_NAME)
                            .get(computeKey(app))];
                case 2:
                    result = _a.sent();
                    return [2 /*return*/, result];
                case 3:
                    e_1 = _a.sent();
                    if (e_1 instanceof util.FirebaseError) {
                        logger.warn(e_1.message);
                    }
                    else {
                        idbGetError = ERROR_FACTORY.create("idb-get" /* AppError.IDB_GET */, {
                            originalErrorMessage: e_1 === null || e_1 === void 0 ? void 0 : e_1.message
                        });
                        logger.warn(idbGetError.message);
                    }
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function writeHeartbeatsToIndexedDB(app, heartbeatObject) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        var db, tx, objectStore, e_2, idbGetError;
        return tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, getDbPromise()];
                case 1:
                    db = _a.sent();
                    tx = db.transaction(STORE_NAME, 'readwrite');
                    objectStore = tx.objectStore(STORE_NAME);
                    return [4 /*yield*/, objectStore.put(heartbeatObject, computeKey(app))];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, tx.done];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    e_2 = _a.sent();
                    if (e_2 instanceof util.FirebaseError) {
                        logger.warn(e_2.message);
                    }
                    else {
                        idbGetError = ERROR_FACTORY.create("idb-set" /* AppError.IDB_WRITE */, {
                            originalErrorMessage: e_2 === null || e_2 === void 0 ? void 0 : e_2.message
                        });
                        logger.warn(idbGetError.message);
                    }
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function computeKey(app) {
    return "".concat(app.name, "!").concat(app.options.appId);
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var MAX_HEADER_BYTES = 1024;
// 30 days
var STORED_HEARTBEAT_RETENTION_MAX_MILLIS = 30 * 24 * 60 * 60 * 1000;
var HeartbeatServiceImpl = /** @class */ (function () {
    function HeartbeatServiceImpl(container) {
        var _this = this;
        this.container = container;
        /**
         * In-memory cache for heartbeats, used by getHeartbeatsHeader() to generate
         * the header string.
         * Stores one record per date. This will be consolidated into the standard
         * format of one record per user agent string before being sent as a header.
         * Populated from indexedDB when the controller is instantiated and should
         * be kept in sync with indexedDB.
         * Leave public for easier testing.
         */
        this._heartbeatsCache = null;
        var app = this.container.getProvider('app').getImmediate();
        this._storage = new HeartbeatStorageImpl(app);
        this._heartbeatsCachePromise = this._storage.read().then(function (result) {
            _this._heartbeatsCache = result;
            return result;
        });
    }
    /**
     * Called to report a heartbeat. The function will generate
     * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
     * to IndexedDB.
     * Note that we only store one heartbeat per day. So if a heartbeat for today is
     * already logged, subsequent calls to this function in the same day will be ignored.
     */
    HeartbeatServiceImpl.prototype.triggerHeartbeat = function () {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var platformLogger, agent, date, _a;
            return tslib.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        platformLogger = this.container
                            .getProvider('platform-logger')
                            .getImmediate();
                        agent = platformLogger.getPlatformInfoString();
                        date = getUTCDateString();
                        if (!(this._heartbeatsCache === null)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this._heartbeatsCachePromise];
                    case 1:
                        _a._heartbeatsCache = _b.sent();
                        _b.label = 2;
                    case 2:
                        // Do not store a heartbeat if one is already stored for this day
                        // or if a header has already been sent today.
                        if (this._heartbeatsCache.lastSentHeartbeatDate === date ||
                            this._heartbeatsCache.heartbeats.some(function (singleDateHeartbeat) { return singleDateHeartbeat.date === date; })) {
                            return [2 /*return*/];
                        }
                        else {
                            // There is no entry for this date. Create one.
                            this._heartbeatsCache.heartbeats.push({ date: date, agent: agent });
                        }
                        // Remove entries older than 30 days.
                        this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter(function (singleDateHeartbeat) {
                            var hbTimestamp = new Date(singleDateHeartbeat.date).valueOf();
                            var now = Date.now();
                            return now - hbTimestamp <= STORED_HEARTBEAT_RETENTION_MAX_MILLIS;
                        });
                        return [2 /*return*/, this._storage.overwrite(this._heartbeatsCache)];
                }
            });
        });
    };
    /**
     * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
     * It also clears all heartbeats from memory as well as in IndexedDB.
     *
     * NOTE: Consuming product SDKs should not send the header if this method
     * returns an empty string.
     */
    HeartbeatServiceImpl.prototype.getHeartbeatsHeader = function () {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var date, _a, heartbeatsToSend, unsentEntries, headerString;
            return tslib.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this._heartbeatsCache === null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._heartbeatsCachePromise];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2:
                        // If it's still null or the array is empty, there is no data to send.
                        if (this._heartbeatsCache === null ||
                            this._heartbeatsCache.heartbeats.length === 0) {
                            return [2 /*return*/, ''];
                        }
                        date = getUTCDateString();
                        _a = extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats), heartbeatsToSend = _a.heartbeatsToSend, unsentEntries = _a.unsentEntries;
                        headerString = util.base64urlEncodeWithoutPadding(JSON.stringify({ version: 2, heartbeats: heartbeatsToSend }));
                        // Store last sent date to prevent another being logged/sent for the same day.
                        this._heartbeatsCache.lastSentHeartbeatDate = date;
                        if (!(unsentEntries.length > 0)) return [3 /*break*/, 4];
                        // Store any unsent entries if they exist.
                        this._heartbeatsCache.heartbeats = unsentEntries;
                        // This seems more likely than emptying the array (below) to lead to some odd state
                        // since the cache isn't empty and this will be called again on the next request,
                        // and is probably safest if we await it.
                        return [4 /*yield*/, this._storage.overwrite(this._heartbeatsCache)];
                    case 3:
                        // This seems more likely than emptying the array (below) to lead to some odd state
                        // since the cache isn't empty and this will be called again on the next request,
                        // and is probably safest if we await it.
                        _b.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        this._heartbeatsCache.heartbeats = [];
                        // Do not wait for this, to reduce latency.
                        void this._storage.overwrite(this._heartbeatsCache);
                        _b.label = 5;
                    case 5: return [2 /*return*/, headerString];
                }
            });
        });
    };
    return HeartbeatServiceImpl;
}());
function getUTCDateString() {
    var today = new Date();
    // Returns date format 'YYYY-MM-DD'
    return today.toISOString().substring(0, 10);
}
function extractHeartbeatsForHeader(heartbeatsCache, maxSize) {
    var e_1, _a;
    if (maxSize === void 0) { maxSize = MAX_HEADER_BYTES; }
    // Heartbeats grouped by user agent in the standard format to be sent in
    // the header.
    var heartbeatsToSend = [];
    // Single date format heartbeats that are not sent.
    var unsentEntries = heartbeatsCache.slice();
    var _loop_1 = function (singleDateHeartbeat) {
        // Look for an existing entry with the same user agent.
        var heartbeatEntry = heartbeatsToSend.find(function (hb) { return hb.agent === singleDateHeartbeat.agent; });
        if (!heartbeatEntry) {
            // If no entry for this user agent exists, create one.
            heartbeatsToSend.push({
                agent: singleDateHeartbeat.agent,
                dates: [singleDateHeartbeat.date]
            });
            if (countBytes(heartbeatsToSend) > maxSize) {
                // If the header would exceed max size, remove the added heartbeat
                // entry and stop adding to the header.
                heartbeatsToSend.pop();
                return "break";
            }
        }
        else {
            heartbeatEntry.dates.push(singleDateHeartbeat.date);
            // If the header would exceed max size, remove the added date
            // and stop adding to the header.
            if (countBytes(heartbeatsToSend) > maxSize) {
                heartbeatEntry.dates.pop();
                return "break";
            }
        }
        // Pop unsent entry from queue. (Skipped if adding the entry exceeded
        // quota and the loop breaks early.)
        unsentEntries = unsentEntries.slice(1);
    };
    try {
        for (var heartbeatsCache_1 = tslib.__values(heartbeatsCache), heartbeatsCache_1_1 = heartbeatsCache_1.next(); !heartbeatsCache_1_1.done; heartbeatsCache_1_1 = heartbeatsCache_1.next()) {
            var singleDateHeartbeat = heartbeatsCache_1_1.value;
            var state_1 = _loop_1(singleDateHeartbeat);
            if (state_1 === "break")
                break;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (heartbeatsCache_1_1 && !heartbeatsCache_1_1.done && (_a = heartbeatsCache_1.return)) _a.call(heartbeatsCache_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return {
        heartbeatsToSend: heartbeatsToSend,
        unsentEntries: unsentEntries
    };
}
var HeartbeatStorageImpl = /** @class */ (function () {
    function HeartbeatStorageImpl(app) {
        this.app = app;
        this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
    }
    HeartbeatStorageImpl.prototype.runIndexedDBEnvironmentCheck = function () {
        return tslib.__awaiter(this, void 0, void 0, function () {
            return tslib.__generator(this, function (_a) {
                if (!util.isIndexedDBAvailable()) {
                    return [2 /*return*/, false];
                }
                else {
                    return [2 /*return*/, util.validateIndexedDBOpenable()
                            .then(function () { return true; })
                            .catch(function () { return false; })];
                }
            });
        });
    };
    /**
     * Read all heartbeats.
     */
    HeartbeatStorageImpl.prototype.read = function () {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var canUseIndexedDB, idbHeartbeatObject;
            return tslib.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._canUseIndexedDBPromise];
                    case 1:
                        canUseIndexedDB = _a.sent();
                        if (!!canUseIndexedDB) return [3 /*break*/, 2];
                        return [2 /*return*/, { heartbeats: [] }];
                    case 2: return [4 /*yield*/, readHeartbeatsFromIndexedDB(this.app)];
                    case 3:
                        idbHeartbeatObject = _a.sent();
                        return [2 /*return*/, idbHeartbeatObject || { heartbeats: [] }];
                }
            });
        });
    };
    // overwrite the storage with the provided heartbeats
    HeartbeatStorageImpl.prototype.overwrite = function (heartbeatsObject) {
        var _a;
        return tslib.__awaiter(this, void 0, void 0, function () {
            var canUseIndexedDB, existingHeartbeatsObject;
            return tslib.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this._canUseIndexedDBPromise];
                    case 1:
                        canUseIndexedDB = _b.sent();
                        if (!!canUseIndexedDB) return [3 /*break*/, 2];
                        return [2 /*return*/];
                    case 2: return [4 /*yield*/, this.read()];
                    case 3:
                        existingHeartbeatsObject = _b.sent();
                        return [2 /*return*/, writeHeartbeatsToIndexedDB(this.app, {
                                lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
                                heartbeats: heartbeatsObject.heartbeats
                            })];
                }
            });
        });
    };
    // add heartbeats
    HeartbeatStorageImpl.prototype.add = function (heartbeatsObject) {
        var _a;
        return tslib.__awaiter(this, void 0, void 0, function () {
            var canUseIndexedDB, existingHeartbeatsObject;
            return tslib.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this._canUseIndexedDBPromise];
                    case 1:
                        canUseIndexedDB = _b.sent();
                        if (!!canUseIndexedDB) return [3 /*break*/, 2];
                        return [2 /*return*/];
                    case 2: return [4 /*yield*/, this.read()];
                    case 3:
                        existingHeartbeatsObject = _b.sent();
                        return [2 /*return*/, writeHeartbeatsToIndexedDB(this.app, {
                                lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
                                heartbeats: tslib.__spreadArray(tslib.__spreadArray([], tslib.__read(existingHeartbeatsObject.heartbeats), false), tslib.__read(heartbeatsObject.heartbeats), false)
                            })];
                }
            });
        });
    };
    return HeartbeatStorageImpl;
}());
/**
 * Calculate bytes of a HeartbeatsByUserAgent array after being wrapped
 * in a platform logging header JSON object, stringified, and converted
 * to base 64.
 */
function countBytes(heartbeatsCache) {
    // base64 has a restricted set of characters, all of which should be 1 byte.
    return util.base64urlEncodeWithoutPadding(
    // heartbeatsCache wrapper properties
    JSON.stringify({ version: 2, heartbeats: heartbeatsCache })).length;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function registerCoreComponents(variant) {
    _registerComponent(new component.Component('platform-logger', function (container) { return new PlatformLoggerServiceImpl(container); }, "PRIVATE" /* ComponentType.PRIVATE */));
    _registerComponent(new component.Component('heartbeat', function (container) { return new HeartbeatServiceImpl(container); }, "PRIVATE" /* ComponentType.PRIVATE */));
    // Register `app` package.
    registerVersion(name$o, version$1, variant);
    // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
    registerVersion(name$o, version$1, 'cjs5');
    // Register platform SDK identifier (no version).
    registerVersion('fire-js', '');
}

/**
 * Firebase App
 *
 * @remarks This package coordinates the communication between the different Firebase components
 * @packageDocumentation
 */
registerCoreComponents('node');

Object.defineProperty(exports, "FirebaseError", ({
  enumerable: true,
  get: function () { return util.FirebaseError; }
}));
exports.SDK_VERSION = SDK_VERSION;
exports._DEFAULT_ENTRY_NAME = DEFAULT_ENTRY_NAME;
exports._addComponent = _addComponent;
exports._addOrOverwriteComponent = _addOrOverwriteComponent;
exports._apps = _apps;
exports._clearComponents = _clearComponents;
exports._components = _components;
exports._getProvider = _getProvider;
exports._registerComponent = _registerComponent;
exports._removeServiceInstance = _removeServiceInstance;
exports.deleteApp = deleteApp;
exports.getApp = getApp;
exports.getApps = getApps;
exports.initializeApp = initializeApp;
exports.onLog = onLog;
exports.registerVersion = registerVersion;
exports.setLogLevel = setLogLevel;


/***/ }),

/***/ 2557:
/*!******************************************************************!*\
  !*** ./node_modules/@firebase/auth-compat/dist/index.esm2017.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);
/* harmony import */ var _firebase_app_compat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/app-compat */ 16323);
/* harmony import */ var _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/auth/internal */ 25170);
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/component */ 42262);
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @firebase/util */ 7082);





var name = "@firebase/auth-compat";
var version = "0.4.5";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const CORDOVA_ONDEVICEREADY_TIMEOUT_MS = 1000;

function _getCurrentScheme() {
  var _a;

  return ((_a = self === null || self === void 0 ? void 0 : self.location) === null || _a === void 0 ? void 0 : _a.protocol) || null;
}
/**
 * @return {boolean} Whether the current environment is http or https.
 */


function _isHttpOrHttps() {
  return _getCurrentScheme() === 'http:' || _getCurrentScheme() === 'https:';
}
/**
 * @param {?string=} ua The user agent.
 * @return {boolean} Whether the app is rendered in a mobile iOS or Android
 *     Cordova environment.
 */


function _isAndroidOrIosCordovaScheme(ua = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_4__.getUA)()) {
  return !!((_getCurrentScheme() === 'file:' || _getCurrentScheme() === 'ionic:' || _getCurrentScheme() === 'capacitor:') && ua.toLowerCase().match(/iphone|ipad|ipod|android/));
}
/**
 * @return {boolean} Whether the environment is a native environment, where
 *     CORS checks do not apply.
 */


function _isNativeEnvironment() {
  return (0,_firebase_util__WEBPACK_IMPORTED_MODULE_4__.isReactNative)() || (0,_firebase_util__WEBPACK_IMPORTED_MODULE_4__.isNode)();
}
/**
 * Checks whether the user agent is IE11.
 * @return {boolean} True if it is IE11.
 */


function _isIe11() {
  return (0,_firebase_util__WEBPACK_IMPORTED_MODULE_4__.isIE)() && (document === null || document === void 0 ? void 0 : document.documentMode) === 11;
}
/**
 * Checks whether the user agent is Edge.
 * @param {string} userAgent The browser user agent string.
 * @return {boolean} True if it is Edge.
 */


function _isEdge(ua = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_4__.getUA)()) {
  return /Edge\/\d+/.test(ua);
}
/**
 * @param {?string=} opt_userAgent The navigator user agent.
 * @return {boolean} Whether local storage is not synchronized between an iframe
 *     and a popup of the same domain.
 */


function _isLocalStorageNotSynchronized(ua = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_4__.getUA)()) {
  return _isIe11() || _isEdge(ua);
}
/** @return {boolean} Whether web storage is supported. */


function _isWebStorageSupported() {
  try {
    const storage = self.localStorage;

    const key = _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__._generateEventId();

    if (storage) {
      // setItem will throw an exception if we cannot access WebStorage (e.g.,
      // Safari in private mode).
      storage['setItem'](key, '1');
      storage['removeItem'](key); // For browsers where iframe web storage does not synchronize with a popup
      // of the same domain, indexedDB is used for persistent storage. These
      // browsers include IE11 and Edge.
      // Make sure it is supported (IE11 and Edge private mode does not support
      // that).

      if (_isLocalStorageNotSynchronized()) {
        // In such browsers, if indexedDB is not supported, an iframe cannot be
        // notified of the popup sign in result.
        return (0,_firebase_util__WEBPACK_IMPORTED_MODULE_4__.isIndexedDBAvailable)();
      }

      return true;
    }
  } catch (e) {
    // localStorage is not available from a worker. Test availability of
    // indexedDB.
    return _isWorker() && (0,_firebase_util__WEBPACK_IMPORTED_MODULE_4__.isIndexedDBAvailable)();
  }

  return false;
}
/**
 * @param {?Object=} global The optional global scope.
 * @return {boolean} Whether current environment is a worker.
 */


function _isWorker() {
  // WorkerGlobalScope only defined in worker environment.
  return typeof global !== 'undefined' && 'WorkerGlobalScope' in global && 'importScripts' in global;
}

function _isPopupRedirectSupported() {
  return (_isHttpOrHttps() || (0,_firebase_util__WEBPACK_IMPORTED_MODULE_4__.isBrowserExtension)() || _isAndroidOrIosCordovaScheme()) && // React Native with remote debugging reports its location.protocol as
  // http.
  !_isNativeEnvironment() && // Local storage has to be supported for browser popup and redirect
  // operations to work.
  _isWebStorageSupported() && // DOM, popups and redirects are not supported within a worker.
  !_isWorker();
}
/** Quick check that indicates the platform *may* be Cordova */


function _isLikelyCordova() {
  return _isAndroidOrIosCordovaScheme() && typeof document !== 'undefined';
}

function _isCordova() {
  return _isCordova2.apply(this, arguments);
}

function _isCordova2() {
  _isCordova2 = (0,_Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
    if (!_isLikelyCordova()) {
      return false;
    }

    return new Promise(resolve => {
      const timeoutId = setTimeout(() => {
        // We've waited long enough; the telltale Cordova event didn't happen
        resolve(false);
      }, CORDOVA_ONDEVICEREADY_TIMEOUT_MS);
      document.addEventListener('deviceready', () => {
        clearTimeout(timeoutId);
        resolve(true);
      });
    });
  });
  return _isCordova2.apply(this, arguments);
}

function _getSelfWindow() {
  return typeof window !== 'undefined' ? window : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const Persistence = {
  LOCAL: 'local',
  NONE: 'none',
  SESSION: 'session'
};
const _assert$3 = _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__._assert;
const PERSISTENCE_KEY = 'persistence';
/**
 * Validates that an argument is a valid persistence value. If an invalid type
 * is specified, an error is thrown synchronously.
 */

function _validatePersistenceArgument(auth, persistence) {
  _assert$3(Object.values(Persistence).includes(persistence), auth, "invalid-persistence-type"
  /* exp.AuthErrorCode.INVALID_PERSISTENCE */
  ); // Validate if the specified type is supported in the current environment.


  if ((0,_firebase_util__WEBPACK_IMPORTED_MODULE_4__.isReactNative)()) {
    // This is only supported in a browser.
    _assert$3(persistence !== Persistence.SESSION, auth, "unsupported-persistence-type"
    /* exp.AuthErrorCode.UNSUPPORTED_PERSISTENCE */
    );

    return;
  }

  if ((0,_firebase_util__WEBPACK_IMPORTED_MODULE_4__.isNode)()) {
    // Only none is supported in Node.js.
    _assert$3(persistence === Persistence.NONE, auth, "unsupported-persistence-type"
    /* exp.AuthErrorCode.UNSUPPORTED_PERSISTENCE */
    );

    return;
  }

  if (_isWorker()) {
    // In a worker environment, either LOCAL or NONE are supported.
    // If indexedDB not supported and LOCAL provided, throw an error
    _assert$3(persistence === Persistence.NONE || persistence === Persistence.LOCAL && (0,_firebase_util__WEBPACK_IMPORTED_MODULE_4__.isIndexedDBAvailable)(), auth, "unsupported-persistence-type"
    /* exp.AuthErrorCode.UNSUPPORTED_PERSISTENCE */
    );

    return;
  } // This is restricted by what the browser supports.


  _assert$3(persistence === Persistence.NONE || _isWebStorageSupported(), auth, "unsupported-persistence-type"
  /* exp.AuthErrorCode.UNSUPPORTED_PERSISTENCE */
  );
}

function _savePersistenceForRedirect(_x) {
  return _savePersistenceForRedirect2.apply(this, arguments);
}

function _savePersistenceForRedirect2() {
  _savePersistenceForRedirect2 = (0,_Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (auth) {
    yield auth._initializationPromise;
    const session = getSessionStorageIfAvailable();

    const key = _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__._persistenceKeyName(PERSISTENCE_KEY, auth.config.apiKey, auth.name);

    if (session) {
      session.setItem(key, auth._getPersistence());
    }
  });
  return _savePersistenceForRedirect2.apply(this, arguments);
}

function _getPersistencesFromRedirect(apiKey, appName) {
  const session = getSessionStorageIfAvailable();

  if (!session) {
    return [];
  }

  const key = _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__._persistenceKeyName(PERSISTENCE_KEY, apiKey, appName);

  const persistence = session.getItem(key);

  switch (persistence) {
    case Persistence.NONE:
      return [_firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.inMemoryPersistence];

    case Persistence.LOCAL:
      return [_firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.indexedDBLocalPersistence, _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.browserSessionPersistence];

    case Persistence.SESSION:
      return [_firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.browserSessionPersistence];

    default:
      return [];
  }
}
/** Returns session storage, or null if the property access errors */


function getSessionStorageIfAvailable() {
  var _a;

  try {
    return ((_a = _getSelfWindow()) === null || _a === void 0 ? void 0 : _a.sessionStorage) || null;
  } catch (e) {
    return null;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const _assert$2 = _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__._assert;
/** Platform-agnostic popup-redirect resolver */

class CompatPopupRedirectResolver {
  constructor() {
    // Create both resolvers for dynamic resolution later
    this.browserResolver = _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__._getInstance(_firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.browserPopupRedirectResolver);
    this.cordovaResolver = _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__._getInstance(_firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.cordovaPopupRedirectResolver); // The actual resolver in use: either browserResolver or cordovaResolver.

    this.underlyingResolver = null;
    this._redirectPersistence = _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.browserSessionPersistence;
    this._completeRedirectFn = _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__._getRedirectResult;
    this._overrideRedirectResult = _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__._overrideRedirectResult;
  }

  _initialize(auth) {
    var _this = this;

    return (0,_Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this.selectUnderlyingResolver();
      return _this.assertedUnderlyingResolver._initialize(auth);
    })();
  }

  _openPopup(auth, provider, authType, eventId) {
    var _this2 = this;

    return (0,_Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this2.selectUnderlyingResolver();
      return _this2.assertedUnderlyingResolver._openPopup(auth, provider, authType, eventId);
    })();
  }

  _openRedirect(auth, provider, authType, eventId) {
    var _this3 = this;

    return (0,_Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this3.selectUnderlyingResolver();
      return _this3.assertedUnderlyingResolver._openRedirect(auth, provider, authType, eventId);
    })();
  }

  _isIframeWebStorageSupported(auth, cb) {
    this.assertedUnderlyingResolver._isIframeWebStorageSupported(auth, cb);
  }

  _originValidation(auth) {
    return this.assertedUnderlyingResolver._originValidation(auth);
  }

  get _shouldInitProactively() {
    return _isLikelyCordova() || this.browserResolver._shouldInitProactively;
  }

  get assertedUnderlyingResolver() {
    _assert$2(this.underlyingResolver, "internal-error"
    /* exp.AuthErrorCode.INTERNAL_ERROR */
    );

    return this.underlyingResolver;
  }

  selectUnderlyingResolver() {
    var _this4 = this;

    return (0,_Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (_this4.underlyingResolver) {
        return;
      } // We haven't yet determined whether or not we're in Cordova; go ahead
      // and determine that state now.


      const isCordova = yield _isCordova();
      _this4.underlyingResolver = isCordova ? _this4.cordovaResolver : _this4.browserResolver;
    })();
  }

}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function unwrap(object) {
  return object.unwrap();
}

function wrapped(object) {
  return object.wrapped();
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function credentialFromResponse(userCredential) {
  return credentialFromObject(userCredential);
}

function attachExtraErrorFields(auth, e) {
  var _a; // The response contains all fields from the server which may or may not
  // actually match the underlying type


  const response = (_a = e.customData) === null || _a === void 0 ? void 0 : _a._tokenResponse;

  if ((e === null || e === void 0 ? void 0 : e.code) === 'auth/multi-factor-auth-required') {
    const mfaErr = e;
    mfaErr.resolver = new MultiFactorResolver(auth, _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.getMultiFactorResolver(auth, e));
  } else if (response) {
    const credential = credentialFromObject(e);
    const credErr = e;

    if (credential) {
      credErr.credential = credential;
      credErr.tenantId = response.tenantId || undefined;
      credErr.email = response.email || undefined;
      credErr.phoneNumber = response.phoneNumber || undefined;
    }
  }
}

function credentialFromObject(object) {
  const {
    _tokenResponse
  } = object instanceof _firebase_util__WEBPACK_IMPORTED_MODULE_4__.FirebaseError ? object.customData : object;

  if (!_tokenResponse) {
    return null;
  } // Handle phone Auth credential responses, as they have a different format
  // from other backend responses (i.e. no providerId). This is also only the
  // case for user credentials (does not work for errors).


  if (!(object instanceof _firebase_util__WEBPACK_IMPORTED_MODULE_4__.FirebaseError)) {
    if ('temporaryProof' in _tokenResponse && 'phoneNumber' in _tokenResponse) {
      return _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.PhoneAuthProvider.credentialFromResult(object);
    }
  }

  const providerId = _tokenResponse.providerId; // Email and password is not supported as there is no situation where the
  // server would return the password to the client.

  if (!providerId || providerId === _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.ProviderId.PASSWORD) {
    return null;
  }

  let provider;

  switch (providerId) {
    case _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.ProviderId.GOOGLE:
      provider = _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.GoogleAuthProvider;
      break;

    case _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.ProviderId.FACEBOOK:
      provider = _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.FacebookAuthProvider;
      break;

    case _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.ProviderId.GITHUB:
      provider = _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.GithubAuthProvider;
      break;

    case _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.ProviderId.TWITTER:
      provider = _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.TwitterAuthProvider;
      break;

    default:
      const {
        oauthIdToken,
        oauthAccessToken,
        oauthTokenSecret,
        pendingToken,
        nonce
      } = _tokenResponse;

      if (!oauthAccessToken && !oauthTokenSecret && !oauthIdToken && !pendingToken) {
        return null;
      } // TODO(avolkovi): uncomment this and get it working with SAML & OIDC


      if (pendingToken) {
        if (providerId.startsWith('saml.')) {
          return _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.SAMLAuthCredential._create(providerId, pendingToken);
        } else {
          // OIDC and non-default providers excluding Twitter.
          return _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.OAuthCredential._fromParams({
            providerId,
            signInMethod: providerId,
            pendingToken,
            idToken: oauthIdToken,
            accessToken: oauthAccessToken
          });
        }
      }

      return new _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.OAuthProvider(providerId).credential({
        idToken: oauthIdToken,
        accessToken: oauthAccessToken,
        rawNonce: nonce
      });
  }

  return object instanceof _firebase_util__WEBPACK_IMPORTED_MODULE_4__.FirebaseError ? provider.credentialFromError(object) : provider.credentialFromResult(object);
}

function convertCredential(auth, credentialPromise) {
  return credentialPromise.catch(e => {
    if (e instanceof _firebase_util__WEBPACK_IMPORTED_MODULE_4__.FirebaseError) {
      attachExtraErrorFields(auth, e);
    }

    throw e;
  }).then(credential => {
    const operationType = credential.operationType;
    const user = credential.user;
    return {
      operationType,
      credential: credentialFromResponse(credential),
      additionalUserInfo: _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.getAdditionalUserInfo(credential),
      user: User.getOrCreate(user)
    };
  });
}

function convertConfirmationResult(_x2, _x3) {
  return _convertConfirmationResult.apply(this, arguments);
}

function _convertConfirmationResult() {
  _convertConfirmationResult = (0,_Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (auth, confirmationResultPromise) {
    const confirmationResultExp = yield confirmationResultPromise;
    return {
      verificationId: confirmationResultExp.verificationId,
      confirm: verificationCode => convertCredential(auth, confirmationResultExp.confirm(verificationCode))
    };
  });
  return _convertConfirmationResult.apply(this, arguments);
}

class MultiFactorResolver {
  constructor(auth, resolver) {
    this.resolver = resolver;
    this.auth = wrapped(auth);
  }

  get session() {
    return this.resolver.session;
  }

  get hints() {
    return this.resolver.hints;
  }

  resolveSignIn(assertion) {
    return convertCredential(unwrap(this.auth), this.resolver.resolveSignIn(assertion));
  }

}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


class User {
  constructor(_delegate) {
    this._delegate = _delegate;
    this.multiFactor = _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.multiFactor(_delegate);
  }

  static getOrCreate(user) {
    if (!User.USER_MAP.has(user)) {
      User.USER_MAP.set(user, new User(user));
    }

    return User.USER_MAP.get(user);
  }

  delete() {
    return this._delegate.delete();
  }

  reload() {
    return this._delegate.reload();
  }

  toJSON() {
    return this._delegate.toJSON();
  }

  getIdTokenResult(forceRefresh) {
    return this._delegate.getIdTokenResult(forceRefresh);
  }

  getIdToken(forceRefresh) {
    return this._delegate.getIdToken(forceRefresh);
  }

  linkAndRetrieveDataWithCredential(credential) {
    return this.linkWithCredential(credential);
  }

  linkWithCredential(credential) {
    var _this5 = this;

    return (0,_Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return convertCredential(_this5.auth, _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.linkWithCredential(_this5._delegate, credential));
    })();
  }

  linkWithPhoneNumber(phoneNumber, applicationVerifier) {
    var _this6 = this;

    return (0,_Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return convertConfirmationResult(_this6.auth, _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.linkWithPhoneNumber(_this6._delegate, phoneNumber, applicationVerifier));
    })();
  }

  linkWithPopup(provider) {
    var _this7 = this;

    return (0,_Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return convertCredential(_this7.auth, _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.linkWithPopup(_this7._delegate, provider, CompatPopupRedirectResolver));
    })();
  }

  linkWithRedirect(provider) {
    var _this8 = this;

    return (0,_Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _savePersistenceForRedirect(_firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__._castAuth(_this8.auth));
      return _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.linkWithRedirect(_this8._delegate, provider, CompatPopupRedirectResolver);
    })();
  }

  reauthenticateAndRetrieveDataWithCredential(credential) {
    return this.reauthenticateWithCredential(credential);
  }

  reauthenticateWithCredential(credential) {
    var _this9 = this;

    return (0,_Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return convertCredential(_this9.auth, _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.reauthenticateWithCredential(_this9._delegate, credential));
    })();
  }

  reauthenticateWithPhoneNumber(phoneNumber, applicationVerifier) {
    return convertConfirmationResult(this.auth, _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.reauthenticateWithPhoneNumber(this._delegate, phoneNumber, applicationVerifier));
  }

  reauthenticateWithPopup(provider) {
    return convertCredential(this.auth, _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.reauthenticateWithPopup(this._delegate, provider, CompatPopupRedirectResolver));
  }

  reauthenticateWithRedirect(provider) {
    var _this10 = this;

    return (0,_Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _savePersistenceForRedirect(_firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__._castAuth(_this10.auth));
      return _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.reauthenticateWithRedirect(_this10._delegate, provider, CompatPopupRedirectResolver);
    })();
  }

  sendEmailVerification(actionCodeSettings) {
    return _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.sendEmailVerification(this._delegate, actionCodeSettings);
  }

  unlink(providerId) {
    var _this11 = this;

    return (0,_Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.unlink(_this11._delegate, providerId);
      return _this11;
    })();
  }

  updateEmail(newEmail) {
    return _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.updateEmail(this._delegate, newEmail);
  }

  updatePassword(newPassword) {
    return _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.updatePassword(this._delegate, newPassword);
  }

  updatePhoneNumber(phoneCredential) {
    return _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.updatePhoneNumber(this._delegate, phoneCredential);
  }

  updateProfile(profile) {
    return _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.updateProfile(this._delegate, profile);
  }

  verifyBeforeUpdateEmail(newEmail, actionCodeSettings) {
    return _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.verifyBeforeUpdateEmail(this._delegate, newEmail, actionCodeSettings);
  }

  get emailVerified() {
    return this._delegate.emailVerified;
  }

  get isAnonymous() {
    return this._delegate.isAnonymous;
  }

  get metadata() {
    return this._delegate.metadata;
  }

  get phoneNumber() {
    return this._delegate.phoneNumber;
  }

  get providerData() {
    return this._delegate.providerData;
  }

  get refreshToken() {
    return this._delegate.refreshToken;
  }

  get tenantId() {
    return this._delegate.tenantId;
  }

  get displayName() {
    return this._delegate.displayName;
  }

  get email() {
    return this._delegate.email;
  }

  get photoURL() {
    return this._delegate.photoURL;
  }

  get providerId() {
    return this._delegate.providerId;
  }

  get uid() {
    return this._delegate.uid;
  }

  get auth() {
    return this._delegate.auth;
  }

} // Maintain a map so that there's always a 1:1 mapping between new User and
// legacy compat users


User.USER_MAP = new WeakMap();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const _assert$1 = _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__._assert;

class Auth {
  constructor(app, provider) {
    this.app = app;

    if (provider.isInitialized()) {
      this._delegate = provider.getImmediate();
      this.linkUnderlyingAuth();
      return;
    }

    const {
      apiKey
    } = app.options; // TODO: platform needs to be determined using heuristics

    _assert$1(apiKey, "invalid-api-key"
    /* exp.AuthErrorCode.INVALID_API_KEY */
    , {
      appName: app.name
    }); // TODO: platform needs to be determined using heuristics


    _assert$1(apiKey, "invalid-api-key"
    /* exp.AuthErrorCode.INVALID_API_KEY */
    , {
      appName: app.name
    }); // Only use a popup/redirect resolver in browser environments


    const resolver = typeof window !== 'undefined' ? CompatPopupRedirectResolver : undefined;
    this._delegate = provider.initialize({
      options: {
        persistence: buildPersistenceHierarchy(apiKey, app.name),
        popupRedirectResolver: resolver
      }
    });

    this._delegate._updateErrorMap(_firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.debugErrorMap);

    this.linkUnderlyingAuth();
  }

  get emulatorConfig() {
    return this._delegate.emulatorConfig;
  }

  get currentUser() {
    if (!this._delegate.currentUser) {
      return null;
    }

    return User.getOrCreate(this._delegate.currentUser);
  }

  get languageCode() {
    return this._delegate.languageCode;
  }

  set languageCode(languageCode) {
    this._delegate.languageCode = languageCode;
  }

  get settings() {
    return this._delegate.settings;
  }

  get tenantId() {
    return this._delegate.tenantId;
  }

  set tenantId(tid) {
    this._delegate.tenantId = tid;
  }

  useDeviceLanguage() {
    this._delegate.useDeviceLanguage();
  }

  signOut() {
    return this._delegate.signOut();
  }

  useEmulator(url, options) {
    _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.connectAuthEmulator(this._delegate, url, options);
  }

  applyActionCode(code) {
    return _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.applyActionCode(this._delegate, code);
  }

  checkActionCode(code) {
    return _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.checkActionCode(this._delegate, code);
  }

  confirmPasswordReset(code, newPassword) {
    return _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.confirmPasswordReset(this._delegate, code, newPassword);
  }

  createUserWithEmailAndPassword(email, password) {
    var _this12 = this;

    return (0,_Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return convertCredential(_this12._delegate, _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.createUserWithEmailAndPassword(_this12._delegate, email, password));
    })();
  }

  fetchProvidersForEmail(email) {
    return this.fetchSignInMethodsForEmail(email);
  }

  fetchSignInMethodsForEmail(email) {
    return _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.fetchSignInMethodsForEmail(this._delegate, email);
  }

  isSignInWithEmailLink(emailLink) {
    return _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.isSignInWithEmailLink(this._delegate, emailLink);
  }

  getRedirectResult() {
    var _this13 = this;

    return (0,_Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _assert$1(_isPopupRedirectSupported(), _this13._delegate, "operation-not-supported-in-this-environment"
      /* exp.AuthErrorCode.OPERATION_NOT_SUPPORTED */
      );

      const credential = yield _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.getRedirectResult(_this13._delegate, CompatPopupRedirectResolver);

      if (!credential) {
        return {
          credential: null,
          user: null
        };
      }

      return convertCredential(_this13._delegate, Promise.resolve(credential));
    })();
  } // This function should only be called by frameworks (e.g. FirebaseUI-web) to log their usage.
  // It is not intended for direct use by developer apps. NO jsdoc here to intentionally leave it
  // out of autogenerated documentation pages to reduce accidental misuse.


  addFrameworkForLogging(framework) {
    _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.addFrameworkForLogging(this._delegate, framework);
  }

  onAuthStateChanged(nextOrObserver, errorFn, completed) {
    const {
      next,
      error,
      complete
    } = wrapObservers(nextOrObserver, errorFn, completed);
    return this._delegate.onAuthStateChanged(next, error, complete);
  }

  onIdTokenChanged(nextOrObserver, errorFn, completed) {
    const {
      next,
      error,
      complete
    } = wrapObservers(nextOrObserver, errorFn, completed);
    return this._delegate.onIdTokenChanged(next, error, complete);
  }

  sendSignInLinkToEmail(email, actionCodeSettings) {
    return _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.sendSignInLinkToEmail(this._delegate, email, actionCodeSettings);
  }

  sendPasswordResetEmail(email, actionCodeSettings) {
    return _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.sendPasswordResetEmail(this._delegate, email, actionCodeSettings || undefined);
  }

  setPersistence(persistence) {
    var _this14 = this;

    return (0,_Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _validatePersistenceArgument(_this14._delegate, persistence);

      let converted;

      switch (persistence) {
        case Persistence.SESSION:
          converted = _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.browserSessionPersistence;
          break;

        case Persistence.LOCAL:
          // Not using isIndexedDBAvailable() since it only checks if indexedDB is defined.
          const isIndexedDBFullySupported = yield _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__._getInstance(_firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.indexedDBLocalPersistence)._isAvailable();
          converted = isIndexedDBFullySupported ? _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.indexedDBLocalPersistence : _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.browserLocalPersistence;
          break;

        case Persistence.NONE:
          converted = _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.inMemoryPersistence;
          break;

        default:
          return _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__._fail("argument-error"
          /* exp.AuthErrorCode.ARGUMENT_ERROR */
          , {
            appName: _this14._delegate.name
          });
      }

      return _this14._delegate.setPersistence(converted);
    })();
  }

  signInAndRetrieveDataWithCredential(credential) {
    return this.signInWithCredential(credential);
  }

  signInAnonymously() {
    return convertCredential(this._delegate, _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.signInAnonymously(this._delegate));
  }

  signInWithCredential(credential) {
    return convertCredential(this._delegate, _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.signInWithCredential(this._delegate, credential));
  }

  signInWithCustomToken(token) {
    return convertCredential(this._delegate, _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.signInWithCustomToken(this._delegate, token));
  }

  signInWithEmailAndPassword(email, password) {
    return convertCredential(this._delegate, _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.signInWithEmailAndPassword(this._delegate, email, password));
  }

  signInWithEmailLink(email, emailLink) {
    return convertCredential(this._delegate, _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.signInWithEmailLink(this._delegate, email, emailLink));
  }

  signInWithPhoneNumber(phoneNumber, applicationVerifier) {
    return convertConfirmationResult(this._delegate, _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.signInWithPhoneNumber(this._delegate, phoneNumber, applicationVerifier));
  }

  signInWithPopup(provider) {
    var _this15 = this;

    return (0,_Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _assert$1(_isPopupRedirectSupported(), _this15._delegate, "operation-not-supported-in-this-environment"
      /* exp.AuthErrorCode.OPERATION_NOT_SUPPORTED */
      );

      return convertCredential(_this15._delegate, _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.signInWithPopup(_this15._delegate, provider, CompatPopupRedirectResolver));
    })();
  }

  signInWithRedirect(provider) {
    var _this16 = this;

    return (0,_Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _assert$1(_isPopupRedirectSupported(), _this16._delegate, "operation-not-supported-in-this-environment"
      /* exp.AuthErrorCode.OPERATION_NOT_SUPPORTED */
      );

      yield _savePersistenceForRedirect(_this16._delegate);
      return _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.signInWithRedirect(_this16._delegate, provider, CompatPopupRedirectResolver);
    })();
  }

  updateCurrentUser(user) {
    // remove ts-ignore once overloads are defined for exp functions to accept compat objects
    // @ts-ignore
    return this._delegate.updateCurrentUser(user);
  }

  verifyPasswordResetCode(code) {
    return _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.verifyPasswordResetCode(this._delegate, code);
  }

  unwrap() {
    return this._delegate;
  }

  _delete() {
    return this._delegate._delete();
  }

  linkUnderlyingAuth() {
    this._delegate.wrapped = () => this;
  }

}

Auth.Persistence = Persistence;

function wrapObservers(nextOrObserver, error, complete) {
  let next = nextOrObserver;

  if (typeof nextOrObserver !== 'function') {
    ({
      next,
      error,
      complete
    } = nextOrObserver);
  } // We know 'next' is now a function


  const oldNext = next;

  const newNext = user => oldNext(user && User.getOrCreate(user));

  return {
    next: newNext,
    error: error,
    complete
  };
}

function buildPersistenceHierarchy(apiKey, appName) {
  // Note this is slightly different behavior: in this case, the stored
  // persistence is checked *first* rather than last. This is because we want
  // to prefer stored persistence type in the hierarchy. This is an empty
  // array if window is not available or there is no pending redirect
  const persistences = _getPersistencesFromRedirect(apiKey, appName); // If "self" is available, add indexedDB


  if (typeof self !== 'undefined' && !persistences.includes(_firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.indexedDBLocalPersistence)) {
    persistences.push(_firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.indexedDBLocalPersistence);
  } // If "window" is available, add HTML Storage persistences


  if (typeof window !== 'undefined') {
    for (const persistence of [_firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.browserLocalPersistence, _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.browserSessionPersistence]) {
      if (!persistences.includes(persistence)) {
        persistences.push(persistence);
      }
    }
  } // Add in-memory as a final fallback


  if (!persistences.includes(_firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.inMemoryPersistence)) {
    persistences.push(_firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.inMemoryPersistence);
  }

  return persistences;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


class PhoneAuthProvider {
  constructor() {
    this.providerId = 'phone'; // TODO: remove ts-ignore when moving types from auth-types to auth-compat
    // @ts-ignore

    this._delegate = new _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.PhoneAuthProvider(unwrap(_firebase_app_compat__WEBPACK_IMPORTED_MODULE_1__.default.auth()));
  }

  static credential(verificationId, verificationCode) {
    return _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.PhoneAuthProvider.credential(verificationId, verificationCode);
  }

  verifyPhoneNumber(phoneInfoOptions, applicationVerifier) {
    return this._delegate.verifyPhoneNumber( // The implementation matches but the types are subtly incompatible
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    phoneInfoOptions, applicationVerifier);
  }

  unwrap() {
    return this._delegate;
  }

}

PhoneAuthProvider.PHONE_SIGN_IN_METHOD = _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.PhoneAuthProvider.PHONE_SIGN_IN_METHOD;
PhoneAuthProvider.PROVIDER_ID = _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.PhoneAuthProvider.PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const _assert = _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__._assert;

class RecaptchaVerifier {
  constructor(container, parameters, app = _firebase_app_compat__WEBPACK_IMPORTED_MODULE_1__.default.app()) {
    var _a; // API key is required for web client RPC calls.


    _assert((_a = app.options) === null || _a === void 0 ? void 0 : _a.apiKey, "invalid-api-key"
    /* exp.AuthErrorCode.INVALID_API_KEY */
    , {
      appName: app.name
    });

    this._delegate = new _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.RecaptchaVerifier( // TODO: remove ts-ignore when moving types from auth-types to auth-compat
    // @ts-ignore
    app.auth(), container, // eslint-disable-next-line @typescript-eslint/no-explicit-any
    parameters);
    this.type = this._delegate.type;
  }

  clear() {
    this._delegate.clear();
  }

  render() {
    return this._delegate.render();
  }

  verify() {
    return this._delegate.verify();
  }

}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const AUTH_TYPE = 'auth-compat'; // Create auth components to register with firebase.
// Provides Auth public APIs.

function registerAuthCompat(instance) {
  instance.INTERNAL.registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_3__.Component(AUTH_TYPE, container => {
    // getImmediate for FirebaseApp will always succeed
    const app = container.getProvider('app-compat').getImmediate();
    const authProvider = container.getProvider('auth');
    return new Auth(app, authProvider);
  }, "PUBLIC"
  /* ComponentType.PUBLIC */
  ).setServiceProps({
    ActionCodeInfo: {
      Operation: {
        EMAIL_SIGNIN: _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.ActionCodeOperation.EMAIL_SIGNIN,
        PASSWORD_RESET: _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.ActionCodeOperation.PASSWORD_RESET,
        RECOVER_EMAIL: _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.ActionCodeOperation.RECOVER_EMAIL,
        REVERT_SECOND_FACTOR_ADDITION: _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.ActionCodeOperation.REVERT_SECOND_FACTOR_ADDITION,
        VERIFY_AND_CHANGE_EMAIL: _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.ActionCodeOperation.VERIFY_AND_CHANGE_EMAIL,
        VERIFY_EMAIL: _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.ActionCodeOperation.VERIFY_EMAIL
      }
    },
    EmailAuthProvider: _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.EmailAuthProvider,
    FacebookAuthProvider: _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.FacebookAuthProvider,
    GithubAuthProvider: _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.GithubAuthProvider,
    GoogleAuthProvider: _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.GoogleAuthProvider,
    OAuthProvider: _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.OAuthProvider,
    SAMLAuthProvider: _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.SAMLAuthProvider,
    PhoneAuthProvider: PhoneAuthProvider,
    PhoneMultiFactorGenerator: _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.PhoneMultiFactorGenerator,
    RecaptchaVerifier: RecaptchaVerifier,
    TwitterAuthProvider: _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.TwitterAuthProvider,
    Auth,
    AuthCredential: _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.AuthCredential,
    Error: _firebase_util__WEBPACK_IMPORTED_MODULE_4__.FirebaseError
  }).setInstantiationMode("LAZY"
  /* InstantiationMode.LAZY */
  ).setMultipleInstances(false));
  instance.registerVersion(name, version);
}

registerAuthCompat(_firebase_app_compat__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ 25170:
/*!**************************************************************!*\
  !*** ./node_modules/@firebase/auth/dist/esm2017/internal.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionCodeOperation": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.A),
/* harmony export */   "ActionCodeURL": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.ah),
/* harmony export */   "AuthCredential": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.K),
/* harmony export */   "AuthErrorCodes": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.H),
/* harmony export */   "AuthImpl": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.aK),
/* harmony export */   "AuthPopup": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.aN),
/* harmony export */   "EmailAuthCredential": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.L),
/* harmony export */   "EmailAuthProvider": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.U),
/* harmony export */   "FacebookAuthProvider": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.V),
/* harmony export */   "FactorId": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.F),
/* harmony export */   "FetchProvider": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.aO),
/* harmony export */   "GithubAuthProvider": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.X),
/* harmony export */   "GoogleAuthProvider": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.W),
/* harmony export */   "OAuthCredential": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.M),
/* harmony export */   "OAuthProvider": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.Y),
/* harmony export */   "OperationType": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.O),
/* harmony export */   "PhoneAuthCredential": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.N),
/* harmony export */   "PhoneAuthProvider": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.P),
/* harmony export */   "PhoneMultiFactorGenerator": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.m),
/* harmony export */   "ProviderId": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.p),
/* harmony export */   "RecaptchaVerifier": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.R),
/* harmony export */   "SAMLAuthCredential": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.aP),
/* harmony export */   "SAMLAuthProvider": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "SignInMethod": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.S),
/* harmony export */   "TotpMultiFactorGenerator": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.T),
/* harmony export */   "TotpSecret": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.n),
/* harmony export */   "TwitterAuthProvider": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__._),
/* harmony export */   "UserImpl": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.aJ),
/* harmony export */   "_assert": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.aB),
/* harmony export */   "_castAuth": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.aI),
/* harmony export */   "_fail": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.aw),
/* harmony export */   "_generateEventId": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.aM),
/* harmony export */   "_getClientVersion": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.aL),
/* harmony export */   "_getInstance": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.aD),
/* harmony export */   "_getRedirectResult": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.aF),
/* harmony export */   "_overrideRedirectResult": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.aG),
/* harmony export */   "_persistenceKeyName": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.aE),
/* harmony export */   "applyActionCode": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.a6),
/* harmony export */   "beforeAuthStateChanged": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.x),
/* harmony export */   "browserLocalPersistence": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.b),
/* harmony export */   "browserPopupRedirectResolver": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.k),
/* harmony export */   "browserSessionPersistence": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.a),
/* harmony export */   "checkActionCode": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.a7),
/* harmony export */   "confirmPasswordReset": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.a5),
/* harmony export */   "connectAuthEmulator": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.J),
/* harmony export */   "createUserWithEmailAndPassword": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.a9),
/* harmony export */   "debugErrorMap": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.E),
/* harmony export */   "deleteUser": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.D),
/* harmony export */   "fetchSignInMethodsForEmail": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.ae),
/* harmony export */   "getAdditionalUserInfo": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.ap),
/* harmony export */   "getAuth": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.o),
/* harmony export */   "getIdToken": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.am),
/* harmony export */   "getIdTokenResult": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.an),
/* harmony export */   "getMultiFactorResolver": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.ar),
/* harmony export */   "getRedirectResult": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.j),
/* harmony export */   "inMemoryPersistence": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.Q),
/* harmony export */   "indexedDBLocalPersistence": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.i),
/* harmony export */   "initializeAuth": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.I),
/* harmony export */   "initializeRecaptchaConfig": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.t),
/* harmony export */   "isSignInWithEmailLink": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.ac),
/* harmony export */   "linkWithCredential": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.a1),
/* harmony export */   "linkWithPhoneNumber": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.l),
/* harmony export */   "linkWithPopup": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.d),
/* harmony export */   "linkWithRedirect": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.g),
/* harmony export */   "multiFactor": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.as),
/* harmony export */   "onAuthStateChanged": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.y),
/* harmony export */   "onIdTokenChanged": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.w),
/* harmony export */   "parseActionCodeURL": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.ai),
/* harmony export */   "prodErrorMap": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.G),
/* harmony export */   "reauthenticateWithCredential": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.a2),
/* harmony export */   "reauthenticateWithPhoneNumber": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.r),
/* harmony export */   "reauthenticateWithPopup": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.e),
/* harmony export */   "reauthenticateWithRedirect": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.h),
/* harmony export */   "reload": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.aq),
/* harmony export */   "sendEmailVerification": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.af),
/* harmony export */   "sendPasswordResetEmail": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.a4),
/* harmony export */   "sendSignInLinkToEmail": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.ab),
/* harmony export */   "setPersistence": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.q),
/* harmony export */   "signInAnonymously": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.$),
/* harmony export */   "signInWithCredential": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.a0),
/* harmony export */   "signInWithCustomToken": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.a3),
/* harmony export */   "signInWithEmailAndPassword": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.aa),
/* harmony export */   "signInWithEmailLink": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.ad),
/* harmony export */   "signInWithPhoneNumber": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.s),
/* harmony export */   "signInWithPopup": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.c),
/* harmony export */   "signInWithRedirect": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.f),
/* harmony export */   "signOut": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.C),
/* harmony export */   "unlink": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.ao),
/* harmony export */   "updateCurrentUser": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.B),
/* harmony export */   "updateEmail": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.ak),
/* harmony export */   "updatePassword": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.al),
/* harmony export */   "updatePhoneNumber": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.u),
/* harmony export */   "updateProfile": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.aj),
/* harmony export */   "useDeviceLanguage": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.z),
/* harmony export */   "validatePassword": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.v),
/* harmony export */   "verifyBeforeUpdateEmail": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.ag),
/* harmony export */   "verifyPasswordResetCode": () => (/* reexport safe */ _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.a8),
/* harmony export */   "addFrameworkForLogging": () => (/* binding */ addFrameworkForLogging),
/* harmony export */   "cordovaPopupRedirectResolver": () => (/* binding */ cordovaPopupRedirectResolver)
/* harmony export */ });
/* harmony import */ var _Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);
/* harmony import */ var _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-81415345.js */ 4618);
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/util */ 7082);
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/app */ 49311);
/* harmony import */ var _firebase_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @firebase/logger */ 90058);
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @firebase/component */ 42262);








/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function _cordovaWindow() {
  return window;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * How long to wait after the app comes back into focus before concluding that
 * the user closed the sign in tab.
 */


const REDIRECT_TIMEOUT_MS = 2000;
/**
 * Generates the URL for the OAuth handler.
 */

function _generateHandlerUrl(_x, _x2, _x3) {
  return _generateHandlerUrl2.apply(this, arguments);
}
/**
 * Validates that this app is valid for this project configuration
 */


function _generateHandlerUrl2() {
  _generateHandlerUrl2 = (0,_Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (auth, event, provider) {
    var _a; // Get the cordova plugins


    const {
      BuildInfo
    } = _cordovaWindow();

    (0,_index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.at)(event.sessionId, 'AuthEvent did not contain a session ID');
    const sessionDigest = yield computeSha256(event.sessionId);
    const additionalParams = {};

    if ((0,_index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.au)()) {
      // iOS app identifier
      additionalParams['ibi'] = BuildInfo.packageName;
    } else if ((0,_index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.av)()) {
      // Android app identifier
      additionalParams['apn'] = BuildInfo.packageName;
    } else {
      (0,_index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.aw)(auth, "operation-not-supported-in-this-environment"
      /* AuthErrorCode.OPERATION_NOT_SUPPORTED */
      );
    } // Add the display name if available


    if (BuildInfo.displayName) {
      additionalParams['appDisplayName'] = BuildInfo.displayName;
    } // Attached the hashed session ID


    additionalParams['sessionId'] = sessionDigest;
    return (0,_index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.ax)(auth, provider, event.type, undefined, (_a = event.eventId) !== null && _a !== void 0 ? _a : undefined, additionalParams);
  });
  return _generateHandlerUrl2.apply(this, arguments);
}

function _validateOrigin(_x4) {
  return _validateOrigin2.apply(this, arguments);
}

function _validateOrigin2() {
  _validateOrigin2 = (0,_Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (auth) {
    const {
      BuildInfo
    } = _cordovaWindow();

    const request = {};

    if ((0,_index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.au)()) {
      request.iosBundleId = BuildInfo.packageName;
    } else if ((0,_index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.av)()) {
      request.androidPackageName = BuildInfo.packageName;
    } else {
      (0,_index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.aw)(auth, "operation-not-supported-in-this-environment"
      /* AuthErrorCode.OPERATION_NOT_SUPPORTED */
      );
    } // Will fail automatically if package name is not authorized


    yield (0,_index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.ay)(auth, request);
  });
  return _validateOrigin2.apply(this, arguments);
}

function _performRedirect(handlerUrl) {
  // Get the cordova plugins
  const {
    cordova
  } = _cordovaWindow();

  return new Promise(resolve => {
    cordova.plugins.browsertab.isAvailable(browserTabIsAvailable => {
      let iabRef = null;

      if (browserTabIsAvailable) {
        cordova.plugins.browsertab.openUrl(handlerUrl);
      } else {
        // TODO: Return the inappbrowser ref that's returned from the open call
        iabRef = cordova.InAppBrowser.open(handlerUrl, (0,_index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.az)() ? '_blank' : '_system', 'location=yes');
      }

      resolve(iabRef);
    });
  });
}
/**
 * This function waits for app activity to be seen before resolving. It does
 * this by attaching listeners to various dom events. Once the app is determined
 * to be visible, this promise resolves. AFTER that resolution, the listeners
 * are detached and any browser tabs left open will be closed.
 */


function _waitForAppResume(_x5, _x6, _x7) {
  return _waitForAppResume2.apply(this, arguments);
}
/**
 * Checks the configuration of the Cordova environment. This has no side effect
 * if the configuration is correct; otherwise it throws an error with the
 * missing plugin.
 */


function _waitForAppResume2() {
  _waitForAppResume2 = (0,_Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (auth, eventListener, iabRef) {
    // Get the cordova plugins
    const {
      cordova
    } = _cordovaWindow();

    let cleanup = () => {};

    try {
      yield new Promise((resolve, reject) => {
        let onCloseTimer = null; // DEFINE ALL THE CALLBACKS =====

        function authEventSeen() {
          var _a; // Auth event was detected. Resolve this promise and close the extra
          // window if it's still open.


          resolve();
          const closeBrowserTab = (_a = cordova.plugins.browsertab) === null || _a === void 0 ? void 0 : _a.close;

          if (typeof closeBrowserTab === 'function') {
            closeBrowserTab();
          } // Close inappbrowser emebedded webview in iOS7 and 8 case if still
          // open.


          if (typeof (iabRef === null || iabRef === void 0 ? void 0 : iabRef.close) === 'function') {
            iabRef.close();
          }
        }

        function resumed() {
          if (onCloseTimer) {
            // This code already ran; do not rerun.
            return;
          }

          onCloseTimer = window.setTimeout(() => {
            // Wait two seeconds after resume then reject.
            reject((0,_index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.aA)(auth, "redirect-cancelled-by-user"
            /* AuthErrorCode.REDIRECT_CANCELLED_BY_USER */
            ));
          }, REDIRECT_TIMEOUT_MS);
        }

        function visibilityChanged() {
          if ((document === null || document === void 0 ? void 0 : document.visibilityState) === 'visible') {
            resumed();
          }
        } // ATTACH ALL THE LISTENERS =====
        // Listen for the auth event


        eventListener.addPassiveListener(authEventSeen); // Listen for resume and visibility events

        document.addEventListener('resume', resumed, false);

        if ((0,_index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.av)()) {
          document.addEventListener('visibilitychange', visibilityChanged, false);
        } // SETUP THE CLEANUP FUNCTION =====


        cleanup = () => {
          eventListener.removePassiveListener(authEventSeen);
          document.removeEventListener('resume', resumed, false);
          document.removeEventListener('visibilitychange', visibilityChanged, false);

          if (onCloseTimer) {
            window.clearTimeout(onCloseTimer);
          }
        };
      });
    } finally {
      cleanup();
    }
  });
  return _waitForAppResume2.apply(this, arguments);
}

function _checkCordovaConfiguration(auth) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;

  const win = _cordovaWindow(); // Check all dependencies installed.
  // https://github.com/nordnet/cordova-universal-links-plugin
  // Note that cordova-universal-links-plugin has been abandoned.
  // A fork with latest fixes is available at:
  // https://www.npmjs.com/package/cordova-universal-links-plugin-fix


  (0,_index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.aB)(typeof ((_a = win === null || win === void 0 ? void 0 : win.universalLinks) === null || _a === void 0 ? void 0 : _a.subscribe) === 'function', auth, "invalid-cordova-configuration"
  /* AuthErrorCode.INVALID_CORDOVA_CONFIGURATION */
  , {
    missingPlugin: 'cordova-universal-links-plugin-fix'
  }); // https://www.npmjs.com/package/cordova-plugin-buildinfo


  (0,_index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.aB)(typeof ((_b = win === null || win === void 0 ? void 0 : win.BuildInfo) === null || _b === void 0 ? void 0 : _b.packageName) !== 'undefined', auth, "invalid-cordova-configuration"
  /* AuthErrorCode.INVALID_CORDOVA_CONFIGURATION */
  , {
    missingPlugin: 'cordova-plugin-buildInfo'
  }); // https://github.com/google/cordova-plugin-browsertab


  (0,_index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.aB)(typeof ((_e = (_d = (_c = win === null || win === void 0 ? void 0 : win.cordova) === null || _c === void 0 ? void 0 : _c.plugins) === null || _d === void 0 ? void 0 : _d.browsertab) === null || _e === void 0 ? void 0 : _e.openUrl) === 'function', auth, "invalid-cordova-configuration"
  /* AuthErrorCode.INVALID_CORDOVA_CONFIGURATION */
  , {
    missingPlugin: 'cordova-plugin-browsertab'
  });

  (0,_index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.aB)(typeof ((_h = (_g = (_f = win === null || win === void 0 ? void 0 : win.cordova) === null || _f === void 0 ? void 0 : _f.plugins) === null || _g === void 0 ? void 0 : _g.browsertab) === null || _h === void 0 ? void 0 : _h.isAvailable) === 'function', auth, "invalid-cordova-configuration"
  /* AuthErrorCode.INVALID_CORDOVA_CONFIGURATION */
  , {
    missingPlugin: 'cordova-plugin-browsertab'
  }); // https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-inappbrowser/


  (0,_index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.aB)(typeof ((_k = (_j = win === null || win === void 0 ? void 0 : win.cordova) === null || _j === void 0 ? void 0 : _j.InAppBrowser) === null || _k === void 0 ? void 0 : _k.open) === 'function', auth, "invalid-cordova-configuration"
  /* AuthErrorCode.INVALID_CORDOVA_CONFIGURATION */
  , {
    missingPlugin: 'cordova-plugin-inappbrowser'
  });
}
/**
 * Computes the SHA-256 of a session ID. The SubtleCrypto interface is only
 * available in "secure" contexts, which covers Cordova (which is served on a file
 * protocol).
 */


function computeSha256(_x8) {
  return _computeSha.apply(this, arguments);
}

function _computeSha() {
  _computeSha = (0,_Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (sessionId) {
    const bytes = stringToArrayBuffer(sessionId); // TODO: For IE11 crypto has a different name and this operation comes back
    //       as an object, not a promise. This is the old proposed standard that
    //       is used by IE11:
    // https://www.w3.org/TR/2013/WD-WebCryptoAPI-20130108/#cryptooperation-interface

    const buf = yield crypto.subtle.digest('SHA-256', bytes);
    const arr = Array.from(new Uint8Array(buf));
    return arr.map(num => num.toString(16).padStart(2, '0')).join('');
  });
  return _computeSha.apply(this, arguments);
}

function stringToArrayBuffer(str) {
  // This function is only meant to deal with an ASCII charset and makes
  // certain simplifying assumptions.
  (0,_index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.at)(/[0-9a-zA-Z]+/.test(str), 'Can only convert alpha-numeric strings');

  if (typeof TextEncoder !== 'undefined') {
    return new TextEncoder().encode(str);
  }

  const buff = new ArrayBuffer(str.length);
  const view = new Uint8Array(buff);

  for (let i = 0; i < str.length; i++) {
    view[i] = str.charCodeAt(i);
  }

  return view;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const SESSION_ID_LENGTH = 20;
/** Custom AuthEventManager that adds passive listeners to events */

class CordovaAuthEventManager extends _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.aC {
  constructor() {
    super(...arguments);
    this.passiveListeners = new Set();
    this.initPromise = new Promise(resolve => {
      this.resolveInialized = resolve;
    });
  }

  addPassiveListener(cb) {
    this.passiveListeners.add(cb);
  }

  removePassiveListener(cb) {
    this.passiveListeners.delete(cb);
  } // In a Cordova environment, this manager can live through multiple redirect
  // operations


  resetRedirect() {
    this.queuedRedirectEvent = null;
    this.hasHandledPotentialRedirect = false;
  }
  /** Override the onEvent method */


  onEvent(event) {
    this.resolveInialized();
    this.passiveListeners.forEach(cb => cb(event));
    return super.onEvent(event);
  }

  initialized() {
    var _this = this;

    return (0,_Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this.initPromise;
    })();
  }

}
/**
 * Generates a (partial) {@link AuthEvent}.
 */


function _generateNewEvent(auth, type, eventId = null) {
  return {
    type,
    eventId,
    urlResponse: null,
    sessionId: generateSessionId(),
    postBody: null,
    tenantId: auth.tenantId,
    error: (0,_index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.aA)(auth, "no-auth-event"
    /* AuthErrorCode.NO_AUTH_EVENT */
    )
  };
}

function _savePartialEvent(auth, event) {
  return storage()._set(persistenceKey(auth), event);
}

function _getAndRemoveEvent(_x9) {
  return _getAndRemoveEvent2.apply(this, arguments);
}

function _getAndRemoveEvent2() {
  _getAndRemoveEvent2 = (0,_Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (auth) {
    const event = yield storage()._get(persistenceKey(auth));

    if (event) {
      yield storage()._remove(persistenceKey(auth));
    }

    return event;
  });
  return _getAndRemoveEvent2.apply(this, arguments);
}

function _eventFromPartialAndUrl(partialEvent, url) {
  var _a, _b; // Parse the deep link within the dynamic link URL.


  const callbackUrl = _getDeepLinkFromCallback(url); // Confirm it is actually a callback URL.
  // Currently the universal link will be of this format:
  // https://<AUTH_DOMAIN>/__/auth/callback<OAUTH_RESPONSE>
  // This is a fake URL but is not intended to take the user anywhere
  // and just redirect to the app.


  if (callbackUrl.includes('/__/auth/callback')) {
    // Check if there is an error in the URL.
    // This mechanism is also used to pass errors back to the app:
    // https://<AUTH_DOMAIN>/__/auth/callback?firebaseError=<STRINGIFIED_ERROR>
    const params = searchParamsOrEmpty(callbackUrl); // Get the error object corresponding to the stringified error if found.

    const errorObject = params['firebaseError'] ? parseJsonOrNull(decodeURIComponent(params['firebaseError'])) : null;
    const code = (_b = (_a = errorObject === null || errorObject === void 0 ? void 0 : errorObject['code']) === null || _a === void 0 ? void 0 : _a.split('auth/')) === null || _b === void 0 ? void 0 : _b[1];
    const error = code ? (0,_index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.aA)(code) : null;

    if (error) {
      return {
        type: partialEvent.type,
        eventId: partialEvent.eventId,
        tenantId: partialEvent.tenantId,
        error,
        urlResponse: null,
        sessionId: null,
        postBody: null
      };
    } else {
      return {
        type: partialEvent.type,
        eventId: partialEvent.eventId,
        tenantId: partialEvent.tenantId,
        sessionId: partialEvent.sessionId,
        urlResponse: callbackUrl,
        postBody: null
      };
    }
  }

  return null;
}

function generateSessionId() {
  const chars = [];
  const allowedChars = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (let i = 0; i < SESSION_ID_LENGTH; i++) {
    const idx = Math.floor(Math.random() * allowedChars.length);
    chars.push(allowedChars.charAt(idx));
  }

  return chars.join('');
}

function storage() {
  return (0,_index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.aD)(_index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.b);
}

function persistenceKey(auth) {
  return (0,_index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.aE)("authEvent"
  /* KeyName.AUTH_EVENT */
  , auth.config.apiKey, auth.name);
}

function parseJsonOrNull(json) {
  try {
    return JSON.parse(json);
  } catch (e) {
    return null;
  }
} // Exported for testing


function _getDeepLinkFromCallback(url) {
  const params = searchParamsOrEmpty(url);
  const link = params['link'] ? decodeURIComponent(params['link']) : undefined; // Double link case (automatic redirect)

  const doubleDeepLink = searchParamsOrEmpty(link)['link']; // iOS custom scheme links.

  const iOSDeepLink = params['deep_link_id'] ? decodeURIComponent(params['deep_link_id']) : undefined;
  const iOSDoubleDeepLink = searchParamsOrEmpty(iOSDeepLink)['link'];
  return iOSDoubleDeepLink || iOSDeepLink || doubleDeepLink || link || url;
}
/**
 * Optimistically tries to get search params from a string, or else returns an
 * empty search params object.
 */


function searchParamsOrEmpty(url) {
  if (!(url === null || url === void 0 ? void 0 : url.includes('?'))) {
    return {};
  }

  const [_, ...rest] = url.split('?');
  return (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.querystringDecode)(rest.join('?'));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * How long to wait for the initial auth event before concluding no
 * redirect pending
 */


const INITIAL_EVENT_TIMEOUT_MS = 500;

class CordovaPopupRedirectResolver {
  constructor() {
    this._redirectPersistence = _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.a;
    this._shouldInitProactively = true; // This is lightweight for Cordova

    this.eventManagers = new Map();
    this.originValidationPromises = {};
    this._completeRedirectFn = _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.aF;
    this._overrideRedirectResult = _index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.aG;
  }

  _initialize(auth) {
    var _this2 = this;

    return (0,_Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const key = auth._key();

      let manager = _this2.eventManagers.get(key);

      if (!manager) {
        manager = new CordovaAuthEventManager(auth);

        _this2.eventManagers.set(key, manager);

        _this2.attachCallbackListeners(auth, manager);
      }

      return manager;
    })();
  }

  _openPopup(auth) {
    (0,_index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.aw)(auth, "operation-not-supported-in-this-environment"
    /* AuthErrorCode.OPERATION_NOT_SUPPORTED */
    );
  }

  _openRedirect(auth, provider, authType, eventId) {
    var _this3 = this;

    return (0,_Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _checkCordovaConfiguration(auth);

      const manager = yield _this3._initialize(auth);
      yield manager.initialized(); // Reset the persisted redirect states. This does not matter on Web where
      // the redirect always blows away application state entirely. On Cordova,
      // the app maintains control flow through the redirect.

      manager.resetRedirect();

      (0,_index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.aH)();

      yield _this3._originValidation(auth);

      const event = _generateNewEvent(auth, authType, eventId);

      yield _savePartialEvent(auth, event);
      const url = yield _generateHandlerUrl(auth, event, provider);
      const iabRef = yield _performRedirect(url);
      return _waitForAppResume(auth, manager, iabRef);
    })();
  }

  _isIframeWebStorageSupported(_auth, _cb) {
    throw new Error('Method not implemented.');
  }

  _originValidation(auth) {
    const key = auth._key();

    if (!this.originValidationPromises[key]) {
      this.originValidationPromises[key] = _validateOrigin(auth);
    }

    return this.originValidationPromises[key];
  }

  attachCallbackListeners(auth, manager) {
    // Get the global plugins
    const {
      universalLinks,
      handleOpenURL,
      BuildInfo
    } = _cordovaWindow();

    const noEventTimeout = setTimeout( /*#__PURE__*/(0,_Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      // We didn't see that initial event. Clear any pending object and
      // dispatch no event
      yield _getAndRemoveEvent(auth);
      manager.onEvent(generateNoEvent());
    }), INITIAL_EVENT_TIMEOUT_MS);

    const universalLinksCb = /*#__PURE__*/function () {
      var _ref2 = (0,_Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (eventData) {
        // We have an event so we can clear the no event timeout
        clearTimeout(noEventTimeout);
        const partialEvent = yield _getAndRemoveEvent(auth);
        let finalEvent = null;

        if (partialEvent && (eventData === null || eventData === void 0 ? void 0 : eventData['url'])) {
          finalEvent = _eventFromPartialAndUrl(partialEvent, eventData['url']);
        } // If finalEvent is never filled, trigger with no event


        manager.onEvent(finalEvent || generateNoEvent());
      });

      return function universalLinksCb(_x10) {
        return _ref2.apply(this, arguments);
      };
    }(); // Universal links subscriber doesn't exist for iOS, so we need to check


    if (typeof universalLinks !== 'undefined' && typeof universalLinks.subscribe === 'function') {
      universalLinks.subscribe(null, universalLinksCb);
    } // iOS 7 or 8 custom URL schemes.
    // This is also the current default behavior for iOS 9+.
    // For this to work, cordova-plugin-customurlscheme needs to be installed.
    // https://github.com/EddyVerbruggen/Custom-URL-scheme
    // Do not overwrite the existing developer's URL handler.


    const existingHandleOpenURL = handleOpenURL;
    const packagePrefix = `${BuildInfo.packageName.toLowerCase()}://`;

    _cordovaWindow().handleOpenURL = /*#__PURE__*/function () {
      var _ref3 = (0,_Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (url) {
        if (url.toLowerCase().startsWith(packagePrefix)) {
          // We want this intentionally to float
          // eslint-disable-next-line @typescript-eslint/no-floating-promises
          universalLinksCb({
            url
          });
        } // Call the developer's handler if it is present.


        if (typeof existingHandleOpenURL === 'function') {
          try {
            existingHandleOpenURL(url);
          } catch (e) {
            // This is a developer error. Don't stop the flow of the SDK.
            console.error(e);
          }
        }
      });

      return function (_x11) {
        return _ref3.apply(this, arguments);
      };
    }();
  }

}
/**
 * An implementation of {@link PopupRedirectResolver} suitable for Cordova
 * based applications.
 *
 * @public
 */


const cordovaPopupRedirectResolver = CordovaPopupRedirectResolver;

function generateNoEvent() {
  return {
    type: "unknown"
    /* AuthEventType.UNKNOWN */
    ,
    eventId: null,
    sessionId: null,
    urlResponse: null,
    postBody: null,
    tenantId: null,
    error: (0,_index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.aA)("no-auth-event"
    /* AuthErrorCode.NO_AUTH_EVENT */
    )
  };
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// This function should only be called by frameworks (e.g. FirebaseUI-web) to log their usage.
// It is not intended for direct use by developer apps. NO jsdoc here to intentionally leave it out
// of autogenerated documentation pages to reduce accidental misuse.


function addFrameworkForLogging(auth, framework) {
  (0,_index_81415345_js__WEBPACK_IMPORTED_MODULE_1__.aI)(auth)._logFramework(framework);
}



/***/ }),

/***/ 69202:
/*!************************************************************!*\
  !*** ./node_modules/@firebase/component/dist/index.cjs.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var tslib = __webpack_require__(/*! tslib */ 42321);
var util = __webpack_require__(/*! @firebase/util */ 54074);

/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */
var Component = /** @class */ (function () {
    /**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */
    function Component(name, instanceFactory, type) {
        this.name = name;
        this.instanceFactory = instanceFactory;
        this.type = type;
        this.multipleInstances = false;
        /**
         * Properties to be added to the service namespace
         */
        this.serviceProps = {};
        this.instantiationMode = "LAZY" /* InstantiationMode.LAZY */;
        this.onInstanceCreated = null;
    }
    Component.prototype.setInstantiationMode = function (mode) {
        this.instantiationMode = mode;
        return this;
    };
    Component.prototype.setMultipleInstances = function (multipleInstances) {
        this.multipleInstances = multipleInstances;
        return this;
    };
    Component.prototype.setServiceProps = function (props) {
        this.serviceProps = props;
        return this;
    };
    Component.prototype.setInstanceCreatedCallback = function (callback) {
        this.onInstanceCreated = callback;
        return this;
    };
    return Component;
}());

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DEFAULT_ENTRY_NAME = '[DEFAULT]';

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */
var Provider = /** @class */ (function () {
    function Provider(name, container) {
        this.name = name;
        this.container = container;
        this.component = null;
        this.instances = new Map();
        this.instancesDeferred = new Map();
        this.instancesOptions = new Map();
        this.onInitCallbacks = new Map();
    }
    /**
     * @param identifier A provider can provide mulitple instances of a service
     * if this.component.multipleInstances is true.
     */
    Provider.prototype.get = function (identifier) {
        // if multipleInstances is not supported, use the default name
        var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        if (!this.instancesDeferred.has(normalizedIdentifier)) {
            var deferred = new util.Deferred();
            this.instancesDeferred.set(normalizedIdentifier, deferred);
            if (this.isInitialized(normalizedIdentifier) ||
                this.shouldAutoInitialize()) {
                // initialize the service if it can be auto-initialized
                try {
                    var instance = this.getOrInitializeService({
                        instanceIdentifier: normalizedIdentifier
                    });
                    if (instance) {
                        deferred.resolve(instance);
                    }
                }
                catch (e) {
                    // when the instance factory throws an exception during get(), it should not cause
                    // a fatal error. We just return the unresolved promise in this case.
                }
            }
        }
        return this.instancesDeferred.get(normalizedIdentifier).promise;
    };
    Provider.prototype.getImmediate = function (options) {
        var _a;
        // if multipleInstances is not supported, use the default name
        var normalizedIdentifier = this.normalizeInstanceIdentifier(options === null || options === void 0 ? void 0 : options.identifier);
        var optional = (_a = options === null || options === void 0 ? void 0 : options.optional) !== null && _a !== void 0 ? _a : false;
        if (this.isInitialized(normalizedIdentifier) ||
            this.shouldAutoInitialize()) {
            try {
                return this.getOrInitializeService({
                    instanceIdentifier: normalizedIdentifier
                });
            }
            catch (e) {
                if (optional) {
                    return null;
                }
                else {
                    throw e;
                }
            }
        }
        else {
            // In case a component is not initialized and should/can not be auto-initialized at the moment, return null if the optional flag is set, or throw
            if (optional) {
                return null;
            }
            else {
                throw Error("Service ".concat(this.name, " is not available"));
            }
        }
    };
    Provider.prototype.getComponent = function () {
        return this.component;
    };
    Provider.prototype.setComponent = function (component) {
        var e_1, _a;
        if (component.name !== this.name) {
            throw Error("Mismatching Component ".concat(component.name, " for Provider ").concat(this.name, "."));
        }
        if (this.component) {
            throw Error("Component for ".concat(this.name, " has already been provided"));
        }
        this.component = component;
        // return early without attempting to initialize the component if the component requires explicit initialization (calling `Provider.initialize()`)
        if (!this.shouldAutoInitialize()) {
            return;
        }
        // if the service is eager, initialize the default instance
        if (isComponentEager(component)) {
            try {
                this.getOrInitializeService({ instanceIdentifier: DEFAULT_ENTRY_NAME });
            }
            catch (e) {
                // when the instance factory for an eager Component throws an exception during the eager
                // initialization, it should not cause a fatal error.
                // TODO: Investigate if we need to make it configurable, because some component may want to cause
                // a fatal error in this case?
            }
        }
        try {
            // Create service instances for the pending promises and resolve them
            // NOTE: if this.multipleInstances is false, only the default instance will be created
            // and all promises with resolve with it regardless of the identifier.
            for (var _b = tslib.__values(this.instancesDeferred.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = tslib.__read(_c.value, 2), instanceIdentifier = _d[0], instanceDeferred = _d[1];
                var normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
                try {
                    // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
                    var instance = this.getOrInitializeService({
                        instanceIdentifier: normalizedIdentifier
                    });
                    instanceDeferred.resolve(instance);
                }
                catch (e) {
                    // when the instance factory throws an exception, it should not cause
                    // a fatal error. We just leave the promise unresolved.
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    Provider.prototype.clearInstance = function (identifier) {
        if (identifier === void 0) { identifier = DEFAULT_ENTRY_NAME; }
        this.instancesDeferred.delete(identifier);
        this.instancesOptions.delete(identifier);
        this.instances.delete(identifier);
    };
    // app.delete() will call this method on every provider to delete the services
    // TODO: should we mark the provider as deleted?
    Provider.prototype.delete = function () {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var services;
            return tslib.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        services = Array.from(this.instances.values());
                        return [4 /*yield*/, Promise.all(tslib.__spreadArray(tslib.__spreadArray([], tslib.__read(services
                                .filter(function (service) { return 'INTERNAL' in service; }) // legacy services
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                .map(function (service) { return service.INTERNAL.delete(); })), false), tslib.__read(services
                                .filter(function (service) { return '_delete' in service; }) // modularized services
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                .map(function (service) { return service._delete(); })), false))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Provider.prototype.isComponentSet = function () {
        return this.component != null;
    };
    Provider.prototype.isInitialized = function (identifier) {
        if (identifier === void 0) { identifier = DEFAULT_ENTRY_NAME; }
        return this.instances.has(identifier);
    };
    Provider.prototype.getOptions = function (identifier) {
        if (identifier === void 0) { identifier = DEFAULT_ENTRY_NAME; }
        return this.instancesOptions.get(identifier) || {};
    };
    Provider.prototype.initialize = function (opts) {
        var e_2, _a;
        if (opts === void 0) { opts = {}; }
        var _b = opts.options, options = _b === void 0 ? {} : _b;
        var normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);
        if (this.isInitialized(normalizedIdentifier)) {
            throw Error("".concat(this.name, "(").concat(normalizedIdentifier, ") has already been initialized"));
        }
        if (!this.isComponentSet()) {
            throw Error("Component ".concat(this.name, " has not been registered yet"));
        }
        var instance = this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier,
            options: options
        });
        try {
            // resolve any pending promise waiting for the service instance
            for (var _c = tslib.__values(this.instancesDeferred.entries()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _e = tslib.__read(_d.value, 2), instanceIdentifier = _e[0], instanceDeferred = _e[1];
                var normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
                if (normalizedIdentifier === normalizedDeferredIdentifier) {
                    instanceDeferred.resolve(instance);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return instance;
    };
    /**
     *
     * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
     * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
     *
     * @param identifier An optional instance identifier
     * @returns a function to unregister the callback
     */
    Provider.prototype.onInit = function (callback, identifier) {
        var _a;
        var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        var existingCallbacks = (_a = this.onInitCallbacks.get(normalizedIdentifier)) !== null && _a !== void 0 ? _a : new Set();
        existingCallbacks.add(callback);
        this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
        var existingInstance = this.instances.get(normalizedIdentifier);
        if (existingInstance) {
            callback(existingInstance, normalizedIdentifier);
        }
        return function () {
            existingCallbacks.delete(callback);
        };
    };
    /**
     * Invoke onInit callbacks synchronously
     * @param instance the service instance`
     */
    Provider.prototype.invokeOnInitCallbacks = function (instance, identifier) {
        var e_3, _a;
        var callbacks = this.onInitCallbacks.get(identifier);
        if (!callbacks) {
            return;
        }
        try {
            for (var callbacks_1 = tslib.__values(callbacks), callbacks_1_1 = callbacks_1.next(); !callbacks_1_1.done; callbacks_1_1 = callbacks_1.next()) {
                var callback = callbacks_1_1.value;
                try {
                    callback(instance, identifier);
                }
                catch (_b) {
                    // ignore errors in the onInit callback
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (callbacks_1_1 && !callbacks_1_1.done && (_a = callbacks_1.return)) _a.call(callbacks_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    Provider.prototype.getOrInitializeService = function (_a) {
        var instanceIdentifier = _a.instanceIdentifier, _b = _a.options, options = _b === void 0 ? {} : _b;
        var instance = this.instances.get(instanceIdentifier);
        if (!instance && this.component) {
            instance = this.component.instanceFactory(this.container, {
                instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
                options: options
            });
            this.instances.set(instanceIdentifier, instance);
            this.instancesOptions.set(instanceIdentifier, options);
            /**
             * Invoke onInit listeners.
             * Note this.component.onInstanceCreated is different, which is used by the component creator,
             * while onInit listeners are registered by consumers of the provider.
             */
            this.invokeOnInitCallbacks(instance, instanceIdentifier);
            /**
             * Order is important
             * onInstanceCreated() should be called after this.instances.set(instanceIdentifier, instance); which
             * makes `isInitialized()` return true.
             */
            if (this.component.onInstanceCreated) {
                try {
                    this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
                }
                catch (_c) {
                    // ignore errors in the onInstanceCreatedCallback
                }
            }
        }
        return instance || null;
    };
    Provider.prototype.normalizeInstanceIdentifier = function (identifier) {
        if (identifier === void 0) { identifier = DEFAULT_ENTRY_NAME; }
        if (this.component) {
            return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
        }
        else {
            return identifier; // assume multiple instances are supported before the component is provided.
        }
    };
    Provider.prototype.shouldAutoInitialize = function () {
        return (!!this.component &&
            this.component.instantiationMode !== "EXPLICIT" /* InstantiationMode.EXPLICIT */);
    };
    return Provider;
}());
// undefined should be passed to the service factory for the default instance
function normalizeIdentifierForFactory(identifier) {
    return identifier === DEFAULT_ENTRY_NAME ? undefined : identifier;
}
function isComponentEager(component) {
    return component.instantiationMode === "EAGER" /* InstantiationMode.EAGER */;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */
var ComponentContainer = /** @class */ (function () {
    function ComponentContainer(name) {
        this.name = name;
        this.providers = new Map();
    }
    /**
     *
     * @param component Component being added
     * @param overwrite When a component with the same name has already been registered,
     * if overwrite is true: overwrite the existing component with the new component and create a new
     * provider with the new component. It can be useful in tests where you want to use different mocks
     * for different tests.
     * if overwrite is false: throw an exception
     */
    ComponentContainer.prototype.addComponent = function (component) {
        var provider = this.getProvider(component.name);
        if (provider.isComponentSet()) {
            throw new Error("Component ".concat(component.name, " has already been registered with ").concat(this.name));
        }
        provider.setComponent(component);
    };
    ComponentContainer.prototype.addOrOverwriteComponent = function (component) {
        var provider = this.getProvider(component.name);
        if (provider.isComponentSet()) {
            // delete the existing provider from the container, so we can register the new component
            this.providers.delete(component.name);
        }
        this.addComponent(component);
    };
    /**
     * getProvider provides a type safe interface where it can only be called with a field name
     * present in NameServiceMapping interface.
     *
     * Firebase SDKs providing services should extend NameServiceMapping interface to register
     * themselves.
     */
    ComponentContainer.prototype.getProvider = function (name) {
        if (this.providers.has(name)) {
            return this.providers.get(name);
        }
        // create a Provider for a service that hasn't registered with Firebase
        var provider = new Provider(name, this);
        this.providers.set(name, provider);
        return provider;
    };
    ComponentContainer.prototype.getProviders = function () {
        return Array.from(this.providers.values());
    };
    return ComponentContainer;
}());

exports.Component = Component;
exports.ComponentContainer = ComponentContainer;
exports.Provider = Provider;


/***/ }),

/***/ 70323:
/*!*********************************************************!*\
  !*** ./node_modules/@firebase/logger/dist/index.cjs.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var tslib = __webpack_require__(/*! tslib */ 42321);

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;
/**
 * A container for all of the Logger instances
 */
var instances = [];
/**
 * The JS SDK supports 5 log levels and also allows a user the ability to
 * silence the logs altogether.
 *
 * The order is a follows:
 * DEBUG < VERBOSE < INFO < WARN < ERROR
 *
 * All of the log types above the current log level will be captured (i.e. if
 * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
 * `VERBOSE` logs will not)
 */
exports.LogLevel = void 0;
(function (LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["WARN"] = 3] = "WARN";
    LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
    LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
})(exports.LogLevel || (exports.LogLevel = {}));
var levelStringToEnum = {
    'debug': exports.LogLevel.DEBUG,
    'verbose': exports.LogLevel.VERBOSE,
    'info': exports.LogLevel.INFO,
    'warn': exports.LogLevel.WARN,
    'error': exports.LogLevel.ERROR,
    'silent': exports.LogLevel.SILENT
};
/**
 * The default log level
 */
var defaultLogLevel = exports.LogLevel.INFO;
/**
 * By default, `console.debug` is not displayed in the developer console (in
 * chrome). To avoid forcing users to have to opt-in to these logs twice
 * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
 * logs to the `console.log` function.
 */
var ConsoleMethod = (_a = {},
    _a[exports.LogLevel.DEBUG] = 'log',
    _a[exports.LogLevel.VERBOSE] = 'log',
    _a[exports.LogLevel.INFO] = 'info',
    _a[exports.LogLevel.WARN] = 'warn',
    _a[exports.LogLevel.ERROR] = 'error',
    _a);
/**
 * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
 * messages on to their corresponding console counterparts (if the log method
 * is supported by the current log level)
 */
var defaultLogHandler = function (instance, logType) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (logType < instance.logLevel) {
        return;
    }
    var now = new Date().toISOString();
    var method = ConsoleMethod[logType];
    if (method) {
        console[method].apply(console, tslib.__spreadArray(["[".concat(now, "]  ").concat(instance.name, ":")], args, false));
    }
    else {
        throw new Error("Attempted to log a message with an invalid logType (value: ".concat(logType, ")"));
    }
};
var Logger = /** @class */ (function () {
    /**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */
    function Logger(name) {
        this.name = name;
        /**
         * The log level of the given Logger instance.
         */
        this._logLevel = defaultLogLevel;
        /**
         * The main (internal) log handler for the Logger instance.
         * Can be set to a new function in internal package code but not by user.
         */
        this._logHandler = defaultLogHandler;
        /**
         * The optional, additional, user-defined log handler for the Logger instance.
         */
        this._userLogHandler = null;
        /**
         * Capture the current instance for later use
         */
        instances.push(this);
    }
    Object.defineProperty(Logger.prototype, "logLevel", {
        get: function () {
            return this._logLevel;
        },
        set: function (val) {
            if (!(val in exports.LogLevel)) {
                throw new TypeError("Invalid value \"".concat(val, "\" assigned to `logLevel`"));
            }
            this._logLevel = val;
        },
        enumerable: false,
        configurable: true
    });
    // Workaround for setter/getter having to be the same type.
    Logger.prototype.setLogLevel = function (val) {
        this._logLevel = typeof val === 'string' ? levelStringToEnum[val] : val;
    };
    Object.defineProperty(Logger.prototype, "logHandler", {
        get: function () {
            return this._logHandler;
        },
        set: function (val) {
            if (typeof val !== 'function') {
                throw new TypeError('Value assigned to `logHandler` must be a function');
            }
            this._logHandler = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "userLogHandler", {
        get: function () {
            return this._userLogHandler;
        },
        set: function (val) {
            this._userLogHandler = val;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * The functions below are all based on the `console` interface
     */
    Logger.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, tslib.__spreadArray([this, exports.LogLevel.DEBUG], args, false));
        this._logHandler.apply(this, tslib.__spreadArray([this, exports.LogLevel.DEBUG], args, false));
    };
    Logger.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, tslib.__spreadArray([this, exports.LogLevel.VERBOSE], args, false));
        this._logHandler.apply(this, tslib.__spreadArray([this, exports.LogLevel.VERBOSE], args, false));
    };
    Logger.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, tslib.__spreadArray([this, exports.LogLevel.INFO], args, false));
        this._logHandler.apply(this, tslib.__spreadArray([this, exports.LogLevel.INFO], args, false));
    };
    Logger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, tslib.__spreadArray([this, exports.LogLevel.WARN], args, false));
        this._logHandler.apply(this, tslib.__spreadArray([this, exports.LogLevel.WARN], args, false));
    };
    Logger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, tslib.__spreadArray([this, exports.LogLevel.ERROR], args, false));
        this._logHandler.apply(this, tslib.__spreadArray([this, exports.LogLevel.ERROR], args, false));
    };
    return Logger;
}());
function setLogLevel(level) {
    instances.forEach(function (inst) {
        inst.setLogLevel(level);
    });
}
function setUserLogHandler(logCallback, options) {
    var _loop_1 = function (instance) {
        var customLogLevel = null;
        if (options && options.level) {
            customLogLevel = levelStringToEnum[options.level];
        }
        if (logCallback === null) {
            instance.userLogHandler = null;
        }
        else {
            instance.userLogHandler = function (instance, level) {
                var args = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    args[_i - 2] = arguments[_i];
                }
                var message = args
                    .map(function (arg) {
                    if (arg == null) {
                        return null;
                    }
                    else if (typeof arg === 'string') {
                        return arg;
                    }
                    else if (typeof arg === 'number' || typeof arg === 'boolean') {
                        return arg.toString();
                    }
                    else if (arg instanceof Error) {
                        return arg.message;
                    }
                    else {
                        try {
                            return JSON.stringify(arg);
                        }
                        catch (ignored) {
                            return null;
                        }
                    }
                })
                    .filter(function (arg) { return arg; })
                    .join(' ');
                if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance.logLevel)) {
                    logCallback({
                        level: exports.LogLevel[level].toLowerCase(),
                        message: message,
                        args: args,
                        type: instance.name
                    });
                }
            };
        }
    };
    for (var _i = 0, instances_1 = instances; _i < instances_1.length; _i++) {
        var instance = instances_1[_i];
        _loop_1(instance);
    }
}

exports.Logger = Logger;
exports.setLogLevel = setLogLevel;
exports.setUserLogHandler = setUserLogHandler;


/***/ }),

/***/ 54074:
/*!*******************************************************!*\
  !*** ./node_modules/@firebase/util/dist/index.cjs.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */

const CONSTANTS = {
  /**
   * @define {boolean} Whether this is the client Node.js SDK.
   */
  NODE_CLIENT: false,

  /**
   * @define {boolean} Whether this is the Admin Node.js SDK.
   */
  NODE_ADMIN: false,

  /**
   * Firebase SDK Version
   */
  SDK_VERSION: '${JSCORE_VERSION}'
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Throws an error if the provided assertion is falsy
 */

const assert = function (assertion, message) {
  if (!assertion) {
    throw assertionError(message);
  }
};
/**
 * Returns an Error object suitable for throwing.
 */


const assertionError = function (message) {
  return new Error('Firebase Database (' + CONSTANTS.SDK_VERSION + ') INTERNAL ASSERT FAILED: ' + message);
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const stringToByteArray$1 = function (str) {
  // TODO(user): Use native implementations if/when available
  const out = [];
  let p = 0;

  for (let i = 0; i < str.length; i++) {
    let c = str.charCodeAt(i);

    if (c < 128) {
      out[p++] = c;
    } else if (c < 2048) {
      out[p++] = c >> 6 | 192;
      out[p++] = c & 63 | 128;
    } else if ((c & 0xfc00) === 0xd800 && i + 1 < str.length && (str.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
      // Surrogate Pair
      c = 0x10000 + ((c & 0x03ff) << 10) + (str.charCodeAt(++i) & 0x03ff);
      out[p++] = c >> 18 | 240;
      out[p++] = c >> 12 & 63 | 128;
      out[p++] = c >> 6 & 63 | 128;
      out[p++] = c & 63 | 128;
    } else {
      out[p++] = c >> 12 | 224;
      out[p++] = c >> 6 & 63 | 128;
      out[p++] = c & 63 | 128;
    }
  }

  return out;
};
/**
 * Turns an array of numbers into the string given by the concatenation of the
 * characters to which the numbers correspond.
 * @param bytes Array of numbers representing characters.
 * @return Stringification of the array.
 */


const byteArrayToString = function (bytes) {
  // TODO(user): Use native implementations if/when available
  const out = [];
  let pos = 0,
      c = 0;

  while (pos < bytes.length) {
    const c1 = bytes[pos++];

    if (c1 < 128) {
      out[c++] = String.fromCharCode(c1);
    } else if (c1 > 191 && c1 < 224) {
      const c2 = bytes[pos++];
      out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
    } else if (c1 > 239 && c1 < 365) {
      // Surrogate Pair
      const c2 = bytes[pos++];
      const c3 = bytes[pos++];
      const c4 = bytes[pos++];
      const u = ((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 0x10000;
      out[c++] = String.fromCharCode(0xd800 + (u >> 10));
      out[c++] = String.fromCharCode(0xdc00 + (u & 1023));
    } else {
      const c2 = bytes[pos++];
      const c3 = bytes[pos++];
      out[c++] = String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
    }
  }

  return out.join('');
}; // We define it as an object literal instead of a class because a class compiled down to es5 can't
// be treeshaked. https://github.com/rollup/rollup/issues/1691
// Static lookup maps, lazily populated by init_()


const base64 = {
  /**
   * Maps bytes to characters.
   */
  byteToCharMap_: null,

  /**
   * Maps characters to bytes.
   */
  charToByteMap_: null,

  /**
   * Maps bytes to websafe characters.
   * @private
   */
  byteToCharMapWebSafe_: null,

  /**
   * Maps websafe characters to bytes.
   * @private
   */
  charToByteMapWebSafe_: null,

  /**
   * Our default alphabet, shared between
   * ENCODED_VALS and ENCODED_VALS_WEBSAFE
   */
  ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789',

  /**
   * Our default alphabet. Value 64 (=) is special; it means "nothing."
   */
  get ENCODED_VALS() {
    return this.ENCODED_VALS_BASE + '+/=';
  },

  /**
   * Our websafe alphabet.
   */
  get ENCODED_VALS_WEBSAFE() {
    return this.ENCODED_VALS_BASE + '-_.';
  },

  /**
   * Whether this browser supports the atob and btoa functions. This extension
   * started at Mozilla but is now implemented by many browsers. We use the
   * ASSUME_* variables to avoid pulling in the full useragent detection library
   * but still allowing the standard per-browser compilations.
   *
   */
  HAS_NATIVE_SUPPORT: typeof atob === 'function',

  /**
   * Base64-encode an array of bytes.
   *
   * @param input An array of bytes (numbers with
   *     value in [0, 255]) to encode.
   * @param webSafe Boolean indicating we should use the
   *     alternative alphabet.
   * @return The base64 encoded string.
   */
  encodeByteArray(input, webSafe) {
    if (!Array.isArray(input)) {
      throw Error('encodeByteArray takes an array as a parameter');
    }

    this.init_();
    const byteToCharMap = webSafe ? this.byteToCharMapWebSafe_ : this.byteToCharMap_;
    const output = [];

    for (let i = 0; i < input.length; i += 3) {
      const byte1 = input[i];
      const haveByte2 = i + 1 < input.length;
      const byte2 = haveByte2 ? input[i + 1] : 0;
      const haveByte3 = i + 2 < input.length;
      const byte3 = haveByte3 ? input[i + 2] : 0;
      const outByte1 = byte1 >> 2;
      const outByte2 = (byte1 & 0x03) << 4 | byte2 >> 4;
      let outByte3 = (byte2 & 0x0f) << 2 | byte3 >> 6;
      let outByte4 = byte3 & 0x3f;

      if (!haveByte3) {
        outByte4 = 64;

        if (!haveByte2) {
          outByte3 = 64;
        }
      }

      output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
    }

    return output.join('');
  },

  /**
   * Base64-encode a string.
   *
   * @param input A string to encode.
   * @param webSafe If true, we should use the
   *     alternative alphabet.
   * @return The base64 encoded string.
   */
  encodeString(input, webSafe) {
    // Shortcut for Mozilla browsers that implement
    // a native base64 encoder in the form of "btoa/atob"
    if (this.HAS_NATIVE_SUPPORT && !webSafe) {
      return btoa(input);
    }

    return this.encodeByteArray(stringToByteArray$1(input), webSafe);
  },

  /**
   * Base64-decode a string.
   *
   * @param input to decode.
   * @param webSafe True if we should use the
   *     alternative alphabet.
   * @return string representing the decoded value.
   */
  decodeString(input, webSafe) {
    // Shortcut for Mozilla browsers that implement
    // a native base64 encoder in the form of "btoa/atob"
    if (this.HAS_NATIVE_SUPPORT && !webSafe) {
      return atob(input);
    }

    return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
  },

  /**
   * Base64-decode a string.
   *
   * In base-64 decoding, groups of four characters are converted into three
   * bytes.  If the encoder did not apply padding, the input length may not
   * be a multiple of 4.
   *
   * In this case, the last group will have fewer than 4 characters, and
   * padding will be inferred.  If the group has one or two characters, it decodes
   * to one byte.  If the group has three characters, it decodes to two bytes.
   *
   * @param input Input to decode.
   * @param webSafe True if we should use the web-safe alphabet.
   * @return bytes representing the decoded value.
   */
  decodeStringToByteArray(input, webSafe) {
    this.init_();
    const charToByteMap = webSafe ? this.charToByteMapWebSafe_ : this.charToByteMap_;
    const output = [];

    for (let i = 0; i < input.length;) {
      const byte1 = charToByteMap[input.charAt(i++)];
      const haveByte2 = i < input.length;
      const byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
      ++i;
      const haveByte3 = i < input.length;
      const byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
      ++i;
      const haveByte4 = i < input.length;
      const byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
      ++i;

      if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
        throw new DecodeBase64StringError();
      }

      const outByte1 = byte1 << 2 | byte2 >> 4;
      output.push(outByte1);

      if (byte3 !== 64) {
        const outByte2 = byte2 << 4 & 0xf0 | byte3 >> 2;
        output.push(outByte2);

        if (byte4 !== 64) {
          const outByte3 = byte3 << 6 & 0xc0 | byte4;
          output.push(outByte3);
        }
      }
    }

    return output;
  },

  /**
   * Lazy static initialization function. Called before
   * accessing any of the static map variables.
   * @private
   */
  init_() {
    if (!this.byteToCharMap_) {
      this.byteToCharMap_ = {};
      this.charToByteMap_ = {};
      this.byteToCharMapWebSafe_ = {};
      this.charToByteMapWebSafe_ = {}; // We want quick mappings back and forth, so we precompute two maps.

      for (let i = 0; i < this.ENCODED_VALS.length; i++) {
        this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
        this.charToByteMap_[this.byteToCharMap_[i]] = i;
        this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
        this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i; // Be forgiving when decoding and correctly decode both encodings.

        if (i >= this.ENCODED_VALS_BASE.length) {
          this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
          this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
        }
      }
    }
  }

};
/**
 * An error encountered while decoding base64 string.
 */

class DecodeBase64StringError extends Error {
  constructor() {
    super(...arguments);
    this.name = 'DecodeBase64StringError';
  }

}
/**
 * URL-safe base64 encoding
 */


const base64Encode = function (str) {
  const utf8Bytes = stringToByteArray$1(str);
  return base64.encodeByteArray(utf8Bytes, true);
};
/**
 * URL-safe base64 encoding (without "." padding in the end).
 * e.g. Used in JSON Web Token (JWT) parts.
 */


const base64urlEncodeWithoutPadding = function (str) {
  // Use base64url encoding and remove padding in the end (dot characters).
  return base64Encode(str).replace(/\./g, '');
};
/**
 * URL-safe base64 decoding
 *
 * NOTE: DO NOT use the global atob() function - it does NOT support the
 * base64Url variant encoding.
 *
 * @param str To be decoded
 * @return Decoded result, if possible
 */


const base64Decode = function (str) {
  try {
    return base64.decodeString(str, true);
  } catch (e) {
    console.error('base64Decode failed: ', e);
  }

  return null;
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Do a deep-copy of basic JavaScript Objects or Arrays.
 */


function deepCopy(value) {
  return deepExtend(undefined, value);
}
/**
 * Copy properties from source to target (recursively allows extension
 * of Objects and Arrays).  Scalar values in the target are over-written.
 * If target is undefined, an object of the appropriate type will be created
 * (and returned).
 *
 * We recursively copy all child properties of plain Objects in the source- so
 * that namespace- like dictionaries are merged.
 *
 * Note that the target can be a function, in which case the properties in
 * the source Object are copied onto it as static properties of the Function.
 *
 * Note: we don't merge __proto__ to prevent prototype pollution
 */


function deepExtend(target, source) {
  if (!(source instanceof Object)) {
    return source;
  }

  switch (source.constructor) {
    case Date:
      // Treat Dates like scalars; if the target date object had any child
      // properties - they will be lost!
      const dateValue = source;
      return new Date(dateValue.getTime());

    case Object:
      if (target === undefined) {
        target = {};
      }

      break;

    case Array:
      // Always copy the array source and overwrite the target.
      target = [];
      break;

    default:
      // Not a plain Object - treat it as a scalar.
      return source;
  }

  for (const prop in source) {
    // use isValidKey to guard against prototype pollution. See https://snyk.io/vuln/SNYK-JS-LODASH-450202
    if (!source.hasOwnProperty(prop) || !isValidKey(prop)) {
      continue;
    }

    target[prop] = deepExtend(target[prop], source[prop]);
  }

  return target;
}

function isValidKey(key) {
  return key !== '__proto__';
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Polyfill for `globalThis` object.
 * @returns the `globalThis` object for the given environment.
 * @public
 */


function getGlobal() {
  if (typeof self !== 'undefined') {
    return self;
  }

  if (typeof window !== 'undefined') {
    return window;
  }

  if (typeof global !== 'undefined') {
    return global;
  }

  throw new Error('Unable to locate global object.');
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const getDefaultsFromGlobal = () => getGlobal().__FIREBASE_DEFAULTS__;
/**
 * Attempt to read defaults from a JSON string provided to
 * process(.)env(.)__FIREBASE_DEFAULTS__ or a JSON file whose path is in
 * process(.)env(.)__FIREBASE_DEFAULTS_PATH__
 * The dots are in parens because certain compilers (Vite?) cannot
 * handle seeing that variable in comments.
 * See https://github.com/firebase/firebase-js-sdk/issues/6838
 */


const getDefaultsFromEnvVariable = () => {
  if (typeof process === 'undefined' || typeof process.env === 'undefined') {
    return;
  }

  const defaultsJsonString = process.env.__FIREBASE_DEFAULTS__;

  if (defaultsJsonString) {
    return JSON.parse(defaultsJsonString);
  }
};

const getDefaultsFromCookie = () => {
  if (typeof document === 'undefined') {
    return;
  }

  let match;

  try {
    match = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
  } catch (e) {
    // Some environments such as Angular Universal SSR have a
    // `document` object but error on accessing `document.cookie`.
    return;
  }

  const decoded = match && base64Decode(match[1]);
  return decoded && JSON.parse(decoded);
};
/**
 * Get the __FIREBASE_DEFAULTS__ object. It checks in order:
 * (1) if such an object exists as a property of `globalThis`
 * (2) if such an object was provided on a shell environment variable
 * (3) if such an object exists in a cookie
 * @public
 */


const getDefaults = () => {
  try {
    return getDefaultsFromGlobal() || getDefaultsFromEnvVariable() || getDefaultsFromCookie();
  } catch (e) {
    /**
     * Catch-all for being unable to get __FIREBASE_DEFAULTS__ due
     * to any environment case we have not accounted for. Log to
     * info instead of swallowing so we can find these unknown cases
     * and add paths for them if needed.
     */
    console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
    return;
  }
};
/**
 * Returns emulator host stored in the __FIREBASE_DEFAULTS__ object
 * for the given product.
 * @returns a URL host formatted like `127.0.0.1:9999` or `[::1]:4000` if available
 * @public
 */


const getDefaultEmulatorHost = productName => {
  var _a, _b;

  return (_b = (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.emulatorHosts) === null || _b === void 0 ? void 0 : _b[productName];
};
/**
 * Returns emulator hostname and port stored in the __FIREBASE_DEFAULTS__ object
 * for the given product.
 * @returns a pair of hostname and port like `["::1", 4000]` if available
 * @public
 */


const getDefaultEmulatorHostnameAndPort = productName => {
  const host = getDefaultEmulatorHost(productName);

  if (!host) {
    return undefined;
  }

  const separatorIndex = host.lastIndexOf(':'); // Finding the last since IPv6 addr also has colons.

  if (separatorIndex <= 0 || separatorIndex + 1 === host.length) {
    throw new Error(`Invalid host ${host} with no separate hostname and port!`);
  } // eslint-disable-next-line no-restricted-globals


  const port = parseInt(host.substring(separatorIndex + 1), 10);

  if (host[0] === '[') {
    // Bracket-quoted `[ipv6addr]:port` => return "ipv6addr" (without brackets).
    return [host.substring(1, separatorIndex - 1), port];
  } else {
    return [host.substring(0, separatorIndex), port];
  }
};
/**
 * Returns Firebase app config stored in the __FIREBASE_DEFAULTS__ object.
 * @public
 */


const getDefaultAppConfig = () => {
  var _a;

  return (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.config;
};
/**
 * Returns an experimental setting on the __FIREBASE_DEFAULTS__ object (properties
 * prefixed by "_")
 * @public
 */


const getExperimentalSetting = name => {
  var _a;

  return (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a[`_${name}`];
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


class Deferred {
  constructor() {
    this.reject = () => {};

    this.resolve = () => {};

    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
  /**
   * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
   * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
   * and returns a node-style callback which will resolve or reject the Deferred's promise.
   */


  wrapCallback(callback) {
    return (error, value) => {
      if (error) {
        this.reject(error);
      } else {
        this.resolve(value);
      }

      if (typeof callback === 'function') {
        // Attaching noop handler just in case developer wasn't expecting
        // promises
        this.promise.catch(() => {}); // Some of our callbacks don't expect a value and our own tests
        // assert that the parameter length is 1

        if (callback.length === 1) {
          callback(error);
        } else {
          callback(error, value);
        }
      }
    };
  }

}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function createMockUserToken(token, projectId) {
  if (token.uid) {
    throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
  } // Unsecured JWTs use "none" as the algorithm.


  const header = {
    alg: 'none',
    type: 'JWT'
  };
  const project = projectId || 'demo-project';
  const iat = token.iat || 0;
  const sub = token.sub || token.user_id;

  if (!sub) {
    throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
  }

  const payload = Object.assign({
    // Set all required fields to decent defaults
    iss: `https://securetoken.google.com/${project}`,
    aud: project,
    iat,
    exp: iat + 3600,
    auth_time: iat,
    sub,
    user_id: sub,
    firebase: {
      sign_in_provider: 'custom',
      identities: {}
    }
  }, token); // Unsecured JWTs use the empty string as a signature.

  const signature = '';
  return [base64urlEncodeWithoutPadding(JSON.stringify(header)), base64urlEncodeWithoutPadding(JSON.stringify(payload)), signature].join('.');
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */


function getUA() {
  if (typeof navigator !== 'undefined' && typeof navigator['userAgent'] === 'string') {
    return navigator['userAgent'];
  } else {
    return '';
  }
}
/**
 * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
 *
 * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
 * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
 * wait for a callback.
 */


function isMobileCordova() {
  return typeof window !== 'undefined' && // @ts-ignore Setting up an broadly applicable index signature for Window
  // just to deal with this case would probably be a bad idea.
  !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA());
}
/**
 * Detect Node.js.
 *
 * @return true if Node.js environment is detected or specified.
 */
// Node detection logic from: https://github.com/iliakan/detect-node/


function isNode() {
  var _a;

  const forceEnvironment = (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.forceEnvironment;

  if (forceEnvironment === 'node') {
    return true;
  } else if (forceEnvironment === 'browser') {
    return false;
  }

  try {
    return Object.prototype.toString.call(global.process) === '[object process]';
  } catch (e) {
    return false;
  }
}
/**
 * Detect Browser Environment
 */


function isBrowser() {
  return typeof self === 'object' && self.self === self;
}

function isBrowserExtension() {
  const runtime = typeof chrome === 'object' ? chrome.runtime : typeof browser === 'object' ? browser.runtime : undefined;
  return typeof runtime === 'object' && runtime.id !== undefined;
}
/**
 * Detect React Native.
 *
 * @return true if ReactNative environment is detected.
 */


function isReactNative() {
  return typeof navigator === 'object' && navigator['product'] === 'ReactNative';
}
/** Detects Electron apps. */


function isElectron() {
  return getUA().indexOf('Electron/') >= 0;
}
/** Detects Internet Explorer. */


function isIE() {
  const ua = getUA();
  return ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
}
/** Detects Universal Windows Platform apps. */


function isUWP() {
  return getUA().indexOf('MSAppHost/') >= 0;
}
/**
 * Detect whether the current SDK build is the Node version.
 *
 * @return true if it's the Node SDK build.
 */


function isNodeSdk() {
  return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
}
/** Returns true if we are running in Safari. */


function isSafari() {
  return !isNode() && navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome');
}
/**
 * This method checks if indexedDB is supported by current browser/service worker context
 * @return true if indexedDB is supported by current browser/service worker context
 */


function isIndexedDBAvailable() {
  try {
    return typeof indexedDB === 'object';
  } catch (e) {
    return false;
  }
}
/**
 * This method validates browser/sw context for indexedDB by opening a dummy indexedDB database and reject
 * if errors occur during the database open operation.
 *
 * @throws exception if current browser/sw context can't run idb.open (ex: Safari iframe, Firefox
 * private browsing)
 */


function validateIndexedDBOpenable() {
  return new Promise((resolve, reject) => {
    try {
      let preExist = true;
      const DB_CHECK_NAME = 'validate-browser-context-for-indexeddb-analytics-module';
      const request = self.indexedDB.open(DB_CHECK_NAME);

      request.onsuccess = () => {
        request.result.close(); // delete database only when it doesn't pre-exist

        if (!preExist) {
          self.indexedDB.deleteDatabase(DB_CHECK_NAME);
        }

        resolve(true);
      };

      request.onupgradeneeded = () => {
        preExist = false;
      };

      request.onerror = () => {
        var _a;

        reject(((_a = request.error) === null || _a === void 0 ? void 0 : _a.message) || '');
      };
    } catch (error) {
      reject(error);
    }
  });
}
/**
 *
 * This method checks whether cookie is enabled within current browser
 * @return true if cookie is enabled within current browser
 */


function areCookiesEnabled() {
  if (typeof navigator === 'undefined' || !navigator.cookieEnabled) {
    return false;
  }

  return true;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Standardized Firebase Error.
 *
 * Usage:
 *
 *   // Typescript string literals for type-safe codes
 *   type Err =
 *     'unknown' |
 *     'object-not-found'
 *     ;
 *
 *   // Closure enum for type-safe error codes
 *   // at-enum {string}
 *   var Err = {
 *     UNKNOWN: 'unknown',
 *     OBJECT_NOT_FOUND: 'object-not-found',
 *   }
 *
 *   let errors: Map<Err, string> = {
 *     'generic-error': "Unknown error",
 *     'file-not-found': "Could not find file: {$file}",
 *   };
 *
 *   // Type-safe function - must pass a valid error code as param.
 *   let error = new ErrorFactory<Err>('service', 'Service', errors);
 *
 *   ...
 *   throw error.create(Err.GENERIC);
 *   ...
 *   throw error.create(Err.FILE_NOT_FOUND, {'file': fileName});
 *   ...
 *   // Service: Could not file file: foo.txt (service/file-not-found).
 *
 *   catch (e) {
 *     assert(e.message === "Could not find file: foo.txt.");
 *     if ((e as FirebaseError)?.code === 'service/file-not-found') {
 *       console.log("Could not read file: " + e['file']);
 *     }
 *   }
 */


const ERROR_NAME = 'FirebaseError'; // Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types

class FirebaseError extends Error {
  constructor(
  /** The error code for this error. */
  code, message,
  /** Custom data for this error. */
  customData) {
    super(message);
    this.code = code;
    this.customData = customData;
    /** The custom name for all FirebaseErrors. */

    this.name = ERROR_NAME; // Fix For ES5
    // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work

    Object.setPrototypeOf(this, FirebaseError.prototype); // Maintains proper stack trace for where our error was thrown.
    // Only available on V8.

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ErrorFactory.prototype.create);
    }
  }

}

class ErrorFactory {
  constructor(service, serviceName, errors) {
    this.service = service;
    this.serviceName = serviceName;
    this.errors = errors;
  }

  create(code, ...data) {
    const customData = data[0] || {};
    const fullCode = `${this.service}/${code}`;
    const template = this.errors[code];
    const message = template ? replaceTemplate(template, customData) : 'Error'; // Service Name: Error message (service/code).

    const fullMessage = `${this.serviceName}: ${message} (${fullCode}).`;
    const error = new FirebaseError(fullCode, fullMessage, customData);
    return error;
  }

}

function replaceTemplate(template, data) {
  return template.replace(PATTERN, (_, key) => {
    const value = data[key];
    return value != null ? String(value) : `<${key}?>`;
  });
}

const PATTERN = /\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Evaluates a JSON string into a javascript object.
 *
 * @param {string} str A string containing JSON.
 * @return {*} The javascript object representing the specified JSON.
 */

function jsonEval(str) {
  return JSON.parse(str);
}
/**
 * Returns JSON representing a javascript object.
 * @param {*} data Javascript object to be stringified.
 * @return {string} The JSON contents of the object.
 */


function stringify(data) {
  return JSON.stringify(data);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Decodes a Firebase auth. token into constituent parts.
 *
 * Notes:
 * - May return with invalid / incomplete claims if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */


const decode = function (token) {
  let header = {},
      claims = {},
      data = {},
      signature = '';

  try {
    const parts = token.split('.');
    header = jsonEval(base64Decode(parts[0]) || '');
    claims = jsonEval(base64Decode(parts[1]) || '');
    signature = parts[2];
    data = claims['d'] || {};
    delete claims['d'];
  } catch (e) {}

  return {
    header,
    claims,
    data,
    signature
  };
};
/**
 * Decodes a Firebase auth. token and checks the validity of its time-based claims. Will return true if the
 * token is within the time window authorized by the 'nbf' (not-before) and 'iat' (issued-at) claims.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */


const isValidTimestamp = function (token) {
  const claims = decode(token).claims;
  const now = Math.floor(new Date().getTime() / 1000);
  let validSince = 0,
      validUntil = 0;

  if (typeof claims === 'object') {
    if (claims.hasOwnProperty('nbf')) {
      validSince = claims['nbf'];
    } else if (claims.hasOwnProperty('iat')) {
      validSince = claims['iat'];
    }

    if (claims.hasOwnProperty('exp')) {
      validUntil = claims['exp'];
    } else {
      // token will expire after 24h by default
      validUntil = validSince + 86400;
    }
  }

  return !!now && !!validSince && !!validUntil && now >= validSince && now <= validUntil;
};
/**
 * Decodes a Firebase auth. token and returns its issued at time if valid, null otherwise.
 *
 * Notes:
 * - May return null if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */


const issuedAtTime = function (token) {
  const claims = decode(token).claims;

  if (typeof claims === 'object' && claims.hasOwnProperty('iat')) {
    return claims['iat'];
  }

  return null;
};
/**
 * Decodes a Firebase auth. token and checks the validity of its format. Expects a valid issued-at time.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */


const isValidFormat = function (token) {
  const decoded = decode(token),
        claims = decoded.claims;
  return !!claims && typeof claims === 'object' && claims.hasOwnProperty('iat');
};
/**
 * Attempts to peer into an auth token and determine if it's an admin auth token by looking at the claims portion.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */


const isAdmin = function (token) {
  const claims = decode(token).claims;
  return typeof claims === 'object' && claims['admin'] === true;
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function contains(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

function safeGet(obj, key) {
  if (Object.prototype.hasOwnProperty.call(obj, key)) {
    return obj[key];
  } else {
    return undefined;
  }
}

function isEmpty(obj) {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return false;
    }
  }

  return true;
}

function map(obj, fn, contextObj) {
  const res = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      res[key] = fn.call(contextObj, obj[key], key, obj);
    }
  }

  return res;
}
/**
 * Deep equal two objects. Support Arrays and Objects.
 */


function deepEqual(a, b) {
  if (a === b) {
    return true;
  }

  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);

  for (const k of aKeys) {
    if (!bKeys.includes(k)) {
      return false;
    }

    const aProp = a[k];
    const bProp = b[k];

    if (isObject(aProp) && isObject(bProp)) {
      if (!deepEqual(aProp, bProp)) {
        return false;
      }
    } else if (aProp !== bProp) {
      return false;
    }
  }

  for (const k of bKeys) {
    if (!aKeys.includes(k)) {
      return false;
    }
  }

  return true;
}

function isObject(thing) {
  return thing !== null && typeof thing === 'object';
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Rejects if the given promise doesn't resolve in timeInMS milliseconds.
 * @internal
 */


function promiseWithTimeout(promise, timeInMS = 2000) {
  const deferredPromise = new Deferred();
  setTimeout(() => deferredPromise.reject('timeout!'), timeInMS);
  promise.then(deferredPromise.resolve, deferredPromise.reject);
  return deferredPromise.promise;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */


function querystring(querystringParams) {
  const params = [];

  for (const [key, value] of Object.entries(querystringParams)) {
    if (Array.isArray(value)) {
      value.forEach(arrayVal => {
        params.push(encodeURIComponent(key) + '=' + encodeURIComponent(arrayVal));
      });
    } else {
      params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
    }
  }

  return params.length ? '&' + params.join('&') : '';
}
/**
 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
 * (e.g. {arg: 'val', arg2: 'val2'})
 */


function querystringDecode(querystring) {
  const obj = {};
  const tokens = querystring.replace(/^\?/, '').split('&');
  tokens.forEach(token => {
    if (token) {
      const [key, value] = token.split('=');
      obj[decodeURIComponent(key)] = decodeURIComponent(value);
    }
  });
  return obj;
}
/**
 * Extract the query string part of a URL, including the leading question mark (if present).
 */


function extractQuerystring(url) {
  const queryStart = url.indexOf('?');

  if (!queryStart) {
    return '';
  }

  const fragmentStart = url.indexOf('#', queryStart);
  return url.substring(queryStart, fragmentStart > 0 ? fragmentStart : undefined);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview SHA-1 cryptographic hash.
 * Variable names follow the notation in FIPS PUB 180-3:
 * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
 *
 * Usage:
 *   var sha1 = new sha1();
 *   sha1.update(bytes);
 *   var hash = sha1.digest();
 *
 * Performance:
 *   Chrome 23:   ~400 Mbit/s
 *   Firefox 16:  ~250 Mbit/s
 *
 */

/**
 * SHA-1 cryptographic hash constructor.
 *
 * The properties declared here are discussed in the above algorithm document.
 * @constructor
 * @final
 * @struct
 */


class Sha1 {
  constructor() {
    /**
     * Holds the previous values of accumulated variables a-e in the compress_
     * function.
     * @private
     */
    this.chain_ = [];
    /**
     * A buffer holding the partially computed hash result.
     * @private
     */

    this.buf_ = [];
    /**
     * An array of 80 bytes, each a part of the message to be hashed.  Referred to
     * as the message schedule in the docs.
     * @private
     */

    this.W_ = [];
    /**
     * Contains data needed to pad messages less than 64 bytes.
     * @private
     */

    this.pad_ = [];
    /**
     * @private {number}
     */

    this.inbuf_ = 0;
    /**
     * @private {number}
     */

    this.total_ = 0;
    this.blockSize = 512 / 8;
    this.pad_[0] = 128;

    for (let i = 1; i < this.blockSize; ++i) {
      this.pad_[i] = 0;
    }

    this.reset();
  }

  reset() {
    this.chain_[0] = 0x67452301;
    this.chain_[1] = 0xefcdab89;
    this.chain_[2] = 0x98badcfe;
    this.chain_[3] = 0x10325476;
    this.chain_[4] = 0xc3d2e1f0;
    this.inbuf_ = 0;
    this.total_ = 0;
  }
  /**
   * Internal compress helper function.
   * @param buf Block to compress.
   * @param offset Offset of the block in the buffer.
   * @private
   */


  compress_(buf, offset) {
    if (!offset) {
      offset = 0;
    }

    const W = this.W_; // get 16 big endian words

    if (typeof buf === 'string') {
      for (let i = 0; i < 16; i++) {
        // TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
        // have a bug that turns the post-increment ++ operator into pre-increment
        // during JIT compilation.  We have code that depends heavily on SHA-1 for
        // correctness and which is affected by this bug, so I've removed all uses
        // of post-increment ++ in which the result value is used.  We can revert
        // this change once the Safari bug
        // (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
        // most clients have been updated.
        W[i] = buf.charCodeAt(offset) << 24 | buf.charCodeAt(offset + 1) << 16 | buf.charCodeAt(offset + 2) << 8 | buf.charCodeAt(offset + 3);
        offset += 4;
      }
    } else {
      for (let i = 0; i < 16; i++) {
        W[i] = buf[offset] << 24 | buf[offset + 1] << 16 | buf[offset + 2] << 8 | buf[offset + 3];
        offset += 4;
      }
    } // expand to 80 words


    for (let i = 16; i < 80; i++) {
      const t = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
      W[i] = (t << 1 | t >>> 31) & 0xffffffff;
    }

    let a = this.chain_[0];
    let b = this.chain_[1];
    let c = this.chain_[2];
    let d = this.chain_[3];
    let e = this.chain_[4];
    let f, k; // TODO(user): Try to unroll this loop to speed up the computation.

    for (let i = 0; i < 80; i++) {
      if (i < 40) {
        if (i < 20) {
          f = d ^ b & (c ^ d);
          k = 0x5a827999;
        } else {
          f = b ^ c ^ d;
          k = 0x6ed9eba1;
        }
      } else {
        if (i < 60) {
          f = b & c | d & (b | c);
          k = 0x8f1bbcdc;
        } else {
          f = b ^ c ^ d;
          k = 0xca62c1d6;
        }
      }

      const t = (a << 5 | a >>> 27) + f + e + k + W[i] & 0xffffffff;
      e = d;
      d = c;
      c = (b << 30 | b >>> 2) & 0xffffffff;
      b = a;
      a = t;
    }

    this.chain_[0] = this.chain_[0] + a & 0xffffffff;
    this.chain_[1] = this.chain_[1] + b & 0xffffffff;
    this.chain_[2] = this.chain_[2] + c & 0xffffffff;
    this.chain_[3] = this.chain_[3] + d & 0xffffffff;
    this.chain_[4] = this.chain_[4] + e & 0xffffffff;
  }

  update(bytes, length) {
    // TODO(johnlenz): tighten the function signature and remove this check
    if (bytes == null) {
      return;
    }

    if (length === undefined) {
      length = bytes.length;
    }

    const lengthMinusBlock = length - this.blockSize;
    let n = 0; // Using local instead of member variables gives ~5% speedup on Firefox 16.

    const buf = this.buf_;
    let inbuf = this.inbuf_; // The outer while loop should execute at most twice.

    while (n < length) {
      // When we have no data in the block to top up, we can directly process the
      // input buffer (assuming it contains sufficient data). This gives ~25%
      // speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
      // the data is provided in large chunks (or in multiples of 64 bytes).
      if (inbuf === 0) {
        while (n <= lengthMinusBlock) {
          this.compress_(bytes, n);
          n += this.blockSize;
        }
      }

      if (typeof bytes === 'string') {
        while (n < length) {
          buf[inbuf] = bytes.charCodeAt(n);
          ++inbuf;
          ++n;

          if (inbuf === this.blockSize) {
            this.compress_(buf);
            inbuf = 0; // Jump to the outer loop so we use the full-block optimization.

            break;
          }
        }
      } else {
        while (n < length) {
          buf[inbuf] = bytes[n];
          ++inbuf;
          ++n;

          if (inbuf === this.blockSize) {
            this.compress_(buf);
            inbuf = 0; // Jump to the outer loop so we use the full-block optimization.

            break;
          }
        }
      }
    }

    this.inbuf_ = inbuf;
    this.total_ += length;
  }
  /** @override */


  digest() {
    const digest = [];
    let totalBits = this.total_ * 8; // Add pad 0x80 0x00*.

    if (this.inbuf_ < 56) {
      this.update(this.pad_, 56 - this.inbuf_);
    } else {
      this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
    } // Add # bits.


    for (let i = this.blockSize - 1; i >= 56; i--) {
      this.buf_[i] = totalBits & 255;
      totalBits /= 256; // Don't use bit-shifting here!
    }

    this.compress_(this.buf_);
    let n = 0;

    for (let i = 0; i < 5; i++) {
      for (let j = 24; j >= 0; j -= 8) {
        digest[n] = this.chain_[i] >> j & 255;
        ++n;
      }
    }

    return digest;
  }

}
/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */


function createSubscribe(executor, onNoObservers) {
  const proxy = new ObserverProxy(executor, onNoObservers);
  return proxy.subscribe.bind(proxy);
}
/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */


class ObserverProxy {
  /**
   * @param executor Function which can make calls to a single Observer
   *     as a proxy.
   * @param onNoObservers Callback when count of Observers goes to zero.
   */
  constructor(executor, onNoObservers) {
    this.observers = [];
    this.unsubscribes = [];
    this.observerCount = 0; // Micro-task scheduling by calling task.then().

    this.task = Promise.resolve();
    this.finalized = false;
    this.onNoObservers = onNoObservers; // Call the executor asynchronously so subscribers that are called
    // synchronously after the creation of the subscribe function
    // can still receive the very first value generated in the executor.

    this.task.then(() => {
      executor(this);
    }).catch(e => {
      this.error(e);
    });
  }

  next(value) {
    this.forEachObserver(observer => {
      observer.next(value);
    });
  }

  error(error) {
    this.forEachObserver(observer => {
      observer.error(error);
    });
    this.close(error);
  }

  complete() {
    this.forEachObserver(observer => {
      observer.complete();
    });
    this.close();
  }
  /**
   * Subscribe function that can be used to add an Observer to the fan-out list.
   *
   * - We require that no event is sent to a subscriber sychronously to their
   *   call to subscribe().
   */


  subscribe(nextOrObserver, error, complete) {
    let observer;

    if (nextOrObserver === undefined && error === undefined && complete === undefined) {
      throw new Error('Missing Observer.');
    } // Assemble an Observer object when passed as callback functions.


    if (implementsAnyMethods(nextOrObserver, ['next', 'error', 'complete'])) {
      observer = nextOrObserver;
    } else {
      observer = {
        next: nextOrObserver,
        error,
        complete
      };
    }

    if (observer.next === undefined) {
      observer.next = noop;
    }

    if (observer.error === undefined) {
      observer.error = noop;
    }

    if (observer.complete === undefined) {
      observer.complete = noop;
    }

    const unsub = this.unsubscribeOne.bind(this, this.observers.length); // Attempt to subscribe to a terminated Observable - we
    // just respond to the Observer with the final error or complete
    // event.

    if (this.finalized) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      this.task.then(() => {
        try {
          if (this.finalError) {
            observer.error(this.finalError);
          } else {
            observer.complete();
          }
        } catch (e) {// nothing
        }

        return;
      });
    }

    this.observers.push(observer);
    return unsub;
  } // Unsubscribe is synchronous - we guarantee that no events are sent to
  // any unsubscribed Observer.


  unsubscribeOne(i) {
    if (this.observers === undefined || this.observers[i] === undefined) {
      return;
    }

    delete this.observers[i];
    this.observerCount -= 1;

    if (this.observerCount === 0 && this.onNoObservers !== undefined) {
      this.onNoObservers(this);
    }
  }

  forEachObserver(fn) {
    if (this.finalized) {
      // Already closed by previous event....just eat the additional values.
      return;
    } // Since sendOne calls asynchronously - there is no chance that
    // this.observers will become undefined.


    for (let i = 0; i < this.observers.length; i++) {
      this.sendOne(i, fn);
    }
  } // Call the Observer via one of it's callback function. We are careful to
  // confirm that the observe has not been unsubscribed since this asynchronous
  // function had been queued.


  sendOne(i, fn) {
    // Execute the callback asynchronously
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.task.then(() => {
      if (this.observers !== undefined && this.observers[i] !== undefined) {
        try {
          fn(this.observers[i]);
        } catch (e) {
          // Ignore exceptions raised in Observers or missing methods of an
          // Observer.
          // Log error to console. b/31404806
          if (typeof console !== 'undefined' && console.error) {
            console.error(e);
          }
        }
      }
    });
  }

  close(err) {
    if (this.finalized) {
      return;
    }

    this.finalized = true;

    if (err !== undefined) {
      this.finalError = err;
    } // Proxy is no longer needed - garbage collect references
    // eslint-disable-next-line @typescript-eslint/no-floating-promises


    this.task.then(() => {
      this.observers = undefined;
      this.onNoObservers = undefined;
    });
  }

}
/** Turn synchronous function into one called asynchronously. */
// eslint-disable-next-line @typescript-eslint/ban-types


function async(fn, onError) {
  return (...args) => {
    Promise.resolve(true).then(() => {
      fn(...args);
    }).catch(error => {
      if (onError) {
        onError(error);
      }
    });
  };
}
/**
 * Return true if the object passed in implements any of the named methods.
 */


function implementsAnyMethods(obj, methods) {
  if (typeof obj !== 'object' || obj === null) {
    return false;
  }

  for (const method of methods) {
    if (method in obj && typeof obj[method] === 'function') {
      return true;
    }
  }

  return false;
}

function noop() {// do nothing
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Check to make sure the appropriate number of arguments are provided for a public function.
 * Throws an error if it fails.
 *
 * @param fnName The function name
 * @param minCount The minimum number of arguments to allow for the function call
 * @param maxCount The maximum number of argument to allow for the function call
 * @param argCount The actual number of arguments provided.
 */


const validateArgCount = function (fnName, minCount, maxCount, argCount) {
  let argError;

  if (argCount < minCount) {
    argError = 'at least ' + minCount;
  } else if (argCount > maxCount) {
    argError = maxCount === 0 ? 'none' : 'no more than ' + maxCount;
  }

  if (argError) {
    const error = fnName + ' failed: Was called with ' + argCount + (argCount === 1 ? ' argument.' : ' arguments.') + ' Expects ' + argError + '.';
    throw new Error(error);
  }
};
/**
 * Generates a string to prefix an error message about failed argument validation
 *
 * @param fnName The function name
 * @param argName The name of the argument
 * @return The prefix to add to the error thrown for validation.
 */


function errorPrefix(fnName, argName) {
  return `${fnName} failed: ${argName} argument `;
}
/**
 * @param fnName
 * @param argumentNumber
 * @param namespace
 * @param optional
 */


function validateNamespace(fnName, namespace, optional) {
  if (optional && !namespace) {
    return;
  }

  if (typeof namespace !== 'string') {
    //TODO: I should do more validation here. We only allow certain chars in namespaces.
    throw new Error(errorPrefix(fnName, 'namespace') + 'must be a valid firebase namespace.');
  }
}

function validateCallback(fnName, argumentName, // eslint-disable-next-line @typescript-eslint/ban-types
callback, optional) {
  if (optional && !callback) {
    return;
  }

  if (typeof callback !== 'function') {
    throw new Error(errorPrefix(fnName, argumentName) + 'must be a valid function.');
  }
}

function validateContextObject(fnName, argumentName, context, optional) {
  if (optional && !context) {
    return;
  }

  if (typeof context !== 'object' || context === null) {
    throw new Error(errorPrefix(fnName, argumentName) + 'must be a valid context object.');
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
// automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
// so it's been modified.
// Note that not all Unicode characters appear as single characters in JavaScript strings.
// fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
// use 2 characters in Javascript.  All 4-byte UTF-8 characters begin with a first
// character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
// pair).
// See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3

/**
 * @param {string} str
 * @return {Array}
 */


const stringToByteArray = function (str) {
  const out = [];
  let p = 0;

  for (let i = 0; i < str.length; i++) {
    let c = str.charCodeAt(i); // Is this the lead surrogate in a surrogate pair?

    if (c >= 0xd800 && c <= 0xdbff) {
      const high = c - 0xd800; // the high 10 bits.

      i++;
      assert(i < str.length, 'Surrogate pair missing trail surrogate.');
      const low = str.charCodeAt(i) - 0xdc00; // the low 10 bits.

      c = 0x10000 + (high << 10) + low;
    }

    if (c < 128) {
      out[p++] = c;
    } else if (c < 2048) {
      out[p++] = c >> 6 | 192;
      out[p++] = c & 63 | 128;
    } else if (c < 65536) {
      out[p++] = c >> 12 | 224;
      out[p++] = c >> 6 & 63 | 128;
      out[p++] = c & 63 | 128;
    } else {
      out[p++] = c >> 18 | 240;
      out[p++] = c >> 12 & 63 | 128;
      out[p++] = c >> 6 & 63 | 128;
      out[p++] = c & 63 | 128;
    }
  }

  return out;
};
/**
 * Calculate length without actually converting; useful for doing cheaper validation.
 * @param {string} str
 * @return {number}
 */


const stringLength = function (str) {
  let p = 0;

  for (let i = 0; i < str.length; i++) {
    const c = str.charCodeAt(i);

    if (c < 128) {
      p++;
    } else if (c < 2048) {
      p += 2;
    } else if (c >= 0xd800 && c <= 0xdbff) {
      // Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
      p += 4;
      i++; // skip trail surrogate.
    } else {
      p += 3;
    }
  }

  return p;
};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Copied from https://stackoverflow.com/a/2117523
 * Generates a new uuid.
 * @public
 */


const uuidv4 = function () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0,
          v = c === 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
};
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * The amount of milliseconds to exponentially increase.
 */


const DEFAULT_INTERVAL_MILLIS = 1000;
/**
 * The factor to backoff by.
 * Should be a number greater than 1.
 */

const DEFAULT_BACKOFF_FACTOR = 2;
/**
 * The maximum milliseconds to increase to.
 *
 * <p>Visible for testing
 */

const MAX_VALUE_MILLIS = 4 * 60 * 60 * 1000; // Four hours, like iOS and Android.

/**
 * The percentage of backoff time to randomize by.
 * See
 * http://go/safe-client-behavior#step-1-determine-the-appropriate-retry-interval-to-handle-spike-traffic
 * for context.
 *
 * <p>Visible for testing
 */

const RANDOM_FACTOR = 0.5;
/**
 * Based on the backoff method from
 * https://github.com/google/closure-library/blob/master/closure/goog/math/exponentialbackoff.js.
 * Extracted here so we don't need to pass metadata and a stateful ExponentialBackoff object around.
 */

function calculateBackoffMillis(backoffCount, intervalMillis = DEFAULT_INTERVAL_MILLIS, backoffFactor = DEFAULT_BACKOFF_FACTOR) {
  // Calculates an exponentially increasing value.
  // Deviation: calculates value from count and a constant interval, so we only need to save value
  // and count to restore state.
  const currBaseValue = intervalMillis * Math.pow(backoffFactor, backoffCount); // A random "fuzz" to avoid waves of retries.
  // Deviation: randomFactor is required.

  const randomWait = Math.round( // A fraction of the backoff value to add/subtract.
  // Deviation: changes multiplication order to improve readability.
  RANDOM_FACTOR * currBaseValue * ( // A random float (rounded to int by Math.round above) in the range [-1, 1]. Determines
  // if we add or subtract.
  Math.random() - 0.5) * 2); // Limits backoff to max to avoid effectively permanent backoff.

  return Math.min(MAX_VALUE_MILLIS, currBaseValue + randomWait);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Provide English ordinal letters after a number
 */


function ordinal(i) {
  if (!Number.isFinite(i)) {
    return `${i}`;
  }

  return i + indicator(i);
}

function indicator(i) {
  i = Math.abs(i);
  const cent = i % 100;

  if (cent >= 10 && cent <= 20) {
    return 'th';
  }

  const dec = i % 10;

  if (dec === 1) {
    return 'st';
  }

  if (dec === 2) {
    return 'nd';
  }

  if (dec === 3) {
    return 'rd';
  }

  return 'th';
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function getModularInstance(service) {
  if (service && service._delegate) {
    return service._delegate;
  } else {
    return service;
  }
}

exports.CONSTANTS = CONSTANTS;
exports.DecodeBase64StringError = DecodeBase64StringError;
exports.Deferred = Deferred;
exports.ErrorFactory = ErrorFactory;
exports.FirebaseError = FirebaseError;
exports.MAX_VALUE_MILLIS = MAX_VALUE_MILLIS;
exports.RANDOM_FACTOR = RANDOM_FACTOR;
exports.Sha1 = Sha1;
exports.areCookiesEnabled = areCookiesEnabled;
exports.assert = assert;
exports.assertionError = assertionError;
exports.async = async;
exports.base64 = base64;
exports.base64Decode = base64Decode;
exports.base64Encode = base64Encode;
exports.base64urlEncodeWithoutPadding = base64urlEncodeWithoutPadding;
exports.calculateBackoffMillis = calculateBackoffMillis;
exports.contains = contains;
exports.createMockUserToken = createMockUserToken;
exports.createSubscribe = createSubscribe;
exports.decode = decode;
exports.deepCopy = deepCopy;
exports.deepEqual = deepEqual;
exports.deepExtend = deepExtend;
exports.errorPrefix = errorPrefix;
exports.extractQuerystring = extractQuerystring;
exports.getDefaultAppConfig = getDefaultAppConfig;
exports.getDefaultEmulatorHost = getDefaultEmulatorHost;
exports.getDefaultEmulatorHostnameAndPort = getDefaultEmulatorHostnameAndPort;
exports.getDefaults = getDefaults;
exports.getExperimentalSetting = getExperimentalSetting;
exports.getGlobal = getGlobal;
exports.getModularInstance = getModularInstance;
exports.getUA = getUA;
exports.isAdmin = isAdmin;
exports.isBrowser = isBrowser;
exports.isBrowserExtension = isBrowserExtension;
exports.isElectron = isElectron;
exports.isEmpty = isEmpty;
exports.isIE = isIE;
exports.isIndexedDBAvailable = isIndexedDBAvailable;
exports.isMobileCordova = isMobileCordova;
exports.isNode = isNode;
exports.isNodeSdk = isNodeSdk;
exports.isReactNative = isReactNative;
exports.isSafari = isSafari;
exports.isUWP = isUWP;
exports.isValidFormat = isValidFormat;
exports.isValidTimestamp = isValidTimestamp;
exports.issuedAtTime = issuedAtTime;
exports.jsonEval = jsonEval;
exports.map = map;
exports.ordinal = ordinal;
exports.promiseWithTimeout = promiseWithTimeout;
exports.querystring = querystring;
exports.querystringDecode = querystringDecode;
exports.safeGet = safeGet;
exports.stringLength = stringLength;
exports.stringToByteArray = stringToByteArray;
exports.stringify = stringify;
exports.uuidv4 = uuidv4;
exports.validateArgCount = validateArgCount;
exports.validateCallback = validateCallback;
exports.validateContextObject = validateContextObject;
exports.validateIndexedDBOpenable = validateIndexedDBOpenable;
exports.validateNamespace = validateNamespace;

/***/ }),

/***/ 84502:
/*!*********************************************************!*\
  !*** ./node_modules/dialog-polyfill/dialog-polyfill.js ***!
  \*********************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;(function() {

  // nb. This is for IE10 and lower _only_.
  var supportCustomEvent = window.CustomEvent;
  if (!supportCustomEvent || typeof supportCustomEvent === 'object') {
    supportCustomEvent = function CustomEvent(event, x) {
      x = x || {};
      var ev = document.createEvent('CustomEvent');
      ev.initCustomEvent(event, !!x.bubbles, !!x.cancelable, x.detail || null);
      return ev;
    };
    supportCustomEvent.prototype = window.Event.prototype;
  }

  /**
   * @param {Element} el to check for stacking context
   * @return {boolean} whether this el or its parents creates a stacking context
   */
  function createsStackingContext(el) {
    while (el && el !== document.body) {
      var s = window.getComputedStyle(el);
      var invalid = function(k, ok) {
        return !(s[k] === undefined || s[k] === ok);
      }
      if (s.opacity < 1 ||
          invalid('zIndex', 'auto') ||
          invalid('transform', 'none') ||
          invalid('mixBlendMode', 'normal') ||
          invalid('filter', 'none') ||
          invalid('perspective', 'none') ||
          s['isolation'] === 'isolate' ||
          s.position === 'fixed' ||
          s.webkitOverflowScrolling === 'touch') {
        return true;
      }
      el = el.parentElement;
    }
    return false;
  }

  /**
   * Finds the nearest <dialog> from the passed element.
   *
   * @param {Element} el to search from
   * @return {HTMLDialogElement} dialog found
   */
  function findNearestDialog(el) {
    while (el) {
      if (el.localName === 'dialog') {
        return /** @type {HTMLDialogElement} */ (el);
      }
      el = el.parentElement;
    }
    return null;
  }

  /**
   * Blur the specified element, as long as it's not the HTML body element.
   * This works around an IE9/10 bug - blurring the body causes Windows to
   * blur the whole application.
   *
   * @param {Element} el to blur
   */
  function safeBlur(el) {
    if (el && el.blur && el !== document.body) {
      el.blur();
    }
  }

  /**
   * @param {!NodeList} nodeList to search
   * @param {Node} node to find
   * @return {boolean} whether node is inside nodeList
   */
  function inNodeList(nodeList, node) {
    for (var i = 0; i < nodeList.length; ++i) {
      if (nodeList[i] === node) {
        return true;
      }
    }
    return false;
  }

  /**
   * @param {HTMLFormElement} el to check
   * @return {boolean} whether this form has method="dialog"
   */
  function isFormMethodDialog(el) {
    if (!el || !el.hasAttribute('method')) {
      return false;
    }
    return el.getAttribute('method').toLowerCase() === 'dialog';
  }

  /**
   * @param {!HTMLDialogElement} dialog to upgrade
   * @constructor
   */
  function dialogPolyfillInfo(dialog) {
    this.dialog_ = dialog;
    this.replacedStyleTop_ = false;
    this.openAsModal_ = false;

    // Set a11y role. Browsers that support dialog implicitly know this already.
    if (!dialog.hasAttribute('role')) {
      dialog.setAttribute('role', 'dialog');
    }

    dialog.show = this.show.bind(this);
    dialog.showModal = this.showModal.bind(this);
    dialog.close = this.close.bind(this);

    if (!('returnValue' in dialog)) {
      dialog.returnValue = '';
    }

    if ('MutationObserver' in window) {
      var mo = new MutationObserver(this.maybeHideModal.bind(this));
      mo.observe(dialog, {attributes: true, attributeFilter: ['open']});
    } else {
      // IE10 and below support. Note that DOMNodeRemoved etc fire _before_ removal. They also
      // seem to fire even if the element was removed as part of a parent removal. Use the removed
      // events to force downgrade (useful if removed/immediately added).
      var removed = false;
      var cb = function() {
        removed ? this.downgradeModal() : this.maybeHideModal();
        removed = false;
      }.bind(this);
      var timeout;
      var delayModel = function(ev) {
        if (ev.target !== dialog) { return; }  // not for a child element
        var cand = 'DOMNodeRemoved';
        removed |= (ev.type.substr(0, cand.length) === cand);
        window.clearTimeout(timeout);
        timeout = window.setTimeout(cb, 0);
      };
      ['DOMAttrModified', 'DOMNodeRemoved', 'DOMNodeRemovedFromDocument'].forEach(function(name) {
        dialog.addEventListener(name, delayModel);
      });
    }
    // Note that the DOM is observed inside DialogManager while any dialog
    // is being displayed as a modal, to catch modal removal from the DOM.

    Object.defineProperty(dialog, 'open', {
      set: this.setOpen.bind(this),
      get: dialog.hasAttribute.bind(dialog, 'open')
    });

    this.backdrop_ = document.createElement('div');
    this.backdrop_.className = 'backdrop';
    this.backdrop_.addEventListener('click', this.backdropClick_.bind(this));
  }

  dialogPolyfillInfo.prototype = {

    get dialog() {
      return this.dialog_;
    },

    /**
     * Maybe remove this dialog from the modal top layer. This is called when
     * a modal dialog may no longer be tenable, e.g., when the dialog is no
     * longer open or is no longer part of the DOM.
     */
    maybeHideModal: function() {
      if (this.dialog_.hasAttribute('open') && document.body.contains(this.dialog_)) { return; }
      this.downgradeModal();
    },

    /**
     * Remove this dialog from the modal top layer, leaving it as a non-modal.
     */
    downgradeModal: function() {
      if (!this.openAsModal_) { return; }
      this.openAsModal_ = false;
      this.dialog_.style.zIndex = '';

      // This won't match the native <dialog> exactly because if the user set top on a centered
      // polyfill dialog, that top gets thrown away when the dialog is closed. Not sure it's
      // possible to polyfill this perfectly.
      if (this.replacedStyleTop_) {
        this.dialog_.style.top = '';
        this.replacedStyleTop_ = false;
      }

      // Clear the backdrop and remove from the manager.
      this.backdrop_.parentNode && this.backdrop_.parentNode.removeChild(this.backdrop_);
      dialogPolyfill.dm.removeDialog(this);
    },

    /**
     * @param {boolean} value whether to open or close this dialog
     */
    setOpen: function(value) {
      if (value) {
        this.dialog_.hasAttribute('open') || this.dialog_.setAttribute('open', '');
      } else {
        this.dialog_.removeAttribute('open');
        this.maybeHideModal();  // nb. redundant with MutationObserver
      }
    },

    /**
     * Handles clicks on the fake .backdrop element, redirecting them as if
     * they were on the dialog itself.
     *
     * @param {!Event} e to redirect
     */
    backdropClick_: function(e) {
      if (!this.dialog_.hasAttribute('tabindex')) {
        // Clicking on the backdrop should move the implicit cursor, even if dialog cannot be
        // focused. Create a fake thing to focus on. If the backdrop was _before_ the dialog, this
        // would not be needed - clicks would move the implicit cursor there.
        var fake = document.createElement('div');
        this.dialog_.insertBefore(fake, this.dialog_.firstChild);
        fake.tabIndex = -1;
        fake.focus();
        this.dialog_.removeChild(fake);
      } else {
        this.dialog_.focus();
      }

      var redirectedEvent = document.createEvent('MouseEvents');
      redirectedEvent.initMouseEvent(e.type, e.bubbles, e.cancelable, window,
          e.detail, e.screenX, e.screenY, e.clientX, e.clientY, e.ctrlKey,
          e.altKey, e.shiftKey, e.metaKey, e.button, e.relatedTarget);
      this.dialog_.dispatchEvent(redirectedEvent);
      e.stopPropagation();
    },

    /**
     * Focuses on the first focusable element within the dialog. This will always blur the current
     * focus, even if nothing within the dialog is found.
     */
    focus_: function() {
      // Find element with `autofocus` attribute, or fall back to the first form/tabindex control.
      var target = this.dialog_.querySelector('[autofocus]:not([disabled])');
      if (!target && this.dialog_.tabIndex >= 0) {
        target = this.dialog_;
      }
      if (!target) {
        // Note that this is 'any focusable area'. This list is probably not exhaustive, but the
        // alternative involves stepping through and trying to focus everything.
        var opts = ['button', 'input', 'keygen', 'select', 'textarea'];
        var query = opts.map(function(el) {
          return el + ':not([disabled])';
        });
        // TODO(samthor): tabindex values that are not numeric are not focusable.
        query.push('[tabindex]:not([disabled]):not([tabindex=""])');  // tabindex != "", not disabled
        target = this.dialog_.querySelector(query.join(', '));
      }
      safeBlur(document.activeElement);
      target && target.focus();
    },

    /**
     * Sets the zIndex for the backdrop and dialog.
     *
     * @param {number} dialogZ
     * @param {number} backdropZ
     */
    updateZIndex: function(dialogZ, backdropZ) {
      if (dialogZ < backdropZ) {
        throw new Error('dialogZ should never be < backdropZ');
      }
      this.dialog_.style.zIndex = dialogZ;
      this.backdrop_.style.zIndex = backdropZ;
    },

    /**
     * Shows the dialog. If the dialog is already open, this does nothing.
     */
    show: function() {
      if (!this.dialog_.open) {
        this.setOpen(true);
        this.focus_();
      }
    },

    /**
     * Show this dialog modally.
     */
    showModal: function() {
      if (this.dialog_.hasAttribute('open')) {
        throw new Error('Failed to execute \'showModal\' on dialog: The element is already open, and therefore cannot be opened modally.');
      }
      if (!document.body.contains(this.dialog_)) {
        throw new Error('Failed to execute \'showModal\' on dialog: The element is not in a Document.');
      }
      if (!dialogPolyfill.dm.pushDialog(this)) {
        throw new Error('Failed to execute \'showModal\' on dialog: There are too many open modal dialogs.');
      }

      if (createsStackingContext(this.dialog_.parentElement)) {
        console.warn('A dialog is being shown inside a stacking context. ' +
            'This may cause it to be unusable. For more information, see this link: ' +
            'https://github.com/GoogleChrome/dialog-polyfill/#stacking-context');
      }

      this.setOpen(true);
      this.openAsModal_ = true;

      // Optionally center vertically, relative to the current viewport.
      if (dialogPolyfill.needsCentering(this.dialog_)) {
        dialogPolyfill.reposition(this.dialog_);
        this.replacedStyleTop_ = true;
      } else {
        this.replacedStyleTop_ = false;
      }

      // Insert backdrop.
      this.dialog_.parentNode.insertBefore(this.backdrop_, this.dialog_.nextSibling);

      // Focus on whatever inside the dialog.
      this.focus_();
    },

    /**
     * Closes this HTMLDialogElement. This is optional vs clearing the open
     * attribute, however this fires a 'close' event.
     *
     * @param {string=} opt_returnValue to use as the returnValue
     */
    close: function(opt_returnValue) {
      if (!this.dialog_.hasAttribute('open')) {
        throw new Error('Failed to execute \'close\' on dialog: The element does not have an \'open\' attribute, and therefore cannot be closed.');
      }
      this.setOpen(false);

      // Leave returnValue untouched in case it was set directly on the element
      if (opt_returnValue !== undefined) {
        this.dialog_.returnValue = opt_returnValue;
      }

      // Triggering "close" event for any attached listeners on the <dialog>.
      var closeEvent = new supportCustomEvent('close', {
        bubbles: false,
        cancelable: false
      });
      this.dialog_.dispatchEvent(closeEvent);
    }

  };

  var dialogPolyfill = {};

  dialogPolyfill.reposition = function(element) {
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    var topValue = scrollTop + (window.innerHeight - element.offsetHeight) / 2;
    element.style.top = Math.max(scrollTop, topValue) + 'px';
  };

  dialogPolyfill.isInlinePositionSetByStylesheet = function(element) {
    for (var i = 0; i < document.styleSheets.length; ++i) {
      var styleSheet = document.styleSheets[i];
      var cssRules = null;
      // Some browsers throw on cssRules.
      try {
        cssRules = styleSheet.cssRules;
      } catch (e) {}
      if (!cssRules) { continue; }
      for (var j = 0; j < cssRules.length; ++j) {
        var rule = cssRules[j];
        var selectedNodes = null;
        // Ignore errors on invalid selector texts.
        try {
          selectedNodes = document.querySelectorAll(rule.selectorText);
        } catch(e) {}
        if (!selectedNodes || !inNodeList(selectedNodes, element)) {
          continue;
        }
        var cssTop = rule.style.getPropertyValue('top');
        var cssBottom = rule.style.getPropertyValue('bottom');
        if ((cssTop && cssTop !== 'auto') || (cssBottom && cssBottom !== 'auto')) {
          return true;
        }
      }
    }
    return false;
  };

  dialogPolyfill.needsCentering = function(dialog) {
    var computedStyle = window.getComputedStyle(dialog);
    if (computedStyle.position !== 'absolute') {
      return false;
    }

    // We must determine whether the top/bottom specified value is non-auto.  In
    // WebKit/Blink, checking computedStyle.top == 'auto' is sufficient, but
    // Firefox returns the used value. So we do this crazy thing instead: check
    // the inline style and then go through CSS rules.
    if ((dialog.style.top !== 'auto' && dialog.style.top !== '') ||
        (dialog.style.bottom !== 'auto' && dialog.style.bottom !== '')) {
      return false;
    }
    return !dialogPolyfill.isInlinePositionSetByStylesheet(dialog);
  };

  /**
   * @param {!Element} element to force upgrade
   */
  dialogPolyfill.forceRegisterDialog = function(element) {
    if (window.HTMLDialogElement || element.showModal) {
      console.warn('This browser already supports <dialog>, the polyfill ' +
          'may not work correctly', element);
    }
    if (element.localName !== 'dialog') {
      throw new Error('Failed to register dialog: The element is not a dialog.');
    }
    new dialogPolyfillInfo(/** @type {!HTMLDialogElement} */ (element));
  };

  /**
   * @param {!Element} element to upgrade, if necessary
   */
  dialogPolyfill.registerDialog = function(element) {
    if (!element.showModal) {
      dialogPolyfill.forceRegisterDialog(element);
    }
  };

  /**
   * @constructor
   */
  dialogPolyfill.DialogManager = function() {
    /** @type {!Array<!dialogPolyfillInfo>} */
    this.pendingDialogStack = [];

    var checkDOM = this.checkDOM_.bind(this);

    // The overlay is used to simulate how a modal dialog blocks the document.
    // The blocking dialog is positioned on top of the overlay, and the rest of
    // the dialogs on the pending dialog stack are positioned below it. In the
    // actual implementation, the modal dialog stacking is controlled by the
    // top layer, where z-index has no effect.
    this.overlay = document.createElement('div');
    this.overlay.className = '_dialog_overlay';
    this.overlay.addEventListener('click', function(e) {
      this.forwardTab_ = undefined;
      e.stopPropagation();
      checkDOM([]);  // sanity-check DOM
    }.bind(this));

    this.handleKey_ = this.handleKey_.bind(this);
    this.handleFocus_ = this.handleFocus_.bind(this);

    this.zIndexLow_ = 100000;
    this.zIndexHigh_ = 100000 + 150;

    this.forwardTab_ = undefined;

    if ('MutationObserver' in window) {
      this.mo_ = new MutationObserver(function(records) {
        var removed = [];
        records.forEach(function(rec) {
          for (var i = 0, c; c = rec.removedNodes[i]; ++i) {
            if (!(c instanceof Element)) {
              continue;
            } else if (c.localName === 'dialog') {
              removed.push(c);
            }
            removed = removed.concat(c.querySelectorAll('dialog'));
          }
        });
        removed.length && checkDOM(removed);
      });
    }
  };

  /**
   * Called on the first modal dialog being shown. Adds the overlay and related
   * handlers.
   */
  dialogPolyfill.DialogManager.prototype.blockDocument = function() {
    document.documentElement.addEventListener('focus', this.handleFocus_, true);
    document.addEventListener('keydown', this.handleKey_);
    this.mo_ && this.mo_.observe(document, {childList: true, subtree: true});
  };

  /**
   * Called on the first modal dialog being removed, i.e., when no more modal
   * dialogs are visible.
   */
  dialogPolyfill.DialogManager.prototype.unblockDocument = function() {
    document.documentElement.removeEventListener('focus', this.handleFocus_, true);
    document.removeEventListener('keydown', this.handleKey_);
    this.mo_ && this.mo_.disconnect();
  };

  /**
   * Updates the stacking of all known dialogs.
   */
  dialogPolyfill.DialogManager.prototype.updateStacking = function() {
    var zIndex = this.zIndexHigh_;

    for (var i = 0, dpi; dpi = this.pendingDialogStack[i]; ++i) {
      dpi.updateZIndex(--zIndex, --zIndex);
      if (i === 0) {
        this.overlay.style.zIndex = --zIndex;
      }
    }

    // Make the overlay a sibling of the dialog itself.
    var last = this.pendingDialogStack[0];
    if (last) {
      var p = last.dialog.parentNode || document.body;
      p.appendChild(this.overlay);
    } else if (this.overlay.parentNode) {
      this.overlay.parentNode.removeChild(this.overlay);
    }
  };

  /**
   * @param {Element} candidate to check if contained or is the top-most modal dialog
   * @return {boolean} whether candidate is contained in top dialog
   */
  dialogPolyfill.DialogManager.prototype.containedByTopDialog_ = function(candidate) {
    while (candidate = findNearestDialog(candidate)) {
      for (var i = 0, dpi; dpi = this.pendingDialogStack[i]; ++i) {
        if (dpi.dialog === candidate) {
          return i === 0;  // only valid if top-most
        }
      }
      candidate = candidate.parentElement;
    }
    return false;
  };

  dialogPolyfill.DialogManager.prototype.handleFocus_ = function(event) {
    if (this.containedByTopDialog_(event.target)) { return; }

    event.preventDefault();
    event.stopPropagation();
    safeBlur(/** @type {Element} */ (event.target));

    if (this.forwardTab_ === undefined) { return; }  // move focus only from a tab key

    var dpi = this.pendingDialogStack[0];
    var dialog = dpi.dialog;
    var position = dialog.compareDocumentPosition(event.target);
    if (position & Node.DOCUMENT_POSITION_PRECEDING) {
      if (this.forwardTab_) {  // forward
        dpi.focus_();
      } else {  // backwards
        document.documentElement.focus();
      }
    } else {
      // TODO: Focus after the dialog, is ignored.
    }

    return false;
  };

  dialogPolyfill.DialogManager.prototype.handleKey_ = function(event) {
    this.forwardTab_ = undefined;
    if (event.keyCode === 27) {
      event.preventDefault();
      event.stopPropagation();
      var cancelEvent = new supportCustomEvent('cancel', {
        bubbles: false,
        cancelable: true
      });
      var dpi = this.pendingDialogStack[0];
      if (dpi && dpi.dialog.dispatchEvent(cancelEvent)) {
        dpi.dialog.close();
      }
    } else if (event.keyCode === 9) {
      this.forwardTab_ = !event.shiftKey;
    }
  };

  /**
   * Finds and downgrades any known modal dialogs that are no longer displayed. Dialogs that are
   * removed and immediately readded don't stay modal, they become normal.
   *
   * @param {!Array<!HTMLDialogElement>} removed that have definitely been removed
   */
  dialogPolyfill.DialogManager.prototype.checkDOM_ = function(removed) {
    // This operates on a clone because it may cause it to change. Each change also calls
    // updateStacking, which only actually needs to happen once. But who removes many modal dialogs
    // at a time?!
    var clone = this.pendingDialogStack.slice();
    clone.forEach(function(dpi) {
      if (removed.indexOf(dpi.dialog) !== -1) {
        dpi.downgradeModal();
      } else {
        dpi.maybeHideModal();
      }
    });
  };

  /**
   * @param {!dialogPolyfillInfo} dpi
   * @return {boolean} whether the dialog was allowed
   */
  dialogPolyfill.DialogManager.prototype.pushDialog = function(dpi) {
    var allowed = (this.zIndexHigh_ - this.zIndexLow_) / 2 - 1;
    if (this.pendingDialogStack.length >= allowed) {
      return false;
    }
    if (this.pendingDialogStack.unshift(dpi) === 1) {
      this.blockDocument();
    }
    this.updateStacking();
    return true;
  };

  /**
   * @param {!dialogPolyfillInfo} dpi
   */
  dialogPolyfill.DialogManager.prototype.removeDialog = function(dpi) {
    var index = this.pendingDialogStack.indexOf(dpi);
    if (index === -1) { return; }

    this.pendingDialogStack.splice(index, 1);
    if (this.pendingDialogStack.length === 0) {
      this.unblockDocument();
    }
    this.updateStacking();
  };

  dialogPolyfill.dm = new dialogPolyfill.DialogManager();
  dialogPolyfill.formSubmitter = null;
  dialogPolyfill.useValue = null;

  /**
   * Installs global handlers, such as click listers and native method overrides. These are needed
   * even if a no dialog is registered, as they deal with <form method="dialog">.
   */
  if (window.HTMLDialogElement === undefined) {

    /**
     * If HTMLFormElement translates method="DIALOG" into 'get', then replace the descriptor with
     * one that returns the correct value.
     */
    var testForm = document.createElement('form');
    testForm.setAttribute('method', 'dialog');
    if (testForm.method !== 'dialog') {
      var methodDescriptor = Object.getOwnPropertyDescriptor(HTMLFormElement.prototype, 'method');
      if (methodDescriptor) {
        // nb. Some older iOS and older PhantomJS fail to return the descriptor. Don't do anything
        // and don't bother to update the element.
        var realGet = methodDescriptor.get;
        methodDescriptor.get = function() {
          if (isFormMethodDialog(this)) {
            return 'dialog';
          }
          return realGet.call(this);
        };
        var realSet = methodDescriptor.set;
        methodDescriptor.set = function(v) {
          if (typeof v === 'string' && v.toLowerCase() === 'dialog') {
            return this.setAttribute('method', v);
          }
          return realSet.call(this, v);
        };
        Object.defineProperty(HTMLFormElement.prototype, 'method', methodDescriptor);
      }
    }

    /**
     * Global 'click' handler, to capture the <input type="submit"> or <button> element which has
     * submitted a <form method="dialog">. Needed as Safari and others don't report this inside
     * document.activeElement.
     */
    document.addEventListener('click', function(ev) {
      dialogPolyfill.formSubmitter = null;
      dialogPolyfill.useValue = null;
      if (ev.defaultPrevented) { return; }  // e.g. a submit which prevents default submission

      var target = /** @type {Element} */ (ev.target);
      if (!target || !isFormMethodDialog(target.form)) { return; }

      var valid = (target.type === 'submit' && ['button', 'input'].indexOf(target.localName) > -1);
      if (!valid) {
        if (!(target.localName === 'input' && target.type === 'image')) { return; }
        // this is a <input type="image">, which can submit forms
        dialogPolyfill.useValue = ev.offsetX + ',' + ev.offsetY;
      }

      var dialog = findNearestDialog(target);
      if (!dialog) { return; }

      dialogPolyfill.formSubmitter = target;
    }, false);

    /**
     * Replace the native HTMLFormElement.submit() method, as it won't fire the
     * submit event and give us a chance to respond.
     */
    var nativeFormSubmit = HTMLFormElement.prototype.submit;
    var replacementFormSubmit = function () {
      if (!isFormMethodDialog(this)) {
        return nativeFormSubmit.call(this);
      }
      var dialog = findNearestDialog(this);
      dialog && dialog.close();
    };
    HTMLFormElement.prototype.submit = replacementFormSubmit;

    /**
     * Global form 'dialog' method handler. Closes a dialog correctly on submit
     * and possibly sets its return value.
     */
    document.addEventListener('submit', function(ev) {
      var form = /** @type {HTMLFormElement} */ (ev.target);
      if (!isFormMethodDialog(form)) { return; }
      ev.preventDefault();

      var dialog = findNearestDialog(form);
      if (!dialog) { return; }

      // Forms can only be submitted via .submit() or a click (?), but anyway: sanity-check that
      // the submitter is correct before using its value as .returnValue.
      var s = dialogPolyfill.formSubmitter;
      if (s && s.form === form) {
        dialog.close(dialogPolyfill.useValue || s.value);
      } else {
        dialog.close();
      }
      dialogPolyfill.formSubmitter = null;
    }, true);
  }

  dialogPolyfill['forceRegisterDialog'] = dialogPolyfill.forceRegisterDialog;
  dialogPolyfill['registerDialog'] = dialogPolyfill.registerDialog;

  if ( true && 'amd' in __webpack_require__.amdD) {
    // AMD support
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return dialogPolyfill; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( true && typeof module['exports'] === 'object') {
    // CommonJS support
    module['exports'] = dialogPolyfill;
  } else {
    // all others
    window['dialogPolyfill'] = dialogPolyfill;
  }
})();


/***/ }),

/***/ 27694:
/*!*****************************************************!*\
  !*** ./node_modules/firebase/app/dist/index.cjs.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var app = __webpack_require__(/*! @firebase/app */ 28516);

var name = "firebase";
var version = "10.2.0";

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
app.registerVersion(name, version, 'app');

Object.keys(app).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return app[k]; }
  });
});


/***/ }),

/***/ 69502:
/*!*********************************************!*\
  !*** ./node_modules/firebaseui/dist/esm.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "auth": () => (/* binding */ auth)
/* harmony export */ });
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/app */ 50674);
/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/auth */ 39450);
/* harmony import */ var dialog_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dialog-polyfill */ 84502);
/* harmony import */ var dialog_polyfill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dialog_polyfill__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var material_design_lite_src_mdlComponentHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-design-lite/src/mdlComponentHandler */ 94563);
/* harmony import */ var material_design_lite_src_mdlComponentHandler__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_design_lite_src_mdlComponentHandler__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var material_design_lite_src_button_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-design-lite/src/button/button */ 20946);
/* harmony import */ var material_design_lite_src_button_button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_design_lite_src_button_button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var material_design_lite_src_progress_progress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! material-design-lite/src/progress/progress */ 60707);
/* harmony import */ var material_design_lite_src_progress_progress__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(material_design_lite_src_progress_progress__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var material_design_lite_src_spinner_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! material-design-lite/src/spinner/spinner */ 97906);
/* harmony import */ var material_design_lite_src_spinner_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(material_design_lite_src_spinner_spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var material_design_lite_src_textfield_textfield__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! material-design-lite/src/textfield/textfield */ 87578);
/* harmony import */ var material_design_lite_src_textfield_textfield__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(material_design_lite_src_textfield_textfield__WEBPACK_IMPORTED_MODULE_7__);
(function() {(function(){var l,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},ba;if("function"==typeof Object.setPrototypeOf)ba=Object.setPrototypeOf;else{var ca;a:{var da={xb:!0},ea={};try{ea.__proto__=da;ca=ea.xb;break a}catch(a){}ca=!1}ba=ca?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var fa=ba;function m(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(fa)fa(a,b);else for(var c in b)if("prototype"!=
c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.K=b.prototype}var ha="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ia="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function ja(a,b){if(b){var c=ia;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-
1];d=c[a];b=b(d);b!=d&&null!=b&&ha(c,a,{configurable:!0,writable:!0,value:b})}}ja("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});ja("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});var n=this;function ka(a){return void 0!==a}function q(a){return"string"==typeof a}var la=/^[\w+/_-]+[=]{0,2}$/,
ma=null;function na(){}function oa(a){a.W=void 0;a.Xa=function(){return a.W?a.W:a.W=new a}}function pa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=
typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function qa(a){return"array"==pa(a)}function ra(a){var b=pa(a);return"array"==b||"object"==b&&"number"==typeof a.length}function sa(a){return"function"==pa(a)}function ta(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}var ua="closure_uid_"+(1E9*Math.random()>>>0),va=0;function wa(a,b,c){return a.call.apply(a.bind,
arguments)}function xa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}function r(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?r=wa:r=xa;return r.apply(null,arguments)}function za(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=
c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}function u(a,b){for(var c in b)a[c]=b[c]}var Aa=Date.now||function(){return+new Date};function v(a,b){a=a.split(".");var c=n;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&ka(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}}function w(a,b){function c(){}c.prototype=b.prototype;a.K=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.vc=function(d,e,f){for(var g=
Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}function Ba(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ba);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}w(Ba,Error);Ba.prototype.name="CustomError";var Da;function Ea(a,b){a=a.split("%s");for(var c="",d=a.length-1,e=0;e<d;e++)c+=a[e]+(e<b.length?b[e]:"%s");Ba.call(this,c+a[d])}w(Ea,Ba);Ea.prototype.name="AssertionError";function Fa(a,b){throw new Ea("Failure"+
(a?": "+a:""),Array.prototype.slice.call(arguments,1));}var Ga=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(q(a))return q(b)&&1==b.length?a.indexOf(b,0):-1;for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Ha=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};function Ia(a,b){for(var c=q(a)?a.split(""):
a,d=a.length-1;0<=d;--d)d in c&&b.call(void 0,c[d],d,a)}var Ja=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=q(a)?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Ka=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=q(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));return d},La=Array.prototype.some?
function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=q(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;return!1};function Ma(a,b){return 0<=Ga(a,b)}function Na(a,b){b=Ga(a,b);var c;(c=0<=b)&&Oa(a,b);return c}function Oa(a,b){return 1==Array.prototype.splice.call(a,b,1).length}function Pa(a,b){a:{for(var c=a.length,d=q(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}0<=b&&Oa(a,b)}function Qa(a,b){var c=
0;Ia(a,function(d,e){b.call(void 0,d,e,a)&&Oa(a,e)&&c++})}function Ra(a){return Array.prototype.concat.apply([],arguments)}function Sa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}function Ta(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}var Ua=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},Va=/&/g,Wa=/</g,Xa=/>/g,Ya=/"/g,Za=/'/g,$a=/\x00/g,
ab=/[\x00&<>"']/;function bb(a,b){return a<b?-1:a>b?1:0}function cb(a){ab.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(Va,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(Wa,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(Xa,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(Ya,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(Za,"&#39;")),-1!=a.indexOf("\x00")&&(a=a.replace($a,"&#0;")));return a}function db(a,b,c){for(var d in a)b.call(c,a[d],d,a)}function eb(a){var b={},c;for(c in a)b[c]=a[c];return b}var fb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function gb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<fb.length;f++)c=fb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}var hb="StopIteration"in n?n.StopIteration:{message:"StopIteration",stack:""};function ib(){}ib.prototype.next=function(){throw hb;};ib.prototype.ha=function(){return this};function jb(a){if(a instanceof ib)return a;if("function"==typeof a.ha)return a.ha(!1);if(ra(a)){var b=0,c=new ib;c.next=function(){for(;;){if(b>=
a.length)throw hb;if(b in a)return a[b++];b++}};return c}throw Error("Not implemented");}function kb(a,b){if(ra(a))try{Ha(a,b,void 0)}catch(c){if(c!==hb)throw c;}else{a=jb(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c$0){if(c$0!==hb)throw c$0;}}}function lb(a){if(ra(a))return Sa(a);a=jb(a);var b=[];kb(a,function(c){b.push(c)});return b}function mb(a,b){this.g={};this.a=[];this.j=this.h=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],
arguments[d+1])}else if(a)if(a instanceof mb)for(c=a.ja(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}l=mb.prototype;l.la=function(){nb(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.g[this.a[b]]);return a};l.ja=function(){nb(this);return this.a.concat()};l.clear=function(){this.g={};this.j=this.h=this.a.length=0};function nb(a){if(a.h!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];ob(a.g,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.h!=a.a.length){var e=
{};for(c=b=0;b<a.a.length;)d=a.a[b],ob(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}}l.get=function(a,b){return ob(this.g,a)?this.g[a]:b};l.set=function(a,b){ob(this.g,a)||(this.h++,this.a.push(a),this.j++);this.g[a]=b};l.forEach=function(a,b){for(var c=this.ja(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};l.ha=function(a){nb(this);var b=0,c=this.j,d=this,e=new ib;e.next=function(){if(c!=d.j)throw Error("The map has changed since the iterator was created");if(b>=d.a.length)throw hb;
var f=d.a[b++];return a?f:d.g[f]};return e};function ob(a,b){return Object.prototype.hasOwnProperty.call(a,b)}var pb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function qb(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(0<=d){var f=a[c].substring(0,d);e=a[c].substring(d+1)}else f=a[c];b(f,e?decodeURIComponent(e.replace(/\+/g," ")):"")}}}function rb(a,b,c,d){for(var e=c.length;0<=(b=
a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}var sb=/#|$/;function tb(a,b){var c=a.search(sb),d=rb(a,0,b,c);if(0>d)return null;var e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.substr(d,e-d).replace(/\+/g," "))}var ub=/[?&]($|#)/;function vb(a,b){this.h=this.A=this.j="";this.C=null;this.s=this.g="";this.i=!1;var c;a instanceof vb?(this.i=ka(b)?b:a.i,wb(this,a.j),this.A=a.A,this.h=
a.h,xb(this,a.C),this.g=a.g,yb(this,zb(a.a)),this.s=a.s):a&&(c=String(a).match(pb))?(this.i=!!b,wb(this,c[1]||"",!0),this.A=Ab(c[2]||""),this.h=Ab(c[3]||"",!0),xb(this,c[4]),this.g=Ab(c[5]||"",!0),yb(this,c[6]||"",!0),this.s=Ab(c[7]||"")):(this.i=!!b,this.a=new Bb(null,this.i))}vb.prototype.toString=function(){var a=[],b=this.j;b&&a.push(Cb(b,Db,!0),":");var c=this.h;if(c||"file"==b)a.push("//"),(b=this.A)&&a.push(Cb(b,Db,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,
"%$1")),c=this.C,null!=c&&a.push(":",String(c));if(c=this.g)this.h&&"/"!=c.charAt(0)&&a.push("/"),a.push(Cb(c,"/"==c.charAt(0)?Eb:Fb,!0));(c=this.a.toString())&&a.push("?",c);(c=this.s)&&a.push("#",Cb(c,Gb));return a.join("")};function wb(a,b,c){a.j=c?Ab(b,!0):b;a.j&&(a.j=a.j.replace(/:$/,""))}function xb(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.C=b}else a.C=null}function yb(a,b,c){b instanceof Bb?(a.a=b,Hb(a.a,a.i)):(c||(b=Cb(b,Ib)),a.a=new Bb(b,a.i))}function Jb(a){return a instanceof
vb?new vb(a):new vb(a,void 0)}function Ab(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Cb(a,b,c){return q(a)?(a=encodeURI(a).replace(b,Kb),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Kb(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Db=/[#\/\?@]/g,Fb=/[#\?:]/g,Eb=/[#\?]/g,Ib=/[#\?@]/g,Gb=/#/g;function Bb(a,b){this.g=this.a=null;this.h=a||null;this.j=!!b}function Lb(a){a.a||(a.a=new mb,a.g=0,a.h&&qb(a.h,function(b,
c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)}))}l=Bb.prototype;l.add=function(a,b){Lb(this);this.h=null;a=Mb(this,a);var c=this.a.get(a);c||this.a.set(a,c=[]);c.push(b);this.g+=1;return this};function Nb(a,b){Lb(a);b=Mb(a,b);ob(a.a.g,b)&&(a.h=null,a.g-=a.a.get(b).length,a=a.a,ob(a.g,b)&&(delete a.g[b],a.h--,a.j++,a.a.length>2*a.h&&nb(a)))}l.clear=function(){this.a=this.h=null;this.g=0};function Ob(a,b){Lb(a);b=Mb(a,b);return ob(a.a.g,b)}l.forEach=function(a,b){Lb(this);this.a.forEach(function(c,
d){Ha(c,function(e){a.call(b,e,d,this)},this)},this)};l.ja=function(){Lb(this);for(var a=this.a.la(),b=this.a.ja(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};l.la=function(a){Lb(this);var b=[];if(q(a))Ob(this,a)&&(b=Ra(b,this.a.get(Mb(this,a))));else{a=this.a.la();for(var c=0;c<a.length;c++)b=Ra(b,a[c])}return b};l.set=function(a,b){Lb(this);this.h=null;a=Mb(this,a);Ob(this,a)&&(this.g-=this.a.get(a).length);this.a.set(a,[b]);this.g+=1;return this};l.get=function(a,
b){if(!a)return b;a=this.la(a);return 0<a.length?String(a[0]):b};l.toString=function(){if(this.h)return this.h;if(!this.a)return"";for(var a=[],b=this.a.ja(),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.la(d);for(var f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}}return this.h=a.join("&")};function zb(a){var b=new Bb;b.h=a.h;a.a&&(b.a=new mb(a.a),b.g=a.g);return b}function Mb(a,b){b=String(b);a.j&&(b=b.toLowerCase());return b}function Hb(a,
b){b&&!a.j&&(Lb(a),a.h=null,a.a.forEach(function(c,d){var e=d.toLowerCase();d!=e&&(Nb(this,d),Nb(this,e),0<c.length&&(this.h=null,this.a.set(Mb(this,e),Sa(c)),this.g+=c.length))},a));a.j=b}function Pb(a){this.a=Jb(a)}function Qb(a,b){b?a.a.a.set(x.Sa,b):Nb(a.a.a,x.Sa)}function Rb(a,b){null!==b?a.a.a.set(x.Qa,b?"1":"0"):Nb(a.a.a,x.Qa)}function Sb(a){return a.a.a.get(x.Pa)||null}function Tb(a,b){b?a.a.a.set(x.PROVIDER_ID,b):Nb(a.a.a,x.PROVIDER_ID)}Pb.prototype.toString=function(){return this.a.toString()};
var x={Pa:"ui_auid",lc:"apiKey",Qa:"ui_sd",ub:"mode",$a:"oobCode",PROVIDER_ID:"ui_pid",Sa:"ui_sid",vb:"tenantId"};var Ub;a:{var Vb=n.navigator;if(Vb){var Wb=Vb.userAgent;if(Wb){Ub=Wb;break a}}Ub=""}function y(a){return-1!=Ub.indexOf(a)}function Xb(){return(y("Chrome")||y("CriOS"))&&!y("Edge")}function Yb(a){Yb[" "](a);return a}Yb[" "]=na;function Zb(a,b){var c=$b;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}var ac=y("Opera"),z=y("Trident")||y("MSIE"),bc=y("Edge"),cc=bc||z,dc=y("Gecko")&&
!(-1!=Ub.toLowerCase().indexOf("webkit")&&!y("Edge"))&&!(y("Trident")||y("MSIE"))&&!y("Edge"),ec=-1!=Ub.toLowerCase().indexOf("webkit")&&!y("Edge"),fc=ec&&y("Mobile"),gc=y("Macintosh");function hc(){var a=n.document;return a?a.documentMode:void 0}var ic;a:{var jc="",kc=function(){var a=Ub;if(dc)return/rv:([^\);]+)(\)|;)/.exec(a);if(bc)return/Edge\/([\d\.]+)/.exec(a);if(z)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ec)return/WebKit\/(\S+)/.exec(a);if(ac)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
kc&&(jc=kc?kc[1]:"");if(z){var lc=hc();if(null!=lc&&lc>parseFloat(jc)){ic=String(lc);break a}}ic=jc}var $b={};function mc(a){return Zb(a,function(){for(var b=0,c=Ua(String(ic)).split("."),d=Ua(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=bb(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||bb(0==g[2].length,
0==h[2].length)||bb(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})}var nc;var oc=n.document;nc=oc&&z?hc()||("CSS1Compat"==oc.compatMode?parseInt(ic,10):5):void 0;function pc(a,b){this.a=a===qc&&b||"";this.g=rc}pc.prototype.ma=!0;pc.prototype.ka=function(){return this.a};pc.prototype.toString=function(){return"Const{"+this.a+"}"};var rc={},qc={};function sc(){this.a="";this.h=tc}sc.prototype.ma=!0;sc.prototype.ka=function(){return this.a.toString()};sc.prototype.g=function(){return 1};sc.prototype.toString=
function(){return"TrustedResourceUrl{"+this.a+"}"};function uc(a){if(a instanceof sc&&a.constructor===sc&&a.h===tc)return a.a;Fa("expected object of type TrustedResourceUrl, got '"+a+"' of type "+pa(a));return"type_error:TrustedResourceUrl"}function vc(){var a=wc;a instanceof pc&&a.constructor===pc&&a.g===rc?a=a.a:(Fa("expected object of type Const, got '"+a+"'"),a="type_error:Const");var b=new sc;b.a=a;return b}var tc={};function xc(){this.a="";this.h=yc}xc.prototype.ma=!0;xc.prototype.ka=function(){return this.a.toString()};
xc.prototype.g=function(){return 1};xc.prototype.toString=function(){return"SafeUrl{"+this.a+"}"};function zc(a){if(a instanceof xc&&a.constructor===xc&&a.h===yc)return a.a;Fa("expected object of type SafeUrl, got '"+a+"' of type "+pa(a));return"type_error:SafeUrl"}var Ac=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Bc(a){if(a instanceof xc)return a;a="object"==typeof a&&a.ma?a.ka():String(a);Ac.test(a)||(a="about:invalid#zClosurez");return Cc(a)}function Dc(a){if(a instanceof xc)return a;
a="object"==typeof a&&a.ma?a.ka():String(a);Ac.test(a)||(a="about:invalid#zClosurez");return Cc(a)}var yc={};function Cc(a){var b=new xc;b.a=a;return b}Cc("about:blank");function Ec(){this.a="";this.g=Fc}Ec.prototype.ma=!0;var Fc={};Ec.prototype.ka=function(){return this.a};Ec.prototype.toString=function(){return"SafeStyle{"+this.a+"}"};function Gc(){this.a="";this.j=Hc;this.h=null}Gc.prototype.g=function(){return this.h};Gc.prototype.ma=!0;Gc.prototype.ka=function(){return this.a.toString()};Gc.prototype.toString=
function(){return"SafeHtml{"+this.a+"}"};function Ic(a){if(a instanceof Gc&&a.constructor===Gc&&a.j===Hc)return a.a;Fa("expected object of type SafeHtml, got '"+a+"' of type "+pa(a));return"type_error:SafeHtml"}var Hc={};function Jc(a,b){var c=new Gc;c.a=a;c.h=b;return c}Jc("<!DOCTYPE html>",0);var Kc=Jc("",0);Jc("<br>",0);var Lc=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){if("undefined"===typeof document)return!1;var a=document.createElement("div"),b=document.createElement("div");
b.appendChild(document.createElement("div"));a.appendChild(b);if(!a.firstChild)return!1;b=a.firstChild.firstChild;a.innerHTML=Ic(Kc);return!b.parentElement});function Mc(a,b){a.src=uc(b);if(null===ma)b:{b=n.document;if((b=b.querySelector&&b.querySelector("script[nonce]"))&&(b=b.nonce||b.getAttribute("nonce"))&&la.test(b)){ma=b;break b}ma=""}b=ma;b&&a.setAttribute("nonce",b)}function Nc(a,b){b=b instanceof xc?b:Dc(b);a.assign(zc(b))}function Oc(a,b){this.a=ka(a)?a:0;this.g=ka(b)?b:0}Oc.prototype.toString=
function(){return"("+this.a+", "+this.g+")"};Oc.prototype.ceil=function(){this.a=Math.ceil(this.a);this.g=Math.ceil(this.g);return this};Oc.prototype.floor=function(){this.a=Math.floor(this.a);this.g=Math.floor(this.g);return this};Oc.prototype.round=function(){this.a=Math.round(this.a);this.g=Math.round(this.g);return this};function Pc(a,b){this.width=a;this.height=b}l=Pc.prototype;l.toString=function(){return"("+this.width+" x "+this.height+")"};l.aspectRatio=function(){return this.width/this.height};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Qc(a){return a?new Rc(Sc(a)):Da||(Da=new Rc)}function Tc(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):Uc(document,a,b)}function Vc(a,b){var c=
b||document;if(c.getElementsByClassName)a=c.getElementsByClassName(a)[0];else{c=document;var d=b||c;a=d.querySelectorAll&&d.querySelector&&a?d.querySelector(a?"."+a:""):Uc(c,a,b)[0]||null}return a||null}function Uc(a,b,c){var d;a=c||a;if(a.querySelectorAll&&a.querySelector&&b)return a.querySelectorAll(b?"."+b:"");if(b&&a.getElementsByClassName){var e=a.getElementsByClassName(b);return e}e=a.getElementsByTagName("*");if(b){var f={};for(c=d=0;a=e[c];c++){var g=a.className;"function"==typeof g.split&&
Ma(g.split(/\s+/),b)&&(f[d++]=a)}f.length=d;return f}return e}function Wc(a,b){db(b,function(c,d){c&&"object"==typeof c&&c.ma&&(c=c.ka());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Xc.hasOwnProperty(d)?a.setAttribute(Xc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}var Xc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",
rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function Yc(a){return a.scrollingElement?a.scrollingElement:ec||"CSS1Compat"!=a.compatMode?a.body||a.documentElement:a.documentElement}function Zc(a){a&&a.parentNode&&a.parentNode.removeChild(a)}function Sc(a){return 9==a.nodeType?a:a.ownerDocument||a.document}function $c(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);
a.firstChild.data=String(b)}else{for(var c;c=a.firstChild;)a.removeChild(c);a.appendChild(Sc(a).createTextNode(String(b)))}}function ad(a,b){return b?bd(a,function(c){return!b||q(c.className)&&Ma(c.className.split(/\s+/),b)}):null}function bd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}function Rc(a){this.a=a||n.document||document}Rc.prototype.N=function(){return q(void 0)?this.a.getElementById(void 0):void 0};var cd={Fc:!0},dd={Hc:!0},ed={Ec:!0},fd={Gc:!0};function gd(){throw Error("Do not instantiate directly");
}gd.prototype.va=null;gd.prototype.toString=function(){return this.content};function hd(a,b,c,d){a=a(b||id,void 0,c);d=(d||Qc()).a.createElement("DIV");a=jd(a);a.match(kd);a=Jc(a,null);if(Lc())for(;d.lastChild;)d.removeChild(d.lastChild);d.innerHTML=Ic(a);1==d.childNodes.length&&(a=d.firstChild,1==a.nodeType&&(d=a));return d}function jd(a){if(!ta(a))return cb(String(a));if(a instanceof gd){if(a.fa===cd)return a.content;if(a.fa===fd)return cb(a.content)}Fa("Soy template output is unsafe for use as HTML: "+
a);return"zSoyz"}var kd=/^<(body|caption|col|colgroup|head|html|tr|td|th|tbody|thead|tfoot)>/i,id={};function nd(a){if(null!=a)switch(a.va){case 1:return 1;case -1:return-1;case 0:return 0}return null}function od(){gd.call(this)}w(od,gd);od.prototype.fa=cd;function A(a){return null!=a&&a.fa===cd?a:a instanceof Gc?B(Ic(a).toString(),a.g()):B(cb(String(String(a))),nd(a))}function pd(){gd.call(this)}w(pd,gd);pd.prototype.fa=dd;pd.prototype.va=1;function qd(a,b){this.content=String(a);this.va=null!=b?
b:null}w(qd,gd);qd.prototype.fa=fd;function C(a){return new qd(a,void 0)}var B=function(a){function b(c){this.content=c}b.prototype=a.prototype;return function(c,d){c=new b(String(c));void 0!==d&&(c.va=d);return c}}(od),rd=function(a){function b(c){this.content=c}b.prototype=a.prototype;return function(c){return new b(String(c))}}(pd);function sd(a){function b(){}var c={label:D("New password")};b.prototype=a;a=new b;for(var d in c)a[d]=c[d];return a}function D(a){return(a=String(a))?new qd(a,void 0):
""}var td=function(a){function b(c){this.content=c}b.prototype=a.prototype;return function(c,d){c=String(c);if(!c)return"";c=new b(c);void 0!==d&&(c.va=d);return c}}(od);function ud(a){return null!=a&&a.fa===cd?String(String(a.content).replace(vd,"").replace(wd,"&lt;")).replace(xd,yd):cb(String(a))}function zd(a){null!=a&&a.fa===dd?a=String(a).replace(Ad,Bd):a instanceof xc?a=String(zc(a).toString()).replace(Ad,Bd):(a=String(a),Cd.test(a)?a=a.replace(Ad,Bd):(Fa("Bad value `%s` for |filterNormalizeUri",
[a]),a="#zSoyz"));return a}function Dd(a){null!=a&&a.fa===ed?a=a.content:null==a?a="":a instanceof Ec?a instanceof Ec&&a.constructor===Ec&&a.g===Fc?a=a.a:(Fa("expected object of type SafeStyle, got '"+a+"' of type "+pa(a)),a="type_error:SafeStyle"):(a=String(a),Ed.test(a)||(Fa("Bad value `%s` for |filterCssValue",[a]),a="zSoyz"));return a}var Fd={"\x00":"&#0;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;",'"':"&quot;","&":"&amp;","'":"&#39;","-":"&#45;","/":"&#47;",
"<":"&lt;","=":"&#61;",">":"&gt;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};function yd(a){return Fd[a]}var Gd={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10","\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18",
"\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86","\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C",
"\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"};function Bd(a){return Gd[a]}var xd=/[\x00\x22\x27\x3c\x3e]/g,Ad=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Ed=/^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i,
Cd=/^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,vd=/<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,wd=/</g;function Hd(){return C("Enter a valid phone number")}function Id(){return C("Unable to send password reset code to specified email")}function Jd(){return C("Something went wrong. Please try again.")}function Kd(){return C("This email already exists without any means of sign-in. Please reset the password to recover.")}function Ld(a){a=
a||{};var b="";switch(a.code){case "invalid-argument":b+="Client specified an invalid argument.";break;case "invalid-configuration":b+="Client specified an invalid project configuration.";break;case "failed-precondition":b+="Request can not be executed in the current system state.";break;case "out-of-range":b+="Client specified an invalid range.";break;case "unauthenticated":b+="Request not authenticated due to missing, invalid, or expired OAuth token.";break;case "permission-denied":b+="Client does not have sufficient permission.";
break;case "not-found":b+="Specified resource is not found.";break;case "aborted":b+="Concurrency conflict, such as read-modify-write conflict.";break;case "already-exists":b+="The resource that a client tried to create already exists.";break;case "resource-exhausted":b+="Either out of resource quota or reaching rate limiting.";break;case "cancelled":b+="Request cancelled by the client.";break;case "data-loss":b+="Unrecoverable data loss or data corruption.";break;case "unknown":b+="Unknown server error.";
break;case "internal":b+="Internal server error.";break;case "not-implemented":b+="API method not implemented by the server.";break;case "unavailable":b+="Service unavailable.";break;case "deadline-exceeded":b+="Request deadline exceeded.";break;case "auth/user-disabled":b+="The user account has been disabled by an administrator.";break;case "auth/timeout":b+="The operation has timed out.";break;case "auth/too-many-requests":b+="We have blocked all requests from this device due to unusual activity. Try again later.";
break;case "auth/quota-exceeded":b+="The quota for this operation has been exceeded. Try again later.";break;case "auth/network-request-failed":b+="A network error has occurred. Try again later.";break;case "restart-process":b+="An issue was encountered when authenticating your request. Please visit the URL that redirected you to this page again to restart the authentication process.";break;case "no-matching-tenant-for-email":b+="No sign-in provider is available for the given email, please try with a different email."}return C(b)}
function Md(){return C("Please login again to perform this operation")}function Nd(a,b,c){var d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.code=Od+a;if(!(a=b)){a="";switch(this.code){case "firebaseui/merge-conflict":a+="The current anonymous user failed to upgrade. The non-anonymous credential is already associated with a different user account.";break;default:a+=Jd()}a=C(a).toString()}this.message=a||"";this.credential=c||null}m(Nd,Error);Nd.prototype.toJSON=function(){return{code:this.code,
message:this.message}};var Od="firebaseui/";function Pd(){0!=Qd&&(Rd[this[ua]||(this[ua]=++va)]=this);this.T=this.T;this.C=this.C}var Qd=0,Rd={};Pd.prototype.T=!1;Pd.prototype.m=function(){if(!this.T&&(this.T=!0,this.o(),0!=Qd)){var a=this[ua]||(this[ua]=++va);if(0!=Qd&&this.C&&0<this.C.length)throw Error(this+" did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");delete Rd[a]}};function Sd(a,b){a.T?ka(void 0)?
b.call(void 0):b():(a.C||(a.C=[]),a.C.push(ka(void 0)?r(b,void 0):b))}Pd.prototype.o=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Td(a){a&&"function"==typeof a.m&&a.m()}var Ud=Object.freeze||function(a){return a};var Vd=!z||9<=Number(nc),Wd=z&&!mc("9"),Xd=function(){if(!n.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});try{n.addEventListener("test",na,b),n.removeEventListener("test",na,b)}catch(c){}return a}();
function Yd(a,b){this.type=a;this.g=this.target=b;this.h=!1;this.qb=!0}Yd.prototype.stopPropagation=function(){this.h=!0};Yd.prototype.preventDefault=function(){this.qb=!1};function Zd(a,b){Yd.call(this,a?a.type:"");this.relatedTarget=this.g=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.j=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.pointerId=0;this.pointerType="";this.a=null;if(a){var c=this.type=a.type,d=a.changedTouches&&
a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.g=b;if(b=a.relatedTarget){if(dc){a:{try{Yb(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==
a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.j=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=q(a.pointerType)?a.pointerType:$d[a.pointerType]||"";this.a=a;a.defaultPrevented&&this.preventDefault()}}w(Zd,Yd);var $d=Ud({2:"touch",3:"pen",4:"mouse"});Zd.prototype.stopPropagation=
function(){Zd.K.stopPropagation.call(this);this.a.stopPropagation?this.a.stopPropagation():this.a.cancelBubble=!0};Zd.prototype.preventDefault=function(){Zd.K.preventDefault.call(this);var a=this.a;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Wd)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var ae="closure_listenable_"+(1E6*Math.random()|0),be=0;function ce(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.La=e;this.key=
++be;this.sa=this.Ia=!1}function de(a){a.sa=!0;a.listener=null;a.proxy=null;a.src=null;a.La=null}function ee(a){this.src=a;this.a={};this.g=0}ee.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.a[f];a||(a=this.a[f]=[],this.g++);var g=fe(a,b,d,e);-1<g?(b=a[g],c||(b.Ia=!1)):(b=new ce(b,this.src,f,!!d,e),b.Ia=c,a.push(b));return b};function ge(a,b){var c=b.type;c in a.a&&Na(a.a[c],b)&&(de(b),0==a.a[c].length&&(delete a.a[c],a.g--))}function fe(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];
if(!f.sa&&f.listener==b&&f.capture==!!c&&f.La==d)return e}return-1}var he="closure_lm_"+(1E6*Math.random()|0),ie={},je=0;function ke(a,b,c,d,e){if(d&&d.once)return le(a,b,c,d,e);if(qa(b)){for(var f=0;f<b.length;f++)ke(a,b[f],c,d,e);return null}c=me(c);return a&&a[ae]?a.J.add(String(b),c,!1,ta(d)?!!d.capture:!!d,e):ne(a,b,c,!1,d,e)}function ne(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=ta(e)?!!e.capture:!!e,h=oe(a);h||(a[he]=h=new ee(a));c=h.add(b,c,d,g,f);if(c.proxy)return c;d=pe();
c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Xd||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(qe(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");je++;return c}function pe(){var a=re,b=Vd?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function le(a,b,c,d,e){if(qa(b)){for(var f=0;f<
b.length;f++)le(a,b[f],c,d,e);return null}c=me(c);return a&&a[ae]?a.J.add(String(b),c,!0,ta(d)?!!d.capture:!!d,e):ne(a,b,c,!0,d,e)}function se(a,b,c,d,e){if(qa(b))for(var f=0;f<b.length;f++)se(a,b[f],c,d,e);else(d=ta(d)?!!d.capture:!!d,c=me(c),a&&a[ae])?(a=a.J,b=String(b).toString(),b in a.a&&(f=a.a[b],c=fe(f,c,d,e),-1<c&&(de(f[c]),Oa(f,c),0==f.length&&(delete a.a[b],a.g--)))):a&&(a=oe(a))&&(b=a.a[b.toString()],a=-1,b&&(a=fe(b,c,d,e)),(c=-1<a?b[a]:null)&&te(c))}function te(a){if("number"!=typeof a&&
a&&!a.sa){var b=a.src;if(b&&b[ae])ge(b.J,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(qe(c),d):b.addListener&&b.removeListener&&b.removeListener(d);je--;(c=oe(b))?(ge(c,a),0==c.g&&(c.src=null,b[he]=null)):de(a)}}}function qe(a){return a in ie?ie[a]:ie[a]="on"+a}function ue(a,b,c,d){var e=!0;if(a=oe(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.sa&&(f=ve(f,d),e=e&&!1!==f)}return e}
function ve(a,b){var c=a.listener,d=a.La||a.src;a.Ia&&te(a);return c.call(d,b)}function re(a,b){if(a.sa)return!0;if(!Vd){if(!b)a:{b=["window","event"];for(var c=n,d=0;d<b.length;d++)if(c=c[b[d]],null==c){b=null;break a}b=c}d=b;b=new Zd(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=-1;break a}catch(g){e=!0}if(e||void 0==d.returnValue)d.returnValue=!0}d=[];for(e=b.g;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;!b.h&&0<=e;e--){b.g=d[e];var f=
ue(d[e],a,!0,b);c=c&&f}for(e=0;!b.h&&e<d.length;e++)b.g=d[e],f=ue(d[e],a,!1,b),c=c&&f}return c}return ve(a,new Zd(b,this))}function oe(a){a=a[he];return a instanceof ee?a:null}var we="__closure_events_fn_"+(1E9*Math.random()>>>0);function me(a){if(sa(a))return a;a[we]||(a[we]=function(b){return a.handleEvent(b)});return a[we]}function E(){Pd.call(this);this.J=new ee(this);this.wb=this;this.Ha=null}w(E,Pd);E.prototype[ae]=!0;E.prototype.Za=function(a){this.Ha=a};E.prototype.removeEventListener=function(a,
b,c,d){se(this,a,b,c,d)};function xe(a,b){var c,d=a.Ha;if(d)for(c=[];d;d=d.Ha)c.push(d);a=a.wb;d=b.type||b;if(q(b))b=new Yd(b,a);else if(b instanceof Yd)b.target=b.target||a;else{var e=b;b=new Yd(d,a);gb(b,e)}e=!0;if(c)for(var f=c.length-1;!b.h&&0<=f;f--){var g=b.g=c[f];e=ye(g,d,!0,b)&&e}b.h||(g=b.g=a,e=ye(g,d,!0,b)&&e,b.h||(e=ye(g,d,!1,b)&&e));if(c)for(f=0;!b.h&&f<c.length;f++)g=b.g=c[f],e=ye(g,d,!1,b)&&e;return e}E.prototype.o=function(){E.K.o.call(this);if(this.J){var a=this.J,b=0,c;for(c in a.a){for(var d=
a.a[c],e=0;e<d.length;e++)++b,de(d[e]);delete a.a[c];a.g--}}this.Ha=null};function ye(a,b,c,d){b=a.J.a[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.sa&&g.capture==c){var h=g.listener,k=g.La||g.src;g.Ia&&ge(a.J,g);e=!1!==h.call(k,d)&&e}}return e&&0!=d.qb}var ze={},Ae=0;function Be(a,b){if(!a)throw Error("Event target element must be provided!");a=Ce(a);if(ze[a]&&ze[a].length)for(var c=0;c<ze[a].length;c++)xe(ze[a][c],b)}function De(a){var b=Ce(a.N());
ze[b]&&ze[b].length&&(Pa(ze[b],function(c){return c==a}),ze[b].length||delete ze[b])}function Ce(a){"undefined"===typeof a.a&&(a.a=Ae,Ae++);return a.a}function Ee(a){if(!a)throw Error("Event target element must be provided!");E.call(this);this.a=a}m(Ee,E);Ee.prototype.N=function(){return this.a};Ee.prototype.register=function(){var a=Ce(this.N());ze[a]?Ma(ze[a],this)||ze[a].push(this):ze[a]=[this]};function Fe(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}function Ge(a,b){this.h=
a;this.j=b;this.g=0;this.a=null}Ge.prototype.get=function(){if(0<this.g){this.g--;var a=this.a;this.a=a.next;a.next=null}else a=this.h();return a};function He(a,b){a.j(b);100>a.g&&(a.g++,b.next=a.a,a.a=b)}function Ie(){this.g=this.a=null}var Ke=new Ge(function(){return new Je},function(a){a.reset()});Ie.prototype.add=function(a,b){var c=Ke.get();c.set(a,b);this.g?this.g.next=c:this.a=c;this.g=c};function Le(){var a=Me,b=null;a.a&&(b=a.a,a.a=a.a.next,a.a||(a.g=null),b.next=null);return b}function Je(){this.next=
this.g=this.a=null}Je.prototype.set=function(a,b){this.a=a;this.g=b;this.next=null};Je.prototype.reset=function(){this.next=this.g=this.a=null};function Ne(a){n.setTimeout(function(){throw a;},0)}var Oe;function Pe(){var a=n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!y("Presto")&&(a=function(){var e=document.createElement("IFRAME");e.style.display="none";e.src="";document.documentElement.appendChild(e);var f=e.contentWindow;e=
f.document;e.open();e.write("");e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=r(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});if("undefined"!==typeof a&&!y("Trident")&&!y("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(ka(c.next)){c=c.next;var e=c.gb;c.gb=null;e()}};return function(e){d.next=
{gb:e};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(e){var f=document.createElement("SCRIPT");f.onreadystatechange=function(){f.onreadystatechange=null;f.parentNode.removeChild(f);f=null;e();e=null};document.documentElement.appendChild(f)}:function(e){n.setTimeout(e,0)}}function Qe(a,b){Re||Se();Te||(Re(),Te=!0);Me.add(a,b)}var Re;function Se(){if(n.Promise&&n.Promise.resolve){var a=n.Promise.resolve(void 0);
Re=function(){a.then(Ue)}}else Re=function(){var b=Ue;!sa(n.setImmediate)||n.Window&&n.Window.prototype&&!y("Edge")&&n.Window.prototype.setImmediate==n.setImmediate?(Oe||(Oe=Pe()),Oe(b)):n.setImmediate(b)}}var Te=!1,Me=new Ie;function Ue(){for(var a;a=Le();){try{a.a.call(a.g)}catch(b){Ne(b)}He(Ke,a)}Te=!1}function Ve(a){this.a=We;this.A=void 0;this.j=this.g=this.h=null;this.s=this.i=!1;if(a!=na)try{var b=this;a.call(void 0,function(c){Xe(b,Ye,c)},function(c){if(!(c instanceof Ze))try{if(c instanceof
Error)throw c;throw Error("Promise rejected.");}catch(d){}Xe(b,$e,c)})}catch(c){Xe(this,$e,c)}}var We=0,Ye=2,$e=3;function af(){this.next=this.j=this.g=this.s=this.a=null;this.h=!1}af.prototype.reset=function(){this.j=this.g=this.s=this.a=null;this.h=!1};var bf=new Ge(function(){return new af},function(a){a.reset()});function cf(a,b,c){var d=bf.get();d.s=a;d.g=b;d.j=c;return d}function F(a){if(a instanceof Ve)return a;var b=new Ve(na);Xe(b,Ye,a);return b}function df(a){return new Ve(function(b,c){c(a)})}
Ve.prototype.then=function(a,b,c){return ef(this,sa(a)?a:null,sa(b)?b:null,c)};Ve.prototype.$goog_Thenable=!0;l=Ve.prototype;l.fc=function(a,b){a=cf(a,a,b);a.h=!0;ff(this,a);return this};l.Ca=function(a,b){return ef(this,null,a,b)};l.cancel=function(a){this.a==We&&Qe(function(){var b=new Ze(a);gf(this,b)},this)};function gf(a,b){if(a.a==We)if(a.h){var c=a.h;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.h||(d++,g.a==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(c.a==We&&1==d?gf(c,b):(f?(d=f,d.next==c.j&&
(c.j=d),d.next=d.next.next):hf(c),jf(c,e,$e,b)))}a.h=null}else Xe(a,$e,b)}function ff(a,b){a.g||a.a!=Ye&&a.a!=$e||kf(a);a.j?a.j.next=b:a.g=b;a.j=b}function ef(a,b,c,d){var e=cf(null,null,null);e.a=new Ve(function(f,g){e.s=b?function(h){try{var k=b.call(d,h);f(k)}catch(p){g(p)}}:f;e.g=c?function(h){try{var k=c.call(d,h);!ka(k)&&h instanceof Ze?g(h):f(k)}catch(p){g(p)}}:g});e.a.h=a;ff(a,e);return e.a}l.hc=function(a){this.a=We;Xe(this,Ye,a)};l.ic=function(a){this.a=We;Xe(this,$e,a)};function Xe(a,b,
c){if(a.a==We){a===c&&(b=$e,c=new TypeError("Promise cannot resolve to itself"));a.a=1;a:{var d=c,e=a.hc,f=a.ic;if(d instanceof Ve){ff(d,cf(e||na,f||null,a));var g=!0}else if(Fe(d))d.then(e,f,a),g=!0;else{if(ta(d))try{var h=d.then;if(sa(h)){lf(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.A=c,a.a=b,a.h=null,kf(a),b!=$e||c instanceof Ze||mf(a,c))}}function lf(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}function g(k){h||(h=!0,c.call(e,k))}var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function kf(a){a.i||(a.i=!0,Qe(a.Hb,a))}function hf(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.j=null);return b}l.Hb=function(){for(var a;a=hf(this);)jf(this,a,this.a,this.A);this.i=!1};function jf(a,b,c,d){if(c==$e&&b.g&&!b.h)for(;a&&a.s;a=a.h)a.s=!1;if(b.a)b.a.h=null,nf(b,c,d);else try{b.h?b.s.call(b.j):nf(b,c,d)}catch(e){of.call(null,e)}He(bf,b)}function nf(a,b,c){b==Ye?a.s.call(a.j,c):a.g&&a.g.call(a.j,c)}function mf(a,b){a.s=!0;Qe(function(){a.s&&of.call(null,b)})}var of=Ne;function Ze(a){Ba.call(this,
a)}w(Ze,Ba);Ze.prototype.name="cancel";function pf(a,b,c){b||(b={});c=c||window;var d=a instanceof xc?a:Bc("undefined"!=typeof a.href?a.href:String(a));a=b.target||a.target;var e=[];for(f in b)switch(f){case "width":case "height":case "top":case "left":e.push(f+"="+b[f]);break;case "target":case "noopener":case "noreferrer":break;default:e.push(f+"="+(b[f]?1:0))}var f=e.join(",");(y("iPhone")&&!y("iPod")&&!y("iPad")||y("iPad")||y("iPod"))&&c.navigator&&c.navigator.standalone&&a&&"_self"!=a?(f=c.document.createElement("A"),
d=d instanceof xc?d:Dc(d),f.href=zc(d),f.setAttribute("target",a),b.noreferrer&&f.setAttribute("rel","noreferrer"),b=document.createEvent("MouseEvent"),b.initMouseEvent("click",!0,!0,c,1),f.dispatchEvent(b),c={}):b.noreferrer?(c=c.open("",a,f),b=zc(d).toString(),c&&(cc&&-1!=b.indexOf(";")&&(b="'"+b.replace(/'/g,"%27")+"'"),c.opener=null,b=Jc('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+cb(b)+'">',null),c.document.write(Ic(b)),c.document.close())):(c=c.open(zc(d).toString(),
a,f))&&b.noopener&&(c.opener=null);return c}function qf(){try{return!(!window.opener||!window.opener.location||window.opener.location.hostname!==window.location.hostname||window.opener.location.protocol!==window.location.protocol)}catch(a$1){}return!1}function rf(a){pf(a,{target:window.cordova&&window.cordova.InAppBrowser?"_system":"_blank"},void 0)}function sf(a,b){a=ta(a)&&1==a.nodeType?a:document.querySelector(String(a));if(null==a)throw Error(b||"Cannot find element.");return a}function tf(){return window.location.href}
function uf(){var a=null;return(new Ve(function(b){"complete"==n.document.readyState?b():(a=function(){b()},le(window,"load",a))})).Ca(function(b){se(window,"load",a);throw b;})}function vf(){for(var a=32,b=[];0<a;)b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),a--;return b.join("")}function wf(a,b,c){c=void 0===c?{}:c;return Object.keys(a).filter(function(d){return b.includes(d)}).reduce(function(d,e){d[e]=a[e];return d},c)}function xf(a){var b=
yf;this.s=[];this.T=b;this.O=a||null;this.j=this.a=!1;this.h=void 0;this.J=this.l=this.A=!1;this.i=0;this.g=null;this.C=0}xf.prototype.cancel=function(a){if(this.a)this.h instanceof xf&&this.h.cancel();else{if(this.g){var b=this.g;delete this.g;a?b.cancel(a):(b.C--,0>=b.C&&b.cancel())}this.T?this.T.call(this.O,this):this.J=!0;this.a||(a=new zf(this),Af(this),Bf(this,!1,a))}};xf.prototype.L=function(a,b){this.A=!1;Bf(this,a,b)};function Bf(a,b,c){a.a=!0;a.h=c;a.j=!b;Cf(a)}function Af(a){if(a.a){if(!a.J)throw new Df(a);
a.J=!1}}xf.prototype.callback=function(a){Af(this);Bf(this,!0,a)};function Ef(a,b,c){a.s.push([b,c,void 0]);a.a&&Cf(a)}xf.prototype.then=function(a,b,c){var d,e,f=new Ve(function(g,h){d=g;e=h});Ef(this,d,function(g){g instanceof zf?f.cancel():e(g)});return f.then(a,b,c)};xf.prototype.$goog_Thenable=!0;function Ff(a){return La(a.s,function(b){return sa(b[1])})}function Cf(a){if(a.i&&a.a&&Ff(a)){var b=a.i,c=Gf[b];c&&(n.clearTimeout(c.a),delete Gf[b]);a.i=0}a.g&&(a.g.C--,delete a.g);b=a.h;for(var d=
c=!1;a.s.length&&!a.A;){var e=a.s.shift(),f=e[0],g=e[1];e=e[2];if(f=a.j?g:f)try{var h=f.call(e||a.O,b);ka(h)&&(a.j=a.j&&(h==b||h instanceof Error),a.h=b=h);if(Fe(b)||"function"===typeof n.Promise&&b instanceof n.Promise)d=!0,a.A=!0}catch(k){b=k,a.j=!0,Ff(a)||(c=!0)}}a.h=b;d&&(h=r(a.L,a,!0),d=r(a.L,a,!1),b instanceof xf?(Ef(b,h,d),b.l=!0):b.then(h,d));c&&(b=new Hf(b),Gf[b.a]=b,a.i=b.a)}function Df(){Ba.call(this)}w(Df,Ba);Df.prototype.message="Deferred has already fired";Df.prototype.name="AlreadyCalledError";
function zf(){Ba.call(this)}w(zf,Ba);zf.prototype.message="Deferred was canceled";zf.prototype.name="CanceledError";function Hf(a){this.a=n.setTimeout(r(this.h,this),0);this.g=a}Hf.prototype.h=function(){delete Gf[this.a];throw this.g;};var Gf={};function If(a){var b={},c=b.document||document,d=uc(a).toString(),e=document.createElement("SCRIPT"),f={rb:e,sb:void 0},g=new xf(f),h=null,k=null!=b.timeout?b.timeout:5E3;0<k&&(h=window.setTimeout(function(){Jf(e,!0);var p=new Kf(Lf,"Timeout reached for loading script "+
d);Af(g);Bf(g,!1,p)},k),f.sb=h);e.onload=e.onreadystatechange=function(){e.readyState&&"loaded"!=e.readyState&&"complete"!=e.readyState||(Jf(e,b.xc||!1,h),g.callback(null))};e.onerror=function(){Jf(e,!0,h);var p=new Kf(Mf,"Error while loading script "+d);Af(g);Bf(g,!1,p)};f=b.attributes||{};gb(f,{type:"text/javascript",charset:"UTF-8"});Wc(e,f);Mc(e,a);Nf(c).appendChild(e);return g}function Nf(a){var b=(a||document).getElementsByTagName("HEAD");return b&&0!=b.length?b[0]:a.documentElement}function yf(){if(this&&
this.rb){var a=this.rb;a&&"SCRIPT"==a.tagName&&Jf(a,!0,this.sb)}}function Jf(a,b,c){null!=c&&n.clearTimeout(c);a.onload=na;a.onerror=na;a.onreadystatechange=na;b&&window.setTimeout(function(){Zc(a)},0)}var Mf=0,Lf=1;function Kf(a,b){var c="Jsloader error (code #"+a+")";b&&(c+=": "+b);Ba.call(this,c);this.code=a}w(Kf,Ba);function Of(){return n.google&&n.google.accounts&&n.google.accounts.id||null}function Pf(a){this.a=a||Of();this.h=!1;this.g=null}Pf.prototype.cancel=function(){this.a&&this.h&&(this.g&&
this.g(null),this.a.cancel())};function Qf(a,b,c){if(a.a&&b)return function(){a.h=!0;return new Ve(function(e){a.g=e;a.a.initialize({client_id:b,callback:e,auto_select:!c});a.a.prompt()})}();if(b){var d=Rf.Xa().load().then(function(){a.a=Of();return Qf(a,b,c)}).Ca(function(){return null});return F(d)}return F(null)}oa(Pf);var wc=new pc(qc,"https://accounts.google.com/gsi/client");function Rf(){this.a=null}Rf.prototype.load=function(){var a=this;if(this.a)return this.a;var b=vc();return Of()?F():this.a=
uf().then(function(){if(!Of())return new Ve(function(c,d){var e=setTimeout(function(){a.a=null;d(Error("Network error!"))},1E4);n.onGoogleLibraryLoad=function(){clearTimeout(e);c()};F(If(b)).then(function(){Of()&&c()}).Ca(function(f){clearTimeout(e);a.a=null;d(f)})})})};oa(Rf);function Sf(a,b){this.a=a;this.g=b||function(c){throw c;}}Sf.prototype.confirm=function(a){return F(this.a.confirm(a)).Ca(this.g)};function Tf(a,b,c){this.reset(a,b,c,void 0,void 0)}Tf.prototype.a=null;var Uf=0;Tf.prototype.reset=
function(a,b,c,d,e){"number"==typeof e||Uf++;this.h=d||Aa();this.j=a;this.s=b;this.g=c;delete this.a};function Vf(a){this.s=a;this.a=this.h=this.j=this.g=null}function Wf(a,b){this.name=a;this.value=b}Wf.prototype.toString=function(){return this.name};var Xf=new Wf("SEVERE",1E3),Yf=new Wf("WARNING",900),Zf=new Wf("CONFIG",700);function $f(a){if(a.j)return a.j;if(a.g)return $f(a.g);Fa("Root logger has no level set.");return null}Vf.prototype.log=function(a,b,c){if(a.value>=$f(this).value)for(sa(b)&&
(b=b()),a=new Tf(a,String(b),this.s),c&&(a.a=c),c=this;c;){var d=c,e=a;if(d.a)for(var f=0;b=d.a[f];f++)b(e);c=c.g}};var ag={},bg=null;function cg(){bg||(bg=new Vf(""),ag[""]=bg,bg.j=Zf)}function dg(a){cg();var b;if(!(b=ag[a])){b=new Vf(a);var c=a.lastIndexOf("."),d=a.substr(c+1);c=dg(a.substr(0,c));c.h||(c.h={});c.h[d]=b;b.g=c;ag[a]=b}return b}function eg(){this.a=Aa()}var fg=null;eg.prototype.set=function(a){this.a=a};eg.prototype.reset=function(){this.set(Aa())};eg.prototype.get=function(){return this.a};
function gg(a){this.j=a||"";fg||(fg=new eg);this.s=fg}gg.prototype.a=!0;gg.prototype.g=!0;gg.prototype.h=!1;function hg(a){return 10>a?"0"+a:String(a)}function ig(a,b){a=(a.h-b)/1E3;b=a.toFixed(3);var c=0;if(1>a)c=2;else for(;100>a;)c++,a*=10;for(;0<c--;)b=" "+b;return b}function jg(a){gg.call(this,a)}w(jg,gg);function kg(a,b){var c=[];c.push(a.j," ");if(a.g){var d=new Date(b.h);c.push("[",hg(d.getFullYear()-2E3)+hg(d.getMonth()+1)+hg(d.getDate())+" "+hg(d.getHours())+":"+hg(d.getMinutes())+":"+hg(d.getSeconds())+
"."+hg(Math.floor(d.getMilliseconds()/10)),"] ")}c.push("[",ig(b,a.s.get()),"s] ");c.push("[",b.g,"] ");c.push(b.s);a.h&&(b=b.a)&&c.push("\n",b instanceof Error?b.message:b.toString());a.a&&c.push("\n");return c.join("")}function lg(){this.s=r(this.h,this);this.a=new jg;this.a.g=!1;this.a.h=!1;this.g=this.a.a=!1;this.j={}}lg.prototype.h=function(a){function b(f){if(f){if(f.value>=Xf.value)return"error";if(f.value>=Yf.value)return"warn";if(f.value>=Zf.value)return"log"}return"debug"}if(!this.j[a.g]){var c=
kg(this.a,a),d=mg;if(d){var e=b(a.j);ng(d,e,c,a.a)}}};var mg=n.console;function ng(a,b,c,d){if(a[b])a[b](c,d||"");else a.log(c,d||"")}function og(a,b){var c=pg;c&&c.log(Xf,a,b)}var pg;pg=dg("firebaseui");var qg=new lg;if(1!=qg.g){var rg;cg();rg=bg;var sg=qg.s;rg.a||(rg.a=[]);rg.a.push(sg);qg.g=!0}function tg(a){var b=pg;b&&b.log(Yf,a,void 0)}function ug(){this.a=("undefined"==typeof document?null:document)||{cookie:""}}l=ug.prototype;l.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+
a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');ka(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Aa()+1E3*c)).toUTCString();this.a.cookie=a+"="+b+e+d+c+f};l.get=function(a,b){for(var c=a+"=",d=(this.a.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Ua(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};l.ja=function(){return vg(this).keys};l.la=
function(){return vg(this).values};l.clear=function(){for(var a=vg(this).keys,b=a.length-1;0<=b;b--){var c=a[b];this.get(c);this.set(c,"",0,void 0,void 0)}};function vg(a){a=(a.a.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Ua(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}var xg=new ug;function yg(){}function zg(a,b,c,d){this.h="undefined"!==typeof a&&null!==a?a:-1;this.g=b||null;this.a=c||null;
this.j=!!d}m(zg,yg);zg.prototype.set=function(a,b){xg.set(a,b,this.h,this.g,this.a,this.j)};zg.prototype.get=function(a){return xg.get(a)||null};zg.prototype.ra=function(a){var b=this.g,c=this.a;xg.get(a);xg.set(a,"",0,b,c)};function Ag(a,b){this.g=a;this.a=b||null}function Bg(a){return{email:a.g,credential:a.a&&a.a.toJSON()}}function Cg(a){if(a&&a.email){var b=a.credential&&firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.AuthCredential.fromJSON(a.credential);return new Ag(a.email,b)}return null}function Dg(a){this.a=a||null}function Eg(a){for(var b=
[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return b}function Fg(a){return Ka(a,function(b){b=b.toString(16);return 1<b.length?b:"0"+b}).join("")}function Gg(a){this.i=a;this.g=this.i.length/4;this.j=this.g+6;this.h=[[],[],[],[]];this.s=[[],[],[],[]];this.a=Array(Hg*(this.j+1));for(a=0;a<this.g;a++)this.a[a]=[this.i[4*a],this.i[4*a+1],this.i[4*a+2],this.i[4*a+3]];var b=Array(4);for(a=this.g;a<Hg*(this.j+1);a++){b[0]=this.a[a-1][0];b[1]=this.a[a-1][1];b[2]=
this.a[a-1][2];b[3]=this.a[a-1][3];if(0==a%this.g){var c=b,d=c[0];c[0]=c[1];c[1]=c[2];c[2]=c[3];c[3]=d;Ig(b);b[0]^=Jg[a/this.g][0];b[1]^=Jg[a/this.g][1];b[2]^=Jg[a/this.g][2];b[3]^=Jg[a/this.g][3]}else 6<this.g&&4==a%this.g&&Ig(b);this.a[a]=Array(4);this.a[a][0]=this.a[a-this.g][0]^b[0];this.a[a][1]=this.a[a-this.g][1]^b[1];this.a[a][2]=this.a[a-this.g][2]^b[2];this.a[a][3]=this.a[a-this.g][3]^b[3]}}Gg.prototype.A=16;var Hg=Gg.prototype.A/4;function Kg(a,b){for(var c,d=0;d<Hg;d++)for(var e=0;4>e;e++)c=
4*e+d,c=b[c],a.h[d][e]=c}function Lg(a){for(var b=[],c=0;c<Hg;c++)for(var d=0;4>d;d++)b[4*d+c]=a.h[c][d];return b}function Mg(a,b){for(var c=0;4>c;c++)for(var d=0;4>d;d++)a.h[c][d]^=a.a[4*b+d][c]}function Ng(a,b){for(var c=0;4>c;c++)for(var d=0;4>d;d++)a.h[c][d]=b[a.h[c][d]]}function Og(a){for(var b=1;4>b;b++)for(var c=0;4>c;c++)a.s[b][c]=a.h[b][c];for(b=1;4>b;b++)for(c=0;4>c;c++)a.h[b][c]=a.s[b][(c+b)%Hg]}function Pg(a){for(var b=1;4>b;b++)for(var c=0;4>c;c++)a.s[b][(c+b)%Hg]=a.h[b][c];for(b=1;4>
b;b++)for(c=0;4>c;c++)a.h[b][c]=a.s[b][c]}function Ig(a){a[0]=Qg[a[0]];a[1]=Qg[a[1]];a[2]=Qg[a[2]];a[3]=Qg[a[3]]}var Qg=[99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,
127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,
104,65,153,45,15,176,84,187,22],Rg=[82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,
65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],Jg=[[0,0,0,0],[1,0,0,0],[2,0,0,0],[4,0,0,0],[8,0,0,
0],[16,0,0,0],[32,0,0,0],[64,0,0,0],[128,0,0,0],[27,0,0,0],[54,0,0,0]],Sg=[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,234,236,238,240,
242,244,246,248,250,252,254,27,25,31,29,19,17,23,21,11,9,15,13,3,1,7,5,59,57,63,61,51,49,55,53,43,41,47,45,35,33,39,37,91,89,95,93,83,81,87,85,75,73,79,77,67,65,71,69,123,121,127,125,115,113,119,117,107,105,111,109,99,97,103,101,155,153,159,157,147,145,151,149,139,137,143,141,131,129,135,133,187,185,191,189,179,177,183,181,171,169,175,173,163,161,167,165,219,217,223,221,211,209,215,213,203,201,207,205,195,193,199,197,251,249,255,253,243,241,247,245,235,233,239,237,227,225,231,229],Tg=[0,3,6,5,12,
15,10,9,24,27,30,29,20,23,18,17,48,51,54,53,60,63,58,57,40,43,46,45,36,39,34,33,96,99,102,101,108,111,106,105,120,123,126,125,116,119,114,113,80,83,86,85,92,95,90,89,72,75,78,77,68,71,66,65,192,195,198,197,204,207,202,201,216,219,222,221,212,215,210,209,240,243,246,245,252,255,250,249,232,235,238,237,228,231,226,225,160,163,166,165,172,175,170,169,184,187,190,189,180,183,178,177,144,147,150,149,156,159,154,153,136,139,142,141,132,135,130,129,155,152,157,158,151,148,145,146,131,128,133,134,143,140,
137,138,171,168,173,174,167,164,161,162,179,176,181,182,191,188,185,186,251,248,253,254,247,244,241,242,227,224,229,230,239,236,233,234,203,200,205,206,199,196,193,194,211,208,213,214,223,220,217,218,91,88,93,94,87,84,81,82,67,64,69,70,79,76,73,74,107,104,109,110,103,100,97,98,115,112,117,118,127,124,121,122,59,56,61,62,55,52,49,50,35,32,37,38,47,44,41,42,11,8,13,14,7,4,1,2,19,16,21,22,31,28,25,26],Ug=[0,9,18,27,36,45,54,63,72,65,90,83,108,101,126,119,144,153,130,139,180,189,166,175,216,209,202,195,
252,245,238,231,59,50,41,32,31,22,13,4,115,122,97,104,87,94,69,76,171,162,185,176,143,134,157,148,227,234,241,248,199,206,213,220,118,127,100,109,82,91,64,73,62,55,44,37,26,19,8,1,230,239,244,253,194,203,208,217,174,167,188,181,138,131,152,145,77,68,95,86,105,96,123,114,5,12,23,30,33,40,51,58,221,212,207,198,249,240,235,226,149,156,135,142,177,184,163,170,236,229,254,247,200,193,218,211,164,173,182,191,128,137,146,155,124,117,110,103,88,81,74,67,52,61,38,47,16,25,2,11,215,222,197,204,243,250,225,
232,159,150,141,132,187,178,169,160,71,78,85,92,99,106,113,120,15,6,29,20,43,34,57,48,154,147,136,129,190,183,172,165,210,219,192,201,246,255,228,237,10,3,24,17,46,39,60,53,66,75,80,89,102,111,116,125,161,168,179,186,133,140,151,158,233,224,251,242,205,196,223,214,49,56,35,42,21,28,7,14,121,112,107,98,93,84,79,70],Vg=[0,11,22,29,44,39,58,49,88,83,78,69,116,127,98,105,176,187,166,173,156,151,138,129,232,227,254,245,196,207,210,217,123,112,109,102,87,92,65,74,35,40,53,62,15,4,25,18,203,192,221,214,
231,236,241,250,147,152,133,142,191,180,169,162,246,253,224,235,218,209,204,199,174,165,184,179,130,137,148,159,70,77,80,91,106,97,124,119,30,21,8,3,50,57,36,47,141,134,155,144,161,170,183,188,213,222,195,200,249,242,239,228,61,54,43,32,17,26,7,12,101,110,115,120,73,66,95,84,247,252,225,234,219,208,205,198,175,164,185,178,131,136,149,158,71,76,81,90,107,96,125,118,31,20,9,2,51,56,37,46,140,135,154,145,160,171,182,189,212,223,194,201,248,243,238,229,60,55,42,33,16,27,6,13,100,111,114,121,72,67,94,
85,1,10,23,28,45,38,59,48,89,82,79,68,117,126,99,104,177,186,167,172,157,150,139,128,233,226,255,244,197,206,211,216,122,113,108,103,86,93,64,75,34,41,52,63,14,5,24,19,202,193,220,215,230,237,240,251,146,153,132,143,190,181,168,163],Wg=[0,13,26,23,52,57,46,35,104,101,114,127,92,81,70,75,208,221,202,199,228,233,254,243,184,181,162,175,140,129,150,155,187,182,161,172,143,130,149,152,211,222,201,196,231,234,253,240,107,102,113,124,95,82,69,72,3,14,25,20,55,58,45,32,109,96,119,122,89,84,67,78,5,8,31,
18,49,60,43,38,189,176,167,170,137,132,147,158,213,216,207,194,225,236,251,246,214,219,204,193,226,239,248,245,190,179,164,169,138,135,144,157,6,11,28,17,50,63,40,37,110,99,116,121,90,87,64,77,218,215,192,205,238,227,244,249,178,191,168,165,134,139,156,145,10,7,16,29,62,51,36,41,98,111,120,117,86,91,76,65,97,108,123,118,85,88,79,66,9,4,19,30,61,48,39,42,177,188,171,166,133,136,159,146,217,212,195,206,237,224,247,250,183,186,173,160,131,142,153,148,223,210,197,200,235,230,241,252,103,106,125,112,83,
94,73,68,15,2,21,24,59,54,33,44,12,1,22,27,56,53,34,47,100,105,126,115,80,93,74,71,220,209,198,203,232,229,242,255,180,185,174,163,128,141,154,151],Xg=[0,14,28,18,56,54,36,42,112,126,108,98,72,70,84,90,224,238,252,242,216,214,196,202,144,158,140,130,168,166,180,186,219,213,199,201,227,237,255,241,171,165,183,185,147,157,143,129,59,53,39,41,3,13,31,17,75,69,87,89,115,125,111,97,173,163,177,191,149,155,137,135,221,211,193,207,229,235,249,247,77,67,81,95,117,123,105,103,61,51,33,47,5,11,25,23,118,120,
106,100,78,64,82,92,6,8,26,20,62,48,34,44,150,152,138,132,174,160,178,188,230,232,250,244,222,208,194,204,65,79,93,83,121,119,101,107,49,63,45,35,9,7,21,27,161,175,189,179,153,151,133,139,209,223,205,195,233,231,245,251,154,148,134,136,162,172,190,176,234,228,246,248,210,220,206,192,122,116,102,104,66,76,94,80,10,4,22,24,50,60,46,32,236,226,240,254,212,218,200,198,156,146,128,142,164,170,184,182,12,2,16,30,52,58,40,38,124,114,96,110,68,74,88,86,55,57,43,37,15,1,19,29,71,73,91,85,127,113,99,109,215,
217,203,197,239,225,243,253,167,169,187,181,159,145,131,141];function Yg(a,b){a=new Gg(Zg(a));b=Eg(b);for(var c=b.splice(0,16),d="",e;c.length;){e=16-c.length;for(var f=0;f<e;f++)c.push(0);e=a;Kg(e,c);Mg(e,0);for(c=1;c<e.j;++c){Ng(e,Qg);Og(e);f=e.h;for(var g=e.s[0],h=0;4>h;h++)g[0]=f[0][h],g[1]=f[1][h],g[2]=f[2][h],g[3]=f[3][h],f[0][h]=Sg[g[0]]^Tg[g[1]]^g[2]^g[3],f[1][h]=g[0]^Sg[g[1]]^Tg[g[2]]^g[3],f[2][h]=g[0]^g[1]^Sg[g[2]]^Tg[g[3]],f[3][h]=Tg[g[0]]^g[1]^g[2]^Sg[g[3]];Mg(e,c)}Ng(e,Qg);Og(e);Mg(e,
e.j);d+=Fg(Lg(e));c=b.splice(0,16)}return d}function $g(a,b){a=new Gg(Zg(a));for(var c=[],d=0;d<b.length;d+=2)c.push(parseInt(b.substring(d,d+2),16));var e=c.splice(0,16);for(b="";e.length;){d=a;Kg(d,e);Mg(d,d.j);for(e=1;e<d.j;++e){Pg(d);Ng(d,Rg);Mg(d,d.j-e);for(var f=d.h,g=d.s[0],h=0;4>h;h++)g[0]=f[0][h],g[1]=f[1][h],g[2]=f[2][h],g[3]=f[3][h],f[0][h]=Xg[g[0]]^Vg[g[1]]^Wg[g[2]]^Ug[g[3]],f[1][h]=Ug[g[0]]^Xg[g[1]]^Vg[g[2]]^Wg[g[3]],f[2][h]=Wg[g[0]]^Ug[g[1]]^Xg[g[2]]^Vg[g[3]],f[3][h]=Vg[g[0]]^Wg[g[1]]^
Ug[g[2]]^Xg[g[3]]}Pg(d);Ng(d,Rg);Mg(d,0);d=Lg(d);if(8192>=d.length)d=String.fromCharCode.apply(null,d);else{e="";for(f=0;f<d.length;f+=8192)e+=String.fromCharCode.apply(null,Ta(d,f,f+8192));d=e}b+=d;e=c.splice(0,16)}return b.replace(/(\x00)+$/,"")}function Zg(a){a=Eg(a.substring(0,32));for(var b=32-a.length,c=0;c<b;c++)a.push(0);return a}function ah(a){var b=[];bh(new ch,a,b);return b.join("")}function ch(){}function bh(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(qa(b)){var d=
b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),bh(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),dh(d,c),c.push(":"),bh(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":dh(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;
case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}var eh={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},fh=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function dh(a,b){b.push('"',a.replace(fh,function(c){var d=eh[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),eh[c]=d);return d}),'"')}function gh(a){this.a=a}gh.prototype.set=function(a,b){ka(b)?this.a.set(a,
ah(b)):this.a.ra(a)};gh.prototype.get=function(a){try{var b=this.a.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c$2){throw"Storage: Invalid value was encountered";}};function hh(){}w(hh,yg);hh.prototype.clear=function(){var a=lb(this.ha(!0)),b=this;Ha(a,function(c){b.ra(c)})};function ih(a){this.a=a}w(ih,hh);function jh(a){if(!a.a)return!1;try{return a.a.setItem("__sak","1"),a.a.removeItem("__sak"),!0}catch(b){return!1}}l=ih.prototype;l.set=function(a,b){try{this.a.setItem(a,
b)}catch(c){if(0==this.a.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};l.get=function(a){a=this.a.getItem(a);if(!q(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};l.ra=function(a){this.a.removeItem(a)};l.ha=function(a){var b=0,c=this.a,d=new ib;d.next=function(){if(b>=c.length)throw hb;var e=c.key(b++);if(a)return e;e=c.getItem(e);if(!q(e))throw"Storage mechanism: Invalid value was encountered";return e};return d};l.clear=
function(){this.a.clear()};l.key=function(a){return this.a.key(a)};function kh(){var a=null;try{a=window.localStorage||null}catch(b){}this.a=a}w(kh,ih);function lh(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.a=a}w(lh,ih);function mh(a,b){this.g=a;this.a=b+"::"}w(mh,hh);mh.prototype.set=function(a,b){this.g.set(this.a+a,b)};mh.prototype.get=function(a){return this.g.get(this.a+a)};mh.prototype.ra=function(a){this.g.ra(this.a+a)};mh.prototype.ha=function(a){var b=this.g.ha(!0),c=this,
d=new ib;d.next=function(){for(var e=b.next();e.substr(0,c.a.length)!=c.a;)e=b.next();return a?e.substr(c.a.length):c.g.get(e)};return d};jh(new kh);var nh,oh=new lh;nh=jh(oh)?new mh(oh,"firebaseui"):null;var ph=new gh(nh),qh={name:"pendingEmailCredential",storage:ph},rh={name:"redirectStatus",storage:ph},sh={name:"redirectUrl",storage:ph},th={name:"emailForSignIn",storage:new gh(new zg(3600,"/"))},uh={name:"pendingEncryptedCredential",storage:new gh(new zg(3600,"/"))};function vh(a,b){return a.storage.get(b?
a.name+":"+b:a.name)}function wh(a,b){a.storage.a.ra(b?a.name+":"+b:a.name)}function xh(a,b,c){a.storage.set(c?a.name+":"+c:a.name,b)}function yh(a){return vh(sh,a)||null}function zh(a){a=vh(qh,a)||null;return Cg(a)}function Ah(a){wh(qh,a)}function Bh(a,b){xh(qh,Bg(a),b)}function Ch(a){return(a=vh(rh,a)||null)&&"undefined"!==typeof a.tenantId?new Dg(a.tenantId):null}function Dh(a,b){xh(rh,{tenantId:a.a},b)}function Eh(a,b){b=vh(th,b);var c=null;if(b)try{var d=$g(a,b),e=JSON.parse(d);c=e&&e.email||
null}catch(f){}return c}function Fh(a,b){b=vh(uh,b);var c=null;if(b)try{var d=$g(a,b);c=JSON.parse(d)}catch(e){}return Cg(c||null)}function Gh(a,b,c){xh(uh,Yg(a,JSON.stringify(Bg(b))),c)}function Hh(){this.W={}}function G(a,b,c){if(b.toLowerCase()in a.W)throw Error("Configuration "+b+" has already been defined.");a.W[b.toLowerCase()]=c}function Ih(a,b,c){if(!(b.toLowerCase()in a.W))throw Error("Configuration "+b+" is not defined.");a.W[b.toLowerCase()]=c}Hh.prototype.get=function(a){if(!(a.toLowerCase()in
this.W))throw Error("Configuration "+a+" is not defined.");return this.W[a.toLowerCase()]};function Jh(a,b){a=a.get(b);if(!a)throw Error("Configuration "+b+" is required.");return a}function Kh(){this.g=void 0;this.a={}}l=Kh.prototype;l.set=function(a,b){Lh(this,a,b,!1)};l.add=function(a,b){Lh(this,a,b,!0)};function Lh(a,b,c,d){for(var e=0;e<b.length;e++){var f=b.charAt(e);a.a[f]||(a.a[f]=new Kh);a=a.a[f]}if(d&&void 0!==a.g)throw Error('The collection already contains the key "'+b+'"');a.g=c}l.get=
function(a){a:{for(var b=this,c=0;c<a.length;c++)if(b=b.a[a.charAt(c)],!b){a=void 0;break a}a=b}return a?a.g:void 0};l.la=function(){var a=[];Mh(this,a);return a};function Mh(a,b){void 0!==a.g&&b.push(a.g);for(var c in a.a)Mh(a.a[c],b)}l.ja=function(){var a=[];Nh(this,"",a);return a};function Nh(a,b,c){void 0!==a.g&&c.push(b);for(var d in a.a)Nh(a.a[d],b+d,c)}l.clear=function(){this.a={};this.g=void 0};function Oh(a){this.a=a;this.g=new Kh;for(a=0;a<this.a.length;a++){var b=this.g.get("+"+this.a[a].b);
b?b.push(this.a[a]):this.g.add("+"+this.a[a].b,[this.a[a]])}}function Ph(a,b){a=a.g;var c={},d=0;void 0!==a.g&&(c[d]=a.g);for(;d<b.length;d++){var e=b.charAt(d);if(!(e in a.a))break;a=a.a[e];void 0!==a.g&&(c[d]=a.g)}for(var f in c)if(c.hasOwnProperty(f))return c[f];return[]}function Qh(a){for(var b=0;b<Rh.length;b++)if(Rh[b].c===a)return Rh[b];return null}function Sh(a){a=a.toUpperCase();for(var b=[],c=0;c<Rh.length;c++)Rh[c].f===a&&b.push(Rh[c]);return b}function Th(a){if(0<a.length&&"+"==a.charAt(0)){a=
a.substring(1);for(var b=[],c=0;c<Rh.length;c++)Rh[c].b==a&&b.push(Rh[c]);a=b}else a=Sh(a);return a}function Uh(a){a.sort(function(b,c){return b.name.localeCompare(c.name,"en")})}var Rh=[{name:"Afghanistan",c:"93-AF-0",b:"93",f:"AF"},{name:"\u00c5land Islands",c:"358-AX-0",b:"358",f:"AX"},{name:"Albania",c:"355-AL-0",b:"355",f:"AL"},{name:"Algeria",c:"213-DZ-0",b:"213",f:"DZ"},{name:"American Samoa",c:"1-AS-0",b:"1",f:"AS"},{name:"Andorra",c:"376-AD-0",b:"376",f:"AD"},{name:"Angola",c:"244-AO-0",
b:"244",f:"AO"},{name:"Anguilla",c:"1-AI-0",b:"1",f:"AI"},{name:"Antigua and Barbuda",c:"1-AG-0",b:"1",f:"AG"},{name:"Argentina",c:"54-AR-0",b:"54",f:"AR"},{name:"Armenia",c:"374-AM-0",b:"374",f:"AM"},{name:"Aruba",c:"297-AW-0",b:"297",f:"AW"},{name:"Ascension Island",c:"247-AC-0",b:"247",f:"AC"},{name:"Australia",c:"61-AU-0",b:"61",f:"AU"},{name:"Austria",c:"43-AT-0",b:"43",f:"AT"},{name:"Azerbaijan",c:"994-AZ-0",b:"994",f:"AZ"},{name:"Bahamas",c:"1-BS-0",b:"1",f:"BS"},{name:"Bahrain",c:"973-BH-0",
b:"973",f:"BH"},{name:"Bangladesh",c:"880-BD-0",b:"880",f:"BD"},{name:"Barbados",c:"1-BB-0",b:"1",f:"BB"},{name:"Belarus",c:"375-BY-0",b:"375",f:"BY"},{name:"Belgium",c:"32-BE-0",b:"32",f:"BE"},{name:"Belize",c:"501-BZ-0",b:"501",f:"BZ"},{name:"Benin",c:"229-BJ-0",b:"229",f:"BJ"},{name:"Bermuda",c:"1-BM-0",b:"1",f:"BM"},{name:"Bhutan",c:"975-BT-0",b:"975",f:"BT"},{name:"Bolivia",c:"591-BO-0",b:"591",f:"BO"},{name:"Bosnia and Herzegovina",c:"387-BA-0",b:"387",f:"BA"},{name:"Botswana",c:"267-BW-0",
b:"267",f:"BW"},{name:"Brazil",c:"55-BR-0",b:"55",f:"BR"},{name:"British Indian Ocean Territory",c:"246-IO-0",b:"246",f:"IO"},{name:"British Virgin Islands",c:"1-VG-0",b:"1",f:"VG"},{name:"Brunei",c:"673-BN-0",b:"673",f:"BN"},{name:"Bulgaria",c:"359-BG-0",b:"359",f:"BG"},{name:"Burkina Faso",c:"226-BF-0",b:"226",f:"BF"},{name:"Burundi",c:"257-BI-0",b:"257",f:"BI"},{name:"Cambodia",c:"855-KH-0",b:"855",f:"KH"},{name:"Cameroon",c:"237-CM-0",b:"237",f:"CM"},{name:"Canada",c:"1-CA-0",b:"1",f:"CA"},{name:"Cape Verde",
c:"238-CV-0",b:"238",f:"CV"},{name:"Caribbean Netherlands",c:"599-BQ-0",b:"599",f:"BQ"},{name:"Cayman Islands",c:"1-KY-0",b:"1",f:"KY"},{name:"Central African Republic",c:"236-CF-0",b:"236",f:"CF"},{name:"Chad",c:"235-TD-0",b:"235",f:"TD"},{name:"Chile",c:"56-CL-0",b:"56",f:"CL"},{name:"China",c:"86-CN-0",b:"86",f:"CN"},{name:"Christmas Island",c:"61-CX-0",b:"61",f:"CX"},{name:"Cocos [Keeling] Islands",c:"61-CC-0",b:"61",f:"CC"},{name:"Colombia",c:"57-CO-0",b:"57",f:"CO"},{name:"Comoros",c:"269-KM-0",
b:"269",f:"KM"},{name:"Democratic Republic Congo",c:"243-CD-0",b:"243",f:"CD"},{name:"Republic of Congo",c:"242-CG-0",b:"242",f:"CG"},{name:"Cook Islands",c:"682-CK-0",b:"682",f:"CK"},{name:"Costa Rica",c:"506-CR-0",b:"506",f:"CR"},{name:"C\u00f4te d'Ivoire",c:"225-CI-0",b:"225",f:"CI"},{name:"Croatia",c:"385-HR-0",b:"385",f:"HR"},{name:"Cuba",c:"53-CU-0",b:"53",f:"CU"},{name:"Cura\u00e7ao",c:"599-CW-0",b:"599",f:"CW"},{name:"Cyprus",c:"357-CY-0",b:"357",f:"CY"},{name:"Czech Republic",c:"420-CZ-0",
b:"420",f:"CZ"},{name:"Denmark",c:"45-DK-0",b:"45",f:"DK"},{name:"Djibouti",c:"253-DJ-0",b:"253",f:"DJ"},{name:"Dominica",c:"1-DM-0",b:"1",f:"DM"},{name:"Dominican Republic",c:"1-DO-0",b:"1",f:"DO"},{name:"East Timor",c:"670-TL-0",b:"670",f:"TL"},{name:"Ecuador",c:"593-EC-0",b:"593",f:"EC"},{name:"Egypt",c:"20-EG-0",b:"20",f:"EG"},{name:"El Salvador",c:"503-SV-0",b:"503",f:"SV"},{name:"Equatorial Guinea",c:"240-GQ-0",b:"240",f:"GQ"},{name:"Eritrea",c:"291-ER-0",b:"291",f:"ER"},{name:"Estonia",c:"372-EE-0",
b:"372",f:"EE"},{name:"Ethiopia",c:"251-ET-0",b:"251",f:"ET"},{name:"Falkland Islands [Islas Malvinas]",c:"500-FK-0",b:"500",f:"FK"},{name:"Faroe Islands",c:"298-FO-0",b:"298",f:"FO"},{name:"Fiji",c:"679-FJ-0",b:"679",f:"FJ"},{name:"Finland",c:"358-FI-0",b:"358",f:"FI"},{name:"France",c:"33-FR-0",b:"33",f:"FR"},{name:"French Guiana",c:"594-GF-0",b:"594",f:"GF"},{name:"French Polynesia",c:"689-PF-0",b:"689",f:"PF"},{name:"Gabon",c:"241-GA-0",b:"241",f:"GA"},{name:"Gambia",c:"220-GM-0",b:"220",f:"GM"},
{name:"Georgia",c:"995-GE-0",b:"995",f:"GE"},{name:"Germany",c:"49-DE-0",b:"49",f:"DE"},{name:"Ghana",c:"233-GH-0",b:"233",f:"GH"},{name:"Gibraltar",c:"350-GI-0",b:"350",f:"GI"},{name:"Greece",c:"30-GR-0",b:"30",f:"GR"},{name:"Greenland",c:"299-GL-0",b:"299",f:"GL"},{name:"Grenada",c:"1-GD-0",b:"1",f:"GD"},{name:"Guadeloupe",c:"590-GP-0",b:"590",f:"GP"},{name:"Guam",c:"1-GU-0",b:"1",f:"GU"},{name:"Guatemala",c:"502-GT-0",b:"502",f:"GT"},{name:"Guernsey",c:"44-GG-0",b:"44",f:"GG"},{name:"Guinea Conakry",
c:"224-GN-0",b:"224",f:"GN"},{name:"Guinea-Bissau",c:"245-GW-0",b:"245",f:"GW"},{name:"Guyana",c:"592-GY-0",b:"592",f:"GY"},{name:"Haiti",c:"509-HT-0",b:"509",f:"HT"},{name:"Heard Island and McDonald Islands",c:"672-HM-0",b:"672",f:"HM"},{name:"Honduras",c:"504-HN-0",b:"504",f:"HN"},{name:"Hong Kong",c:"852-HK-0",b:"852",f:"HK"},{name:"Hungary",c:"36-HU-0",b:"36",f:"HU"},{name:"Iceland",c:"354-IS-0",b:"354",f:"IS"},{name:"India",c:"91-IN-0",b:"91",f:"IN"},{name:"Indonesia",c:"62-ID-0",b:"62",f:"ID"},
{name:"Iran",c:"98-IR-0",b:"98",f:"IR"},{name:"Iraq",c:"964-IQ-0",b:"964",f:"IQ"},{name:"Ireland",c:"353-IE-0",b:"353",f:"IE"},{name:"Isle of Man",c:"44-IM-0",b:"44",f:"IM"},{name:"Israel",c:"972-IL-0",b:"972",f:"IL"},{name:"Italy",c:"39-IT-0",b:"39",f:"IT"},{name:"Jamaica",c:"1-JM-0",b:"1",f:"JM"},{name:"Japan",c:"81-JP-0",b:"81",f:"JP"},{name:"Jersey",c:"44-JE-0",b:"44",f:"JE"},{name:"Jordan",c:"962-JO-0",b:"962",f:"JO"},{name:"Kazakhstan",c:"7-KZ-0",b:"7",f:"KZ"},{name:"Kenya",c:"254-KE-0",b:"254",
f:"KE"},{name:"Kiribati",c:"686-KI-0",b:"686",f:"KI"},{name:"Kosovo",c:"377-XK-0",b:"377",f:"XK"},{name:"Kosovo",c:"381-XK-0",b:"381",f:"XK"},{name:"Kosovo",c:"386-XK-0",b:"386",f:"XK"},{name:"Kuwait",c:"965-KW-0",b:"965",f:"KW"},{name:"Kyrgyzstan",c:"996-KG-0",b:"996",f:"KG"},{name:"Laos",c:"856-LA-0",b:"856",f:"LA"},{name:"Latvia",c:"371-LV-0",b:"371",f:"LV"},{name:"Lebanon",c:"961-LB-0",b:"961",f:"LB"},{name:"Lesotho",c:"266-LS-0",b:"266",f:"LS"},{name:"Liberia",c:"231-LR-0",b:"231",f:"LR"},{name:"Libya",
c:"218-LY-0",b:"218",f:"LY"},{name:"Liechtenstein",c:"423-LI-0",b:"423",f:"LI"},{name:"Lithuania",c:"370-LT-0",b:"370",f:"LT"},{name:"Luxembourg",c:"352-LU-0",b:"352",f:"LU"},{name:"Macau",c:"853-MO-0",b:"853",f:"MO"},{name:"Macedonia",c:"389-MK-0",b:"389",f:"MK"},{name:"Madagascar",c:"261-MG-0",b:"261",f:"MG"},{name:"Malawi",c:"265-MW-0",b:"265",f:"MW"},{name:"Malaysia",c:"60-MY-0",b:"60",f:"MY"},{name:"Maldives",c:"960-MV-0",b:"960",f:"MV"},{name:"Mali",c:"223-ML-0",b:"223",f:"ML"},{name:"Malta",
c:"356-MT-0",b:"356",f:"MT"},{name:"Marshall Islands",c:"692-MH-0",b:"692",f:"MH"},{name:"Martinique",c:"596-MQ-0",b:"596",f:"MQ"},{name:"Mauritania",c:"222-MR-0",b:"222",f:"MR"},{name:"Mauritius",c:"230-MU-0",b:"230",f:"MU"},{name:"Mayotte",c:"262-YT-0",b:"262",f:"YT"},{name:"Mexico",c:"52-MX-0",b:"52",f:"MX"},{name:"Micronesia",c:"691-FM-0",b:"691",f:"FM"},{name:"Moldova",c:"373-MD-0",b:"373",f:"MD"},{name:"Monaco",c:"377-MC-0",b:"377",f:"MC"},{name:"Mongolia",c:"976-MN-0",b:"976",f:"MN"},{name:"Montenegro",
c:"382-ME-0",b:"382",f:"ME"},{name:"Montserrat",c:"1-MS-0",b:"1",f:"MS"},{name:"Morocco",c:"212-MA-0",b:"212",f:"MA"},{name:"Mozambique",c:"258-MZ-0",b:"258",f:"MZ"},{name:"Myanmar [Burma]",c:"95-MM-0",b:"95",f:"MM"},{name:"Namibia",c:"264-NA-0",b:"264",f:"NA"},{name:"Nauru",c:"674-NR-0",b:"674",f:"NR"},{name:"Nepal",c:"977-NP-0",b:"977",f:"NP"},{name:"Netherlands",c:"31-NL-0",b:"31",f:"NL"},{name:"New Caledonia",c:"687-NC-0",b:"687",f:"NC"},{name:"New Zealand",c:"64-NZ-0",b:"64",f:"NZ"},{name:"Nicaragua",
c:"505-NI-0",b:"505",f:"NI"},{name:"Niger",c:"227-NE-0",b:"227",f:"NE"},{name:"Nigeria",c:"234-NG-0",b:"234",f:"NG"},{name:"Niue",c:"683-NU-0",b:"683",f:"NU"},{name:"Norfolk Island",c:"672-NF-0",b:"672",f:"NF"},{name:"North Korea",c:"850-KP-0",b:"850",f:"KP"},{name:"Northern Mariana Islands",c:"1-MP-0",b:"1",f:"MP"},{name:"Norway",c:"47-NO-0",b:"47",f:"NO"},{name:"Oman",c:"968-OM-0",b:"968",f:"OM"},{name:"Pakistan",c:"92-PK-0",b:"92",f:"PK"},{name:"Palau",c:"680-PW-0",b:"680",f:"PW"},{name:"Palestinian Territories",
c:"970-PS-0",b:"970",f:"PS"},{name:"Panama",c:"507-PA-0",b:"507",f:"PA"},{name:"Papua New Guinea",c:"675-PG-0",b:"675",f:"PG"},{name:"Paraguay",c:"595-PY-0",b:"595",f:"PY"},{name:"Peru",c:"51-PE-0",b:"51",f:"PE"},{name:"Philippines",c:"63-PH-0",b:"63",f:"PH"},{name:"Poland",c:"48-PL-0",b:"48",f:"PL"},{name:"Portugal",c:"351-PT-0",b:"351",f:"PT"},{name:"Puerto Rico",c:"1-PR-0",b:"1",f:"PR"},{name:"Qatar",c:"974-QA-0",b:"974",f:"QA"},{name:"R\u00e9union",c:"262-RE-0",b:"262",f:"RE"},{name:"Romania",
c:"40-RO-0",b:"40",f:"RO"},{name:"Russia",c:"7-RU-0",b:"7",f:"RU"},{name:"Rwanda",c:"250-RW-0",b:"250",f:"RW"},{name:"Saint Barth\u00e9lemy",c:"590-BL-0",b:"590",f:"BL"},{name:"Saint Helena",c:"290-SH-0",b:"290",f:"SH"},{name:"St. Kitts",c:"1-KN-0",b:"1",f:"KN"},{name:"St. Lucia",c:"1-LC-0",b:"1",f:"LC"},{name:"Saint Martin",c:"590-MF-0",b:"590",f:"MF"},{name:"Saint Pierre and Miquelon",c:"508-PM-0",b:"508",f:"PM"},{name:"St. Vincent",c:"1-VC-0",b:"1",f:"VC"},{name:"Samoa",c:"685-WS-0",b:"685",f:"WS"},
{name:"San Marino",c:"378-SM-0",b:"378",f:"SM"},{name:"S\u00e3o Tom\u00e9 and Pr\u00edncipe",c:"239-ST-0",b:"239",f:"ST"},{name:"Saudi Arabia",c:"966-SA-0",b:"966",f:"SA"},{name:"Senegal",c:"221-SN-0",b:"221",f:"SN"},{name:"Serbia",c:"381-RS-0",b:"381",f:"RS"},{name:"Seychelles",c:"248-SC-0",b:"248",f:"SC"},{name:"Sierra Leone",c:"232-SL-0",b:"232",f:"SL"},{name:"Singapore",c:"65-SG-0",b:"65",f:"SG"},{name:"Sint Maarten",c:"1-SX-0",b:"1",f:"SX"},{name:"Slovakia",c:"421-SK-0",b:"421",f:"SK"},{name:"Slovenia",
c:"386-SI-0",b:"386",f:"SI"},{name:"Solomon Islands",c:"677-SB-0",b:"677",f:"SB"},{name:"Somalia",c:"252-SO-0",b:"252",f:"SO"},{name:"South Africa",c:"27-ZA-0",b:"27",f:"ZA"},{name:"South Georgia and the South Sandwich Islands",c:"500-GS-0",b:"500",f:"GS"},{name:"South Korea",c:"82-KR-0",b:"82",f:"KR"},{name:"South Sudan",c:"211-SS-0",b:"211",f:"SS"},{name:"Spain",c:"34-ES-0",b:"34",f:"ES"},{name:"Sri Lanka",c:"94-LK-0",b:"94",f:"LK"},{name:"Sudan",c:"249-SD-0",b:"249",f:"SD"},{name:"Suriname",c:"597-SR-0",
b:"597",f:"SR"},{name:"Svalbard and Jan Mayen",c:"47-SJ-0",b:"47",f:"SJ"},{name:"Swaziland",c:"268-SZ-0",b:"268",f:"SZ"},{name:"Sweden",c:"46-SE-0",b:"46",f:"SE"},{name:"Switzerland",c:"41-CH-0",b:"41",f:"CH"},{name:"Syria",c:"963-SY-0",b:"963",f:"SY"},{name:"Taiwan",c:"886-TW-0",b:"886",f:"TW"},{name:"Tajikistan",c:"992-TJ-0",b:"992",f:"TJ"},{name:"Tanzania",c:"255-TZ-0",b:"255",f:"TZ"},{name:"Thailand",c:"66-TH-0",b:"66",f:"TH"},{name:"Togo",c:"228-TG-0",b:"228",f:"TG"},{name:"Tokelau",c:"690-TK-0",
b:"690",f:"TK"},{name:"Tonga",c:"676-TO-0",b:"676",f:"TO"},{name:"Trinidad/Tobago",c:"1-TT-0",b:"1",f:"TT"},{name:"Tunisia",c:"216-TN-0",b:"216",f:"TN"},{name:"Turkey",c:"90-TR-0",b:"90",f:"TR"},{name:"Turkmenistan",c:"993-TM-0",b:"993",f:"TM"},{name:"Turks and Caicos Islands",c:"1-TC-0",b:"1",f:"TC"},{name:"Tuvalu",c:"688-TV-0",b:"688",f:"TV"},{name:"U.S. Virgin Islands",c:"1-VI-0",b:"1",f:"VI"},{name:"Uganda",c:"256-UG-0",b:"256",f:"UG"},{name:"Ukraine",c:"380-UA-0",b:"380",f:"UA"},{name:"United Arab Emirates",
c:"971-AE-0",b:"971",f:"AE"},{name:"United Kingdom",c:"44-GB-0",b:"44",f:"GB"},{name:"United States",c:"1-US-0",b:"1",f:"US"},{name:"Uruguay",c:"598-UY-0",b:"598",f:"UY"},{name:"Uzbekistan",c:"998-UZ-0",b:"998",f:"UZ"},{name:"Vanuatu",c:"678-VU-0",b:"678",f:"VU"},{name:"Vatican City",c:"379-VA-0",b:"379",f:"VA"},{name:"Venezuela",c:"58-VE-0",b:"58",f:"VE"},{name:"Vietnam",c:"84-VN-0",b:"84",f:"VN"},{name:"Wallis and Futuna",c:"681-WF-0",b:"681",f:"WF"},{name:"Western Sahara",c:"212-EH-0",b:"212",
f:"EH"},{name:"Yemen",c:"967-YE-0",b:"967",f:"YE"},{name:"Zambia",c:"260-ZM-0",b:"260",f:"ZM"},{name:"Zimbabwe",c:"263-ZW-0",b:"263",f:"ZW"}];Uh(Rh);var Vh=new Oh(Rh);function Wh(a,b){this.a=a;this.Aa=b}function Xh(a){a=Ua(a);var b=Ph(Vh,a);return 0<b.length?new Wh("1"==b[0].b?"1-US-0":b[0].c,Ua(a.substr(b[0].b.length+1))):null}function Yh(a){var b=Qh(a.a);if(!b)throw Error("Country ID "+a.a+" not found.");return"+"+b.b+a.Aa}function Zh(a,b){for(var c=0;c<a.length;c++)if(!Ma($h,a[c])&&(null!==ai&&
a[c]in ai||Ma(b,a[c])))return a[c];return null}var $h=["emailLink","password","phone"],ai={"facebook.com":"FacebookAuthProvider","github.com":"GithubAuthProvider","google.com":"GoogleAuthProvider",password:"EmailAuthProvider","twitter.com":"TwitterAuthProvider",phone:"PhoneAuthProvider"};function bi(){this.a=new Hh;G(this.a,"autoUpgradeAnonymousUsers");G(this.a,"callbacks");G(this.a,"credentialHelper",ci);G(this.a,"immediateFederatedRedirect",!1);G(this.a,"popupMode",!1);G(this.a,"privacyPolicyUrl");
G(this.a,"queryParameterForSignInSuccessUrl","signInSuccessUrl");G(this.a,"queryParameterForWidgetMode","mode");G(this.a,"signInFlow");G(this.a,"signInOptions");G(this.a,"signInSuccessUrl");G(this.a,"siteName");G(this.a,"tosUrl");G(this.a,"widgetUrl");G(this.a,"adminRestrictedOperation")}function di(a){var b=!!a.a.get("autoUpgradeAnonymousUsers");b&&!ei(a)&&og('Missing "signInFailure" callback: "signInFailure" callback needs to be provided when "autoUpgradeAnonymousUsers" is set to true.',void 0);
return b}function fi(a){a=a.a.get("signInOptions")||[];for(var b=[],c=0;c<a.length;c++){var d=a[c];d=ta(d)?d:{provider:d};d.provider&&b.push(d)}return b}function gi(a,b){a=fi(a);for(var c=0;c<a.length;c++)if(a[c].provider===b)return a[c];return null}function hi(a){return fi(a).map(function(b){return b.provider})}function ii(a,b){a=ji(a);for(var c=0;c<a.length;c++)if(a[c].providerId===b)return a[c];return null}function ji(a){return fi(a).map(function(b){if(ai[b.provider]||Ma(ki,b.provider)){b={providerId:b.provider,
S:b.providerName||null,V:b.fullLabel||null,ta:b.buttonColor||null,za:b.iconUrl?zc(Bc(b.iconUrl)).toString():null};for(var c in b)null===b[c]&&delete b[c];return b}return{providerId:b.provider,S:b.providerName||null,V:b.fullLabel||null,ta:b.buttonColor||null,za:b.iconUrl?zc(Bc(b.iconUrl)).toString():null,Ob:b.loginHintKey||null}})}function li(a){var b=gi(a,firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.GoogleAuthProvider.PROVIDER_ID),c;if(c=b&&b.clientId){a:{if("http:"===(window.location&&window.location.protocol)||"https:"===(window.location&&
window.location.protocol))for(d in a=a.a.get("credentialHelper"),mi)if(mi[d]===a){var d=mi[d];break a}d=ci}c=d===ni}return c?b.clientId||null:null}function oi(a){a=gi(a,firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.EmailAuthProvider.PROVIDER_ID);return!!(a&&a.disableSignUp&&a.disableSignUp.status)}function pi(a){a=a.a.get("adminRestrictedOperation")||null;return!(!a||!a.status)}function qi(a){var b=null;fi(a).forEach(function(d){d.provider==firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.PhoneAuthProvider.PROVIDER_ID&&ta(d.recaptchaParameters)&&!Array.isArray(d.recaptchaParameters)&&
(b=eb(d.recaptchaParameters))});if(b){var c=[];ri.forEach(function(d){"undefined"!==typeof b[d]&&(c.push(d),delete b[d])});c.length&&tg('The following provided "recaptchaParameters" keys are not allowed: '+c.join(", "))}return b}function si(a){return(a=a.a.get("adminRestrictedOperation"))&&a.adminEmail?a.adminEmail:null}function ti(a){if(a=a.a.get("adminRestrictedOperation")||null){var b=a.helpLink||null;if(b&&"string"===typeof b)return function(){rf(b)}}return null}function ui(a){return(a=gi(a,firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.EmailAuthProvider.PROVIDER_ID))&&
a.disableSignUp&&a.disableSignUp.adminEmail||null}function vi(a){if((a=gi(a,firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.EmailAuthProvider.PROVIDER_ID))&&a.disableSignUp){var b=a.disableSignUp.helpLink||null;if(b&&"string"===typeof b)return function(){rf(b)}}return null}function wi(a,b){a=(a=gi(a,b))&&a.scopes;return Array.isArray(a)?a:[]}function xi(a,b){a=(a=gi(a,b))&&a.customParameters;return ta(a)?(a=eb(a),b===firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.GoogleAuthProvider.PROVIDER_ID&&delete a.login_hint,b===firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.GithubAuthProvider.PROVIDER_ID&&
delete a.login,a):null}function yi(a){a=gi(a,firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.PhoneAuthProvider.PROVIDER_ID);var b=null;a&&"string"===typeof a.loginHint&&(b=Xh(a.loginHint));return a&&a.defaultNationalNumber||b&&b.Aa||null}function zi(a){var b=(a=gi(a,firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.PhoneAuthProvider.PROVIDER_ID))&&a.defaultCountry||null;b=b&&Sh(b);var c=null;a&&"string"===typeof a.loginHint&&(c=Xh(a.loginHint));return b&&b[0]||c&&Qh(c.a)||null}function Ai(a){a=gi(a,firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.PhoneAuthProvider.PROVIDER_ID);if(!a)return null;var b=
a.whitelistedCountries,c=a.blacklistedCountries;if("undefined"!==typeof b&&(!Array.isArray(b)||0==b.length))throw Error("WhitelistedCountries must be a non-empty array.");if("undefined"!==typeof c&&!Array.isArray(c))throw Error("BlacklistedCountries must be an array.");if(b&&c)throw Error("Both whitelistedCountries and blacklistedCountries are provided.");if(!b&&!c)return Rh;a=[];if(b){c={};for(var d=0;d<b.length;d++){var e=Th(b[d]);for(var f=0;f<e.length;f++)c[e[f].c]=e[f]}for(var g in c)c.hasOwnProperty(g)&&
a.push(c[g])}else{g={};for(b=0;b<c.length;b++)for(e=Th(c[b]),d=0;d<e.length;d++)g[e[d].c]=e[d];for(e=0;e<Rh.length;e++)null!==g&&Rh[e].c in g||a.push(Rh[e])}return a}function Bi(a){return Jh(a.a,"queryParameterForWidgetMode")}function H(a){var b=a.a.get("tosUrl")||null;a=a.a.get("privacyPolicyUrl")||null;b&&!a&&tg("Privacy Policy URL is missing, the link will not be displayed.");if(b&&a){if("function"===typeof b)return b;if("string"===typeof b)return function(){rf(b)}}return null}function J(a){var b=
a.a.get("tosUrl")||null,c=a.a.get("privacyPolicyUrl")||null;c&&!b&&tg("Term of Service URL is missing, the link will not be displayed.");if(b&&c){if("function"===typeof c)return c;if("string"===typeof c)return function(){rf(c)}}return null}function Ci(a){return(a=gi(a,firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.EmailAuthProvider.PROVIDER_ID))&&"undefined"!==typeof a.requireDisplayName?!!a.requireDisplayName:!0}function Di(a){a=gi(a,firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.EmailAuthProvider.PROVIDER_ID);return!(!a||a.signInMethod!==firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD)}
function Ei(a){a=gi(a,firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.EmailAuthProvider.PROVIDER_ID);return!(!a||!a.forceSameDevice)}function Fi(a){if(Di(a)){var b={url:tf(),handleCodeInApp:!0};(a=gi(a,firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.EmailAuthProvider.PROVIDER_ID))&&"function"===typeof a.emailLinkSignIn&&gb(b,a.emailLinkSignIn());a=b.url;var c=tf();c instanceof vb||(c=Jb(c));a instanceof vb||(a=Jb(a));var d=c;c=new vb(d);var e=!!a.j;e?wb(c,a.j):e=!!a.A;e?c.A=a.A:e=!!a.h;e?c.h=a.h:e=null!=a.C;var f=a.g;if(e)xb(c,a.C);else if(e=!!a.g)if("/"!=f.charAt(0)&&
(d.h&&!d.g?f="/"+f:(d=c.g.lastIndexOf("/"),-1!=d&&(f=c.g.substr(0,d+1)+f))),".."==f||"."==f)f="";else if(-1!=f.indexOf("./")||-1!=f.indexOf("/.")){d=0==f.lastIndexOf("/",0);f=f.split("/");for(var g=[],h=0;h<f.length;){var k=f[h++];"."==k?d&&h==f.length&&g.push(""):".."==k?((1<g.length||1==g.length&&""!=g[0])&&g.pop(),d&&h==f.length&&g.push("")):(g.push(k),d=!0)}f=g.join("/")}e?c.g=f:e=""!==a.a.toString();e?yb(c,zb(a.a)):e=!!a.s;e&&(c.s=a.s);b.url=c.toString();return b}return null}function Gi(a){var b=
!!a.a.get("immediateFederatedRedirect"),c=hi(a);a=Hi(a);return b&&1==c.length&&!Ma($h,c[0])&&a==Ii}function Hi(a){a=a.a.get("signInFlow");for(var b in Ji)if(Ji[b]==a)return Ji[b];return Ii}function Ki(a){return Li(a).signInSuccess||null}function Mi(a){return Li(a).signInSuccessWithAuthResult||null}function ei(a){return Li(a).signInFailure||null}function Li(a){return a.a.get("callbacks")||{}}var ni="googleyolo",ci="none",mi={nc:ni,NONE:ci},Ii="redirect",Ji={qc:"popup",rc:Ii},Ni={mc:"callback",RECOVER_EMAIL:"recoverEmail",
sc:"resetPassword",REVERT_SECOND_FACTOR_ADDITION:"revertSecondFactorAddition",tc:"select",uc:"signIn",VERIFY_AND_CHANGE_EMAIL:"verifyAndChangeEmail",VERIFY_EMAIL:"verifyEmail"},ki=["anonymous"],ri=["sitekey","tabindex","callback","expired-callback"];var Oi,Pi,Qi,Ri,K={};function L(a,b,c,d){K[a].apply(null,Array.prototype.slice.call(arguments,1))}function Si(a){if(a.classList)return a.classList;a=a.className;return q(a)&&a.match(/\S+/g)||[]}function Ti(a,b){return a.classList?a.classList.contains(b):
Ma(Si(a),b)}function Ui(a,b){a.classList?a.classList.add(b):Ti(a,b)||(a.className+=0<a.className.length?" "+b:b)}function Vi(a,b){a.classList?a.classList.remove(b):Ti(a,b)&&(a.className=Ja(Si(a),function(c){return c!=b}).join(" "))}function Wi(a){var b=a.type;switch(q(b)&&b.toLowerCase()){case "checkbox":case "radio":return a.checked?a.value:null;case "select-one":return b=a.selectedIndex,0<=b?a.options[b].value:null;case "select-multiple":b=[];for(var c,d=0;c=a.options[d];d++)c.selected&&b.push(c.value);
return b.length?b:null;default:return null!=a.value?a.value:null}}function Xi(a,b){var c=a.type;switch(q(c)&&c.toLowerCase()){case "checkbox":case "radio":a.checked=b;break;case "select-one":a.selectedIndex=-1;if(q(b))for(var d=0;c=a.options[d];d++)if(c.value==b){c.selected=!0;break}break;case "select-multiple":q(b)&&(b=[b]);for(d=0;c=a.options[d];d++)if(c.selected=!1,b)for(var e,f=0;e=b[f];f++)c.value==e&&(c.selected=!0);break;default:a.value=null!=b?b:""}}function Yi(a){if(a.altKey&&!a.ctrlKey||
a.metaKey||112<=a.keyCode&&123>=a.keyCode)return!1;if(Zi(a.keyCode))return!0;switch(a.keyCode){case 18:case 20:case 93:case 17:case 40:case 35:case 27:case 36:case 45:case 37:case 224:case 91:case 144:case 12:case 34:case 33:case 19:case 255:case 44:case 39:case 145:case 16:case 38:case 252:case 224:case 92:return!1;case 0:return!dc;default:return 166>a.keyCode||183<a.keyCode}}function $i(a,b,c,d,e,f){if(ec&&!mc("525"))return!0;if(gc&&e)return Zi(a);if(e&&!d)return!1;if(!dc){"number"==typeof b&&(b=
aj(b));var g=17==b||18==b||gc&&91==b;if((!c||gc)&&g||gc&&16==b&&(d||f))return!1}if((ec||bc)&&d&&c)switch(a){case 220:case 219:case 221:case 192:case 186:case 189:case 187:case 188:case 190:case 191:case 192:case 222:return!1}if(z&&d&&b==a)return!1;switch(a){case 13:return dc?f||e?!1:!(c&&d):!0;case 27:return!(ec||bc||dc)}return dc&&(d||e||f)?!1:Zi(a)}function Zi(a){if(48<=a&&57>=a||96<=a&&106>=a||65<=a&&90>=a||(ec||bc)&&0==a)return!0;switch(a){case 32:case 43:case 63:case 64:case 107:case 109:case 110:case 111:case 186:case 59:case 189:case 187:case 61:case 188:case 190:case 191:case 192:case 222:case 219:case 220:case 221:case 163:return!0;
case 173:return dc;default:return!1}}function aj(a){if(dc)a=bj(a);else if(gc&&ec)switch(a){case 93:a=91}return a}function bj(a){switch(a){case 61:return 187;case 59:return 186;case 173:return 189;case 224:return 91;case 0:return 224;default:return a}}function cj(a){E.call(this);this.a=a;ke(a,"keydown",this.g,!1,this);ke(a,"click",this.h,!1,this)}w(cj,E);cj.prototype.g=function(a){(13==a.keyCode||ec&&3==a.keyCode)&&dj(this,a)};cj.prototype.h=function(a){dj(this,a)};function dj(a,b){var c=new ej(b);
if(xe(a,c)){c=new fj(b);try{xe(a,c)}finally{b.stopPropagation()}}}cj.prototype.o=function(){cj.K.o.call(this);se(this.a,"keydown",this.g,!1,this);se(this.a,"click",this.h,!1,this);delete this.a};function fj(a){Zd.call(this,a.a);this.type="action"}w(fj,Zd);function ej(a){Zd.call(this,a.a);this.type="beforeaction"}w(ej,Zd);function gj(a){E.call(this);this.a=a;a=z?"focusout":"blur";this.g=ke(this.a,z?"focusin":"focus",this,!z);this.h=ke(this.a,a,this,!z)}w(gj,E);gj.prototype.handleEvent=function(a){var b=
new Zd(a.a);b.type="focusin"==a.type||"focus"==a.type?"focusin":"focusout";xe(this,b)};gj.prototype.o=function(){gj.K.o.call(this);te(this.g);te(this.h);delete this.a};function hj(a,b){E.call(this);this.g=a||1;this.a=b||n;this.h=r(this.gc,this);this.j=Aa()}w(hj,E);l=hj.prototype;l.Ka=!1;l.aa=null;l.gc=function(){if(this.Ka){var a=Aa()-this.j;0<a&&a<.8*this.g?this.aa=this.a.setTimeout(this.h,this.g-a):(this.aa&&(this.a.clearTimeout(this.aa),this.aa=null),xe(this,"tick"),this.Ka&&(ij(this),this.start()))}};
l.start=function(){this.Ka=!0;this.aa||(this.aa=this.a.setTimeout(this.h,this.g),this.j=Aa())};function ij(a){a.Ka=!1;a.aa&&(a.a.clearTimeout(a.aa),a.aa=null)}l.o=function(){hj.K.o.call(this);ij(this);delete this.a};function jj(a,b){if(sa(a))b&&(a=r(a,b));else if(a&&"function"==typeof a.handleEvent)a=r(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(0)?-1:n.setTimeout(a,0)}function kj(a){Pd.call(this);this.g=a;this.a={}}w(kj,Pd);var lj=[];function mj(a,b,c,
d){qa(c)||(c&&(lj[0]=c.toString()),c=lj);for(var e=0;e<c.length;e++){var f=ke(b,c[e],d||a.handleEvent,!1,a.g||a);if(!f)break;a.a[f.key]=f}}function nj(a){db(a.a,function(b,c){this.a.hasOwnProperty(c)&&te(b)},a);a.a={}}kj.prototype.o=function(){kj.K.o.call(this);nj(this)};kj.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function oj(a){E.call(this);this.a=null;this.g=a;a=z||bc||ec&&!mc("531")&&"TEXTAREA"==a.tagName;this.h=new kj(this);mj(this.h,this.g,a?
["keydown","paste","cut","drop","input"]:"input",this)}w(oj,E);oj.prototype.handleEvent=function(a){if("input"==a.type)z&&mc(10)&&0==a.keyCode&&0==a.j||(pj(this),xe(this,qj(a)));else if("keydown"!=a.type||Yi(a)){var b="keydown"==a.type?this.g.value:null;z&&229==a.keyCode&&(b=null);var c=qj(a);pj(this);this.a=jj(function(){this.a=null;this.g.value!=b&&xe(this,c)},this)}};function pj(a){null!=a.a&&(n.clearTimeout(a.a),a.a=null)}function qj(a){a=new Zd(a.a);a.type="input";return a}oj.prototype.o=function(){oj.K.o.call(this);
this.h.m();pj(this);delete this.g};function rj(a,b){E.call(this);a&&(this.Oa&&sj(this),this.qa=a,this.Na=ke(this.qa,"keypress",this,b),this.Ya=ke(this.qa,"keydown",this.Jb,b,this),this.Oa=ke(this.qa,"keyup",this.Kb,b,this))}w(rj,E);l=rj.prototype;l.qa=null;l.Na=null;l.Ya=null;l.Oa=null;l.R=-1;l.X=-1;l.Ua=!1;var tj={3:13,12:144,63232:38,63233:40,63234:37,63235:39,63236:112,63237:113,63238:114,63239:115,63240:116,63241:117,63242:118,63243:119,63244:120,63245:121,63246:122,63247:123,63248:44,63272:46,
63273:36,63275:35,63276:33,63277:34,63289:144,63302:45},uj={Up:38,Down:40,Left:37,Right:39,Enter:13,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"U+007F":46,Home:36,End:35,PageUp:33,PageDown:34,Insert:45},vj=!ec||mc("525"),wj=gc&&dc;l=rj.prototype;l.Jb=function(a){if(ec||bc)if(17==this.R&&!a.ctrlKey||18==this.R&&!a.altKey||gc&&91==this.R&&!a.metaKey)this.X=this.R=-1;-1==this.R&&(a.ctrlKey&&17!=a.keyCode?this.R=17:a.altKey&&18!=a.keyCode?this.R=18:a.metaKey&&
91!=a.keyCode&&(this.R=91));vj&&!$i(a.keyCode,this.R,a.shiftKey,a.ctrlKey,a.altKey,a.metaKey)?this.handleEvent(a):(this.X=aj(a.keyCode),wj&&(this.Ua=a.altKey))};l.Kb=function(a){this.X=this.R=-1;this.Ua=a.altKey};l.handleEvent=function(a){var b=a.a,c=b.altKey;if(z&&"keypress"==a.type){var d=this.X;var e=13!=d&&27!=d?b.keyCode:0}else(ec||bc)&&"keypress"==a.type?(d=this.X,e=0<=b.charCode&&63232>b.charCode&&Zi(d)?b.charCode:0):ac&&!ec?(d=this.X,e=Zi(d)?b.keyCode:0):("keypress"==a.type?(wj&&(c=this.Ua),
b.keyCode==b.charCode?32>b.keyCode?(d=b.keyCode,e=0):(d=this.X,e=b.charCode):(d=b.keyCode||this.X,e=b.charCode||0)):(d=b.keyCode||this.X,e=b.charCode||0),gc&&63==e&&224==d&&(d=191));var f=d=aj(d);d?63232<=d&&d in tj?f=tj[d]:25==d&&a.shiftKey&&(f=9):b.keyIdentifier&&b.keyIdentifier in uj&&(f=uj[b.keyIdentifier]);dc&&vj&&"keypress"==a.type&&!$i(f,this.R,a.shiftKey,a.ctrlKey,c,a.metaKey)||(a=f==this.R,this.R=f,b=new xj(f,e,a,b),b.altKey=c,xe(this,b))};l.N=function(){return this.qa};function sj(a){a.Na&&
(te(a.Na),te(a.Ya),te(a.Oa),a.Na=null,a.Ya=null,a.Oa=null);a.qa=null;a.R=-1;a.X=-1}l.o=function(){rj.K.o.call(this);sj(this)};function xj(a,b,c,d){Zd.call(this,d);this.type="key";this.keyCode=a;this.j=b;this.repeat=c}w(xj,Zd);function yj(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}yj.prototype.toString=function(){return"("+this.top+"t, "+this.right+"r, "+this.bottom+"b, "+this.left+"l)"};yj.prototype.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=
Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};yj.prototype.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};yj.prototype.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function zj(a,b){var c=Sc(a);return c.defaultView&&c.defaultView.getComputedStyle&&(a=
c.defaultView.getComputedStyle(a,null))?a[b]||a.getPropertyValue(b)||"":""}function Aj(a){try{var b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}z&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}function Bj(a,b){b=b||Yc(document);var c=b||Yc(document);var d=Cj(a),e=Cj(c);if(!z||9<=Number(nc)){g=zj(c,"borderLeftWidth");var f=zj(c,"borderRightWidth");h=zj(c,"borderTopWidth");
k=zj(c,"borderBottomWidth");f=new yj(parseFloat(h),parseFloat(f),parseFloat(k),parseFloat(g))}else{var g=Dj(c,"borderLeft");f=Dj(c,"borderRight");var h=Dj(c,"borderTop"),k=Dj(c,"borderBottom");f=new yj(h,f,k,g)}c==Yc(document)?(g=d.a-c.scrollLeft,d=d.g-c.scrollTop,!z||10<=Number(nc)||(g+=f.left,d+=f.top)):(g=d.a-e.a-f.left,d=d.g-e.g-f.top);e=a.offsetWidth;f=a.offsetHeight;h=ec&&!e&&!f;ka(e)&&!h||!a.getBoundingClientRect?a=new Pc(e,f):(a=Aj(a),a=new Pc(a.right-a.left,a.bottom-a.top));e=c.clientHeight-
a.height;f=c.scrollLeft;h=c.scrollTop;f+=Math.min(g,Math.max(g-(c.clientWidth-a.width),0));h+=Math.min(d,Math.max(d-e,0));c=new Oc(f,h);b.scrollLeft=c.a;b.scrollTop=c.g}function Cj(a){var b=Sc(a),c=new Oc(0,0);var d=b?Sc(b):document;d=!z||9<=Number(nc)||"CSS1Compat"==Qc(d).a.compatMode?d.documentElement:d.body;if(a==d)return c;a=Aj(a);d=Qc(b).a;b=Yc(d);d=d.parentWindow||d.defaultView;b=z&&mc("10")&&d.pageYOffset!=b.scrollTop?new Oc(b.scrollLeft,b.scrollTop):new Oc(d.pageXOffset||b.scrollLeft,d.pageYOffset||
b.scrollTop);c.a=a.left+b.a;c.g=a.top+b.g;return c}var Ej={thin:2,medium:4,thick:6};function Dj(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;if(c in Ej)a=Ej[c];else if(/^\d+px?$/.test(c))a=parseInt(c,10);else{b=a.style.left;var d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=c;c=a.style.pixelLeft;a.style.left=b;a.runtimeStyle.left=d;a=+c}return a}function Fj(){}oa(Fj);Fj.prototype.a=0;function Gj(a){E.call(this);
this.s=a||Qc();this.cb=null;this.na=!1;this.g=null;this.L=void 0;this.oa=this.Ea=this.Y=null}w(Gj,E);l=Gj.prototype;l.Lb=Fj.Xa();l.N=function(){return this.g};function M(a,b){return a.g?Vc(b,a.g||a.s.a):null}function Hj(a){a.L||(a.L=new kj(a));return a.L}l.Za=function(a){if(this.Y&&this.Y!=a)throw Error("Method not supported");Gj.K.Za.call(this,a)};l.kb=function(){this.g=this.s.a.createElement("DIV")};l.render=function(a){if(this.na)throw Error("Component already rendered");this.g||this.kb();a?a.insertBefore(this.g,
null):this.s.a.body.appendChild(this.g);this.Y&&!this.Y.na||this.v()};l.v=function(){this.na=!0;Ij(this,function(a){!a.na&&a.N()&&a.v()})};l.ya=function(){Ij(this,function(a){a.na&&a.ya()});this.L&&nj(this.L);this.na=!1};l.o=function(){this.na&&this.ya();this.L&&(this.L.m(),delete this.L);Ij(this,function(a){a.m()});this.g&&Zc(this.g);this.Y=this.g=this.oa=this.Ea=null;Gj.K.o.call(this)};function Ij(a,b){a.Ea&&Ha(a.Ea,b,void 0)}l.removeChild=function(a,b){if(a){var c=q(a)?a:a.cb||(a.cb=":"+(a.Lb.a++).toString(36));
this.oa&&c?(a=this.oa,a=(null!==a&&c in a?a[c]:void 0)||null):a=null;if(c&&a){var d=this.oa;c in d&&delete d[c];Na(this.Ea,a);b&&(a.ya(),a.g&&Zc(a.g));b=a;if(null==b)throw Error("Unable to set parent component");b.Y=null;Gj.K.Za.call(b,null)}}if(!a)throw Error("Child is not in parent component");return a};function N(a,b){var c=ad(a,"firebaseui-textfield");b?(Vi(a,"firebaseui-input-invalid"),Ui(a,"firebaseui-input"),c&&Vi(c,"firebaseui-textfield-invalid")):(Vi(a,"firebaseui-input"),Ui(a,"firebaseui-input-invalid"),
c&&Ui(c,"firebaseui-textfield-invalid"))}function Jj(a,b,c){b=new oj(b);Sd(a,za(Td,b));mj(Hj(a),b,"input",c)}function Kj(a,b,c){b=new rj(b);Sd(a,za(Td,b));mj(Hj(a),b,"key",function(d){13==d.keyCode&&(d.stopPropagation(),d.preventDefault(),c(d))})}function Lj(a,b,c){b=new gj(b);Sd(a,za(Td,b));mj(Hj(a),b,"focusin",c)}function Mj(a,b,c){b=new gj(b);Sd(a,za(Td,b));mj(Hj(a),b,"focusout",c)}function O(a,b,c){b=new cj(b);Sd(a,za(Td,b));mj(Hj(a),b,"action",function(d){d.stopPropagation();d.preventDefault();
c(d)})}function Nj(a){Ui(a,"firebaseui-hidden")}function Oj(a,b){b&&$c(a,b);Vi(a,"firebaseui-hidden")}function Pj(a){return!Ti(a,"firebaseui-hidden")&&"none"!=a.style.display}function Qj(a){a=a||{};var b=a.email,c=a.disabled,d='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-email-input">';d=a.wc?d+"Enter new email address":d+"Email";d+='</label><input type="email" name="email" id="ui-sign-in-email-input" autocomplete="username" class="mdl-textfield__input firebaseui-input firebaseui-id-email" value="'+
ud(null!=b?b:"")+'"'+(c?"disabled":"")+'></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-email-error"></p></div>';return B(d)}function Rj(a){a=a||{};a=a.label;var b='<button type="submit" class="firebaseui-id-submit firebaseui-button mdl-button mdl-js-button mdl-button--raised mdl-button--colored">';b=a?b+A(a):b+"Next";return B(b+"</button>")}function Sj(){var a=""+Rj({label:D("Sign In")});return B(a)}function Tj(){var a=
""+Rj({label:D("Save")});return B(a)}function Uj(){var a=""+Rj({label:D("Continue")});return B(a)}function Vj(a){a=a||{};a=a.label;var b='<div class="firebaseui-new-password-component"><div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-new-password-input">';b=a?b+A(a):b+"Choose password";return B(b+'</label><input type="password" name="newPassword" id="ui-sign-in-new-password-input" autocomplete="new-password" class="mdl-textfield__input firebaseui-input firebaseui-id-new-password"></div><a href="javascript:void(0)" class="firebaseui-input-floating-button firebaseui-id-password-toggle firebaseui-input-toggle-on firebaseui-input-toggle-blur"></a><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-new-password-error"></p></div></div>')}
function Wj(){var a={};var b='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-password-input">';b=a.current?b+"Current password":b+"Password";return B(b+'</label><input type="password" name="password" id="ui-sign-in-password-input" autocomplete="current-password" class="mdl-textfield__input firebaseui-input firebaseui-id-password"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-password-error"></p></div>')}
function Xj(){return B('<a class="firebaseui-link firebaseui-id-secondary-link" href="javascript:void(0)">Trouble signing in?</a>')}function Yj(a){a=a||{};a=a.label;var b='<button class="firebaseui-id-secondary-link firebaseui-button mdl-button mdl-js-button mdl-button--primary">';b=a?b+A(a):b+"Cancel";return B(b+"</button>")}function Zj(a){var b="";a.F&&a.D&&(b+='<ul class="firebaseui-tos-list firebaseui-tos"><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a></li><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a></li></ul>');
return B(b)}function ak(a){var b="";a.F&&a.D&&(b+='<p class="firebaseui-tos firebaseui-tospp-full-message">By continuing, you are indicating that you accept our <a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a> and <a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a>.</p>');return B(b)}function bk(a){a='<div class="firebaseui-info-bar firebaseui-id-info-bar"><p class="firebaseui-info-bar-message">'+
A(a.message)+'&nbsp;&nbsp;<a href="javascript:void(0)" class="firebaseui-link firebaseui-id-dismiss-info-bar">Dismiss</a></p></div>';return B(a)}bk.a="firebaseui.auth.soy2.element.infoBar";function ck(a){var b=a.content;a=a.Ab;return B('<dialog class="mdl-dialog firebaseui-dialog firebaseui-id-dialog'+(a?" "+ud(a):"")+'">'+A(b)+"</dialog>")}function dk(a){var b=a.message;return B(ck({content:td('<div class="firebaseui-dialog-icon-wrapper"><div class="'+ud(a.Ma)+' firebaseui-dialog-icon"></div></div><div class="firebaseui-progress-dialog-message">'+
A(b)+"</div>")}))}dk.a="firebaseui.auth.soy2.element.progressDialog";function ek(a){var b='<div class="firebaseui-list-box-actions">';a=a.items;for(var c=a.length,d=0;d<c;d++){var e=a[d];b+='<button type="button" data-listboxid="'+ud(e.id)+'" class="mdl-button firebaseui-id-list-box-dialog-button firebaseui-list-box-dialog-button">'+(e.Ma?'<div class="firebaseui-list-box-icon-wrapper"><div class="firebaseui-list-box-icon '+ud(e.Ma)+'"></div></div>':"")+'<div class="firebaseui-list-box-label-wrapper">'+
A(e.label)+"</div></button>"}b=""+ck({Ab:D("firebaseui-list-box-dialog"),content:td(b+"</div>")});return B(b)}ek.a="firebaseui.auth.soy2.element.listBoxDialog";function fk(a){a=a||{};return B(a.tb?'<div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>':'<div class="mdl-progress mdl-js-progress mdl-progress__indeterminate firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>')}fk.a="firebaseui.auth.soy2.element.busyIndicator";
function gk(a,b){a=a||{};a=a.ga;return C(a.S?a.S:b.hb[a.providerId]?""+b.hb[a.providerId]:a.providerId&&0==a.providerId.indexOf("saml.")?a.providerId.substring(5):a.providerId&&0==a.providerId.indexOf("oidc.")?a.providerId.substring(5):""+a.providerId)}function hk(a){ik(a,"upgradeElement")}function jk(a){ik(a,"downgradeElements")}var kk=["mdl-js-textfield","mdl-js-progress","mdl-js-spinner","mdl-js-button"];function ik(a,b){a&&window.componentHandler&&window.componentHandler[b]&&kk.forEach(function(c){if(Ti(a,
c))window.componentHandler[b](a);Ha(Tc(c,a),function(d){window.componentHandler[b](d)})})}function lk(a,b,c){mk.call(this);document.body.appendChild(a);a.showModal||window.dialogPolyfill.registerDialog(a);a.showModal();hk(a);b&&O(this,a,function(f){var g=a.getBoundingClientRect();(f.clientX<g.left||g.left+g.width<f.clientX||f.clientY<g.top||g.top+g.height<f.clientY)&&mk.call(this)});if(!c){var d=this.N().parentElement||this.N().parentNode;if(d){var e=this;this.da=function(){if(a.open){var f=a.getBoundingClientRect().height,
g=d.getBoundingClientRect().height,h=d.getBoundingClientRect().top-document.body.getBoundingClientRect().top,k=d.getBoundingClientRect().left-document.body.getBoundingClientRect().left,p=a.getBoundingClientRect().width,t=d.getBoundingClientRect().width;a.style.top=(h+(g-f)/2).toString()+"px";f=k+(t-p)/2;a.style.left=f.toString()+"px";a.style.right=(document.body.getBoundingClientRect().width-f-p).toString()+"px"}else window.removeEventListener("resize",e.da)};this.da();window.addEventListener("resize",
this.da,!1)}}}function mk(){var a=nk.call(this);a&&(jk(a),a.open&&a.close(),Zc(a),this.da&&window.removeEventListener("resize",this.da))}function nk(){return Vc("firebaseui-id-dialog")}function ok(){Zc(pk.call(this))}function pk(){return M(this,"firebaseui-id-info-bar")}function qk(){return M(this,"firebaseui-id-dismiss-info-bar")}var rk={xa:{"google.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg","github.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/github.svg",
"facebook.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg","twitter.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/twitter.svg",password:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/mail.svg",phone:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/phone.svg",anonymous:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/anonymous.png","microsoft.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/microsoft.svg","yahoo.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/yahoo.svg",
"apple.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/apple.png",saml:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/saml.svg",oidc:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/oidc.svg"},wa:{"google.com":"#ffffff","github.com":"#333333","facebook.com":"#3b5998","twitter.com":"#55acee",password:"#db4437",phone:"#02bd7e",anonymous:"#f4b400","microsoft.com":"#2F2F2F","yahoo.com":"#720E9E","apple.com":"#000000",saml:"#007bff",oidc:"#007bff"},hb:{"google.com":"Google",
"github.com":"GitHub","facebook.com":"Facebook","twitter.com":"Twitter",password:"Password",phone:"Phone",anonymous:"Guest","microsoft.com":"Microsoft","yahoo.com":"Yahoo","apple.com":"Apple"}};function sk(a,b,c){Yd.call(this,a,b);for(var d in c)this[d]=c[d]}w(sk,Yd);function P(a,b,c,d,e){Gj.call(this,c);this.fb=a;this.eb=b;this.Fa=!1;this.Ga=d||null;this.A=this.ca=null;this.Z=eb(rk);gb(this.Z,e||{})}w(P,Gj);l=P.prototype;l.kb=function(){var a=hd(this.fb,this.eb,this.Z,this.s);hk(a);this.g=a};l.v=
function(){P.K.v.call(this);Be(Q(this),new sk("pageEnter",Q(this),{pageId:this.Ga}));if(this.bb()&&this.Z.F){var a=this.Z.F;O(this,this.bb(),function(){a()})}if(this.ab()&&this.Z.D){var b=this.Z.D;O(this,this.ab(),function(){b()})}};l.ya=function(){Be(Q(this),new sk("pageExit",Q(this),{pageId:this.Ga}));P.K.ya.call(this)};l.o=function(){window.clearTimeout(this.ca);this.eb=this.fb=this.ca=null;this.Fa=!1;this.A=null;jk(this.N());P.K.o.call(this)};function tk(a){a.Fa=!0;var b=Ti(a.N(),"firebaseui-use-spinner");
a.ca=window.setTimeout(function(){a.N()&&null===a.A&&(a.A=hd(fk,{tb:b},null,a.s),a.N().appendChild(a.A),hk(a.A))},500)}l.I=function(a,b,c,d){function e(){if(f.T)return null;f.Fa=!1;window.clearTimeout(f.ca);f.ca=null;f.A&&(jk(f.A),Zc(f.A),f.A=null)}var f=this;if(f.Fa)return null;tk(f);return a.apply(null,b).then(c,d).then(e,e)};function Q(a){return a.N().parentElement||a.N().parentNode}function uk(a,b,c){Kj(a,b,function(){c.focus()})}function vk(a,b,c){Kj(a,b,function(){c()})}u(P.prototype,{a:function(a){ok.call(this);
var b=hd(bk,{message:a},null,this.s);this.N().appendChild(b);O(this,qk.call(this),function(){Zc(b)})},yc:ok,Ac:pk,zc:qk,$:function(a,b){a=hd(dk,{Ma:a,message:b},null,this.s);lk.call(this,a)},h:mk,Cb:nk,Cc:function(){return M(this,"firebaseui-tos")},bb:function(){return M(this,"firebaseui-tos-link")},ab:function(){return M(this,"firebaseui-pp-link")},Dc:function(){return M(this,"firebaseui-tos-list")}});function wk(a,b,c){a=a||{};b=a.Va;var d=a.ia;a='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-sign-in"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in with email</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+
Qj(a)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(b?Yj(null):"")+Rj(null)+'</div></div><div class="firebaseui-card-footer">'+(d?ak(c):Zj(c))+"</div></form></div>";return B(a)}wk.a="firebaseui.auth.soy2.page.signIn";function xk(a,b,c){a=a||{};b=a.ia;a='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-in"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content">'+
Qj(a)+Wj()+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+Xj()+'</div><div class="firebaseui-form-actions">'+Sj()+'</div></div><div class="firebaseui-card-footer">'+(b?ak(c):Zj(c))+"</div></form></div>";return B(a)}xk.a="firebaseui.auth.soy2.page.passwordSignIn";function yk(a,b,c){a=a||{};var d=a.Tb;b=a.Ta;var e=a.ia,f='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-up"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Create account</h1></div><div class="firebaseui-card-content">'+
Qj(a);d?(a=a||{},a=a.name,a='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-name-input">First &amp; last name</label><input type="text" name="name" id="ui-sign-in-name-input" autocomplete="name" class="mdl-textfield__input firebaseui-input firebaseui-id-name" value="'+ud(null!=a?a:"")+'"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-name-error"></p></div>',
a=B(a)):a="";c=f+a+Vj(null)+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(b?Yj(null):"")+Tj()+'</div></div><div class="firebaseui-card-footer">'+(e?ak(c):Zj(c))+"</div></form></div>";return B(c)}yk.a="firebaseui.auth.soy2.page.passwordSignUp";function zk(a,b,c){a=a||{};b=a.Ta;a='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Recover password</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Get instructions sent to this email that explain how to reset your password</p>'+
Qj(a)+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(b?Yj(null):"")+Rj({label:D("Send")})+'</div></div><div class="firebaseui-card-footer">'+Zj(c)+"</div></form></div>";return B(a)}zk.a="firebaseui.auth.soy2.page.passwordRecovery";function Ak(a,b,c){b=a.G;var d="";a="Follow the instructions sent to <strong>"+(A(a.email)+"</strong> to recover your password");d+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery-email-sent"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Check your email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+
a+'</p></div><div class="firebaseui-card-actions">';b&&(d+='<div class="firebaseui-form-actions">'+Rj({label:D("Done")})+"</div>");d+='</div><div class="firebaseui-card-footer">'+Zj(c)+"</div></div>";return B(d)}Ak.a="firebaseui.auth.soy2.page.passwordRecoveryEmailSent";function Bk(a,b,c){return B('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-callback"><div class="firebaseui-callback-indicator-container">'+fk(null,null,c)+"</div></div>")}Bk.a="firebaseui.auth.soy2.page.callback";
function Ck(a,b,c){return B('<div class="firebaseui-container firebaseui-id-page-spinner">'+fk({tb:!0},null,c)+"</div>")}Ck.a="firebaseui.auth.soy2.page.spinner";function Dk(){return B('<div class="firebaseui-container firebaseui-id-page-blank firebaseui-use-spinner"></div>')}Dk.a="firebaseui.auth.soy2.page.blank";function Ek(a,b,c){b="";a="A sign-in email with additional instructions was sent to <strong>"+(A(a.email)+"</strong>. Check your email to complete sign-in.");var d=B('<a class="firebaseui-link firebaseui-id-trouble-getting-email-link" href="javascript:void(0)">Trouble getting email?</a>');
b+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-sent"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign-in email sent</h1></div><div class="firebaseui-card-content"><div class="firebaseui-email-sent"></div><p class="firebaseui-text">'+a+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+d+'</div><div class="firebaseui-form-actions">'+Yj({label:D("Back")})+'</div></div><div class="firebaseui-card-footer">'+
Zj(c)+"</div></form></div>";return B(b)}Ek.a="firebaseui.auth.soy2.page.emailLinkSignInSent";function Fk(a,b,c){a='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-not-received"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Trouble getting email?</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Try these common fixes:<ul><li>Check if the email was marked as spam or filtered.</li><li>Check your internet connection.</li><li>Check that you did not misspell your email.</li><li>Check that your inbox space is not running out or other inbox settings related issues.</li></ul></p><p class="firebaseui-text">If the steps above didn\'t work, you can resend the email. Note that this will deactivate the link in the older email.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+
B('<a class="firebaseui-link firebaseui-id-resend-email-link" href="javascript:void(0)">Resend</a>')+'</div><div class="firebaseui-form-actions">'+Yj({label:D("Back")})+'</div></div><div class="firebaseui-card-footer">'+Zj(c)+"</div></form></div>";return B(a)}Fk.a="firebaseui.auth.soy2.page.emailNotReceived";function Gk(a,b,c){a='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-confirmation"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Confirm email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Confirm your email to complete sign in</p><div class="firebaseui-relative-wrapper">'+
Qj(a)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Yj(null)+Rj(null)+'</div></div><div class="firebaseui-card-footer">'+Zj(c)+"</div></form></div>";return B(a)}Gk.a="firebaseui.auth.soy2.page.emailLinkSignInConfirmation";function Hk(){var a='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-different-device-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">New device or browser detected</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Try opening the link using the same device or browser where you started the sign-in process.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+
Yj({label:D("Dismiss")})+"</div></div></div>";return B(a)}Hk.a="firebaseui.auth.soy2.page.differentDeviceError";function Ik(){var a='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-anonymous-user-mismatch"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Session ended</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">The session associated with this sign-in request has either expired or was cleared.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+
Yj({label:D("Dismiss")})+"</div></div></div>";return B(a)}Ik.a="firebaseui.auth.soy2.page.anonymousUserMismatch";function Jk(a,b,c){b="";a="You\u2019ve already used <strong>"+(A(a.email)+"</strong> to sign in. Enter your password for that account.");b+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">'+
a+"</p>"+Wj()+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+Xj()+'</div><div class="firebaseui-form-actions">'+Sj()+'</div></div><div class="firebaseui-card-footer">'+Zj(c)+"</div></form></div>";return B(b)}Jk.a="firebaseui.auth.soy2.page.passwordLinking";function Kk(a,b,c){var d=a.email;b="";a=""+gk(a,c);a=D(a);d="You\u2019ve already used <strong>"+(A(d)+("</strong>. You can connect your <strong>"+(A(a)+("</strong> account with <strong>"+(A(d)+"</strong> by signing in with email link below.")))));
a="For this flow to successfully connect your "+(A(a)+" account with this email, you have to open the link on the same device or browser.");b+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text firebaseui-text-justify">'+
d+'<p class="firebaseui-text firebaseui-text-justify">'+a+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Sj()+'</div></div><div class="firebaseui-card-footer">'+Zj(c)+"</div></form></div>";return B(b)}Kk.a="firebaseui.auth.soy2.page.emailLinkSignInLinking";function Lk(a,b,c){b="";var d=""+gk(a,c);d=D(d);a="You originally intended to connect <strong>"+(A(d)+"</strong> to your email account but have opened the link on a different device where you are not signed in.");
d="If you still want to connect your <strong>"+(A(d)+"</strong> account, open the link on the same device where you started sign-in. Otherwise, tap Continue to sign-in on this device.");b+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-linking-different-device"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text firebaseui-text-justify">'+
a+'</p><p class="firebaseui-text firebaseui-text-justify">'+d+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Uj()+'</div></div><div class="firebaseui-card-footer">'+Zj(c)+"</div></form></div>";return B(b)}Lk.a="firebaseui.auth.soy2.page.emailLinkSignInLinkingDifferentDevice";function Mk(a,b,c){var d=a.email;b="";a=""+gk(a,c);a=D(a);d="You\u2019ve already used <strong>"+(A(d)+("</strong>. Sign in with "+(A(a)+" to continue.")));b+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-federated-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">'+
d+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Rj({label:D("Sign in with "+a)})+'</div></div><div class="firebaseui-card-footer">'+Zj(c)+"</div></form></div>";return B(b)}Mk.a="firebaseui.auth.soy2.page.federatedLinking";function Nk(a,b,c){a=a||{};var d=a.kc;b=a.yb;a=a.Eb;var e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unauthorized-user"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Not Authorized</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';
d?(d="<strong>"+(A(d)+"</strong> is not authorized to view the requested page."),e+=d):e+="User is not authorized to view the requested page.";e+="</p>";b&&(b="Please contact <strong>"+(A(b)+"</strong> for authorization."),e+='<p class="firebaseui-text firebaseui-id-unauthorized-user-admin-email">'+b+"</p>");e+='</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">';a&&(e+='<a class="firebaseui-link firebaseui-id-unauthorized-user-help-link" href="javascript:void(0)" target="_blank">Learn More</a>');
e+='</div><div class="firebaseui-form-actions">'+Yj({label:D("Back")})+'</div></div><div class="firebaseui-card-footer">'+Zj(c)+"</div></form></div>";return B(e)}Nk.a="firebaseui.auth.soy2.page.unauthorizedUser";function Ok(a,b,c){b="";a="To continue sign in with <strong>"+(A(a.email)+"</strong> on this device, you have to recover the password.");b+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unsupported-provider"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+
a+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Yj(null)+Rj({label:D("Recover password")})+'</div></div><div class="firebaseui-card-footer">'+Zj(c)+"</div></form></div>";return B(b)}Ok.a="firebaseui.auth.soy2.page.unsupportedProvider";function Pk(a){var b="",c='<p class="firebaseui-text">for <strong>'+(A(a.email)+"</strong></p>");b+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Reset your password</h1></div><div class="firebaseui-card-content">'+
c+Vj(sd(a))+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Tj()+"</div></div></form></div>";return B(b)}Pk.a="firebaseui.auth.soy2.page.passwordReset";function Qk(a){a=a||{};a='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Password changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new password</p></div><div class="firebaseui-card-actions">'+
(a.G?'<div class="firebaseui-form-actions">'+Uj()+"</div>":"")+"</div></div>";return B(a)}Qk.a="firebaseui.auth.soy2.page.passwordResetSuccess";function Rk(a){a=a||{};a='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try resetting your password again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to reset your password has expired or the link has already been used</p></div><div class="firebaseui-card-actions">'+
(a.G?'<div class="firebaseui-form-actions">'+Uj()+"</div>":"")+"</div></div>";return B(a)}Rk.a="firebaseui.auth.soy2.page.passwordResetFailure";function Sk(a){var b=a.G,c="";a="Your sign-in email address has been changed back to <strong>"+(A(a.email)+"</strong>.");c+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Updated email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+
a+'</p><p class="firebaseui-text">If you didn\u2019t ask to change your sign-in email, it\u2019s possible someone is trying to access your account and you should <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">change your password right away</a>.</p></div><div class="firebaseui-card-actions">'+(b?'<div class="firebaseui-form-actions">'+Uj()+"</div>":"")+"</div></form></div>";return B(c)}Sk.a="firebaseui.auth.soy2.page.emailChangeRevokeSuccess";function Tk(a){a=
a||{};a='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Unable to update your email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">There was a problem changing your sign-in email back.</p><p class="firebaseui-text">If you try again and still can\u2019t reset your email, try asking your administrator for help.</p></div><div class="firebaseui-card-actions">'+
(a.G?'<div class="firebaseui-form-actions">'+Uj()+"</div>":"")+"</div></div>";return B(a)}Tk.a="firebaseui.auth.soy2.page.emailChangeRevokeFailure";function Uk(a){a=a||{};a='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new account</p></div><div class="firebaseui-card-actions">'+
(a.G?'<div class="firebaseui-form-actions">'+Uj()+"</div>":"")+"</div></div>";return B(a)}Uk.a="firebaseui.auth.soy2.page.emailVerificationSuccess";function Vk(a){a=a||{};a='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try verifying your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify your email has expired or the link has already been used</p></div><div class="firebaseui-card-actions">'+
(a.G?'<div class="firebaseui-form-actions">'+Uj()+"</div>":"")+"</div></div>";return B(a)}Vk.a="firebaseui.auth.soy2.page.emailVerificationFailure";function Xk(a){var b=a.G,c="";a="You can now sign in with your new email <strong>"+(A(a.email)+"</strong>.");c+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-verify-and-change-email-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified and changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+
a+'</p></div><div class="firebaseui-card-actions">'+(b?'<div class="firebaseui-form-actions">'+Uj()+"</div>":"")+"</div></div>";return B(c)}Xk.a="firebaseui.auth.soy2.page.verifyAndChangeEmailSuccess";function Yk(a){a=a||{};a='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-verify-and-change-email-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try updating your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify and update your email has expired or the link has already been used.</p></div><div class="firebaseui-card-actions">'+
(a.G?'<div class="firebaseui-form-actions">'+Uj()+"</div>":"")+"</div></div>";return B(a)}Yk.a="firebaseui.auth.soy2.page.verifyAndChangeEmailFailure";function Zk(a){var b=a.factorId,c=a.phoneNumber;a=a.G;var d='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-revert-second-factor-addition-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Removed second factor</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';
switch(b){case "phone":b="The <strong>"+(A(b)+(" "+(A(c)+"</strong> was removed as a second authentication step.")));d+=b;break;default:d+="The device or app was removed as a second authentication step."}d+='</p><p class="firebaseui-text">If you don\'t recognize this device, someone might be trying to access your account. Consider <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">changing your password right away</a>.</p></div><div class="firebaseui-card-actions">'+
(a?'<div class="firebaseui-form-actions">'+Uj()+"</div>":"")+"</div></form></div>";return B(d)}Zk.a="firebaseui.auth.soy2.page.revertSecondFactorAdditionSuccess";function $k(a){a=a||{};a='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-revert-second-factor-addition-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Couldn\'t remove your second factor</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Something went wrong removing your second factor.</p><p class="firebaseui-text">Try removing it again. If that doesn\'t work, contact support for assistance.</p></div><div class="firebaseui-card-actions">'+
(a.G?'<div class="firebaseui-form-actions">'+Uj()+"</div>":"")+"</div></div>";return B(a)}$k.a="firebaseui.auth.soy2.page.revertSecondFactorAdditionFailure";function al(a){var b=a.zb;a='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-recoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+A(a.errorMessage)+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">';
b&&(a+=Rj({label:D("Retry")}));return B(a+"</div></div></div>")}al.a="firebaseui.auth.soy2.page.recoverableError";function bl(a){a='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unrecoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+A(a.errorMessage)+"</p></div></div>";return B(a)}bl.a="firebaseui.auth.soy2.page.unrecoverableError";function cl(a,
b,c){var d=a.Qb;b="";a="Continue with "+(A(a.jc)+"?");d="You originally wanted to sign in with "+A(d);b+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-mismatch"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">'+a+'</h2><p class="firebaseui-text">'+d+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+
Yj(null)+Rj({label:D("Continue")})+'</div></div><div class="firebaseui-card-footer">'+Zj(c)+"</div></form></div>";return B(b)}cl.a="firebaseui.auth.soy2.page.emailMismatch";function dl(a,b,c){var d='<div class="firebaseui-container firebaseui-page-provider-sign-in firebaseui-id-page-provider-sign-in firebaseui-use-spinner"><div class="firebaseui-card-content"><form onsubmit="return false;"><ul class="firebaseui-idp-list">';a=a.Sb;b=a.length;for(var e=0;e<b;e++){var f={ga:a[e]},g=c;f=f||{};var h=f.ga;
var k=f;k=k||{};var p="";switch(k.ga.providerId){case "google.com":p+="firebaseui-idp-google";break;case "github.com":p+="firebaseui-idp-github";break;case "facebook.com":p+="firebaseui-idp-facebook";break;case "twitter.com":p+="firebaseui-idp-twitter";break;case "phone":p+="firebaseui-idp-phone";break;case "anonymous":p+="firebaseui-idp-anonymous";break;case "password":p+="firebaseui-idp-password";break;default:p+="firebaseui-idp-generic"}k='<button class="firebaseui-idp-button mdl-button mdl-js-button mdl-button--raised '+
ud(C(p))+' firebaseui-id-idp-button" data-provider-id="'+ud(h.providerId)+'" style="background-color:';p=(p=f)||{};p=p.ga;k=k+ud(Dd(C(p.ta?p.ta:g.wa[p.providerId]?""+g.wa[p.providerId]:0==p.providerId.indexOf("saml.")?""+g.wa.saml:0==p.providerId.indexOf("oidc.")?""+g.wa.oidc:""+g.wa.password)))+'"><span class="firebaseui-idp-icon-wrapper"><img class="firebaseui-idp-icon" alt="" src="';var t=f;p=g;t=t||{};t=t.ga;p=rd(t.za?zd(t.za):p.xa[t.providerId]?zd(p.xa[t.providerId]):0==t.providerId.indexOf("saml.")?
zd(p.xa.saml):0==t.providerId.indexOf("oidc.")?zd(p.xa.oidc):zd(p.xa.password));k=k+ud(zd(p))+'"></span>';"password"==h.providerId?(k+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',h.V?k+=A(h.V):h.S?(f="Sign in with "+A(gk(f,g)),k+=f):k+="Sign in with email",k+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',k=h.S?k+A(h.S):k+"Email",k+="</span>"):"phone"==h.providerId?(k+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',h.V?k+=A(h.V):h.S?(f="Sign in with "+
A(gk(f,g)),k+=f):k+="Sign in with phone",k+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',k=h.S?k+A(h.S):k+"Phone",k+="</span>"):"anonymous"==h.providerId?(k+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',h.V?k+=A(h.V):h.S?(f="Sign in with "+A(gk(f,g)),k+=f):k+="Continue as guest",k+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',k=h.S?k+A(h.S):k+"Guest",k+="</span>"):(k+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',h.V?
k+=A(h.V):(p="Sign in with "+A(gk(f,g)),k+=p),k+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">'+(h.S?A(h.S):A(gk(f,g)))+"</span>");h=B(k+"</button>");d+='<li class="firebaseui-list-item">'+h+"</li>"}d+='</ul></form></div><div class="firebaseui-card-footer firebaseui-provider-sign-in-footer">'+ak(c)+"</div></div>";return B(d)}dl.a="firebaseui.auth.soy2.page.providerSignIn";function el(a,b,c){a=a||{};var d=a.Gb,e=a.Va;b=a.ia;a=a||{};a=a.Aa;a='<div class="firebaseui-phone-number"><button class="firebaseui-id-country-selector firebaseui-country-selector mdl-button mdl-js-button"><span class="firebaseui-flag firebaseui-country-selector-flag firebaseui-id-country-selector-flag"></span><span class="firebaseui-id-country-selector-code"></span></button><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label firebaseui-textfield firebaseui-phone-input-wrapper"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-phone-number-input">Phone number</label><input type="tel" name="phoneNumber" id="ui-sign-in-phone-number-input" class="mdl-textfield__input firebaseui-input firebaseui-id-phone-number" value="'+
ud(null!=a?a:"")+'"></div></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-phone-number-error firebaseui-id-phone-number-error"></p></div>';a='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-start"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Enter your phone number</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+
B(a);var f;d?f=B('<div class="firebaseui-recaptcha-wrapper"><div class="firebaseui-recaptcha-container"></div><div class="firebaseui-error-wrapper firebaseui-recaptcha-error-wrapper"><p class="firebaseui-error firebaseui-hidden firebaseui-id-recaptcha-error"></p></div></div>'):f="";f=a+f+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(e?Yj(null):"")+Rj({label:D("Verify")})+'</div></div><div class="firebaseui-card-footer">';b?(b='<p class="firebaseui-tos firebaseui-phone-tos">',
b=c.F&&c.D?b+'By tapping Verify, you are indicating that you accept our <a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a> and <a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a>. An SMS may be sent. Message &amp; data rates may apply.':b+"By tapping Verify, an SMS may be sent. Message &amp; data rates may apply.",c=B(b+"</p>")):c=B('<p class="firebaseui-tos firebaseui-phone-sms-notice">By tapping Verify, an SMS may be sent. Message &amp; data rates may apply.</p>')+
Zj(c);return B(f+c+"</div></form></div>")}el.a="firebaseui.auth.soy2.page.phoneSignInStart";function fl(a,b,c){a=a||{};b=a.phoneNumber;var d="";a='Enter the 6-digit code we sent to <a class="firebaseui-link firebaseui-change-phone-number-link firebaseui-id-change-phone-number-link" href="javascript:void(0)">&lrm;'+(A(b)+"</a>");A(b);b=d;d=B('<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-phone-confirmation-code-input">6-digit code</label><input type="number" name="phoneConfirmationCode" id="ui-sign-in-phone-confirmation-code-input" class="mdl-textfield__input firebaseui-input firebaseui-id-phone-confirmation-code"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-phone-confirmation-code-error"></p></div>');
c='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-finish"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Verify your phone number</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+a+"</p>"+d+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Yj(null)+Rj({label:D("Continue")})+'</div></div><div class="firebaseui-card-footer">'+Zj(c)+"</div></form>";
a=B('<div class="firebaseui-resend-container"><span class="firebaseui-id-resend-countdown"></span><a href="javascript:void(0)" class="firebaseui-id-resend-link firebaseui-hidden firebaseui-link">Resend</a></div>');return B(b+(c+a+"</div>"))}fl.a="firebaseui.auth.soy2.page.phoneSignInFinish";function gl(){return B('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-sign-out"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign Out</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You are now successfully signed out.</p></div></div>')}
gl.a="firebaseui.auth.soy2.page.signOut";function hl(a,b,c){var d='<div class="firebaseui-container firebaseui-page-select-tenant firebaseui-id-page-select-tenant"><div class="firebaseui-card-content"><form onsubmit="return false;"><ul class="firebaseui-tenant-list">';a=a.ec;b=a.length;for(var e=0;e<b;e++){var f=a[e];var g="";var h=A(f.displayName),k=f.tenantId?f.tenantId:"top-level-project";k=D(k);g+='<button class="firebaseui-tenant-button mdl-button mdl-js-button mdl-button--raised firebaseui-tenant-selection-'+
ud(k)+' firebaseui-id-tenant-selection-button"'+(f.tenantId?'data-tenant-id="'+ud(f.tenantId)+'"':"")+'style="background-color:'+ud(Dd(f.ta))+'"><span class="firebaseui-idp-icon-wrapper"><img class="firebaseui-idp-icon" alt="" src="'+ud(zd(f.za))+'"></span><span class="firebaseui-idp-text firebaseui-idp-text-long">';f.V?g+=A(f.V):(f="Sign in to "+A(f.displayName),g+=f);g=B(g+('</span><span class="firebaseui-idp-text firebaseui-idp-text-short">'+h+"</span></button>"));d+='<li class="firebaseui-list-item">'+
g+"</li>"}d+='</ul></form></div><div class="firebaseui-card-footer firebaseui-provider-sign-in-footer">'+ak(c)+"</div></div>";return B(d)}hl.a="firebaseui.auth.soy2.page.selectTenant";function il(a,b,c){a='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-provider-match-by-email"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+
Qj(null)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+Rj(null)+'</div></div><div class="firebaseui-card-footer">'+ak(c)+"</div></form></div>";return B(a)}il.a="firebaseui.auth.soy2.page.providerMatchByEmail";function jl(){return M(this,"firebaseui-id-submit")}function kl(){return M(this,"firebaseui-id-secondary-link")}function ll(a,b){O(this,jl.call(this),function(d){a(d)});var c=kl.call(this);c&&b&&O(this,c,function(d){b(d)})}function ml(){return M(this,
"firebaseui-id-password")}function nl(){return M(this,"firebaseui-id-password-error")}function ol(){var a=ml.call(this),b=nl.call(this);Jj(this,a,function(){Pj(b)&&(N(a,!0),Nj(b))})}function pl(){var a=ml.call(this);var b=nl.call(this);Wi(a)?(N(a,!0),Nj(b),b=!0):(N(a,!1),Oj(b,C("Enter your password").toString()),b=!1);return b?Wi(a):null}function ql(a,b,c,d,e,f){P.call(this,Jk,{email:a},f,"passwordLinking",{F:d,D:e});this.w=b;this.H=c}m(ql,P);ql.prototype.v=function(){this.P();this.M(this.w,this.H);
vk(this,this.i(),this.w);this.i().focus();P.prototype.v.call(this)};ql.prototype.o=function(){this.w=null;P.prototype.o.call(this)};ql.prototype.j=function(){return Wi(M(this,"firebaseui-id-email"))};u(ql.prototype,{i:ml,B:nl,P:ol,u:pl,ea:jl,ba:kl,M:ll});var rl=/^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;function sl(){return M(this,"firebaseui-id-email")}function tl(){return M(this,"firebaseui-id-email-error")}function ul(a){var b=sl.call(this),c=tl.call(this);Jj(this,
b,function(){Pj(c)&&(N(b,!0),Nj(c))});a&&Kj(this,b,function(){a()})}function vl(){return Ua(Wi(sl.call(this))||"")}function wl(){var a=sl.call(this);var b=tl.call(this);var c=Wi(a)||"";c?rl.test(c)?(N(a,!0),Nj(b),b=!0):(N(a,!1),Oj(b,C("That email address isn't correct").toString()),b=!1):(N(a,!1),Oj(b,C("Enter your email address to continue").toString()),b=!1);return b?Ua(Wi(a)):null}function xl(a,b,c,d,e,f,g){P.call(this,xk,{email:c,ia:!!f},g,"passwordSignIn",{F:d,D:e});this.w=a;this.H=b}m(xl,P);
xl.prototype.v=function(){this.P();this.ea();this.ba(this.w,this.H);uk(this,this.l(),this.i());vk(this,this.i(),this.w);Wi(this.l())?this.i().focus():this.l().focus();P.prototype.v.call(this)};xl.prototype.o=function(){this.H=this.w=null;P.prototype.o.call(this)};u(xl.prototype,{l:sl,U:tl,P:ul,M:vl,j:wl,i:ml,B:nl,ea:ol,u:pl,ua:jl,pa:kl,ba:ll});function R(a,b,c,d,e,f){P.call(this,a,b,d,e||"notice",f);this.i=c||null}w(R,P);R.prototype.v=function(){this.i&&(this.u(this.i),this.l().focus());R.K.v.call(this)};
R.prototype.o=function(){this.i=null;R.K.o.call(this)};u(R.prototype,{l:jl,w:kl,u:ll});function yl(a,b,c,d,e){R.call(this,Ak,{email:a,G:!!b},b,e,"passwordRecoveryEmailSent",{F:c,D:d})}w(yl,R);function zl(a,b){R.call(this,Uk,{G:!!a},a,b,"emailVerificationSuccess")}w(zl,R);function Al(a,b){R.call(this,Vk,{G:!!a},a,b,"emailVerificationFailure")}w(Al,R);function Bl(a,b,c){R.call(this,Xk,{email:a,G:!!b},b,c,"verifyAndChangeEmailSuccess")}w(Bl,R);function Cl(a,b){R.call(this,Yk,{G:!!a},a,b,"verifyAndChangeEmailFailure")}
w(Cl,R);function Dl(a,b){R.call(this,$k,{G:!!a},a,b,"revertSecondFactorAdditionFailure")}w(Dl,R);function El(a){R.call(this,gl,void 0,void 0,a,"signOut")}w(El,R);function Fl(a,b){R.call(this,Qk,{G:!!a},a,b,"passwordResetSuccess")}w(Fl,R);function Gl(a,b){R.call(this,Rk,{G:!!a},a,b,"passwordResetFailure")}w(Gl,R);function Hl(a,b){R.call(this,Tk,{G:!!a},a,b,"emailChangeRevokeFailure")}w(Hl,R);function Il(a,b,c){R.call(this,al,{errorMessage:a,zb:!!b},b,c,"recoverableError")}w(Il,R);function Jl(a,b){R.call(this,
bl,{errorMessage:a},void 0,b,"unrecoverableError")}w(Jl,R);function Kl(a){if("auth/invalid-credential"===a.code&&a.message&&-1!==a.message.indexOf("error=consent_required"))return{code:"auth/user-cancelled"};if(a.message&&-1!==a.message.indexOf("HTTP Cloud Function returned an error:")){var b=JSON.parse(a.message.substring(a.message.indexOf("{"),a.message.lastIndexOf("}")+1));return{code:a.code,message:b&&b.error&&b.error.message||a.message}}return a}function Ll(a,b,c,d){function e(g){if(!g.name||
"cancel"!=g.name){a:{var h=g.message;try{var k=((JSON.parse(h).error||{}).message||"").toLowerCase().match(/invalid.+(access|id)_token/);if(k&&k.length){var p=!0;break a}}catch(t){}p=!1}if(p)g=Q(b),b.m(),S(a,g,void 0,C("Your sign-in session has expired. Please try again.").toString());else{p=g&&g.message||"";if(g.code){if("auth/email-already-in-use"==g.code||"auth/credential-already-in-use"==g.code)return;p=T(g)}b.a(p)}}}Ml(a);if(d)return Nl(a,c),F();if(!c.credential)throw Error("No credential found!");
if(!U(a).currentUser&&!c.user)throw Error("User not logged in.");try{var f=Ol(a,c)}catch(g){return og(g.code||g.message,g),b.a(g.code||g.message),F()}c=f.then(function(g){Nl(a,g)},e).then(void 0,e);V(a,f);return F(c)}function Nl(a,b){if(!b.user)throw Error("No user found");var c=Mi(W(a));Ki(W(a))&&c&&tg("Both signInSuccess and signInSuccessWithAuthResult callbacks are provided. Only signInSuccessWithAuthResult callback will be invoked.");if(c){c=Mi(W(a));var d=yh(X(a))||void 0;wh(sh,X(a));var e=!1;
if(qf()){if(!c||c(b,d))e=!0,Nc(window.opener.location,Pl(a,d));c||window.close()}else if(!c||c(b,d))e=!0,Nc(window.location,Pl(a,d));e||a.reset()}else{c=b.user;b=b.credential;d=Ki(W(a));e=yh(X(a))||void 0;wh(sh,X(a));var f=!1;if(qf()){if(!d||d(c,b,e))f=!0,Nc(window.opener.location,Pl(a,e));d||window.close()}else if(!d||d(c,b,e))f=!0,Nc(window.location,Pl(a,e));f||a.reset()}}function Pl(a,b){a=b||W(a).a.get("signInSuccessUrl");if(!a)throw Error("No redirect URL has been found. You must either specify a signInSuccessUrl in the configuration, pass in a redirect URL to the widget URL, or return false from the callback.");
return a}function T(a){var b={code:a.code};b=b||{};var c="";switch(b.code){case "auth/email-already-in-use":c+="The email address is already used by another account";break;case "auth/requires-recent-login":c+=Md();break;case "auth/too-many-requests":c+="You have entered an incorrect password too many times. Please try again in a few minutes.";break;case "auth/user-cancelled":c+="Please authorize the required permissions to sign in to the application";break;case "auth/user-not-found":c+="That email address doesn't match an existing account";
break;case "auth/user-token-expired":c+=Md();break;case "auth/weak-password":c+="Strong passwords have at least 6 characters and a mix of letters and numbers";break;case "auth/wrong-password":c+="The email and password you entered don't match";break;case "auth/network-request-failed":c+="A network error has occurred";break;case "auth/invalid-phone-number":c+=Hd();break;case "auth/invalid-verification-code":c+=C("Wrong code. Try again.");break;case "auth/code-expired":c+="This code is no longer valid";
break;case "auth/expired-action-code":c+="This code has expired.";break;case "auth/invalid-action-code":c+="The action code is invalid. This can happen if the code is malformed, expired, or has already been used."}if(b=C(c).toString())return b;try{return JSON.parse(a.message),og("Internal error: "+a.message,void 0),Jd().toString()}catch(d){return a.message}}function Ql(a,b,c){var d=ai[b]&&firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.auth[ai[b]]?new firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.auth[ai[b]]:0==b.indexOf("saml.")?new firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.SAMLAuthProvider(b):new firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.OAuthProvider(b);
if(!d)throw Error("Invalid Firebase Auth provider!");var e=wi(W(a),b);if(d.addScope)for(var f=0;f<e.length;f++)d.addScope(e[f]);e=xi(W(a),b)||{};c&&(b==firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.GoogleAuthProvider.PROVIDER_ID?a="login_hint":b==firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.GithubAuthProvider.PROVIDER_ID?a="login":a=(a=ii(W(a),b))&&a.Ob,a&&(e[a]=c));d.setCustomParameters&&d.setCustomParameters(e);return d}function Rl(a,b,c,d){function e(){Dh(new Dg(a.h.tenantId||null),X(a));V(a,b.I(r(a.dc,a),[k],function(){if("file:"===(window.location&&window.location.protocol))return V(a,
Sl(a).then(function(p){b.m();wh(rh,X(a));L("callback",a,h,F(p))},f))},g))}function f(p){wh(rh,X(a));if(!p.name||"cancel"!=p.name)switch(p=Kl(p),p.code){case "auth/popup-blocked":e();break;case "auth/popup-closed-by-user":case "auth/cancelled-popup-request":break;case "auth/credential-already-in-use":break;case "auth/network-request-failed":case "auth/too-many-requests":case "auth/user-cancelled":b.a(T(p));break;case "auth/admin-restricted-operation":b.m();pi(W(a))?L("handleUnauthorizedUser",a,h,null,
c):L("callback",a,h,df(p));break;default:b.m(),L("callback",a,h,df(p))}}function g(p){wh(rh,X(a));p.name&&"cancel"==p.name||(og("signInWithRedirect: "+p.code,void 0),p=T(p),"blank"==b.Ga&&Gi(W(a))?(b.m(),L("providerSignIn",a,h,p)):b.a(p))}var h=Q(b),k=Ql(a,c,d);Hi(W(a))==Ii?e():V(a,Tl(a,k).then(function(p){b.m();L("callback",a,h,F(p))},f))}function Ul(a,b){V(a,b.I(r(a.$b,a),[],function(c){b.m();return Ll(a,b,c,!0)},function(c){c.name&&"cancel"==c.name||(og("ContinueAsGuest: "+c.code,void 0),c=T(c),
b.a(c))}))}function Vl(a,b,c){function d(f){var g=!1;f=b.I(r(a.ac,a),[f],function(h){var k=Q(b);b.m();L("callback",a,k,F(h));g=!0},function(h){if(!h.name||"cancel"!=h.name)if(!h||"auth/credential-already-in-use"!=h.code)if(h&&"auth/email-already-in-use"==h.code&&h.email&&h.credential){var k=Q(b);b.m();L("callback",a,k,df(h))}else h&&"auth/admin-restricted-operation"==h.code&&pi(W(a))?(h=Q(b),b.m(),L("handleUnauthorizedUser",a,h,null,firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.GoogleAuthProvider.PROVIDER_ID)):(h=T(h),b.a(h))});
V(a,f);return f.then(function(){return g},function(){return!1})}if(c&&c.credential&&c.clientId===li(W(a))){if(wi(W(a),firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.GoogleAuthProvider.PROVIDER_ID).length){try{var e=JSON.parse(atob(c.credential.split(".")[1])).email}catch(f){}Rl(a,b,firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.GoogleAuthProvider.PROVIDER_ID,e);return F(!0)}return d(firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.GoogleAuthProvider.credential(c.credential))}c&&b.a(C("The selected credential for the authentication provider is not supported!").toString());return F(!1)}function Wl(a,
b){var c=b.j(),d=b.u();if(c)if(d){var e=firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.EmailAuthProvider.credential(c,d);V(a,b.I(r(a.bc,a),[c,d],function(f){return Ll(a,b,{user:f.user,credential:e,operationType:f.operationType,additionalUserInfo:f.additionalUserInfo})},function(f){if(!f.name||"cancel"!=f.name)switch(f.code){case "auth/email-already-in-use":break;case "auth/email-exists":N(b.l(),!1);Oj(b.U(),T(f));break;case "auth/too-many-requests":case "auth/wrong-password":N(b.i(),!1);Oj(b.B(),T(f));break;default:og("verifyPassword: "+
f.message,void 0),b.a(T(f))}}))}else b.i().focus();else b.l().focus()}function Xl(a){a=hi(W(a));return 1==a.length&&a[0]==firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.EmailAuthProvider.PROVIDER_ID}function Yl(a){a=hi(W(a));return 1==a.length&&a[0]==firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.PhoneAuthProvider.PROVIDER_ID}function S(a,b,c,d){Xl(a)?d?L("signIn",a,b,c,d):Zl(a,b,c):a&&Yl(a)&&!d?L("phoneSignInStart",a,b):a&&Gi(W(a))&&!d?L("federatedRedirect",a,b,c):L("providerSignIn",a,b,d,c)}function $l(a,b,c,d){var e=Q(b);V(a,b.I(r(U(a).fetchSignInMethodsForEmail,
U(a)),[c],function(f){b.m();am(a,e,f,c,d)},function(f){f=T(f);b.a(f)}))}function am(a,b,c,d,e,f){c.length||Di(W(a))&&!Di(W(a))?Ma(c,firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD)?L("passwordSignIn",a,b,d,f):1==c.length&&c[0]===firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD?Di(W(a))?L("sendEmailLinkForSignIn",a,b,d,function(){L("signIn",a,b)}):L("unsupportedProvider",a,b,d):(c=Zh(c,hi(W(a))))?(Bh(new Ag(d),X(a)),L("federatedSignIn",a,b,d,c,e)):L("unsupportedProvider",a,b,
d):oi(W(a))?L("handleUnauthorizedUser",a,b,d,firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.EmailAuthProvider.PROVIDER_ID):Di(W(a))?L("sendEmailLinkForSignIn",a,b,d,function(){L("signIn",a,b)}):L("passwordSignUp",a,b,d,void 0,void 0,f)}function bm(a,b,c,d,e,f){var g=Q(b);V(a,b.I(r(a.Ib,a),[c,f],function(){b.m();L("emailLinkSignInSent",a,g,c,d,f)},e))}function Zl(a,b,c){c?L("prefilledEmailSignIn",a,b,c):L("signIn",a,b)}function cm(){return tb(tf(),"oobCode")}function dm(){var a=tb(tf(),"continueUrl");return a?function(){Nc(window.location,
a)}:null}function em(a,b){P.call(this,Ik,void 0,b,"anonymousUserMismatch");this.i=a}m(em,P);em.prototype.v=function(){var a=this;O(this,this.l(),function(){a.i()});this.l().focus();P.prototype.v.call(this)};em.prototype.o=function(){this.i=null;P.prototype.o.call(this)};u(em.prototype,{l:kl});K.anonymousUserMismatch=function(a,b){var c=new em(function(){c.m();S(a,b)});c.render(b);Y(a,c)};function fm(a){P.call(this,Bk,void 0,a,"callback")}m(fm,P);fm.prototype.I=function(a,b,c,d){return a.apply(null,
b).then(c,d)};function gm(a,b,c){if(c.user){var d={user:c.user,credential:c.credential,operationType:c.operationType,additionalUserInfo:c.additionalUserInfo},e=zh(X(a)),f=e&&e.g;if(f&&!hm(c.user,f))im(a,b,d);else{var g=e&&e.a;g?V(a,c.user.linkWithCredential(g).then(function(h){d={user:h.user,credential:g,operationType:h.operationType,additionalUserInfo:h.additionalUserInfo};jm(a,b,d)},function(h){km(a,b,h)})):jm(a,b,d)}}else c=Q(b),b.m(),Ah(X(a)),S(a,c)}function jm(a,b,c){Ah(X(a));Ll(a,b,c)}function km(a,
b,c){var d=Q(b);Ah(X(a));c=T(c);b.m();S(a,d,void 0,c)}function lm(a,b,c,d){var e=Q(b);V(a,U(a).fetchSignInMethodsForEmail(c).then(function(f){b.m();f.length?Ma(f,firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD)?L("passwordLinking",a,e,c):1==f.length&&f[0]===firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD?L("emailLinkSignInLinking",a,e,c):(f=Zh(f,hi(W(a))))?L("federatedLinking",a,e,c,f,d):(Ah(X(a)),L("unsupportedProvider",a,e,c)):(Ah(X(a)),L("passwordRecovery",a,e,c,!1,Kd().toString()))},
function(f){km(a,b,f)}))}function im(a,b,c){var d=Q(b);V(a,mm(a).then(function(){b.m();L("emailMismatch",a,d,c)},function(e){e.name&&"cancel"==e.name||(e=T(e.code),b.a(e))}))}function hm(a,b){if(b==a.email)return!0;if(a.providerData)for(var c=0;c<a.providerData.length;c++)if(b==a.providerData[c].email)return!0;return!1}K.callback=function(a,b,c){var d=new fm;d.render(b);Y(a,d);c=c||Sl(a);V(a,c.then(function(e){gm(a,d,e)},function(e){if((e=Kl(e))&&("auth/account-exists-with-different-credential"==
e.code||"auth/email-already-in-use"==e.code)&&e.email&&e.credential)Bh(new Ag(e.email,e.credential),X(a)),lm(a,d,e.email);else if(e&&"auth/user-cancelled"==e.code){var f=zh(X(a)),g=T(e);f&&f.a?lm(a,d,f.g,g):f?$l(a,d,f.g,g):km(a,d,e)}else e&&"auth/credential-already-in-use"==e.code||(e&&"auth/operation-not-supported-in-this-environment"==e.code&&Xl(a)?gm(a,d,{user:null,credential:null}):e&&"auth/admin-restricted-operation"==e.code&&pi(W(a))?(d.m(),Ah(X(a)),L("handleUnauthorizedUser",a,b,null,null)):
km(a,d,e))}))};function nm(a,b){P.call(this,Hk,void 0,b,"differentDeviceError");this.i=a}m(nm,P);nm.prototype.v=function(){var a=this;O(this,this.l(),function(){a.i()});this.l().focus();P.prototype.v.call(this)};nm.prototype.o=function(){this.i=null;P.prototype.o.call(this)};u(nm.prototype,{l:kl});K.differentDeviceError=function(a,b){var c=new nm(function(){c.m();S(a,b)});c.render(b);Y(a,c)};function om(a,b,c,d){P.call(this,Sk,{email:a,G:!!c},d,"emailChangeRevoke");this.l=b;this.i=c||null}m(om,P);
om.prototype.v=function(){var a=this;O(this,M(this,"firebaseui-id-reset-password-link"),function(){a.l()});this.i&&(this.w(this.i),this.u().focus());P.prototype.v.call(this)};om.prototype.o=function(){this.l=this.i=null;P.prototype.o.call(this)};u(om.prototype,{u:jl,B:kl,w:ll});function pm(){return M(this,"firebaseui-id-new-password")}function qm(){return M(this,"firebaseui-id-password-toggle")}function rm(){this.Ra=!this.Ra;var a=qm.call(this),b=pm.call(this);this.Ra?(b.type="text",Ui(a,"firebaseui-input-toggle-off"),
Vi(a,"firebaseui-input-toggle-on")):(b.type="password",Ui(a,"firebaseui-input-toggle-on"),Vi(a,"firebaseui-input-toggle-off"));b.focus()}function sm(){return M(this,"firebaseui-id-new-password-error")}function tm(){this.Ra=!1;var a=pm.call(this);a.type="password";var b=sm.call(this);Jj(this,a,function(){Pj(b)&&(N(a,!0),Nj(b))});var c=qm.call(this);Ui(c,"firebaseui-input-toggle-on");Vi(c,"firebaseui-input-toggle-off");Lj(this,a,function(){Ui(c,"firebaseui-input-toggle-focus");Vi(c,"firebaseui-input-toggle-blur")});
Mj(this,a,function(){Ui(c,"firebaseui-input-toggle-blur");Vi(c,"firebaseui-input-toggle-focus")});O(this,c,r(rm,this))}function um(){var a=pm.call(this);var b=sm.call(this);Wi(a)?(N(a,!0),Nj(b),b=!0):(N(a,!1),Oj(b,C("Enter your password").toString()),b=!1);return b?Wi(a):null}function vm(a,b,c){P.call(this,Pk,{email:a},c,"passwordReset");this.l=b}m(vm,P);vm.prototype.v=function(){this.H();this.B(this.l);vk(this,this.i(),this.l);this.i().focus();P.prototype.v.call(this)};vm.prototype.o=function(){this.l=
null;P.prototype.o.call(this)};u(vm.prototype,{i:pm,w:sm,M:qm,H:tm,u:um,U:jl,P:kl,B:ll});function wm(a,b,c,d,e){P.call(this,Zk,{factorId:a,phoneNumber:c||null,G:!!d},e,"revertSecondFactorAdditionSuccess");this.l=b;this.i=d||null}m(wm,P);wm.prototype.v=function(){var a=this;O(this,M(this,"firebaseui-id-reset-password-link"),function(){a.l()});this.i&&(this.w(this.i),this.u().focus());P.prototype.v.call(this)};wm.prototype.o=function(){this.l=this.i=null;P.prototype.o.call(this)};u(wm.prototype,{u:jl,
B:kl,w:ll});function xm(a,b,c,d,e){var f=c.u();f&&V(a,c.I(r(U(a).confirmPasswordReset,U(a)),[d,f],function(){c.m();var g=new Fl(e);g.render(b);Y(a,g)},function(g){ym(a,b,c,g)}))}function ym(a,b,c,d){"auth/weak-password"==(d&&d.code)?(a=T(d),N(c.i(),!1),Oj(c.w(),a),c.i().focus()):(c&&c.m(),c=new Gl,c.render(b),Y(a,c))}function zm(a,b,c){var d=new om(c,function(){V(a,d.I(r(U(a).sendPasswordResetEmail,U(a)),[c],function(){d.m();d=new yl(c,void 0,H(W(a)),J(W(a)));d.render(b);Y(a,d)},function(){d.a(Id().toString())}))});
d.render(b);Y(a,d)}function Am(a,b,c,d){var e=new wm(d.factorId,function(){e.I(r(U(a).sendPasswordResetEmail,U(a)),[c],function(){e.m();e=new yl(c,void 0,H(W(a)),J(W(a)));e.render(b);Y(a,e)},function(){e.a(Id().toString())})},d.phoneNumber);e.render(b);Y(a,e)}K.passwordReset=function(a,b,c,d){V(a,U(a).verifyPasswordResetCode(c).then(function(e){var f=new vm(e,function(){xm(a,b,f,c,d)});f.render(b);Y(a,f)},function(){ym(a,b)}))};K.emailChangeRevocation=function(a,b,c){var d=null;V(a,U(a).checkActionCode(c).then(function(e){d=
e.data.email;return U(a).applyActionCode(c)}).then(function(){zm(a,b,d)},function(){var e=new Hl;e.render(b);Y(a,e)}))};K.emailVerification=function(a,b,c,d){V(a,U(a).applyActionCode(c).then(function(){var e=new zl(d);e.render(b);Y(a,e)},function(){var e=new Al;e.render(b);Y(a,e)}))};K.revertSecondFactorAddition=function(a,b,c){var d=null,e=null;V(a,U(a).checkActionCode(c).then(function(f){d=f.data.email;e=f.data.multiFactorInfo;return U(a).applyActionCode(c)}).then(function(){Am(a,b,d,e)},function(){var f=
new Dl;f.render(b);Y(a,f)}))};K.verifyAndChangeEmail=function(a,b,c,d){var e=null;V(a,U(a).checkActionCode(c).then(function(f){e=f.data.email;return U(a).applyActionCode(c)}).then(function(){var f=new Bl(e,d);f.render(b);Y(a,f)},function(){var f=new Cl;f.render(b);Y(a,f)}))};function Bm(a,b){try{var c="number"==typeof a.selectionStart}catch(d){c=!1}c?(a.selectionStart=b,a.selectionEnd=b):z&&!mc("9")&&("textarea"==a.type&&(b=a.value.substring(0,b).replace(/(\r\n|\r|\n)/g,"\n").length),a=a.createTextRange(),
a.collapse(!0),a.move("character",b),a.select())}function Cm(a,b,c,d,e,f){P.call(this,Gk,{email:c},f,"emailLinkSignInConfirmation",{F:d,D:e});this.l=a;this.u=b}m(Cm,P);Cm.prototype.v=function(){this.w(this.l);this.B(this.l,this.u);this.i().focus();Bm(this.i(),(this.i().value||"").length);P.prototype.v.call(this)};Cm.prototype.o=function(){this.u=this.l=null;P.prototype.o.call(this)};u(Cm.prototype,{i:sl,M:tl,w:ul,H:vl,j:wl,U:jl,P:kl,B:ll});K.emailLinkConfirmation=function(a,b,c,d,e,f){var g=new Cm(function(){var h=
g.j();h?(g.m(),d(a,b,h,c)):g.i().focus()},function(){g.m();S(a,b,e||void 0)},e||void 0,H(W(a)),J(W(a)));g.render(b);Y(a,g);f&&g.a(f)};function Dm(a,b,c,d,e){P.call(this,Lk,{ga:a},e,"emailLinkSignInLinkingDifferentDevice",{F:c,D:d});this.i=b}m(Dm,P);Dm.prototype.v=function(){this.u(this.i);this.l().focus();P.prototype.v.call(this)};Dm.prototype.o=function(){this.i=null;P.prototype.o.call(this)};u(Dm.prototype,{l:jl,u:ll});K.emailLinkNewDeviceLinking=function(a,b,c,d){var e=new Pb(c);c=e.a.a.get(x.PROVIDER_ID)||
null;Tb(e,null);if(c){var f=new Dm(ii(W(a),c),function(){f.m();d(a,b,e.toString())},H(W(a)),J(W(a)));f.render(b);Y(a,f)}else S(a,b)};function Em(a){P.call(this,Dk,void 0,a,"blank")}m(Em,P);function Fm(a,b,c,d,e){var f=new Em,g=new Pb(c),h=g.a.a.get(x.$a)||"",k=g.a.a.get(x.Sa)||"",p="1"===g.a.a.get(x.Qa),t=Sb(g),I=g.a.a.get(x.PROVIDER_ID)||null;g=g.a.a.get(x.vb)||null;Gm(a,g);var Ca=!vh(th,X(a)),Wk=d||Eh(k,X(a)),ld=(d=Fh(k,X(a)))&&d.a;I&&ld&&ld.providerId!==I&&(ld=null);f.render(b);Y(a,f);V(a,f.I(function(){var ya=
F(null);ya=t&&Ca||Ca&&p?df(Error("anonymous-user-not-found")):Hm(a,c).then(function(wg){if(I&&!ld)throw Error("pending-credential-not-found");return wg});var md=null;return ya.then(function(wg){md=wg;return e?null:U(a).checkActionCode(h)}).then(function(){return md})},[],function(ya){Wk?Im(a,f,Wk,c,ld,ya):p?(f.m(),L("differentDeviceError",a,b)):(f.m(),L("emailLinkConfirmation",a,b,c,Jm))},function(ya){var md=void 0;if(!ya||!ya.name||"cancel"!=ya.name)switch(f.m(),ya&&ya.message){case "anonymous-user-not-found":L("differentDeviceError",
a,b);break;case "anonymous-user-mismatch":L("anonymousUserMismatch",a,b);break;case "pending-credential-not-found":L("emailLinkNewDeviceLinking",a,b,c,Km);break;default:ya&&(md=T(ya)),S(a,b,void 0,md)}}))}function Jm(a,b,c,d){Fm(a,b,d,c,!0)}function Km(a,b,c){Fm(a,b,c)}function Im(a,b,c,d,e,f){var g=Q(b);b.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",C("Signing in...").toString());var h=null;e=(f?Lm(a,f,c,d,e):Mm(a,c,d,e)).then(function(k){wh(uh,
X(a));wh(th,X(a));b.h();b.$("firebaseui-icon-done",C("Signed in!").toString());h=setTimeout(function(){b.h();Ll(a,b,k,!0)},1E3);V(a,function(){b&&(b.h(),b.m());clearTimeout(h)})},function(k){b.h();b.m();if(!k.name||"cancel"!=k.name){k=Kl(k);var p=T(k);"auth/email-already-in-use"==k.code||"auth/credential-already-in-use"==k.code?(wh(uh,X(a)),wh(th,X(a))):"auth/invalid-email"==k.code?(p=C("The email provided does not match the current sign-in session.").toString(),L("emailLinkConfirmation",a,g,d,Jm,
null,p)):S(a,g,c,p)}});V(a,e)}K.emailLinkSignInCallback=Fm;function Nm(a,b,c,d,e,f){P.call(this,Kk,{email:a,ga:b},f,"emailLinkSignInLinking",{F:d,D:e});this.i=c}m(Nm,P);Nm.prototype.v=function(){this.u(this.i);this.l().focus();P.prototype.v.call(this)};Nm.prototype.o=function(){this.i=null;P.prototype.o.call(this)};u(Nm.prototype,{l:jl,u:ll});function Om(a,b,c,d){var e=Q(b);bm(a,b,c,function(){S(a,e,c)},function(f){if(!f.name||"cancel"!=f.name){var g=T(f);f&&"auth/network-request-failed"==f.code?
b.a(g):(b.m(),S(a,e,c,g))}},d)}K.emailLinkSignInLinking=function(a,b,c){var d=zh(X(a));Ah(X(a));if(d){var e=d.a.providerId,f=new Nm(c,ii(W(a),e),function(){Om(a,f,c,d)},H(W(a)),J(W(a)));f.render(b);Y(a,f)}else S(a,b)};function Pm(a,b,c,d,e,f){P.call(this,Ek,{email:a},f,"emailLinkSignInSent",{F:d,D:e});this.u=b;this.i=c}m(Pm,P);Pm.prototype.v=function(){var a=this;O(this,this.l(),function(){a.i()});O(this,M(this,"firebaseui-id-trouble-getting-email-link"),function(){a.u()});this.l().focus();P.prototype.v.call(this)};
Pm.prototype.o=function(){this.i=this.u=null;P.prototype.o.call(this)};u(Pm.prototype,{l:kl});K.emailLinkSignInSent=function(a,b,c,d,e){var f=new Pm(c,function(){f.m();L("emailNotReceived",a,b,c,d,e)},function(){f.m();d()},H(W(a)),J(W(a)));f.render(b);Y(a,f)};function Qm(a,b,c,d,e,f,g){P.call(this,cl,{jc:a,Qb:b},g,"emailMismatch",{F:e,D:f});this.l=c;this.i=d}m(Qm,P);Qm.prototype.v=function(){this.w(this.l,this.i);this.u().focus();P.prototype.v.call(this)};Qm.prototype.o=function(){this.i=null;P.prototype.o.call(this)};
u(Qm.prototype,{u:jl,B:kl,w:ll});K.emailMismatch=function(a,b,c){var d=zh(X(a));if(d){var e=new Qm(c.user.email,d.g,function(){var f=e;Ah(X(a));Ll(a,f,c)},function(){var f=c.credential.providerId,g=Q(e);e.m();d.a?L("federatedLinking",a,g,d.g,f):L("federatedSignIn",a,g,d.g,f)},H(W(a)),J(W(a)));e.render(b);Y(a,e)}else S(a,b)};function Rm(a,b,c,d,e){P.call(this,Fk,void 0,e,"emailNotReceived",{F:c,D:d});this.l=a;this.i=b}m(Rm,P);Rm.prototype.v=function(){var a=this;O(this,this.u(),function(){a.i()});
O(this,this.Da(),function(){a.l()});this.u().focus();P.prototype.v.call(this)};Rm.prototype.Da=function(){return M(this,"firebaseui-id-resend-email-link")};Rm.prototype.o=function(){this.i=this.l=null;P.prototype.o.call(this)};u(Rm.prototype,{u:kl});K.emailNotReceived=function(a,b,c,d,e){var f=new Rm(function(){bm(a,f,c,d,function(g){g=T(g);f.a(g)},e)},function(){f.m();S(a,b,c)},H(W(a)),J(W(a)));f.render(b);Y(a,f)};function Sm(a,b,c,d,e,f){P.call(this,Mk,{email:a,ga:b},f,"federatedLinking",{F:d,D:e});
this.i=c}m(Sm,P);Sm.prototype.v=function(){this.u(this.i);this.l().focus();P.prototype.v.call(this)};Sm.prototype.o=function(){this.i=null;P.prototype.o.call(this)};u(Sm.prototype,{l:jl,u:ll});K.federatedLinking=function(a,b,c,d,e){var f=zh(X(a));if(f&&f.a){var g=new Sm(c,ii(W(a),d),function(){Rl(a,g,d,c)},H(W(a)),J(W(a)));g.render(b);Y(a,g);e&&g.a(e)}else S(a,b)};K.federatedRedirect=function(a,b,c){var d=new Em;d.render(b);Y(a,d);b=hi(W(a))[0];Rl(a,d,b,c)};K.federatedSignIn=function(a,b,c,d,e){var f=
new Sm(c,ii(W(a),d),function(){Rl(a,f,d,c)},H(W(a)),J(W(a)));f.render(b);Y(a,f);e&&f.a(e)};function Tm(a,b,c,d){var e=b.u();e?V(a,b.I(r(a.Xb,a),[c,e],function(f){f=f.user.linkWithCredential(d).then(function(g){return Ll(a,b,{user:g.user,credential:d,operationType:g.operationType,additionalUserInfo:g.additionalUserInfo})});V(a,f);return f},function(f){if(!f.name||"cancel"!=f.name)switch(f.code){case "auth/wrong-password":N(b.i(),!1);Oj(b.B(),T(f));break;case "auth/too-many-requests":b.a(T(f));break;
default:og("signInWithEmailAndPassword: "+f.message,void 0),b.a(T(f))}})):b.i().focus()}K.passwordLinking=function(a,b,c){var d=zh(X(a));Ah(X(a));var e=d&&d.a;if(e){var f=new ql(c,function(){Tm(a,f,c,e)},function(){f.m();L("passwordRecovery",a,b,c)},H(W(a)),J(W(a)));f.render(b);Y(a,f)}else S(a,b)};function Um(a,b,c,d,e,f){P.call(this,zk,{email:c,Ta:!!b},f,"passwordRecovery",{F:d,D:e});this.l=a;this.u=b}m(Um,P);Um.prototype.v=function(){this.B();this.H(this.l,this.u);Wi(this.i())||this.i().focus();
vk(this,this.i(),this.l);P.prototype.v.call(this)};Um.prototype.o=function(){this.u=this.l=null;P.prototype.o.call(this)};u(Um.prototype,{i:sl,w:tl,B:ul,M:vl,j:wl,U:jl,P:kl,H:ll});function Vm(a,b){var c=b.j();if(c){var d=Q(b);V(a,b.I(r(U(a).sendPasswordResetEmail,U(a)),[c],function(){b.m();var e=new yl(c,function(){e.m();S(a,d)},H(W(a)),J(W(a)));e.render(d);Y(a,e)},function(e){N(b.i(),!1);Oj(b.w(),T(e))}))}else b.i().focus()}K.passwordRecovery=function(a,b,c,d,e){var f=new Um(function(){Vm(a,f)},
d?void 0:function(){f.m();S(a,b)},c,H(W(a)),J(W(a)));f.render(b);Y(a,f);e&&f.a(e)};K.passwordSignIn=function(a,b,c,d){var e=new xl(function(){Wl(a,e)},function(){var f=e.M();e.m();L("passwordRecovery",a,b,f)},c,H(W(a)),J(W(a)),d);e.render(b);Y(a,e)};function Wm(){return M(this,"firebaseui-id-name")}function Xm(){return M(this,"firebaseui-id-name-error")}function Ym(a,b,c,d,e,f,g,h,k){P.call(this,yk,{email:d,Tb:a,name:e,Ta:!!c,ia:!!h},k,"passwordSignUp",{F:f,D:g});this.w=b;this.H=c;this.B=a}m(Ym,P);
Ym.prototype.v=function(){this.ea();this.B&&this.Ja();this.ua();this.pa(this.w,this.H);this.B?(uk(this,this.i(),this.u()),uk(this,this.u(),this.l())):uk(this,this.i(),this.l());this.w&&vk(this,this.l(),this.w);Wi(this.i())?this.B&&!Wi(this.u())?this.u().focus():this.l().focus():this.i().focus();P.prototype.v.call(this)};Ym.prototype.o=function(){this.H=this.w=null;P.prototype.o.call(this)};u(Ym.prototype,{i:sl,U:tl,ea:ul,jb:vl,j:wl,u:Wm,Bc:Xm,Ja:function(){var a=Wm.call(this),b=Xm.call(this);Jj(this,
a,function(){Pj(b)&&(N(a,!0),Nj(b))})},M:function(){var a=Wm.call(this);var b=Xm.call(this);var c=Wi(a);c=!/^[\s\xa0]*$/.test(null==c?"":String(c));N(a,c);c?(Nj(b),b=!0):(Oj(b,C("Enter your account name").toString()),b=!1);return b?Ua(Wi(a)):null},l:pm,ba:sm,lb:qm,ua:tm,P:um,Nb:jl,Mb:kl,pa:ll});function Zm(a,b){var c=Ci(W(a)),d=b.j(),e=null;c&&(e=b.M());var f=b.P();if(d){if(c)if(e)e=cb(e);else{b.u().focus();return}if(f){var g=firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.EmailAuthProvider.credential(d,f);V(a,b.I(r(a.Yb,a),[d,f],
function(h){var k={user:h.user,credential:g,operationType:h.operationType,additionalUserInfo:h.additionalUserInfo};return c?(h=h.user.updateProfile({displayName:e}).then(function(){return Ll(a,b,k)}),V(a,h),h):Ll(a,b,k)},function(h){if(!h.name||"cancel"!=h.name){var k=Kl(h);h=T(k);switch(k.code){case "auth/email-already-in-use":return $m(a,b,d,k);case "auth/too-many-requests":h=C("Too many account requests are coming from your IP address. Try again in a few minutes.").toString();case "auth/operation-not-allowed":case "auth/weak-password":N(b.l(),
!1);Oj(b.ba(),h);break;case "auth/admin-restricted-operation":pi(W(a))?(h=Q(b),b.m(),L("handleUnauthorizedUser",a,h,d,firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.EmailAuthProvider.PROVIDER_ID)):b.a(h);break;default:k="setAccountInfo: "+ah(k),og(k,void 0),b.a(h)}}}))}else b.l().focus()}else b.i().focus()}function $m(a,b,c,d){function e(){var g=T(d);N(b.i(),!1);Oj(b.U(),g);b.i().focus()}var f=U(a).fetchSignInMethodsForEmail(c).then(function(g){g.length?e():(g=Q(b),b.m(),L("passwordRecovery",a,g,c,!1,Kd().toString()))},function(){e()});
V(a,f);return f}K.passwordSignUp=function(a,b,c,d,e,f){function g(){h.m();S(a,b)}var h=new Ym(Ci(W(a)),function(){Zm(a,h)},e?void 0:g,c,d,H(W(a)),J(W(a)),f);h.render(b);Y(a,h)};function an(){return M(this,"firebaseui-id-phone-confirmation-code")}function bn(){return M(this,"firebaseui-id-phone-confirmation-code-error")}function cn(){return M(this,"firebaseui-id-resend-countdown")}function dn(a,b,c,d,e,f,g,h,k){P.call(this,fl,{phoneNumber:e},k,"phoneSignInFinish",{F:g,D:h});this.jb=f;this.i=new hj(1E3);
this.B=f;this.P=a;this.l=b;this.H=c;this.M=d}m(dn,P);dn.prototype.v=function(){var a=this;this.U(this.jb);ke(this.i,"tick",this.w,!1,this);this.i.start();O(this,M(this,"firebaseui-id-change-phone-number-link"),function(){a.P()});O(this,this.Da(),function(){a.M()});this.Ja(this.l);this.ea(this.l,this.H);this.u().focus();P.prototype.v.call(this)};dn.prototype.o=function(){this.M=this.H=this.l=this.P=null;ij(this.i);se(this.i,"tick",this.w);this.i=null;P.prototype.o.call(this)};dn.prototype.w=function(){--this.B;
0<this.B?this.U(this.B):(ij(this.i),se(this.i,"tick",this.w),this.ua(),this.lb())};u(dn.prototype,{u:an,pa:bn,Ja:function(a){var b=an.call(this),c=bn.call(this);Jj(this,b,function(){Pj(c)&&(N(b,!0),Nj(c))});a&&Kj(this,b,function(){a()})},ba:function(){var a=Ua(Wi(an.call(this))||"");return/^\d{6}$/.test(a)?a:null},Fb:cn,U:function(a){$c(cn.call(this),C("Resend code in "+((9<a?"0:":"0:0")+a)).toString())},ua:function(){Nj(this.Fb())},Da:function(){return M(this,"firebaseui-id-resend-link")},lb:function(){Oj(this.Da())},
Nb:jl,Mb:kl,ea:ll});function en(a,b,c,d){function e(g){b.u().focus();N(b.u(),!1);Oj(b.pa(),g)}var f=b.ba();f?(b.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",C("Verifying...").toString()),V(a,b.I(r(d.confirm,d),[f],function(g){b.h();b.$("firebaseui-icon-done",C("Verified!").toString());var h=setTimeout(function(){b.h();b.m();var k={user:fn(a).currentUser,credential:null,operationType:g.operationType,additionalUserInfo:g.additionalUserInfo};
Ll(a,b,k,!0)},1E3);V(a,function(){b&&b.h();clearTimeout(h)})},function(g){if(g.name&&"cancel"==g.name)b.h();else{var h=Kl(g);g=T(h);switch(h.code){case "auth/credential-already-in-use":b.h();break;case "auth/code-expired":h=Q(b);b.h();b.m();L("phoneSignInStart",a,h,c,g);break;case "auth/missing-verification-code":case "auth/invalid-verification-code":b.h();e(g);break;default:b.h(),b.a(g)}}}))):e(C("Wrong code. Try again.").toString())}K.phoneSignInFinish=function(a,b,c,d,e,f){var g=new dn(function(){g.m();
L("phoneSignInStart",a,b,c)},function(){en(a,g,c,e)},function(){g.m();S(a,b)},function(){g.m();L("phoneSignInStart",a,b,c)},Yh(c),d,H(W(a)),J(W(a)));g.render(b);Y(a,g);f&&g.a(f)};var gn=!z&&!(y("Safari")&&!(Xb()||y("Coast")||y("Opera")||y("Edge")||y("Firefox")||y("FxiOS")||y("Silk")||y("Android")));function hn(a,b){if(/-[a-z]/.test(b))return null;if(gn&&a.dataset){if(!(!y("Android")||Xb()||y("Firefox")||y("FxiOS")||y("Opera")||y("Silk")||b in a.dataset))return null;a=a.dataset[b];return void 0===
a?null:a}return a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())}function jn(a,b,c){var d=this;a=hd(ek,{items:a},null,this.s);lk.call(this,a,!0,!0);c&&(c=kn(a,c))&&(c.focus(),Bj(c,a));O(this,a,function(e){if(e=(e=ad(e.target,"firebaseui-id-list-box-dialog-button"))&&hn(e,"listboxid"))mk.call(d),b(e)})}function kn(a,b){a=(a||document).getElementsByTagName("BUTTON");for(var c=0;c<a.length;c++)if(hn(a[c],"listboxid")===b)return a[c];return null}function ln(){return M(this,"firebaseui-id-phone-number")}
function mn(){return M(this,"firebaseui-id-country-selector")}function nn(){return M(this,"firebaseui-id-phone-number-error")}function on(a,b){var c=a.a,d=pn("1-US-0",c),e=null;b&&pn(b,c)?e=b:d?e="1-US-0":e=0<c.length?c[0].c:null;if(!e)throw Error("No available default country");qn.call(this,e,a)}function pn(a,b){a=Qh(a);return!(!a||!Ma(b,a))}function rn(a){return a.map(function(b){return{id:b.c,Ma:"firebaseui-flag "+sn(b),label:b.name+" "+("\u200e+"+b.b)}})}function sn(a){return"firebaseui-flag-"+
a.f}function tn(a){var b=this;jn.call(this,rn(a.a),function(c){qn.call(b,c,a,!0);b.O().focus()},this.Ba)}function qn(a,b,c){var d=Qh(a);d&&(c&&(c=Ua(Wi(ln.call(this))||""),b=Ph(b,c),b.length&&b[0].b!=d.b&&(c="+"+d.b+c.substr(b[0].b.length+1),Xi(ln.call(this),c))),b=Qh(this.Ba),this.Ba=a,a=M(this,"firebaseui-id-country-selector-flag"),b&&Vi(a,sn(b)),Ui(a,sn(d)),$c(M(this,"firebaseui-id-country-selector-code"),"\u200e+"+d.b))}function un(a,b,c,d,e,f,g,h,k,p){P.call(this,el,{Gb:b,Aa:k||null,Va:!!c,ia:!!f},
p,"phoneSignInStart",{F:d,D:e});this.H=h||null;this.M=b;this.l=a;this.w=c||null;this.pa=g||null}m(un,P);un.prototype.v=function(){this.ea(this.pa,this.H);this.P(this.l,this.w||void 0);this.M||uk(this,this.O(),this.i());vk(this,this.i(),this.l);this.O().focus();Bm(this.O(),(this.O().value||"").length);P.prototype.v.call(this)};un.prototype.o=function(){this.w=this.l=null;P.prototype.o.call(this)};u(un.prototype,{Cb:nk,O:ln,B:nn,ea:function(a,b,c){var d=this,e=ln.call(this),f=mn.call(this),g=nn.call(this),
h=a||Vh,k=h.a;if(0==k.length)throw Error("No available countries provided.");on.call(d,h,b);O(this,f,function(){tn.call(d,h)});Jj(this,e,function(){Pj(g)&&(N(e,!0),Nj(g));var p=Ua(Wi(e)||""),t=Qh(this.Ba),I=Ph(h,p);p=pn("1-US-0",k);I.length&&I[0].b!=t.b&&(t=I[0],qn.call(d,"1"==t.b&&p?"1-US-0":t.c,h))});c&&Kj(this,e,function(){c()})},U:function(a){var b=Ua(Wi(ln.call(this))||"");a=a||Vh;var c=a.a,d=Ph(Vh,b);if(d.length&&!Ma(c,d[0]))throw Xi(ln.call(this)),ln.call(this).focus(),Oj(nn.call(this),C("The country code provided is not supported.").toString()),
Error("The country code provided is not supported.");c=Qh(this.Ba);d.length&&d[0].b!=c.b&&qn.call(this,d[0].c,a);d.length&&(b=b.substr(d[0].b.length+1));return b?new Wh(this.Ba,b):null},Ja:mn,ba:function(){return M(this,"firebaseui-recaptcha-container")},u:function(){return M(this,"firebaseui-id-recaptcha-error")},i:jl,ua:kl,P:ll});function vn(a,b,c,d){try{var e=b.U(Qi)}catch(f){return}e?Oi?(b.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",
C("Verifying...").toString()),V(a,b.I(r(a.cc,a),[Yh(e),c],function(f){var g=Q(b);b.$("firebaseui-icon-done",C("Code sent!").toString());var h=setTimeout(function(){b.h();b.m();L("phoneSignInFinish",a,g,e,15,f)},1E3);V(a,function(){b&&b.h();clearTimeout(h)})},function(f){b.h();if(!f.name||"cancel"!=f.name){grecaptcha.reset(Ri);Oi=null;var g=f&&f.message||"";if(f.code)switch(f.code){case "auth/too-many-requests":g=C("This phone number has been used too many times").toString();break;case "auth/invalid-phone-number":case "auth/missing-phone-number":b.O().focus();
Oj(b.B(),Hd().toString());return;case "auth/admin-restricted-operation":if(pi(W(a))){f=Q(b);b.m();L("handleUnauthorizedUser",a,f,Yh(e),firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.PhoneAuthProvider.PROVIDER_ID);return}g=T(f);break;default:g=T(f)}b.a(g)}}))):Pi?Oj(b.u(),C("Solve the reCAPTCHA").toString()):!Pi&&d&&b.i().click():(b.O().focus(),Oj(b.B(),Hd().toString()))}K.phoneSignInStart=function(a,b,c,d){var e=qi(W(a))||{};Oi=null;Pi=!(e&&"invisible"===e.size);var f=Yl(a),g=zi(W(a)),h=f?yi(W(a)):null;g=c&&c.a||g&&g.c||null;c=c&&
c.Aa||h;(h=Ai(W(a)))&&Uh(h);Qi=h?new Oh(Ai(W(a))):Vh;var k=new un(function(t){vn(a,k,p,!(!t||!t.keyCode))},Pi,f?null:function(){p.clear();k.m();S(a,b)},H(W(a)),J(W(a)),f,Qi,g,c);k.render(b);Y(a,k);d&&k.a(d);e.callback=function(t){k.u()&&Nj(k.u());Oi=t;Pi||vn(a,k,p)};e["expired-callback"]=function(){Oi=null};var p=new firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.RecaptchaVerifier(Pi?k.ba():k.i(),e,fn(a).app);V(a,k.I(r(p.render,p),[],function(t){Ri=t},function(t){t.name&&"cancel"==t.name||(t=T(t),k.m(),S(a,b,void 0,t))}))};K.prefilledEmailSignIn=
function(a,b,c){var d=new Em;d.render(b);Y(a,d);V(a,d.I(r(U(a).fetchSignInMethodsForEmail,U(a)),[c],function(e){d.m();var f=!(!Xl(a)||!wn(a));am(a,b,e,c,void 0,f)},function(e){e=T(e);d.m();L("signIn",a,b,c,e)}))};function xn(a,b,c,d,e){P.call(this,dl,{Sb:b},e,"providerSignIn",{F:c,D:d});this.i=a}m(xn,P);xn.prototype.v=function(){this.l(this.i);P.prototype.v.call(this)};xn.prototype.o=function(){this.i=null;P.prototype.o.call(this)};u(xn.prototype,{l:function(a){function b(g){a(g)}for(var c=this.g?
Tc("firebaseui-id-idp-button",this.g||this.s.a):[],d=0;d<c.length;d++){var e=c[d],f=hn(e,"providerId");O(this,e,za(b,f))}}});K.providerSignIn=function(a,b,c,d){var e=new xn(function(f){f==firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.EmailAuthProvider.PROVIDER_ID?(e.m(),Zl(a,b,d)):f==firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.PhoneAuthProvider.PROVIDER_ID?(e.m(),L("phoneSignInStart",a,b)):"anonymous"==f?Ul(a,e):Rl(a,e,f,d);Z(a);a.l.cancel()},ji(W(a)),H(W(a)),J(W(a)));e.render(b);Y(a,e);c&&e.a(c);yn(a)};K.sendEmailLinkForSignIn=function(a,b,c,d){var e=new fm;
e.render(b);Y(a,e);bm(a,e,c,d,function(f){e.m();f&&"auth/admin-restricted-operation"==f.code&&pi(W(a))?L("handleUnauthorizedUser",a,b,c,firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.EmailAuthProvider.PROVIDER_ID):(f=T(f),L("signIn",a,b,c,f))})};function zn(a,b,c,d,e,f,g){P.call(this,wk,{email:c,Va:!!b,ia:!!f},g,"signIn",{F:d,D:e});this.i=a;this.u=b}m(zn,P);zn.prototype.v=function(){this.w(this.i);this.B(this.i,this.u||void 0);this.l().focus();Bm(this.l(),(this.l().value||"").length);P.prototype.v.call(this)};zn.prototype.o=function(){this.u=
this.i=null;P.prototype.o.call(this)};u(zn.prototype,{l:sl,M:tl,w:ul,H:vl,j:wl,U:jl,P:kl,B:ll});K.signIn=function(a,b,c,d){var e=Xl(a),f=new zn(function(){var g=f,h=g.j()||"";h&&$l(a,g,h)},e?null:function(){f.m();S(a,b,c)},c,H(W(a)),J(W(a)),e);f.render(b);Y(a,f);d&&f.a(d)};function An(a,b,c,d,e,f,g){P.call(this,Nk,{kc:a,yb:c,Eb:!!d},g,"unauthorizedUser",{F:e,D:f});this.l=b;this.i=d}m(An,P);An.prototype.v=function(){var a=this,b=M(this,"firebaseui-id-unauthorized-user-help-link");this.i&&b&&O(this,
b,function(){a.i()});O(this,this.u(),function(){a.l()});this.u().focus();P.prototype.v.call(this)};An.prototype.o=function(){this.i=this.l=null;P.prototype.o.call(this)};u(An.prototype,{u:kl});K.handleUnauthorizedUser=function(a,b,c,d){function e(){S(a,b)}d===firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.EmailAuthProvider.PROVIDER_ID?e=function(){Zl(a,b)}:d===firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.PhoneAuthProvider.PROVIDER_ID&&(e=function(){L("phoneSignInStart",a,b)});var f=null,g=null;d===firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.EmailAuthProvider.PROVIDER_ID&&oi(W(a))?(f=ui(W(a)),
g=vi(W(a))):pi(W(a))&&(f=si(W(a)),g=ti(W(a)));var h=new An(c,function(){h.m();e()},f,g,H(W(a)),J(W(a)));h.render(b);Y(a,h)};function Bn(a,b,c,d,e,f){P.call(this,Ok,{email:a},f,"unsupportedProvider",{F:d,D:e});this.l=b;this.i=c}m(Bn,P);Bn.prototype.v=function(){this.w(this.l,this.i);this.u().focus();P.prototype.v.call(this)};Bn.prototype.o=function(){this.i=this.l=null;P.prototype.o.call(this)};u(Bn.prototype,{u:jl,B:kl,w:ll});K.unsupportedProvider=function(a,b,c){var d=new Bn(c,function(){d.m();L("passwordRecovery",
a,b,c)},function(){d.m();S(a,b,c)},H(W(a)),J(W(a)));d.render(b);Y(a,d)};function Cn(a,b){this.$=!1;var c=Dn(b);if(En[c])throw Error('An AuthUI instance already exists for the key "'+c+'"');En[c]=this;this.a=a;this.u=null;this.Y=!1;Fn(this.a);this.h=firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.initializeApp({apiKey:a.app.options.apiKey,authDomain:a.app.options.authDomain},a.app.name+"-firebaseui-temp").auth();if(a=a.emulatorConfig)c=a.port,this.h.useEmulator(a.protocol+"://"+a.host+(null===c?"":":"+c),a.options);Fn(this.h);this.h.setPersistence&&
this.h.setPersistence(firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.Auth.Persistence.SESSION);this.oa=b;this.ca=new bi;this.g=this.T=this.i=this.J=this.O=null;this.s=[];this.Z=!1;this.l=Pf.Xa();this.j=this.C=null;this.da=this.A=!1}function Fn(a){a&&a.INTERNAL&&a.INTERNAL.logFramework&&a.INTERNAL.logFramework("FirebaseUI-web")}var En={};function Dn(a){return a||"[DEFAULT]"}function Sl(a){Z(a);a.i||(a.i=Gn(a,function(b){return b&&!zh(X(a))?F(fn(a).getRedirectResult().then(function(c){return c},function(c){if(c&&"auth/email-already-in-use"==
c.code&&c.email&&c.credential)throw c;return Hn(a,c)})):F(U(a).getRedirectResult().then(function(c){return di(W(a))&&!c.user&&a.j&&!a.j.isAnonymous?fn(a).getRedirectResult():c}))}));return a.i}function Y(a,b){Z(a);a.g=b}var In=null;function U(a){Z(a);return a.h}function fn(a){Z(a);return a.a}function X(a){Z(a);return a.oa}function wn(a){Z(a);return a.O?a.O.emailHint:void 0}l=Cn.prototype;l.nb=function(){Z(this);return!!Ch(X(this))||Jn(tf())};function Jn(a){a=new Pb(a);return"signIn"===(a.a.a.get(x.ub)||
null)&&!!a.a.a.get(x.$a)}l.start=function(a,b){Kn(this,a,b)};function Kn(a,b,c,d){Z(a);"undefined"!==typeof a.a.languageCode&&(a.u=a.a.languageCode);var e="en".replace(/_/g,"-");a.a.languageCode=e;a.h.languageCode=e;a.Y=!0;"undefined"!==typeof a.a.tenantId&&(a.h.tenantId=a.a.tenantId);a.ib(c);a.O=d||null;var f=n.document;a.C?a.C.then(function(){"complete"==f.readyState?Ln(a,b):le(window,"load",function(){Ln(a,b)})}):"complete"==f.readyState?Ln(a,b):le(window,"load",function(){Ln(a,b)})}function Ln(a,
b){var c=sf(b,"Could not find the FirebaseUI widget element on the page.");c.setAttribute("lang","en".replace(/_/g,"-"));if(In){var d=In;Z(d);zh(X(d))&&tg("UI Widget is already rendered on the page and is pending some user interaction. Only one widget instance can be rendered per page. The previous instance has been automatically reset.");In.reset()}In=a;a.T=c;Mn(a,c);if(jh(new kh)&&jh(new lh)){b=sf(b,"Could not find the FirebaseUI widget element on the page.");c=tf();d=Jh(W(a).a,"queryParameterForSignInSuccessUrl");
c=(c=tb(c,d))?zc(Bc(c)).toString():null;a:{d=tf();var e=Bi(W(a));d=tb(d,e)||"";for(f in Ni)if(Ni[f].toLowerCase()==d.toLowerCase()){var f=Ni[f];break a}f="callback"}switch(f){case "callback":c&&(f=X(a),xh(sh,c,f));a.nb()?L("callback",a,b):S(a,b,wn(a));break;case "resetPassword":L("passwordReset",a,b,cm(),dm());break;case "recoverEmail":L("emailChangeRevocation",a,b,cm());break;case "revertSecondFactorAddition":L("revertSecondFactorAddition",a,b,cm());break;case "verifyEmail":L("emailVerification",
a,b,cm(),dm());break;case "verifyAndChangeEmail":L("verifyAndChangeEmail",a,b,cm(),dm());break;case "signIn":L("emailLinkSignInCallback",a,b,tf());Nn();break;case "select":c&&(f=X(a),xh(sh,c,f));S(a,b);break;default:throw Error("Unhandled widget operation.");}b=W(a);(b=Li(b).uiShown||null)&&b()}else b=sf(b,"Could not find the FirebaseUI widget element on the page."),f=new Jl(C("The browser you are using does not support Web Storage. Please try again in a different browser.").toString()),f.render(b),
Y(a,f);b=a.g&&"blank"==a.g.Ga&&Gi(W(a));Ch(X(a))&&!b&&(b=Ch(X(a)),Gm(a,b.a),wh(rh,X(a)))}function Gn(a,b){if(a.A)return b(On(a));V(a,function(){a.A=!1});if(di(W(a))){var c=new Ve(function(d){V(a,a.a.onAuthStateChanged(function(e){a.j=e;a.A||(a.A=!0,d(b(On(a))))}))});V(a,c);return c}a.A=!0;return b(null)}function On(a){Z(a);return di(W(a))&&a.j&&a.j.isAnonymous?a.j:null}function V(a,b){Z(a);if(b){a.s.push(b);var c=function(){Qa(a.s,function(d){return d==b})};"function"!=typeof b&&b.then(c,c)}}l.Db=
function(){Z(this);this.Z=!0};function Pn(a){Z(a);var b;(b=a.Z)||(a=W(a),a=xi(a,firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.GoogleAuthProvider.PROVIDER_ID),b=!(!a||"select_account"!==a.prompt));return b}function Ml(a){"undefined"!==typeof a.a.languageCode&&a.Y&&(a.Y=!1,a.a.languageCode=a.u)}function Gm(a,b){a.a.tenantId=b;a.h.tenantId=b}l.reset=function(){Z(this);var a=this;this.T&&this.T.removeAttribute("lang");this.J&&De(this.J);Ml(this);this.O=null;Nn();wh(rh,X(this));Z(this);this.l.cancel();this.i=F({user:null,credential:null});
In==this&&(In=null);this.T=null;for(var b=0;b<this.s.length;b++)if("function"==typeof this.s[b])this.s[b]();else this.s[b].cancel&&this.s[b].cancel();this.s=[];Ah(X(this));this.g&&(this.g.m(),this.g=null);this.L=null;this.h&&(this.C=mm(this).then(function(){a.C=null},function(){a.C=null}))};function Mn(a,b){a.L=null;a.J=new Ee(b);a.J.register();ke(a.J,"pageEnter",function(c){c=c&&c.pageId;if(a.L!=c){var d=W(a);(d=Li(d).uiChanged||null)&&d(a.L,c);a.L=c}})}l.ib=function(a){Z(this);var b=this.ca,c;for(c in a)try{Ih(b.a,
c,a[c])}catch(d){og('Invalid config: "'+c+'"',void 0)}fc&&Ih(b.a,"popupMode",!1);Ai(b);!this.da&&Ki(W(this))&&(tg("signInSuccess callback is deprecated. Please use signInSuccessWithAuthResult callback instead."),this.da=!0)};function W(a){Z(a);return a.ca}l.Wb=function(){Z(this);var a=W(this),b=Jh(a.a,"widgetUrl");a=Bi(a);var c=b.search(sb);for(var d=0,e,f=[];0<=(e=rb(b,d,a,c));)f.push(b.substring(d,e)),d=Math.min(b.indexOf("&",e)+1||c,c);f.push(b.substr(d));b=f.join("").replace(ub,"$1");c="="+encodeURIComponent("select");
(a+=c)?(c=b.indexOf("#"),0>c&&(c=b.length),d=b.indexOf("?"),0>d||d>c?(d=c,e=""):e=b.substring(d+1,c),b=[b.substr(0,d),e,b.substr(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,c=b[0]+(b[1]?"?"+b[1]:"")+b[2]):c=b;W(this).a.get("popupMode")?(a=(window.screen.availHeight-600)/2,b=(window.screen.availWidth-500)/2,c=c||"about:blank",a={width:500,height:600,top:0<a?a:0,left:0<b?b:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1},a.target=a.target||c.target||"google_popup",a.width=a.width||690,a.height=a.height||500,
(a=pf(c,a))&&a.focus()):Nc(window.location,c)};function Z(a){if(a.$)throw Error("AuthUI instance is deleted!");}l.Wa=function(){var a=this;Z(this);return this.h.app.delete().then(function(){var b=Dn(X(a));delete En[b];a.reset();a.$=!0})};function yn(a){Z(a);try{Qf(a.l,li(W(a)),Pn(a)).then(function(b){return a.g?Vl(a,a.g,b):!1})}catch(b){}}l.Ib=function(a,b){Z(this);var c=this,d=vf();if(!Di(W(this)))return df(Error("Email link sign-in should be enabled to trigger email sending."));var e=Fi(W(this)),
f=new Pb(e.url);Qb(f,d);b&&b.a&&(Gh(d,b,X(this)),Tb(f,b.a.providerId));Rb(f,Ei(W(this)));return Gn(this,function(g){g&&((g=g.uid)?f.a.a.set(x.Pa,g):Nb(f.a.a,x.Pa));e.url=f.toString();return U(c).sendSignInLinkToEmail(a,e)}).then(function(){var g=X(c),h={};h.email=a;xh(th,Yg(d,JSON.stringify(h)),g)},function(g){wh(uh,X(c));wh(th,X(c));throw g;})};function Hm(a,b){var c=Sb(new Pb(b));if(!c)return F(null);b=new Ve(function(d,e){var f=fn(a).onAuthStateChanged(function(g){f();g&&g.isAnonymous&&g.uid===
c?d(g):g&&g.isAnonymous&&g.uid!==c?e(Error("anonymous-user-mismatch")):e(Error("anonymous-user-not-found"))});V(a,f)});V(a,b);return b}function Lm(a,b,c,d,e){Z(a);var f=e||null,g=firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.EmailAuthProvider.credentialWithLink(c,d);c=f?U(a).signInWithEmailLink(c,d).then(function(h){return h.user.linkWithCredential(f)}).then(function(){return mm(a)}).then(function(){return Hn(a,{code:"auth/email-already-in-use"},f)}):U(a).fetchSignInMethodsForEmail(c).then(function(h){return h.length?Hn(a,{code:"auth/email-already-in-use"},
g):b.linkWithCredential(g)});V(a,c);return c}function Mm(a,b,c,d){Z(a);var e=d||null,f;b=U(a).signInWithEmailLink(b,c).then(function(g){f={user:g.user,credential:null,operationType:g.operationType,additionalUserInfo:g.additionalUserInfo};if(e)return g.user.linkWithCredential(e).then(function(h){f={user:h.user,credential:e,operationType:f.operationType,additionalUserInfo:h.additionalUserInfo}})}).then(function(){mm(a)}).then(function(){return fn(a).updateCurrentUser(f.user)}).then(function(){f.user=
fn(a).currentUser;return f});V(a,b);return b}function Nn(){var a=tf();if(Jn(a)){a=new Pb(a);for(var b in x)x.hasOwnProperty(b)&&Nb(a.a.a,x[b]);b={state:"signIn",mode:"emailLink",operation:"clear"};var c=n.document.title;n.history&&n.history.replaceState&&n.history.replaceState(b,c,a.toString())}}l.bc=function(a,b){Z(this);var c=this;return U(this).signInWithEmailAndPassword(a,b).then(function(d){return Gn(c,function(e){return e?mm(c).then(function(){return Hn(c,{code:"auth/email-already-in-use"},
firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.EmailAuthProvider.credential(a,b))}):d})})};l.Yb=function(a,b){Z(this);var c=this;return Gn(this,function(d){if(d){var e=firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.EmailAuthProvider.credential(a,b);return d.linkWithCredential(e)}return U(c).createUserWithEmailAndPassword(a,b)})};l.ac=function(a){Z(this);var b=this;return Gn(this,function(c){return c?c.linkWithCredential(a).then(function(d){return d},function(d){if(d&&"auth/email-already-in-use"==d.code&&d.email&&d.credential)throw d;return Hn(b,d,a)}):U(b).signInWithCredential(a)})};
function Tl(a,b){Z(a);return Gn(a,function(c){return c&&!zh(X(a))?c.linkWithPopup(b).then(function(d){return d},function(d){if(d&&"auth/email-already-in-use"==d.code&&d.email&&d.credential)throw d;return Hn(a,d)}):U(a).signInWithPopup(b)})}l.dc=function(a){Z(this);var b=this,c=this.i;this.i=null;return Gn(this,function(d){return d&&!zh(X(b))?d.linkWithRedirect(a):U(b).signInWithRedirect(a)}).then(function(){},function(d){b.i=c;throw d;})};l.cc=function(a,b){Z(this);var c=this;return Gn(this,function(d){return d?
d.linkWithPhoneNumber(a,b).then(function(e){return new Sf(e,function(f){if("auth/credential-already-in-use"==f.code)return Hn(c,f);throw f;})}):fn(c).signInWithPhoneNumber(a,b).then(function(e){return new Sf(e)})})};l.$b=function(){Z(this);return fn(this).signInAnonymously()};function Ol(a,b){Z(a);return Gn(a,function(c){if(a.j&&!a.j.isAnonymous&&di(W(a))&&!U(a).currentUser)return mm(a).then(function(){"password"==b.credential.providerId&&(b.credential=null);return b});if(c)return mm(a).then(function(){return c.linkWithCredential(b.credential)}).then(function(d){b.user=
d.user;b.credential=d.credential;b.operationType=d.operationType;b.additionalUserInfo=d.additionalUserInfo;return b},function(d){if(d&&"auth/email-already-in-use"==d.code&&d.email&&d.credential)throw d;return Hn(a,d,b.credential)});if(!b.user)throw Error('Internal error: An incompatible or outdated version of "firebase.js" may be used.');return mm(a).then(function(){return fn(a).updateCurrentUser(b.user)}).then(function(){b.user=fn(a).currentUser;b.operationType="signIn";b.credential&&b.credential.providerId&&
"password"==b.credential.providerId&&(b.credential=null);return b})})}l.Xb=function(a,b){Z(this);return U(this).signInWithEmailAndPassword(a,b)};function mm(a){Z(a);return U(a).signOut()}function Hn(a,b,c){Z(a);if(b&&b.code&&("auth/email-already-in-use"==b.code||"auth/credential-already-in-use"==b.code)){var d=ei(W(a));return F().then(function(){return d(new Nd("anonymous-upgrade-merge-conflict",null,c||b.credential))}).then(function(){a.g&&(a.g.m(),a.g=null);throw b;})}return df(b)}function Qn(a,
b,c,d){P.call(this,il,void 0,d,"providerMatchByEmail",{F:b,D:c});this.i=a}m(Qn,P);Qn.prototype.v=function(){this.u(this.i);this.w(this.i);this.l().focus();Bm(this.l(),(this.l().value||"").length);P.prototype.v.call(this)};Qn.prototype.o=function(){this.i=null;P.prototype.o.call(this)};u(Qn.prototype,{l:sl,H:tl,u:ul,B:vl,j:wl,M:jl,w:ll});function Rn(a,b,c,d,e){P.call(this,hl,{ec:b},e,"selectTenant",{F:c,D:d});this.i=a}m(Rn,P);Rn.prototype.v=function(){Sn(this,this.i);P.prototype.v.call(this)};Rn.prototype.o=
function(){this.i=null;P.prototype.o.call(this)};function Sn(a,b){function c(h){b(h)}for(var d=a.g?Tc("firebaseui-id-tenant-selection-button",a.g||a.s.a):[],e=0;e<d.length;e++){var f=d[e],g=hn(f,"tenantId");O(a,f,za(c,g))}}function Tn(a){P.call(this,Ck,void 0,a,"spinner")}m(Tn,P);function Un(a){this.a=new Hh;G(this.a,"authDomain");G(this.a,"displayMode",Vn);G(this.a,"tenants");G(this.a,"callbacks");G(this.a,"tosUrl");G(this.a,"privacyPolicyUrl");for(var b in a)if(a.hasOwnProperty(b))try{Ih(this.a,
b,a[b])}catch(c){og('Invalid config: "'+b+'"',void 0)}}function Wn(a){a=a.a.get("displayMode");for(var b in Xn)if(Xn[b]===a)return Xn[b];return Vn}function Yn(a){return a.a.get("callbacks")||{}}function Zn(a){var b=a.a.get("tosUrl")||null;a=a.a.get("privacyPolicyUrl")||null;b&&!a&&tg("Privacy Policy URL is missing, the link will not be displayed.");if(b&&a){if("function"===typeof b)return b;if("string"===typeof b)return function(){rf(b)}}return null}function $n(a){var b=a.a.get("tosUrl")||null,c=
a.a.get("privacyPolicyUrl")||null;c&&!b&&tg("Terms of Service URL is missing, the link will not be displayed.");if(b&&c){if("function"===typeof c)return c;if("string"===typeof c)return function(){rf(c)}}return null}function ao(a,b){a=a.a.get("tenants");if(!a||!a.hasOwnProperty(b)&&!a.hasOwnProperty(bo))throw Error("Invalid tenant configuration!");}function co(a,b,c){a=a.a.get("tenants");if(!a)throw Error("Invalid tenant configuration!");var d=[];a=a[b]||a[bo];if(!a)return og("Invalid tenant configuration: "+
(b+" is not configured!"),void 0),d;b=a.signInOptions;if(!b)throw Error("Invalid tenant configuration: signInOptions are invalid!");b.forEach(function(e){if("string"===typeof e)d.push(e);else if("string"===typeof e.provider){var f=e.hd;f&&c?(f instanceof RegExp?f:new RegExp("@"+f.replace(".","\\.")+"$")).test(c)&&d.push(e.provider):d.push(e.provider)}else e="Invalid tenant configuration: signInOption "+(JSON.stringify(e)+" is invalid!"),og(e,void 0)});return d}function eo(a,b,c){a=fo(a,b);(b=a.signInOptions)&&
c&&(b=b.filter(function(d){return"string"===typeof d?c.includes(d):c.includes(d.provider)}),a.signInOptions=b);return a}function fo(a,b){var c=go;var d=void 0===d?{}:d;ao(a,b);a=a.a.get("tenants");return wf(a[b]||a[bo],c,d)}var go=["immediateFederatedRedirect","privacyPolicyUrl","signInFlow","signInOptions","tosUrl"],Vn="optionFirst",Xn={pc:Vn,oc:"identifierFirst"},bo="*";function ho(a,b){var c=this;this.s=sf(a);this.a={};Object.keys(b).forEach(function(d){c.a[d]=new Un(b[d])});this.ob=this.g=this.A=
this.h=this.i=this.j=null;Object.defineProperty(this,"languageCode",{get:function(){return this.ob},set:function(d){this.ob=d||null},enumerable:!1})}l=ho.prototype;l.Ub=function(a,b){var c=this;io(this);var d=a.apiKey;return new Ve(function(e,f){if(c.a.hasOwnProperty(d)){var g=Yn(c.a[d]).selectTenantUiHidden||null;if(Wn(c.a[d])===Vn){var h=[];b.forEach(function(t){t=t||"_";var I=c.a[d].a.get("tenants");if(!I)throw Error("Invalid tenant configuration!");(I=I[t]||I[bo])?t={tenantId:"_"!==t?t:null,V:I.fullLabel||
null,displayName:I.displayName,za:I.iconUrl,ta:I.buttonColor}:(og("Invalid tenant configuration: "+(t+" is not configured!"),void 0),t=null);t&&h.push(t)});var k=function(t){t={tenantId:t,providerIds:co(c.a[d],t||"_")};e(t)};if(1===h.length){k(h[0].tenantId);return}c.g=new Rn(function(t){io(c);g&&g();k(t)},h,Zn(c.a[d]),$n(c.a[d]))}else c.g=new Qn(function(){var t=c.g.j();if(t){for(var I=0;I<b.length;I++){var Ca=co(c.a[d],b[I]||"_",t);if(0!==Ca.length){t={tenantId:b[I],providerIds:Ca,email:t};io(c);
g&&g();e(t);return}}c.g.a(Ld({code:"no-matching-tenant-for-email"}).toString())}},Zn(c.a[d]),$n(c.a[d]));c.g.render(c.s);(f=Yn(c.a[d]).selectTenantUiShown||null)&&f()}else{var p=Error("Invalid project configuration: API key is invalid!");p.code="invalid-configuration";c.pb(p);f(p)}})};l.Pb=function(a,b){if(!this.a.hasOwnProperty(a))throw Error("Invalid project configuration: API key is invalid!");var c=b||void 0;ao(this.a[a],b||"_");try{this.i=firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.app(c).auth()}catch(e){var d=this.a[a].a.get("authDomain");
if(!d)throw Error("Invalid project configuration: authDomain is required!");a=firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__.default.initializeApp({apiKey:a,authDomain:d},c);a.auth().tenantId=b;this.i=a.auth()}return this.i};l.Zb=function(a,b){var c=this;return new Ve(function(d,e){function f(I,Ca){c.j=new Cn(a);Kn(c.j,c.s,I,Ca)}var g=a.app.options.apiKey;c.a.hasOwnProperty(g)||e(Error("Invalid project configuration: API key is invalid!"));var h=eo(c.a[g],a.tenantId||"_",b&&b.providerIds);io(c);e={signInSuccessWithAuthResult:function(I){d(I);
return!1}};var k=Yn(c.a[g]).signInUiShown||null,p=!1;e.uiChanged=function(I,Ca){null===I&&"callback"===Ca?((I=Vc("firebaseui-id-page-callback",c.s))&&Nj(I),c.h=new Tn,c.h.render(c.s)):p||null===I&&"spinner"===Ca||"blank"===Ca||(c.h&&(c.h.m(),c.h=null),p=!0,k&&k(a.tenantId))};h.callbacks=e;h.credentialHelper="none";var t;b&&b.email&&(t={emailHint:b.email});c.j?c.j.Wa().then(function(){f(h,t)}):f(h,t)})};l.reset=function(){var a=this;return F().then(function(){a.j&&a.j.Wa()}).then(function(){a.j=null;
io(a)})};l.Vb=function(){var a=this;this.h||this.A||(this.A=window.setTimeout(function(){io(a);a.h=new Tn;a.g=a.h;a.h.render(a.s);a.A=null},500))};l.mb=function(){window.clearTimeout(this.A);this.A=null;this.h&&(this.h.m(),this.h=null)};l.Bb=function(){io(this);this.g=new El;this.g.render(this.s);return F()};function io(a){a.j&&a.j.reset();a.mb();a.g&&a.g.m()}l.pb=function(a){var b=this,c=Ld({code:a.code}).toString()||a.message;io(this);var d;a.retry&&"function"===typeof a.retry&&(d=function(){b.reset();
a.retry()});this.g=new Il(c,d);this.g.render(this.s)};l.Rb=function(a){var b=this;return F().then(function(){var c=b.i&&b.i.app.options.apiKey;if(!b.a.hasOwnProperty(c))throw Error("Invalid project configuration: API key is invalid!");ao(b.a[c],a.tenantId||"_");if(!b.i.currentUser||b.i.currentUser.uid!==a.uid)throw Error("The user being processed does not match the signed in user!");return(c=Yn(b.a[c]).beforeSignInSuccess||null)?c(a):a}).then(function(c){if(c.uid!==a.uid)throw Error("User with mismatching UID returned.");
return c})};v("firebaseui.auth.FirebaseUiHandler",ho);v("firebaseui.auth.FirebaseUiHandler.prototype.selectTenant",ho.prototype.Ub);v("firebaseui.auth.FirebaseUiHandler.prototype.getAuth",ho.prototype.Pb);v("firebaseui.auth.FirebaseUiHandler.prototype.startSignIn",ho.prototype.Zb);v("firebaseui.auth.FirebaseUiHandler.prototype.reset",ho.prototype.reset);v("firebaseui.auth.FirebaseUiHandler.prototype.showProgressBar",ho.prototype.Vb);v("firebaseui.auth.FirebaseUiHandler.prototype.hideProgressBar",
ho.prototype.mb);v("firebaseui.auth.FirebaseUiHandler.prototype.completeSignOut",ho.prototype.Bb);v("firebaseui.auth.FirebaseUiHandler.prototype.handleError",ho.prototype.pb);v("firebaseui.auth.FirebaseUiHandler.prototype.processUser",ho.prototype.Rb);v("firebaseui.auth.AuthUI",Cn);v("firebaseui.auth.AuthUI.getInstance",function(a){a=Dn(a);return En[a]?En[a]:null});v("firebaseui.auth.AuthUI.prototype.disableAutoSignIn",Cn.prototype.Db);v("firebaseui.auth.AuthUI.prototype.start",Cn.prototype.start);
v("firebaseui.auth.AuthUI.prototype.setConfig",Cn.prototype.ib);v("firebaseui.auth.AuthUI.prototype.signIn",Cn.prototype.Wb);v("firebaseui.auth.AuthUI.prototype.reset",Cn.prototype.reset);v("firebaseui.auth.AuthUI.prototype.delete",Cn.prototype.Wa);v("firebaseui.auth.AuthUI.prototype.isPendingRedirect",Cn.prototype.nb);v("firebaseui.auth.AuthUIError",Nd);v("firebaseui.auth.AuthUIError.prototype.toJSON",Nd.prototype.toJSON);v("firebaseui.auth.CredentialHelper.GOOGLE_YOLO",ni);v("firebaseui.auth.CredentialHelper.NONE",
ci);v("firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID","anonymous");Ve.prototype["catch"]=Ve.prototype.Ca;Ve.prototype["finally"]=Ve.prototype.fc}).apply(typeof global!=="undefined"?global:typeof self!=="undefined"?self:window);}).apply(typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : window );if(typeof window!=='undefined'){window.dialogPolyfill=(dialog_polyfill__WEBPACK_IMPORTED_MODULE_2___default());}var auth = firebaseui.auth;


/***/ }),

/***/ 20946:
/*!****************************************************************!*\
  !*** ./node_modules/material-design-lite/src/button/button.js ***!
  \****************************************************************/
/***/ (() => {

/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function() {
  'use strict';

  /**
   * Class constructor for Button MDL component.
   * Implements MDL component design pattern defined at:
   * https://github.com/jasonmayes/mdl-component-design-pattern
   *
   * @param {HTMLElement} element The element that will be upgraded.
   */
  var MaterialButton = function MaterialButton(element) {
    this.element_ = element;

    // Initialize instance.
    this.init();
  };
  window['MaterialButton'] = MaterialButton;

  /**
   * Store constants in one place so they can be updated easily.
   *
   * @enum {string | number}
   * @private
   */
  MaterialButton.prototype.Constant_ = {
    // None for now.
  };

  /**
   * Store strings for class names defined by this component that are used in
   * JavaScript. This allows us to simply change it in one place should we
   * decide to modify at a later date.
   *
   * @enum {string}
   * @private
   */
  MaterialButton.prototype.CssClasses_ = {
    RIPPLE_EFFECT: 'mdl-js-ripple-effect',
    RIPPLE_CONTAINER: 'mdl-button__ripple-container',
    RIPPLE: 'mdl-ripple'
  };

  /**
   * Handle blur of element.
   *
   * @param {Event} event The event that fired.
   * @private
   */
  MaterialButton.prototype.blurHandler_ = function(event) {
    if (event) {
      this.element_.blur();
    }
  };

  // Public methods.

  /**
   * Disable button.
   *
   * @public
   */
  MaterialButton.prototype.disable = function() {
    this.element_.disabled = true;
  };
  MaterialButton.prototype['disable'] = MaterialButton.prototype.disable;

  /**
   * Enable button.
   *
   * @public
   */
  MaterialButton.prototype.enable = function() {
    this.element_.disabled = false;
  };
  MaterialButton.prototype['enable'] = MaterialButton.prototype.enable;

  /**
   * Initialize element.
   */
  MaterialButton.prototype.init = function() {
    if (this.element_) {
      if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
        var rippleContainer = document.createElement('span');
        rippleContainer.classList.add(this.CssClasses_.RIPPLE_CONTAINER);
        this.rippleElement_ = document.createElement('span');
        this.rippleElement_.classList.add(this.CssClasses_.RIPPLE);
        rippleContainer.appendChild(this.rippleElement_);
        this.boundRippleBlurHandler = this.blurHandler_.bind(this);
        this.rippleElement_.addEventListener('mouseup', this.boundRippleBlurHandler);
        this.element_.appendChild(rippleContainer);
      }
      this.boundButtonBlurHandler = this.blurHandler_.bind(this);
      this.element_.addEventListener('mouseup', this.boundButtonBlurHandler);
      this.element_.addEventListener('mouseleave', this.boundButtonBlurHandler);
    }
  };

  // The component registers itself. It can assume componentHandler is available
  // in the global scope.
  componentHandler.register({
    constructor: MaterialButton,
    classAsString: 'MaterialButton',
    cssClass: 'mdl-js-button',
    widget: true
  });
})();


/***/ }),

/***/ 94563:
/*!**********************************************************************!*\
  !*** ./node_modules/material-design-lite/src/mdlComponentHandler.js ***!
  \**********************************************************************/
/***/ (() => {

/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A component handler interface using the revealing module design pattern.
 * More details on this design pattern here:
 * https://github.com/jasonmayes/mdl-component-design-pattern
 *
 * @author Jason Mayes.
 */
/* exported componentHandler */

// Pre-defining the componentHandler interface, for closure documentation and
// static verification.
var componentHandler = {
  /**
   * Searches existing DOM for elements of our component type and upgrades them
   * if they have not already been upgraded.
   *
   * @param {string=} optJsClass the programatic name of the element class we
   * need to create a new instance of.
   * @param {string=} optCssClass the name of the CSS class elements of this
   * type will have.
   */
  upgradeDom: function(optJsClass, optCssClass) {},
  /**
   * Upgrades a specific element rather than all in the DOM.
   *
   * @param {!Element} element The element we wish to upgrade.
   * @param {string=} optJsClass Optional name of the class we want to upgrade
   * the element to.
   */
  upgradeElement: function(element, optJsClass) {},
  /**
   * Upgrades a specific list of elements rather than all in the DOM.
   *
   * @param {!Element|!Array<!Element>|!NodeList|!HTMLCollection} elements
   * The elements we wish to upgrade.
   */
  upgradeElements: function(elements) {},
  /**
   * Upgrades all registered components found in the current DOM. This is
   * automatically called on window load.
   */
  upgradeAllRegistered: function() {},
  /**
   * Allows user to be alerted to any upgrades that are performed for a given
   * component type
   *
   * @param {string} jsClass The class name of the MDL component we wish
   * to hook into for any upgrades performed.
   * @param {function(!HTMLElement)} callback The function to call upon an
   * upgrade. This function should expect 1 parameter - the HTMLElement which
   * got upgraded.
   */
  registerUpgradedCallback: function(jsClass, callback) {},
  /**
   * Registers a class for future use and attempts to upgrade existing DOM.
   *
   * @param {componentHandler.ComponentConfigPublic} config the registration configuration
   */
  register: function(config) {},
  /**
   * Downgrade either a given node, an array of nodes, or a NodeList.
   *
   * @param {!Node|!Array<!Node>|!NodeList} nodes
   */
  downgradeElements: function(nodes) {}
};

componentHandler = (function() {
  'use strict';

  /** @type {!Array<componentHandler.ComponentConfig>} */
  var registeredComponents_ = [];

  /** @type {!Array<componentHandler.Component>} */
  var createdComponents_ = [];

  var componentConfigProperty_ = 'mdlComponentConfigInternal_';

  /**
   * Searches registered components for a class we are interested in using.
   * Optionally replaces a match with passed object if specified.
   *
   * @param {string} name The name of a class we want to use.
   * @param {componentHandler.ComponentConfig=} optReplace Optional object to replace match with.
   * @return {!Object|boolean}
   * @private
   */
  function findRegisteredClass_(name, optReplace) {
    for (var i = 0; i < registeredComponents_.length; i++) {
      if (registeredComponents_[i].className === name) {
        if (typeof optReplace !== 'undefined') {
          registeredComponents_[i] = optReplace;
        }
        return registeredComponents_[i];
      }
    }
    return false;
  }

  /**
   * Returns an array of the classNames of the upgraded classes on the element.
   *
   * @param {!Element} element The element to fetch data from.
   * @return {!Array<string>}
   * @private
   */
  function getUpgradedListOfElement_(element) {
    var dataUpgraded = element.getAttribute('data-upgraded');
    // Use `['']` as default value to conform the `,name,name...` style.
    return dataUpgraded === null ? [''] : dataUpgraded.split(',');
  }

  /**
   * Returns true if the given element has already been upgraded for the given
   * class.
   *
   * @param {!Element} element The element we want to check.
   * @param {string} jsClass The class to check for.
   * @returns {boolean}
   * @private
   */
  function isElementUpgraded_(element, jsClass) {
    var upgradedList = getUpgradedListOfElement_(element);
    return upgradedList.indexOf(jsClass) !== -1;
  }

  /**
   * Create an event object.
   *
   * @param {string} eventType The type name of the event.
   * @param {boolean} bubbles Whether the event should bubble up the DOM.
   * @param {boolean} cancelable Whether the event can be canceled.
   * @returns {!Event}
   */
  function createEvent_(eventType, bubbles, cancelable) {
    if ('CustomEvent' in window && typeof window.CustomEvent === 'function') {
      return new CustomEvent(eventType, {
        bubbles: bubbles,
        cancelable: cancelable
      });
    } else {
      var ev = document.createEvent('Events');
      ev.initEvent(eventType, bubbles, cancelable);
      return ev;
    }
  }

  /**
   * Searches existing DOM for elements of our component type and upgrades them
   * if they have not already been upgraded.
   *
   * @param {string=} optJsClass the programatic name of the element class we
   * need to create a new instance of.
   * @param {string=} optCssClass the name of the CSS class elements of this
   * type will have.
   */
  function upgradeDomInternal(optJsClass, optCssClass) {
    if (typeof optJsClass === 'undefined' &&
        typeof optCssClass === 'undefined') {
      for (var i = 0; i < registeredComponents_.length; i++) {
        upgradeDomInternal(registeredComponents_[i].className,
            registeredComponents_[i].cssClass);
      }
    } else {
      var jsClass = /** @type {string} */ (optJsClass);
      if (typeof optCssClass === 'undefined') {
        var registeredClass = findRegisteredClass_(jsClass);
        if (registeredClass) {
          optCssClass = registeredClass.cssClass;
        }
      }

      var elements = document.querySelectorAll('.' + optCssClass);
      for (var n = 0; n < elements.length; n++) {
        upgradeElementInternal(elements[n], jsClass);
      }
    }
  }

  /**
   * Upgrades a specific element rather than all in the DOM.
   *
   * @param {!Element} element The element we wish to upgrade.
   * @param {string=} optJsClass Optional name of the class we want to upgrade
   * the element to.
   */
  function upgradeElementInternal(element, optJsClass) {
    // Verify argument type.
    if (!(typeof element === 'object' && element instanceof Element)) {
      throw new Error('Invalid argument provided to upgrade MDL element.');
    }
    // Allow upgrade to be canceled by canceling emitted event.
    var upgradingEv = createEvent_('mdl-componentupgrading', true, true);
    element.dispatchEvent(upgradingEv);
    if (upgradingEv.defaultPrevented) {
      return;
    }

    var upgradedList = getUpgradedListOfElement_(element);
    var classesToUpgrade = [];
    // If jsClass is not provided scan the registered components to find the
    // ones matching the element's CSS classList.
    if (!optJsClass) {
      var classList = element.classList;
      registeredComponents_.forEach(function(component) {
        // Match CSS & Not to be upgraded & Not upgraded.
        if (classList.contains(component.cssClass) &&
            classesToUpgrade.indexOf(component) === -1 &&
            !isElementUpgraded_(element, component.className)) {
          classesToUpgrade.push(component);
        }
      });
    } else if (!isElementUpgraded_(element, optJsClass)) {
      classesToUpgrade.push(findRegisteredClass_(optJsClass));
    }

    // Upgrade the element for each classes.
    for (var i = 0, n = classesToUpgrade.length, registeredClass; i < n; i++) {
      registeredClass = classesToUpgrade[i];
      if (registeredClass) {
        // Mark element as upgraded.
        upgradedList.push(registeredClass.className);
        element.setAttribute('data-upgraded', upgradedList.join(','));
        var instance = new registeredClass.classConstructor(element);
        instance[componentConfigProperty_] = registeredClass;
        createdComponents_.push(instance);
        // Call any callbacks the user has registered with this component type.
        for (var j = 0, m = registeredClass.callbacks.length; j < m; j++) {
          registeredClass.callbacks[j](element);
        }

        if (registeredClass.widget) {
          // Assign per element instance for control over API
          element[registeredClass.className] = instance;
        }
      } else {
        throw new Error(
          'Unable to find a registered component for the given class.');
      }

      var upgradedEv = createEvent_('mdl-componentupgraded', true, false);
      element.dispatchEvent(upgradedEv);
    }
  }

  /**
   * Upgrades a specific list of elements rather than all in the DOM.
   *
   * @param {!Element|!Array<!Element>|!NodeList|!HTMLCollection} elements
   * The elements we wish to upgrade.
   */
  function upgradeElementsInternal(elements) {
    if (!Array.isArray(elements)) {
      if (elements instanceof Element) {
        elements = [elements];
      } else {
        elements = Array.prototype.slice.call(elements);
      }
    }
    for (var i = 0, n = elements.length, element; i < n; i++) {
      element = elements[i];
      if (element instanceof HTMLElement) {
        upgradeElementInternal(element);
        if (element.children.length > 0) {
          upgradeElementsInternal(element.children);
        }
      }
    }
  }

  /**
   * Registers a class for future use and attempts to upgrade existing DOM.
   *
   * @param {componentHandler.ComponentConfigPublic} config
   */
  function registerInternal(config) {
    // In order to support both Closure-compiled and uncompiled code accessing
    // this method, we need to allow for both the dot and array syntax for
    // property access. You'll therefore see the `foo.bar || foo['bar']`
    // pattern repeated across this method.
    var widgetMissing = (typeof config.widget === 'undefined' &&
        typeof config['widget'] === 'undefined');
    var widget = true;

    if (!widgetMissing) {
      widget = config.widget || config['widget'];
    }

    var newConfig = /** @type {componentHandler.ComponentConfig} */ ({
      classConstructor: config.constructor || config['constructor'],
      className: config.classAsString || config['classAsString'],
      cssClass: config.cssClass || config['cssClass'],
      widget: widget,
      callbacks: []
    });

    registeredComponents_.forEach(function(item) {
      if (item.cssClass === newConfig.cssClass) {
        throw new Error('The provided cssClass has already been registered: ' + item.cssClass);
      }
      if (item.className === newConfig.className) {
        throw new Error('The provided className has already been registered');
      }
    });

    if (config.constructor.prototype
        .hasOwnProperty(componentConfigProperty_)) {
      throw new Error(
          'MDL component classes must not have ' + componentConfigProperty_ +
          ' defined as a property.');
    }

    var found = findRegisteredClass_(config.classAsString, newConfig);

    if (!found) {
      registeredComponents_.push(newConfig);
    }
  }

  /**
   * Allows user to be alerted to any upgrades that are performed for a given
   * component type
   *
   * @param {string} jsClass The class name of the MDL component we wish
   * to hook into for any upgrades performed.
   * @param {function(!HTMLElement)} callback The function to call upon an
   * upgrade. This function should expect 1 parameter - the HTMLElement which
   * got upgraded.
   */
  function registerUpgradedCallbackInternal(jsClass, callback) {
    var regClass = findRegisteredClass_(jsClass);
    if (regClass) {
      regClass.callbacks.push(callback);
    }
  }

  /**
   * Upgrades all registered components found in the current DOM. This is
   * automatically called on window load.
   */
  function upgradeAllRegisteredInternal() {
    for (var n = 0; n < registeredComponents_.length; n++) {
      upgradeDomInternal(registeredComponents_[n].className);
    }
  }

  /**
   * Check the component for the downgrade method.
   * Execute if found.
   * Remove component from createdComponents list.
   *
   * @param {?componentHandler.Component} component
   */
  function deconstructComponentInternal(component) {
    if (component) {
      var componentIndex = createdComponents_.indexOf(component);
      createdComponents_.splice(componentIndex, 1);

      var upgrades = component.element_.getAttribute('data-upgraded').split(',');
      var componentPlace = upgrades.indexOf(component[componentConfigProperty_].classAsString);
      upgrades.splice(componentPlace, 1);
      component.element_.setAttribute('data-upgraded', upgrades.join(','));

      var ev = createEvent_('mdl-componentdowngraded', true, false);
      component.element_.dispatchEvent(ev);
    }
  }

  /**
   * Downgrade either a given node, an array of nodes, or a NodeList.
   *
   * @param {!Node|!Array<!Node>|!NodeList} nodes
   */
  function downgradeNodesInternal(nodes) {
    /**
     * Auxiliary function to downgrade a single node.
     * @param  {!Node} node the node to be downgraded
     */
    var downgradeNode = function(node) {
      createdComponents_.filter(function(item) {
        return item.element_ === node;
      }).forEach(deconstructComponentInternal);
    };
    if (nodes instanceof Array || nodes instanceof NodeList) {
      for (var n = 0; n < nodes.length; n++) {
        downgradeNode(nodes[n]);
      }
    } else if (nodes instanceof Node) {
      downgradeNode(nodes);
    } else {
      throw new Error('Invalid argument provided to downgrade MDL nodes.');
    }
  }

  // Now return the functions that should be made public with their publicly
  // facing names...
  return {
    upgradeDom: upgradeDomInternal,
    upgradeElement: upgradeElementInternal,
    upgradeElements: upgradeElementsInternal,
    upgradeAllRegistered: upgradeAllRegisteredInternal,
    registerUpgradedCallback: registerUpgradedCallbackInternal,
    register: registerInternal,
    downgradeElements: downgradeNodesInternal
  };
})();

/**
 * Describes the type of a registered component type managed by
 * componentHandler. Provided for benefit of the Closure compiler.
 *
 * @typedef {{
 *   constructor: Function,
 *   classAsString: string,
 *   cssClass: string,
 *   widget: (string|boolean|undefined)
 * }}
 */
componentHandler.ComponentConfigPublic;  // jshint ignore:line

/**
 * Describes the type of a registered component type managed by
 * componentHandler. Provided for benefit of the Closure compiler.
 *
 * @typedef {{
 *   constructor: !Function,
 *   className: string,
 *   cssClass: string,
 *   widget: (string|boolean),
 *   callbacks: !Array<function(!HTMLElement)>
 * }}
 */
componentHandler.ComponentConfig;  // jshint ignore:line

/**
 * Created component (i.e., upgraded element) type as managed by
 * componentHandler. Provided for benefit of the Closure compiler.
 *
 * @typedef {{
 *   element_: !HTMLElement,
 *   className: string,
 *   classAsString: string,
 *   cssClass: string,
 *   widget: string
 * }}
 */
componentHandler.Component;  // jshint ignore:line

// Export all symbols, for the benefit of Closure compiler.
// No effect on uncompiled code.
componentHandler['upgradeDom'] = componentHandler.upgradeDom;
componentHandler['upgradeElement'] = componentHandler.upgradeElement;
componentHandler['upgradeElements'] = componentHandler.upgradeElements;
componentHandler['upgradeAllRegistered'] =
    componentHandler.upgradeAllRegistered;
componentHandler['registerUpgradedCallback'] =
    componentHandler.registerUpgradedCallback;
componentHandler['register'] = componentHandler.register;
componentHandler['downgradeElements'] = componentHandler.downgradeElements;
window.componentHandler = componentHandler;
window['componentHandler'] = componentHandler;

window.addEventListener('load', function() {
  'use strict';

  /**
   * Performs a "Cutting the mustard" test. If the browser supports the features
   * tested, adds a mdl-js class to the <html> element. It then upgrades all MDL
   * components requiring JavaScript.
   */
  if ('classList' in document.createElement('div') &&
      'querySelector' in document &&
      'addEventListener' in window && Array.prototype.forEach) {
    document.documentElement.classList.add('mdl-js');
    componentHandler.upgradeAllRegistered();
  } else {
    /**
     * Dummy function to avoid JS errors.
     */
    componentHandler.upgradeElement = function() {};
    /**
     * Dummy function to avoid JS errors.
     */
    componentHandler.register = function() {};
  }
});


/***/ }),

/***/ 60707:
/*!********************************************************************!*\
  !*** ./node_modules/material-design-lite/src/progress/progress.js ***!
  \********************************************************************/
/***/ (() => {

/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function() {
  'use strict';

  /**
   * Class constructor for Progress MDL component.
   * Implements MDL component design pattern defined at:
   * https://github.com/jasonmayes/mdl-component-design-pattern
   *
   * @constructor
   * @param {HTMLElement} element The element that will be upgraded.
   */
  var MaterialProgress = function MaterialProgress(element) {
    this.element_ = element;

    // Initialize instance.
    this.init();
  };
  window['MaterialProgress'] = MaterialProgress;

  /**
   * Store constants in one place so they can be updated easily.
   *
   * @enum {string | number}
   * @private
   */
  MaterialProgress.prototype.Constant_ = {
  };

  /**
   * Store strings for class names defined by this component that are used in
   * JavaScript. This allows us to simply change it in one place should we
   * decide to modify at a later date.
   *
   * @enum {string}
   * @private
   */
  MaterialProgress.prototype.CssClasses_ = {
    INDETERMINATE_CLASS: 'mdl-progress__indeterminate'
  };

  /**
   * Set the current progress of the progressbar.
   *
   * @param {number} p Percentage of the progress (0-100)
   * @public
   */
  MaterialProgress.prototype.setProgress = function(p) {
    if (this.element_.classList.contains(this.CssClasses_.INDETERMINATE_CLASS)) {
      return;
    }

    this.progressbar_.style.width = p + '%';
  };
  MaterialProgress.prototype['setProgress'] =
      MaterialProgress.prototype.setProgress;

  /**
   * Set the current progress of the buffer.
   *
   * @param {number} p Percentage of the buffer (0-100)
   * @public
   */
  MaterialProgress.prototype.setBuffer = function(p) {
    this.bufferbar_.style.width = p + '%';
    this.auxbar_.style.width = (100 - p) + '%';
  };
  MaterialProgress.prototype['setBuffer'] =
      MaterialProgress.prototype.setBuffer;

  /**
   * Initialize element.
   */
  MaterialProgress.prototype.init = function() {
    if (this.element_) {
      var el = document.createElement('div');
      el.className = 'progressbar bar bar1';
      this.element_.appendChild(el);
      this.progressbar_ = el;

      el = document.createElement('div');
      el.className = 'bufferbar bar bar2';
      this.element_.appendChild(el);
      this.bufferbar_ = el;

      el = document.createElement('div');
      el.className = 'auxbar bar bar3';
      this.element_.appendChild(el);
      this.auxbar_ = el;

      this.progressbar_.style.width = '0%';
      this.bufferbar_.style.width = '100%';
      this.auxbar_.style.width = '0%';

      this.element_.classList.add('is-upgraded');
    }
  };

  // The component registers itself. It can assume componentHandler is available
  // in the global scope.
  componentHandler.register({
    constructor: MaterialProgress,
    classAsString: 'MaterialProgress',
    cssClass: 'mdl-js-progress',
    widget: true
  });
})();


/***/ }),

/***/ 97906:
/*!******************************************************************!*\
  !*** ./node_modules/material-design-lite/src/spinner/spinner.js ***!
  \******************************************************************/
/***/ (() => {

/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function() {
  'use strict';

  /**
   * Class constructor for Spinner MDL component.
   * Implements MDL component design pattern defined at:
   * https://github.com/jasonmayes/mdl-component-design-pattern
   *
   * @param {HTMLElement} element The element that will be upgraded.
   * @constructor
   */
  var MaterialSpinner = function MaterialSpinner(element) {
    this.element_ = element;

    // Initialize instance.
    this.init();
  };
  window['MaterialSpinner'] = MaterialSpinner;

  /**
   * Store constants in one place so they can be updated easily.
   *
   * @enum {string | number}
   * @private
   */
  MaterialSpinner.prototype.Constant_ = {
    MDL_SPINNER_LAYER_COUNT: 4
  };

  /**
   * Store strings for class names defined by this component that are used in
   * JavaScript. This allows us to simply change it in one place should we
   * decide to modify at a later date.
   *
   * @enum {string}
   * @private
   */
  MaterialSpinner.prototype.CssClasses_ = {
    MDL_SPINNER_LAYER: 'mdl-spinner__layer',
    MDL_SPINNER_CIRCLE_CLIPPER: 'mdl-spinner__circle-clipper',
    MDL_SPINNER_CIRCLE: 'mdl-spinner__circle',
    MDL_SPINNER_GAP_PATCH: 'mdl-spinner__gap-patch',
    MDL_SPINNER_LEFT: 'mdl-spinner__left',
    MDL_SPINNER_RIGHT: 'mdl-spinner__right'
  };

  /**
   * Auxiliary method to create a spinner layer.
   *
   * @param {number} index Index of the layer to be created.
   * @public
   */
  MaterialSpinner.prototype.createLayer = function(index) {
    var layer = document.createElement('div');
    layer.classList.add(this.CssClasses_.MDL_SPINNER_LAYER);
    layer.classList.add(this.CssClasses_.MDL_SPINNER_LAYER + '-' + index);

    var leftClipper = document.createElement('div');
    leftClipper.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER);
    leftClipper.classList.add(this.CssClasses_.MDL_SPINNER_LEFT);

    var gapPatch = document.createElement('div');
    gapPatch.classList.add(this.CssClasses_.MDL_SPINNER_GAP_PATCH);

    var rightClipper = document.createElement('div');
    rightClipper.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER);
    rightClipper.classList.add(this.CssClasses_.MDL_SPINNER_RIGHT);

    var circleOwners = [leftClipper, gapPatch, rightClipper];

    for (var i = 0; i < circleOwners.length; i++) {
      var circle = document.createElement('div');
      circle.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE);
      circleOwners[i].appendChild(circle);
    }

    layer.appendChild(leftClipper);
    layer.appendChild(gapPatch);
    layer.appendChild(rightClipper);

    this.element_.appendChild(layer);
  };
  MaterialSpinner.prototype['createLayer'] =
      MaterialSpinner.prototype.createLayer;

  /**
   * Stops the spinner animation.
   * Public method for users who need to stop the spinner for any reason.
   *
   * @public
   */
  MaterialSpinner.prototype.stop = function() {
    this.element_.classList.remove('is-active');
  };
  MaterialSpinner.prototype['stop'] = MaterialSpinner.prototype.stop;

  /**
   * Starts the spinner animation.
   * Public method for users who need to manually start the spinner for any reason
   * (instead of just adding the 'is-active' class to their markup).
   *
   * @public
   */
  MaterialSpinner.prototype.start = function() {
    this.element_.classList.add('is-active');
  };
  MaterialSpinner.prototype['start'] = MaterialSpinner.prototype.start;

  /**
   * Initialize element.
   */
  MaterialSpinner.prototype.init = function() {
    if (this.element_) {
      for (var i = 1; i <= this.Constant_.MDL_SPINNER_LAYER_COUNT; i++) {
        this.createLayer(i);
      }

      this.element_.classList.add('is-upgraded');
    }
  };

  // The component registers itself. It can assume componentHandler is available
  // in the global scope.
  componentHandler.register({
    constructor: MaterialSpinner,
    classAsString: 'MaterialSpinner',
    cssClass: 'mdl-js-spinner',
    widget: true
  });
})();


/***/ }),

/***/ 87578:
/*!**********************************************************************!*\
  !*** ./node_modules/material-design-lite/src/textfield/textfield.js ***!
  \**********************************************************************/
/***/ (() => {

/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function() {
  'use strict';

  /**
   * Class constructor for Textfield MDL component.
   * Implements MDL component design pattern defined at:
   * https://github.com/jasonmayes/mdl-component-design-pattern
   *
   * @constructor
   * @param {HTMLElement} element The element that will be upgraded.
   */
  var MaterialTextfield = function MaterialTextfield(element) {
    this.element_ = element;
    this.maxRows = this.Constant_.NO_MAX_ROWS;
    // Initialize instance.
    this.init();
  };
  window['MaterialTextfield'] = MaterialTextfield;

  /**
   * Store constants in one place so they can be updated easily.
   *
   * @enum {string | number}
   * @private
   */
  MaterialTextfield.prototype.Constant_ = {
    NO_MAX_ROWS: -1,
    MAX_ROWS_ATTRIBUTE: 'maxrows'
  };

  /**
   * Store strings for class names defined by this component that are used in
   * JavaScript. This allows us to simply change it in one place should we
   * decide to modify at a later date.
   *
   * @enum {string}
   * @private
   */
  MaterialTextfield.prototype.CssClasses_ = {
    LABEL: 'mdl-textfield__label',
    INPUT: 'mdl-textfield__input',
    IS_DIRTY: 'is-dirty',
    IS_FOCUSED: 'is-focused',
    IS_DISABLED: 'is-disabled',
    IS_INVALID: 'is-invalid',
    IS_UPGRADED: 'is-upgraded',
    HAS_PLACEHOLDER: 'has-placeholder'
  };

  /**
   * Handle input being entered.
   *
   * @param {Event} event The event that fired.
   * @private
   */
  MaterialTextfield.prototype.onKeyDown_ = function(event) {
    var currentRowCount = event.target.value.split('\n').length;
    if (event.keyCode === 13) {
      if (currentRowCount >= this.maxRows) {
        event.preventDefault();
      }
    }
  };

  /**
   * Handle focus.
   *
   * @param {Event} event The event that fired.
   * @private
   */
  MaterialTextfield.prototype.onFocus_ = function(event) {
    this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
  };

  /**
   * Handle lost focus.
   *
   * @param {Event} event The event that fired.
   * @private
   */
  MaterialTextfield.prototype.onBlur_ = function(event) {
    this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
  };

  /**
   * Handle reset event from out side.
   *
   * @param {Event} event The event that fired.
   * @private
   */
  MaterialTextfield.prototype.onReset_ = function(event) {
    this.updateClasses_();
  };

  /**
   * Handle class updates.
   *
   * @private
   */
  MaterialTextfield.prototype.updateClasses_ = function() {
    this.checkDisabled();
    this.checkValidity();
    this.checkDirty();
    this.checkFocus();
  };

  // Public methods.

  /**
   * Check the disabled state and update field accordingly.
   *
   * @public
   */
  MaterialTextfield.prototype.checkDisabled = function() {
    if (this.input_.disabled) {
      this.element_.classList.add(this.CssClasses_.IS_DISABLED);
    } else {
      this.element_.classList.remove(this.CssClasses_.IS_DISABLED);
    }
  };
  MaterialTextfield.prototype['checkDisabled'] =
      MaterialTextfield.prototype.checkDisabled;

  /**
  * Check the focus state and update field accordingly.
  *
  * @public
  */
  MaterialTextfield.prototype.checkFocus = function() {
    if (Boolean(this.element_.querySelector(':focus'))) {
      this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
    } else {
      this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
    }
  };
  MaterialTextfield.prototype['checkFocus'] =
    MaterialTextfield.prototype.checkFocus;

  /**
   * Check the validity state and update field accordingly.
   *
   * @public
   */
  MaterialTextfield.prototype.checkValidity = function() {
    if (this.input_.validity) {
      if (this.input_.validity.valid) {
        this.element_.classList.remove(this.CssClasses_.IS_INVALID);
      } else {
        this.element_.classList.add(this.CssClasses_.IS_INVALID);
      }
    }
  };
  MaterialTextfield.prototype['checkValidity'] =
      MaterialTextfield.prototype.checkValidity;

  /**
   * Check the dirty state and update field accordingly.
   *
   * @public
   */
  MaterialTextfield.prototype.checkDirty = function() {
    if (this.input_.value && this.input_.value.length > 0) {
      this.element_.classList.add(this.CssClasses_.IS_DIRTY);
    } else {
      this.element_.classList.remove(this.CssClasses_.IS_DIRTY);
    }
  };
  MaterialTextfield.prototype['checkDirty'] =
      MaterialTextfield.prototype.checkDirty;

  /**
   * Disable text field.
   *
   * @public
   */
  MaterialTextfield.prototype.disable = function() {
    this.input_.disabled = true;
    this.updateClasses_();
  };
  MaterialTextfield.prototype['disable'] = MaterialTextfield.prototype.disable;

  /**
   * Enable text field.
   *
   * @public
   */
  MaterialTextfield.prototype.enable = function() {
    this.input_.disabled = false;
    this.updateClasses_();
  };
  MaterialTextfield.prototype['enable'] = MaterialTextfield.prototype.enable;

  /**
   * Update text field value.
   *
   * @param {string} value The value to which to set the control (optional).
   * @public
   */
  MaterialTextfield.prototype.change = function(value) {

    this.input_.value = value || '';
    this.updateClasses_();
  };
  MaterialTextfield.prototype['change'] = MaterialTextfield.prototype.change;

  /**
   * Initialize element.
   */
  MaterialTextfield.prototype.init = function() {

    if (this.element_) {
      this.label_ = this.element_.querySelector('.' + this.CssClasses_.LABEL);
      this.input_ = this.element_.querySelector('.' + this.CssClasses_.INPUT);

      if (this.input_) {
        if (this.input_.hasAttribute(
              /** @type {string} */ (this.Constant_.MAX_ROWS_ATTRIBUTE))) {
          this.maxRows = parseInt(this.input_.getAttribute(
              /** @type {string} */ (this.Constant_.MAX_ROWS_ATTRIBUTE)), 10);
          if (isNaN(this.maxRows)) {
            this.maxRows = this.Constant_.NO_MAX_ROWS;
          }
        }

        if (this.input_.hasAttribute('placeholder')) {
          this.element_.classList.add(this.CssClasses_.HAS_PLACEHOLDER);
        }

        this.boundUpdateClassesHandler = this.updateClasses_.bind(this);
        this.boundFocusHandler = this.onFocus_.bind(this);
        this.boundBlurHandler = this.onBlur_.bind(this);
        this.boundResetHandler = this.onReset_.bind(this);
        this.input_.addEventListener('input', this.boundUpdateClassesHandler);
        this.input_.addEventListener('focus', this.boundFocusHandler);
        this.input_.addEventListener('blur', this.boundBlurHandler);
        this.input_.addEventListener('reset', this.boundResetHandler);

        if (this.maxRows !== this.Constant_.NO_MAX_ROWS) {
          // TODO: This should handle pasting multi line text.
          // Currently doesn't.
          this.boundKeyDownHandler = this.onKeyDown_.bind(this);
          this.input_.addEventListener('keydown', this.boundKeyDownHandler);
        }
        var invalid = this.element_.classList
          .contains(this.CssClasses_.IS_INVALID);
        this.updateClasses_();
        this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
        if (invalid) {
          this.element_.classList.add(this.CssClasses_.IS_INVALID);
        }
        if (this.input_.hasAttribute('autofocus')) {
          this.element_.focus();
          this.checkFocus();
        }
      }
    }
  };

  // The component registers itself. It can assume componentHandler is available
  // in the global scope.
  componentHandler.register({
    constructor: MaterialTextfield,
    classAsString: 'MaterialTextfield',
    cssClass: 'mdl-js-textfield',
    widget: true
  });
})();


/***/ }),

/***/ 70954:
/*!*********************************************************!*\
  !*** ./src/app/onboarding/onboarding-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnboardingPageRoutingModule": () => (/* binding */ OnboardingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _onboarding_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onboarding.page */ 60513);




const routes = [
    {
        path: '',
        component: _onboarding_page__WEBPACK_IMPORTED_MODULE_0__.OnboardingPage
    }
];
let OnboardingPageRoutingModule = class OnboardingPageRoutingModule {
};
OnboardingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OnboardingPageRoutingModule);



/***/ }),

/***/ 33970:
/*!*************************************************!*\
  !*** ./src/app/onboarding/onboarding.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnboardingPageModule": () => (/* binding */ OnboardingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _onboarding_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onboarding-routing.module */ 70954);
/* harmony import */ var _onboarding_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onboarding.page */ 60513);








let OnboardingPageModule = class OnboardingPageModule {
};
OnboardingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _onboarding_routing_module__WEBPACK_IMPORTED_MODULE_0__.OnboardingPageRoutingModule
        ],
        declarations: [_onboarding_page__WEBPACK_IMPORTED_MODULE_1__.OnboardingPage]
    })
], OnboardingPageModule);



/***/ }),

/***/ 60513:
/*!***********************************************!*\
  !*** ./src/app/onboarding/onboarding.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnboardingPage": () => (/* binding */ OnboardingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_onboarding_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./onboarding.page.html */ 23296);
/* harmony import */ var _onboarding_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onboarding.page.scss */ 85566);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ 73071);
/* harmony import */ var _popup_popup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../popup/popup.component */ 15122);








var firebase = __webpack_require__(/*! firebase/app */ 27694);
var firebaseui = __webpack_require__(/*! firebaseui */ 69502);
// Initialize the FirebaseUI Widget using Firebase.
//var ui = new firebaseui.auth.AuthUI(firebase.auth());
let OnboardingPage = class OnboardingPage {
    constructor(platform, modalController, user, route, navCtrl) {
        this.platform = platform;
        this.modalController = modalController;
        this.user = user;
        this.route = route;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
        if (this.platform.is('ios')) {
            console.log('Device is running Android.');
            this.iphone = true;
            // Your Android-specific code here
        }
        else {
            console.log('Device is not running Android.');
            this.iphone = false;
            // Your code for other platforms here
        }
        // ui.start('#firebaseui-auth-container', {
        //   signInSuccessUrl: '<url-to-redirect-to-on-success>',
        //   signInOptions: [
        //     {
        //       provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        //       requireDisplayName: false
        //     },
        //     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        //     firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        //   ],
        //   callbacks: {
        //     // signInFailure callback must be provided to handle merge conflicts which
        //     // occur when an existing credential is linked to an anonymous user.
        //     signInFailure: function (error) {
        //       // For merge conflicts, the error.code will be
        //       // 'firebaseui/anonymous-upgrade-merge-conflict'.
        //       if (error.code != 'firebaseui/anonymous-upgrade-merge-conflict') {
        //         return Promise.resolve();
        //       }
        //       // The credential the user tried to sign in with.
        //       var cred = error.credential;
        //       // Copy data from anonymous user to permanent user and delete anonymous
        //       // user.
        //       // ...
        //       // Finish sign-in after data is copied.
        //       return firebase.auth().signInWithCredential(cred);
        //     }
        //   }
        // });
    }
    openPopup() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _popup_popup_component__WEBPACK_IMPORTED_MODULE_3__.PopupComponent,
                componentProps: {
                    activeSegment: 'signin', // Initial active segment (signup or signin)
                },
            });
            return yield modal.present();
        });
    }
    mobile_number() {
        this.route.navigate(['./mobile-number']);
    }
    apple() {
        this.user.signInWithApple().then((result) => {
        });
    }
    google() {
        this.user.signInWithGoogle().then((result) => {
        });
        //   this.navCtrl.navigateRoot(['./home']);
    }
};
OnboardingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController }
];
OnboardingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-onboarding',
        template: _Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_onboarding_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_onboarding_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], OnboardingPage);



/***/ }),

/***/ 23296:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/onboarding/onboarding.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content fullscreen>\n    <div class=\"bg-img center_img\">\n        <img src=\"assets/images/food-bg.png\" class=\"crop_img\">\n    </div>\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n    <h2 class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.4s\">{{'get_started_with' | translate}}\n        Mz. Ella</h2>\n    <p class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.45s\">\n        <!-- {{'the_quick_drown_fox_jumps_over_alazy_dog' | translate}}.\n        <br>\n        {{'flock_by_when_ax_quiz_prog' | translate}}. -->\n    </p>\n    <ion-button *ngIf=\"iphone\" size=\"large\" fill=\"outline\" class=\"btn animate__animated animate__fadeInUp wow\"\n        data-wow-duration=\"0.55s\" expand=\"round\" (click)=\"apple()\"> <img src=\"assets/images/apple.png\">\n        <span class=\"text\"> {{'apple' | translate}}</span>\n    </ion-button>\n    <ion-button size=\"large\" fill=\"outline\" class=\"btn animate__animated animate__fadeInUp wow\"\n        data-wow-duration=\"0.55s\" expand=\"round\" (click)=\"google()\"> <img src=\"assets/images/google.png\">\n        <span class=\"text\"> {{'continue_with_google' | translate}}</span>\n    </ion-button>\n    <ion-button size=\"large\" class=\"btn animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.5s\" expand=\"round\"\n        (click)=\"openPopup()\">\n        <ion-icon class=\"zmdi zmdi-smartphone-iphone\"></ion-icon>\n        <span class=\"text\">{{'sign_in_with_email' | translate}}</span>\n    </ion-button>\n\n    <div id=\"firebaseui-auth-container\"></div>\n</ion-footer>");

/***/ }),

/***/ 85566:
/*!*************************************************!*\
  !*** ./src/app/onboarding/onboarding.page.scss ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".bg-img {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: calc(100% - 40px);\n  height: calc(100% - 50px);\n  margin: 0 auto;\n  margin-top: 50px;\n}\n.bg-img::after {\n  content: \"\";\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 152px;\n  margin: 0 auto;\n  width: calc(100% + 80px);\n  height: 63%;\n  background: linear-gradient(0deg, white 20%, rgba(148, 187, 233, 0) 100%);\n}\nion-footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  padding: 0 20px 30px 20px;\n  background: var(--bg-white);\n}\nion-footer h2 {\n  margin: 0;\n  color: var(--text-dark);\n  font-weight: 700;\n  font-size: 1.35rem;\n  padding-bottom: 10px;\n}\nion-footer p {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 0.84rem;\n  line-height: 22px;\n  padding-bottom: 20px;\n}\nion-footer .button.btn {\n  text-transform: none !important;\n  margin-bottom: 10px;\n}\nion-footer .button.btn .text {\n  width: calc(100% - 80px);\n  text-align: center;\n  margin: 0 auto;\n  overflow: hidden;\n  padding: 4px 0;\n}\nion-footer .button.btn img,\nion-footer .button.btn ion-icon {\n  position: absolute;\n  left: 18px;\n  font-size: 1.2rem;\n}\nion-footer .button.btn img {\n  width: 16px;\n}\nion-footer .button.btn.button-outline {\n  color: var(--text-dark);\n  --border-color: var(--border-color);\n  --border-width: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9uYm9hcmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQ0o7QUFDSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlFQUFBO0FBQ1I7QUFJQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0FBREo7QUFHSTtFQUNJLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQURSO0FBSUk7RUFDSSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFGUjtBQUtJO0VBQ0ksK0JBQUE7RUFDQSxtQkFBQTtBQUhSO0FBS1E7RUFDSSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUhaO0FBTVE7O0VBRUksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFKWjtBQU9RO0VBQ0ksV0FBQTtBQUxaO0FBUVE7RUFDSSx1QkFBQTtFQUNBLG1DQUFBO0VBQ0EsbUJBQUE7QUFOWiIsImZpbGUiOiJvbmJvYXJkaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1pbWcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1MHB4KTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDE1MnB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSArIDgwcHgpO1xuICAgICAgICBoZWlnaHQ6IDYzJTtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMjAlLCByZ2JhKDE0OCwgMTg3LCAyMzMsIDApIDEwMCUpO1xuXG4gICAgfVxufVxuXG5pb24tZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMCAyMHB4IDMwcHggMjBweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy13aGl0ZSk7XG5cbiAgICBoMiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4zNXJlbTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG4gICAgICAgIGZvbnQtc2l6ZTogLjg0cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgfVxuXG4gICAgLmJ1dHRvbi5idG4ge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gICAgICAgIC50ZXh0IHtcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA4MHB4KTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaW1nLFxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAxOHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIH1cblxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAmLmJ1dHRvbi1vdXRsaW5lIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICAgICAgICAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgICAgICAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */";

/***/ }),

/***/ 16323:
/*!*********************************************************************!*\
  !*** ./node_modules/@firebase/app-compat/dist/esm/index.esm2017.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ firebase)
/* harmony export */ });
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/util */ 7082);
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/component */ 42262);
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/app */ 49311);
/* harmony import */ var _firebase_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/logger */ 90058);






/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Global context object for a collection of services using
 * a shared authentication state.
 *
 * marked as internal because it references internal types exported from @firebase/app
 * @internal
 */
class FirebaseAppImpl {
    constructor(_delegate, firebase) {
        this._delegate = _delegate;
        this.firebase = firebase;
        // add itself to container
        (0,_firebase_app__WEBPACK_IMPORTED_MODULE_2__._addComponent)(_delegate, new _firebase_component__WEBPACK_IMPORTED_MODULE_1__.Component('app-compat', () => this, "PUBLIC" /* ComponentType.PUBLIC */));
        this.container = _delegate.container;
    }
    get automaticDataCollectionEnabled() {
        return this._delegate.automaticDataCollectionEnabled;
    }
    set automaticDataCollectionEnabled(val) {
        this._delegate.automaticDataCollectionEnabled = val;
    }
    get name() {
        return this._delegate.name;
    }
    get options() {
        return this._delegate.options;
    }
    delete() {
        return new Promise(resolve => {
            this._delegate.checkDestroyed();
            resolve();
        }).then(() => {
            this.firebase.INTERNAL.removeApp(this.name);
            return (0,_firebase_app__WEBPACK_IMPORTED_MODULE_2__.deleteApp)(this._delegate);
        });
    }
    /**
     * Return a service instance associated with this app (creating it
     * on demand), identified by the passed instanceIdentifier.
     *
     * NOTE: Currently storage and functions are the only ones that are leveraging this
     * functionality. They invoke it by calling:
     *
     * ```javascript
     * firebase.app().storage('STORAGE BUCKET ID')
     * ```
     *
     * The service name is passed to this already
     * @internal
     */
    _getService(name, instanceIdentifier = _firebase_app__WEBPACK_IMPORTED_MODULE_2__._DEFAULT_ENTRY_NAME) {
        var _a;
        this._delegate.checkDestroyed();
        // Initialize instance if InstatiationMode is `EXPLICIT`.
        const provider = this._delegate.container.getProvider(name);
        if (!provider.isInitialized() &&
            ((_a = provider.getComponent()) === null || _a === void 0 ? void 0 : _a.instantiationMode) === "EXPLICIT" /* InstantiationMode.EXPLICIT */) {
            provider.initialize();
        }
        // getImmediate will always succeed because _getService is only called for registered components.
        return provider.getImmediate({
            identifier: instanceIdentifier
        });
    }
    /**
     * Remove a service instance from the cache, so we will create a new instance for this service
     * when people try to get it again.
     *
     * NOTE: currently only firestore uses this functionality to support firestore shutdown.
     *
     * @param name The service name
     * @param instanceIdentifier instance identifier in case multiple instances are allowed
     * @internal
     */
    _removeServiceInstance(name, instanceIdentifier = _firebase_app__WEBPACK_IMPORTED_MODULE_2__._DEFAULT_ENTRY_NAME) {
        this._delegate.container
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .getProvider(name)
            .clearInstance(instanceIdentifier);
    }
    /**
     * @param component the component being added to this app's container
     * @internal
     */
    _addComponent(component) {
        (0,_firebase_app__WEBPACK_IMPORTED_MODULE_2__._addComponent)(this._delegate, component);
    }
    _addOrOverwriteComponent(component) {
        (0,_firebase_app__WEBPACK_IMPORTED_MODULE_2__._addOrOverwriteComponent)(this._delegate, component);
    }
    toJSON() {
        return {
            name: this.name,
            automaticDataCollectionEnabled: this.automaticDataCollectionEnabled,
            options: this.options
        };
    }
}
// TODO: investigate why the following needs to be commented out
// Prevent dead-code elimination of these methods w/o invalid property
// copying.
// (FirebaseAppImpl.prototype.name && FirebaseAppImpl.prototype.options) ||
//   FirebaseAppImpl.prototype.delete ||
//   console.log('dc');

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ERRORS = {
    ["no-app" /* AppError.NO_APP */]: "No Firebase App '{$appName}' has been created - " +
        'call Firebase App.initializeApp()',
    ["invalid-app-argument" /* AppError.INVALID_APP_ARGUMENT */]: 'firebase.{$appName}() takes either no argument or a ' +
        'Firebase App instance.'
};
const ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_0__.ErrorFactory('app-compat', 'Firebase', ERRORS);

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Because auth can't share code with other components, we attach the utility functions
 * in an internal namespace to share code.
 * This function return a firebase namespace object without
 * any utility functions, so it can be shared between the regular firebaseNamespace and
 * the lite version.
 */
function createFirebaseNamespaceCore(firebaseAppImpl) {
    const apps = {};
    // // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // const components = new Map<string, Component<any>>();
    // A namespace is a plain JavaScript Object.
    const namespace = {
        // Hack to prevent Babel from modifying the object returned
        // as the firebase namespace.
        // @ts-ignore
        __esModule: true,
        initializeApp: initializeAppCompat,
        // @ts-ignore
        app,
        registerVersion: _firebase_app__WEBPACK_IMPORTED_MODULE_2__.registerVersion,
        setLogLevel: _firebase_app__WEBPACK_IMPORTED_MODULE_2__.setLogLevel,
        onLog: _firebase_app__WEBPACK_IMPORTED_MODULE_2__.onLog,
        // @ts-ignore
        apps: null,
        SDK_VERSION: _firebase_app__WEBPACK_IMPORTED_MODULE_2__.SDK_VERSION,
        INTERNAL: {
            registerComponent: registerComponentCompat,
            removeApp,
            useAsService,
            modularAPIs: _firebase_app__WEBPACK_IMPORTED_MODULE_2__
        }
    };
    // Inject a circular default export to allow Babel users who were previously
    // using:
    //
    //   import firebase from 'firebase';
    //   which becomes: var firebase = require('firebase').default;
    //
    // instead of
    //
    //   import * as firebase from 'firebase';
    //   which becomes: var firebase = require('firebase');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    namespace['default'] = namespace;
    // firebase.apps is a read-only getter.
    Object.defineProperty(namespace, 'apps', {
        get: getApps
    });
    /**
     * Called by App.delete() - but before any services associated with the App
     * are deleted.
     */
    function removeApp(name) {
        delete apps[name];
    }
    /**
     * Get the App object for a given name (or DEFAULT).
     */
    function app(name) {
        name = name || _firebase_app__WEBPACK_IMPORTED_MODULE_2__._DEFAULT_ENTRY_NAME;
        if (!(0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.contains)(apps, name)) {
            throw ERROR_FACTORY.create("no-app" /* AppError.NO_APP */, { appName: name });
        }
        return apps[name];
    }
    // @ts-ignore
    app['App'] = firebaseAppImpl;
    /**
     * Create a new App instance (name must be unique).
     *
     * This function is idempotent. It can be called more than once and return the same instance using the same options and config.
     */
    function initializeAppCompat(options, rawConfig = {}) {
        const app = _firebase_app__WEBPACK_IMPORTED_MODULE_2__.initializeApp(options, rawConfig);
        if ((0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.contains)(apps, app.name)) {
            return apps[app.name];
        }
        const appCompat = new firebaseAppImpl(app, namespace);
        apps[app.name] = appCompat;
        return appCompat;
    }
    /*
     * Return an array of all the non-deleted FirebaseApps.
     */
    function getApps() {
        // Make a copy so caller cannot mutate the apps list.
        return Object.keys(apps).map(name => apps[name]);
    }
    function registerComponentCompat(component) {
        const componentName = component.name;
        const componentNameWithoutCompat = componentName.replace('-compat', '');
        if (_firebase_app__WEBPACK_IMPORTED_MODULE_2__._registerComponent(component) &&
            component.type === "PUBLIC" /* ComponentType.PUBLIC */) {
            // create service namespace for public components
            // The Service namespace is an accessor function ...
            const serviceNamespace = (appArg = app()) => {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                if (typeof appArg[componentNameWithoutCompat] !== 'function') {
                    // Invalid argument.
                    // This happens in the following case: firebase.storage('gs:/')
                    throw ERROR_FACTORY.create("invalid-app-argument" /* AppError.INVALID_APP_ARGUMENT */, {
                        appName: componentName
                    });
                }
                // Forward service instance lookup to the FirebaseApp.
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                return appArg[componentNameWithoutCompat]();
            };
            // ... and a container for service-level properties.
            if (component.serviceProps !== undefined) {
                (0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.deepExtend)(serviceNamespace, component.serviceProps);
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            namespace[componentNameWithoutCompat] = serviceNamespace;
            // Patch the FirebaseAppImpl prototype
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            firebaseAppImpl.prototype[componentNameWithoutCompat] =
                // TODO: The eslint disable can be removed and the 'ignoreRestArgs'
                // option added to the no-explicit-any rule when ESlint releases it.
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                function (...args) {
                    const serviceFxn = this._getService.bind(this, componentName);
                    return serviceFxn.apply(this, component.multipleInstances ? args : []);
                };
        }
        return component.type === "PUBLIC" /* ComponentType.PUBLIC */
            ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                namespace[componentNameWithoutCompat]
            : null;
    }
    // Map the requested service to a registered service name
    // (used to map auth to serverAuth service when needed).
    function useAsService(app, name) {
        if (name === 'serverAuth') {
            return null;
        }
        const useService = name;
        return useService;
    }
    return namespace;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Return a firebase namespace object.
 *
 * In production, this will be called exactly once and the result
 * assigned to the 'firebase' global.  It may be called multiple times
 * in unit tests.
 */
function createFirebaseNamespace() {
    const namespace = createFirebaseNamespaceCore(FirebaseAppImpl);
    namespace.INTERNAL = Object.assign(Object.assign({}, namespace.INTERNAL), { createFirebaseNamespace,
        extendNamespace,
        createSubscribe: _firebase_util__WEBPACK_IMPORTED_MODULE_0__.createSubscribe,
        ErrorFactory: _firebase_util__WEBPACK_IMPORTED_MODULE_0__.ErrorFactory,
        deepExtend: _firebase_util__WEBPACK_IMPORTED_MODULE_0__.deepExtend });
    /**
     * Patch the top-level firebase namespace with additional properties.
     *
     * firebase.INTERNAL.extendNamespace()
     */
    function extendNamespace(props) {
        (0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.deepExtend)(namespace, props);
    }
    return namespace;
}
const firebase$1 = createFirebaseNamespace();

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const logger = new _firebase_logger__WEBPACK_IMPORTED_MODULE_3__.Logger('@firebase/app-compat');

const name = "@firebase/app-compat";
const version = "0.2.16";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function registerCoreComponents(variant) {
    // Register `app` package.
    (0,_firebase_app__WEBPACK_IMPORTED_MODULE_2__.registerVersion)(name, version, variant);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Firebase Lite detection
// eslint-disable-next-line @typescript-eslint/no-explicit-any
if ((0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.isBrowser)() && self.firebase !== undefined) {
    logger.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);
    // eslint-disable-next-line
    const sdkVersion = self.firebase.SDK_VERSION;
    if (sdkVersion && sdkVersion.indexOf('LITE') >= 0) {
        logger.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `);
    }
}
const firebase = firebase$1;
registerCoreComponents();




/***/ }),

/***/ 50674:
/*!****************************************************************!*\
  !*** ./node_modules/firebase/compat/app/dist/esm/index.esm.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _firebase_app_compat__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _firebase_app_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app-compat */ 16323);



var name = "firebase";
var version = "10.2.0";

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
_firebase_app_compat__WEBPACK_IMPORTED_MODULE_0__.default.registerVersion(name, version, 'app-compat');


/***/ }),

/***/ 39450:
/*!*****************************************************************!*\
  !*** ./node_modules/firebase/compat/auth/dist/esm/index.esm.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_auth_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/auth-compat */ 2557);



/***/ })

}]);
//# sourceMappingURL=src_app_onboarding_onboarding_module_ts.js.map