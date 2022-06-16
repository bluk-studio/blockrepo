/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApplicationModule = void 0;
const common_1 = __webpack_require__(3);
const Modules = __webpack_require__(4);
let ApplicationModule = class ApplicationModule {
};
ApplicationModule = __decorate([
    (0, common_1.Module)({
        imports: [...Object.values(Modules)],
    })
], ApplicationModule);
exports.ApplicationModule = ApplicationModule;
;


/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(5), exports);
__exportStar(__webpack_require__(12), exports);
__exportStar(__webpack_require__(24), exports);


/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TunnelModule = void 0;
const common_1 = __webpack_require__(3);
const config_1 = __webpack_require__(6);
const Services = __webpack_require__(7);
let TunnelModule = class TunnelModule {
};
TunnelModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
        ],
        providers: [...Object.values(Services)],
        exports: [...Object.values(Services)],
    })
], TunnelModule);
exports.TunnelModule = TunnelModule;
;


/***/ }),
/* 6 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(8), exports);


/***/ }),
/* 8 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TunnelService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TunnelService = void 0;
const common_1 = __webpack_require__(3);
const net_1 = __webpack_require__(9);
const fs_1 = __webpack_require__(10);
const ssh2_1 = __webpack_require__(11);
let TunnelService = TunnelService_1 = class TunnelService {
    constructor() {
        this.clients = [];
        this.logger = new common_1.Logger(TunnelService_1.name);
        this.proxyConfig = {
            host: 'proxy.bluk.studio',
            port: 22,
            username: 'ubuntu',
            privateKey: (0, fs_1.readFileSync)('proxy.key'),
        };
    }
    onApplicationBootstrap() {
        const config = {
            server_port: Number(process.env.SERVER_PORT),
        };
        if (!config.server_port)
            return;
        this.createServerTunnel(config.server_port);
    }
    ;
    createServerTunnel(port) {
        const client = new ssh2_1.Client();
        this.clients.push(client);
        client.on('ready', () => {
            client.forwardIn('proxy.bluk.studio', port, (error) => {
                if (error)
                    throw error;
                this.logger.warn('Tunnel started');
            });
        }).on('tcp connection', (info, accept) => {
            const localSocket = new net_1.Socket();
            localSocket.connect(25565, () => {
                const remoteSocket = accept();
                localSocket.pipe(remoteSocket).pipe(localSocket);
            });
        }).connect(this.proxyConfig);
    }
    ;
};
TunnelService = TunnelService_1 = __decorate([
    (0, common_1.Injectable)()
], TunnelService);
exports.TunnelService = TunnelService;
;


/***/ }),
/* 9 */
/***/ ((module) => {

module.exports = require("net");

/***/ }),
/* 10 */
/***/ ((module) => {

module.exports = require("fs");

/***/ }),
/* 11 */
/***/ ((module) => {

module.exports = require("ssh2");

/***/ }),
/* 12 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HealthModule = void 0;
const common_1 = __webpack_require__(3);
const module_1 = __webpack_require__(13);
const Services = __webpack_require__(22);
let HealthModule = class HealthModule {
};
HealthModule = __decorate([
    (0, common_1.Module)({
        imports: [module_1.ClustersClientsModule],
        providers: [...Object.values(Services)],
        exports: [...Object.values(Services)],
    })
], HealthModule);
exports.HealthModule = HealthModule;
;


/***/ }),
/* 13 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClustersClientsModule = void 0;
const common_1 = __webpack_require__(3);
const config_1 = __webpack_require__(6);
const microservices_1 = __webpack_require__(14);
const configs_1 = __webpack_require__(15);
const Services = __webpack_require__(20);
let ClustersClientsModule = class ClustersClientsModule {
};
ClustersClientsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
        ],
        providers: [
            {
                provide: 'zurich_cluster',
                useFactory: async () => {
                    return microservices_1.ClientProxyFactory.create(await (0, configs_1.GrpcOptions)('localhost:5002'));
                },
            },
            ...Object.values(Services)
        ],
        exports: [...Object.values(Services)],
    })
], ClustersClientsModule);
exports.ClustersClientsModule = ClustersClientsModule;
;


/***/ }),
/* 14 */
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),
/* 15 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(16), exports);
__exportStar(__webpack_require__(19), exports);


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GrpcOptions = void 0;
const glob = __webpack_require__(17);
const path_1 = __webpack_require__(18);
const microservices_1 = __webpack_require__(14);
const GrpcOptions = async (url) => {
    const shared = await (new Promise((resolve) => {
        glob((0, path_1.join)(__dirname, 'types/**/*'), (error, res) => {
            if (!error) {
                resolve(res.map((path) => {
                    const relativePath = (0, path_1.relative)(__dirname, path);
                    return relativePath;
                }));
            }
            ;
        });
    }));
    return {
        name: 'bluk_games',
        transport: microservices_1.Transport.GRPC,
        options: {
            package: 'bluk_games',
            protoPath: [
                (0, path_1.join)(__dirname, 'library.proto'),
                (0, path_1.join)(__dirname, 'permissions.proto'),
                (0, path_1.join)(__dirname, 'users.proto'),
                (0, path_1.join)(__dirname, 'ClustersService.proto'),
                ...shared.map((file) => (0, path_1.join)(__dirname, file)),
            ],
            url,
        },
    };
};
exports.GrpcOptions = GrpcOptions;


