const contextMenuRemoveOverlayTitle = chrome.i18n.getMessage(
        'contextMenuRemoveOverlayTitle');

function removeOverlay() {
    // No tabs or host permissions needed!
    chrome.tabs.executeScript(null, {file: '/js/overlay_remover.js'},
            function() {
                chrome.tabs.executeScript(null,
                        {code: 'overlayRemoverRun();'});
            });
}

// Create all the context menu items.
chrome.contextMenus.create({
    id: 'removeOverlay',
    title: contextMenuRemoveOverlayTitle
});

// The click event listener, where we perform the appropriate action given the
// ID of the menu item that was clicked.
chrome.contextMenus.onClicked.addListener(function(info) {
    if (info.menuItemId === 'removeOverlay') {
        removeOverlay();
    }
});

// Shortcut listener.
chrome.commands.onCommand.addListener(function(command) {
    if (command === 'removeOverlay') {
        removeOverlay();
    }
});

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(removeOverlay);
