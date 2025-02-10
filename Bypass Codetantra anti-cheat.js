// ==UserScript==
// @name         CodeTantra Anti-Anti Cheat
// @namespace    http://tampermonkey.net/
// @version      3.0
// @description  Blocks tracking events and UI elements
// @match        *://*.codetantra.com/*
// @author       RBLakshya & SatoshiCircuit
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // List of events to block
    const blockedEvents = ['visibilitychange', 'blur', 'focus', 'fullscreenchange', 'mouseleave', 'mouseout'];

    // Override addEventListener to block detection events
    const originalAddEventListener = EventTarget.prototype.addEventListener;
    EventTarget.prototype.addEventListener = function(type, listener, options) {
        if (blockedEvents.includes(type)) {
            console.log(`Blocked event listener for: ${type}`);
            return;
        }
        return originalAddEventListener.call(this, type, listener, options);
    };

    // Override removeEventListener to keep detection-blocking intact
    const originalRemoveEventListener = EventTarget.prototype.removeEventListener;
    EventTarget.prototype.removeEventListener = function(type, listener, options) {
        if (blockedEvents.includes(type)) {
            console.log(`Blocked removal of listener for: ${type}`);
            return;
        }
        return originalRemoveEventListener.call(this, type, listener, options);
    };

    // Override visibility and fullscreen properties
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

    // Enforce persistent focus and prevent detection of focus loss
    function enforcePersistentFocus() {
        window.focus();
        document.hasFocus = () => true;

        const fakeFocusEvent = new Event('focus');
        window.dispatchEvent(fakeFocusEvent);
        console.log("Simulated persistent focus to prevent tab switch detection");
    }

    // Function to block mouse leave detection
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

    // Function to hide specific elements like Ublock Origin
    function hideTrackingElements() {
        const selectors = [
            '#countUpModal > .modal-sm.modal-dialog > .modal-content > .modal-body',
            '#countUpModal'
        ];

        selectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(el => {
                el.style.display = 'none';
                console.log(`Hid element: ${selector}`);
            });
        });
    }

    // Apply overrides and block events at frequent intervals
    setInterval(() => {
        overrideDocumentProperties();
        enforcePersistentFocus();
        preventMouseLeaveDetection();
        hideTrackingElements();
    }, 200);  // Every 200ms to stay ahead of reattachments

    console.log("Enhanced Anti-Tracking script running on CodeTantra and CodeChef");
})();
