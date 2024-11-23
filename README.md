# CodeTantra Anti-AntiCheat (v2.0)

This user script empowers you to enhance your CodeTantra experience by:

- **Enabling Text Selection and Copying:** Freely copy text within CodeTantra's platform.
- **Maintaining Control of Fullscreen and Window Switching:** Exit fullscreen mode and switch between CodeTantra windows without triggering tracking mechanisms.
- **Improved Privacy:** Mitigate potential tracking of cursor movements and visibility state changes.

**Disclaimer:**

**Please note:** This script is for educational purposes only and may violate CodeTantra's terms of service. Use it responsibly and at your own risk. CodeTantra might implement countermeasures to prevent such scripts from functioning. 

**Installation:**

1. **Greasemonkey or Tampermonkey:** Install a browser extension like Greasemonkey (Firefox) or Tampermonkey (Chrome) if you haven't already.
2. **Install Script:** Click "Raw" next to the "Code" button on GitHub, copy the script content, and create a new script within your extension.
3. **Enable Script:** Activate the script for CodeTantra websites using the extension's management interface.

**Features:**

- **Enable Text Selection and Copying:**
  - Injects a CSS style rule to enable text selection across the entire page.
  - Re-enables disabled event listeners for copying and cutting.
- **Prevent Fullscreen Detection and Control:**
  - Overwrites the `document.fullscreenElement` property to always return `null`, preventing fullscreen detection.
  - Replaces the `document.exitFullscreen`, `document.requestFullscreen`, and `HTMLElement.prototype.requestFullscreen` methods with no-op functions, rendering them inoperable.
- **Mitigate Cursor Movement Tracking:**
  - Attaches event listeners (`mousemove`, `mouseenter`, `mouseleave`) to the document, preventing event propagation and potentially hindering tracking of cursor movements.
- **Block Visibility State Changes:**
  - Overrides the `document.visibilityState` property to always return "visible".
  - Overwrites the `document.hidden` property to always return `false`.
  - Attaches an event listener for `visibilitychange` events to prevent their propagation.

**Technical Details:**

- **Userscript:** Leverages the Userscript standard for cross-browser compatibility.
- **Event Listeners:** Employs event listeners to intercept and stop propagation of certain events.
- **JavaScript Properties:** Overrides specific JavaScript properties to achieve desired behavior.

**Additional Notes:**

Be aware that CodeTantra might implement countermeasures against such scripts. It's crucial to respect CodeTantra's terms of service and use this script responsibly.

**Feedback and Contribution:**

Feel free to submit suggestions or contributions via pull requests on GitHub.
## Authors

- **@SatoshiaCircuit**
- **@RBLakshya**
