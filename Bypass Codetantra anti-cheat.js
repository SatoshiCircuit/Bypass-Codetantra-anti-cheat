// ==UserScript==
// @name         CodeTantra Anti-Anti Cheat
// @namespace    CT Anti-Anti Cheat
// @version      2.0
// @description  Allow you to exit full screen, and switch codetantra windows without being tracked and let you copy text in codetantra.
// @author       SatoshiaCircuit & RBLakshya
// @match        *://*.codetantra.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Enable Copy Mode
    var css = document.createElement('style');
    var head = document.head;
    css.type = 'text/css';
    css.innerText = `* {
        -webkit-user-select: text !important;
        -moz-user-select: text !important;
        -ms-user-select: text !important;
        user-select: text !important;
    }`;

    function enableCopyMode() {
        var doc = document;
        var body = document.body;
        var docEvents = [
            doc.oncontextmenu = null,
            doc.onselectstart = null,
            doc.ondragstart = null,
            doc.onmousedown = null
        ];
        var bodyEvents = [
            body.oncontextmenu = null,
            body.onselectstart = null,
            body.ondragstart = null,
            body.onmousedown = null,
            body.oncut = null,
            body.oncopy = null,
            body.onpaste = null
        ];
        [].forEach.call(
            ['copy', 'cut', 'paste', 'select', 'selectstart'],
            function(event) {
                document.addEventListener(event, function(e) { e.stopPropagation(); }, true);
            }
        );
        head.appendChild(css);
    }

    // Call the enable copy mode function
    enableCopyMode();

    // Prevent fullscreen detection
    Object.defineProperty(document, 'fullscreenElement', {
        get: () => null
    });

    // Override Fullscreen API methods
    const noop = () => {};
    document.exitFullscreen = noop;
    document.requestFullscreen = noop;
    HTMLElement.prototype.requestFullscreen = noop;

    // Prevent cursor movement tracking
    document.addEventListener('mousemove', (event) => {
        event.stopImmediatePropagation();
    }, true);

    document.addEventListener('mouseenter', (event) => {
        event.stopImmediatePropagation();
    }, true);

    document.addEventListener('mouseleave', (event) => {
        event.stopImmediatePropagation();
    }, true);

    // Block visibility state changes
    Object.defineProperty(document, 'visibilityState', {
        get: () => 'visible'
    });

    Object.defineProperty(document, 'hidden', {
        get: () => false
    });

    // Prevent visibility change event
    document.addEventListener('visibilitychange', (event) => {
        event.stopImmediatePropagation();
    }, true);

    console.log('Codetantra tracking protection with enable copy mode activated.');
})();
