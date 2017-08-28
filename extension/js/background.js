let expression = /(http(s?)):\/\//gi;
let regex = new RegExp(expression);
let gettingAllTabs = browser.tabs.query({});

// Returns true only if the URL's protocol is in APPLICABLE_PROTOCOLS.
function protocolIsApplicable(url) {
    return url.match(regex);
}

// Initialize the page action. Only operates on tabs whose URL's protocol is applicable.
function initializePageAction(tab) {
    if (protocolIsApplicable(tab.url)) {
        browser.pageAction.show(tab.id);
    }
}

// Main script.
function removeOverlay() {
    // No tabs or host permissions needed!
    browser.tabs.executeScript(null, {file: '/js/overlay_remover.js'},
        function() {
            browser.tabs.executeScript(null,
                {code: 'overlayRemoverRun();'});
        });
}

// When first loaded, initialize the page action for all tabs.
gettingAllTabs.then((tabs) => {
    for (let tab of tabs) {
        initializePageAction(tab);
    }
});

// Each time a tab is updated, reset the page action for that tab.
browser.tabs.onUpdated.addListener((id, changeInfo, tab) => {
    initializePageAction(tab);
});

// Shortcut listener.
browser.commands.onCommand.addListener(function(command) {
    if (command === 'removeOverlay') {
        removeOverlay();
    }
});

// Called when the user clicks on the page action.
browser.pageAction.onClicked.addListener(removeOverlay);
