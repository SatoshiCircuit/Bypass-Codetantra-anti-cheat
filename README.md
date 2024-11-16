# Bypass Codetantra Anti-Cheat

This user script disables the fullscreen and window-switching restrictions on the Codetantra platform, allowing users to exit fullscreen mode and switch windows without detection. It achieves this by overriding event listeners and properties related to focus, fullscreen, and visibility.

## Features

- Prevents Codetantra from detecting:
  - Window/tab switching
  - Exiting fullscreen
  - Mouse leave or mouseout events
- Overrides document properties like `visibilityState` and `fullscreenElement`.
- Enforces persistent focus.

## Installation

Follow these steps to install and use the script:

### Prerequisites

1. **Tampermonkey** (or a similar userscript manager) must be installed in your browser.
   - [Tampermonkey for Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - [Tampermonkey for Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
   - [Tampermonkey for Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)

### Installation Steps

1. Open Tampermonkey's dashboard in your browser.
2. Click on the `+` icon to create a new script.
3. Copy and paste the contents of the script (`Bypass Codetantra anti-cheat.js`) into the editor.
4. Save the script by clicking on `File > Save` or pressing `Ctrl + S`.
5. Ensure the script is enabled in Tampermonkey.

### Usage

1. Navigate to the [Codetantra website](https://www.codetantra.com).
2. The script will automatically activate, blocking anti-cheat measures.

## Disclaimer

- This script is provided for educational purposes only. Use it responsibly and ensure compliance with any relevant policies or regulations.
- The authors of this script are not responsible for any consequences arising from its use.

## Authors

- **SatoshiaCircuit**
- **RBLakshya**

## Version

**1.6**

## License

This script is open-source. Feel free to modify and distribute it under the terms of your choosing.
