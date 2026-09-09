/* Options:
Date: 2026-09-09 14:29:06
Version: 10.15
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: https://localhost:5001

//AddServiceStackTypes: True
//AddDocAnnotations: True
//AddDescriptionAsComments: True
//IncludeTypes: 
//ExcludeTypes: 
//DefaultImports: 
*/

"use strict";
export class ResponseError {
    /** @param {{errorCode?:string,fieldName?:string,message?:string,meta?:{ [index:string]: string; }}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    errorCode;
    /** @type {string} */
    fieldName;
    /** @type {string} */
    message;
    /** @type {?{ [index:string]: string; }} */
    meta;
}
export class ResponseStatus {
    /** @param {{errorCode?:string,message?:string,stackTrace?:string,errors?:ResponseError[],meta?:{ [index:string]: string; }}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    errorCode;
    /** @type {?string} */
    message;
    /** @type {?string} */
    stackTrace;
    /** @type {?ResponseError[]} */
    errors;
    /** @type {?{ [index:string]: string; }} */
    meta;
}
export class StringResponse {
    /** @param {{result?:string,meta?:{ [index:string]: string; },responseStatus?:ResponseStatus}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    result;
    /** @type {?{ [index:string]: string; }} */
    meta;
    /** @type {?ResponseStatus} */
    responseStatus;
}
export class Hello {
    constructor(init) { Object.assign(this, init) }
    getTypeName() { return 'Hello' }
    getMethod() { return 'GET' }
    createResponse() { return new StringResponse() }
}

