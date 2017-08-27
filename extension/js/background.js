// Get the translated string for context menu.
const contextMenuRemoveOverlayTitle = browser.i18n.getMessage(
    'contextMenuRemoveOverlayTitle');

function removeOverlay() {
    // No tabs or host permissions needed!
    browser.tabs.executeScript(null, {file: '/js/overlay_remover.js'},
        function() {
            browser.tabs.executeScript(null,
                {code: 'overlayRemoverRun();'});
        });
}

// Create all the context menu items.
browser.contextMenus.create({
    id: 'removeOverlay',
    title: contextMenuRemoveOverlayTitle
});

// The click event listener, where we perform the appropriate action given the
// ID of the menu item that was clicked.
browser.contextMenus.onClicked.addListener(function(info) {
    if (info.menuItemId === 'removeOverlay') {
        removeOverlay();
    }
});

// Shortcut listener.
browser.commands.onCommand.addListener(function(command) {
    if (command === 'removeOverlay') {
        removeOverlay();
    }
});

// Called when the user clicks on the browser action.
browser.browserAction.onClicked.addListener(removeOverlay);
