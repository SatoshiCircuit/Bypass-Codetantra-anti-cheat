// ==UserScript==
// @name         Bypass Codetantra anti-cheat
// @namespace    http://tampermonkey.net/
// @version      1.6
// @description  Use this script to disable the full screen and window switch blocking in Codetantra, this is done by blocking the focus, screen change, events, as well as the cursor moving.
// @match        *://*.codetantra.com/*
// @author       SatoshiaCircuit & RBLakshya
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const blockedEvents = ['visibilitychange', 'blur', 'focus', 'fullscreenchange', 'mouseleave', 'mouseout'];
    const originalAddEventListener = EventTarget.prototype.addEventListener;
    EventTarget.prototype.addEventListener = function(type, listener, options) {
        if (blockedEvents.includes(type)) {
            console.log(`Blocked event listener for: ${type}`);
            return;
        }
        return originalAddEventListener.call(this, type, listener, options);
    };
    const originalRemoveEventListener = EventTarget.prototype.removeEventListener;
    EventTarget.prototype.removeEventListener = function(type, listener, options) {
        if (blockedEvents.includes(type)) {
            console.log(`Blocked removal of listener for: ${type}`);
            return;
        }
        return originalRemoveEventListener.call(this, type, listener, options);
    };
    function overrideDocumentProperties() {
        Object.defineProperty(document, 'visibilityState', {
            get: () => 'visible',
            configurable: true,
        });

        Object.defineProperty(document, 'hidden', {
            get: () => false,
            configurable: true,
        });

        Object.defineProperty(document, 'fullscreenElement', {
            get: () => null,
            configurable: true,
        });

        Object.defineProperty(document, 'webkitIsFullScreen', {
            get: () => false,
            configurable: true,
        });

        Object.defineProperty(document, 'mozFullScreen', {
            get: () => false,
            configurable: true,
        });
    }
    function enforcePersistentFocus() {
        window.focus();
        document.hasFocus = () => true;

        const fakeFocusEvent = new Event('focus');
        window.dispatchEvent(fakeFocusEvent);
        console.log("Simulated persistent focus to prevent tab switch detection");
    }
    function preventMouseLeaveDetection() {
        document.addEventListener('mouseleave', (event) => {
            event.stopImmediatePropagation();
            console.log("Blocked mouseleave event");
        }, true);

        document.addEventListener('mouseout', (event) => {
            event.stopImmediatePropagation();
            console.log("Blocked mouseout event");
        }, true);
    }
    setInterval(() => {
        overrideDocumentProperties();
        enforcePersistentFocus();
        preventMouseLeaveDetection();
    }, 200);

    console.log("Enhanced Anti-Tracking script running on CodeTantra");
})();