/***/ }),
/* 17 */
/***/ ((module) => {

module.exports = require("glob");

/***/ }),
/* 18 */
/***/ ((module) => {

module.exports = require("path");

/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getServiceOptions = exports.services = void 0;
;
exports.services = [
    {
        name: 'library',
        port: 5001,
        proxyPort: 8081,
    },
    {
        name: 'users',
        port: 5000,
        proxyPort: 8080,
    },
    {
        name: 'game_cluster',
        port: 5002,
        proxyPort: 5002,
    },
];
function getServiceOptions(service) {
    return exports.services.find((x) => x.name == service);
}
exports.getServiceOptions = getServiceOptions;
;


/***/ }),
/* 20 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(21), exports);


/***/ }),
/* 21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClustersClientsService = void 0;
const common_1 = __webpack_require__(3);
const microservices_1 = __webpack_require__(14);
let ClustersClientsService = class ClustersClientsService {
    constructor(zurich_cluster) {
        this.zurich_cluster = zurich_cluster;
    }
    ;
    onModuleInit() {
        this.zurich = this.zurich_cluster.getService('OneClusterService');
    }
    ;
};
ClustersClientsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('zurich_cluster')),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientGrpc !== "undefined" && microservices_1.ClientGrpc) === "function" ? _a : Object])
], ClustersClientsService);
exports.ClustersClientsService = ClustersClientsService;
;


/***/ }),
/* 22 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(23), exports);


/***/ }),
/* 23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HealthSender = void 0;
const common_1 = __webpack_require__(3);
const services_1 = __webpack_require__(20);
let HealthSender = class HealthSender {
    constructor(clusters) {
        this.clusters = clusters;
        this.cluster = clusters[process.env.CLUSTER_NAME];
    }
    ;
    sendHealthReport(health) {
        this.cluster.sendServerHealth({
            id: process.env.SERVER_ID,
            health,
        }, null);
    }
    ;
};
HealthSender = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof services_1.ClustersClientsService !== "undefined" && services_1.ClustersClientsService) === "function" ? _a : Object])
], HealthSender);
exports.HealthSender = HealthSender;
;


/***/ }),
/* 24 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServerModule = void 0;
const common_1 = __webpack_require__(3);
const Services = __webpack_require__(25);
let ServerModule = class ServerModule {
};
ServerModule = __decorate([
    (0, common_1.Module)({
        providers: [...Object.values(Services)],
        exports: [...Object.values(Services)],
    })
], ServerModule);
exports.ServerModule = ServerModule;
;


/***/ }),
/* 25 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(26), exports);


/***/ }),
/* 26 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ServerService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServerService = void 0;
const common_1 = __webpack_require__(3);
const child_process_1 = __webpack_require__(27);
const isomorphic_git_1 = __webpack_require__(28);
const node_1 = __webpack_require__(29);
const path = __webpack_require__(18);
const fs = __webpack_require__(10);
let ServerService = ServerService_1 = class ServerService {
    constructor() {
        this.logger = new common_1.Logger(ServerService_1.name);
    }
    async onApplicationBootstrap() {
        await this.downloadImage();
        this.start();
    }
    ;
    async downloadImage() {
        this.logger.warn(`Downloading server image (${process.env.SERVER_IMAGE_URL})`);
        const url = process.env.SERVER_IMAGE_URL;
        if (!url)
            throw new Error("Server image url isn't specified.");
        let currentPhase;
        await isomorphic_git_1.default.clone({
            fs,
            http: node_1.default,
            dir: path.join(process.cwd(), 'server'),
            url,
            onProgress: (progress) => {
                if (currentPhase != progress.phase) {
                    currentPhase = progress.phase;
                    this.logger.warn(`[Cloning] ${progress.phase} (total: ${progress.total})`);
                }
                ;
            },
            depth: 1,
        });
    }
    ;
    start() {
        this.logger.warn('Trying to start minecraft server...');
        if (this.instance)
            throw new Error('Server already started');
        this.instance = (0, child_process_1.spawn)('java', ['-Xmx2G', '-jar', 'server.jar', 'nogui'], {
            cwd: './server',
        });
        this.instance.stdout.pipe(process.stdout);
        process.stdin.pipe(this.instance.stdin);
        this.instance.stdout.on('data', (data) => {
        });
    }
    ;
};
ServerService = ServerService_1 = __decorate([
    (0, common_1.Injectable)()
], ServerService);
exports.ServerService = ServerService;
;


/***/ }),
/* 27 */
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),
/* 28 */
/***/ ((module) => {

module.exports = require("isomorphic-git");

/***/ }),
/* 29 */
/***/ ((module) => {

module.exports = require("isomorphic-git/http/node");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(1);
const module_1 = __webpack_require__(2);
async function bootstrap() {
    const app = await core_1.NestFactory.create(module_1.ApplicationModule);
    await app.listen(3000);
}
;
bootstrap();

})();

/******/ })()
;