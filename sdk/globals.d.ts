// @ts-nocheck
interface Immediate { }
interface Timeout { }
function setInterval(handler: function, timeout?: number, ...arguments: any[]): Timeout;
function setTimeout(handler: function, timeout?: number, ...arguments: any[]): Timeout;
function setImmediate(handler: function, ...arguments: any[]): Immediate;
function clearInterval(timeout: Timeout): void;
function clearTimeout(timeout: Timeout): void;
function clearImmediate(timeout: Immediate): void;
