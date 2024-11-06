const { Given, When, Then } = require('@cucumber/cucumber');

// Step Definitions

Given('I am on the search page', function() {
    return browser.url('/search'); // Ensure this URL is correct
});

When('I initiate the search', function() {
    // Logic to initiate the search, perhaps clicking a search field or button
});

When('I enter {string} as the search term', function(term) {
    return $('#search-input').setValue(term); // Make sure this selector is correct
});

When('I select {string} as a filter', function(filter) {
    return $(`select#filter option[value="${filter}"]`).click(); // Ensure the selector is accurate
});

When('I click the search button', function() {
    return $('#search-button').click(); // Ensure this selector is correct
});

Then('I should see the results for {string}', function(location) {
    const results = $('#results'); // Adjust this selector to match your application
    return results.getText().then(text => {
        if (!text.includes(location)) {
            throw new Error(`Expected to see results for ${location}, but got ${text}`);
        }
    });
});

Then('I should see a list of restaurants in {string}', function(city) {
    const restaurantList = $('#restaurant-list'); // Ensure this selector is correct
    return restaurantList.isDisplayed(); // You can add further checks if needed
});

Then('I should be able to select a restaurant to view its details', function() {
    return $('#restaurant-list .restaurant-item:first-child').click(); // Adjust this selector
});

Then('I should be able to refine my search using additional filters', function() {
    // Logic for refining search goes here, if applicable
});

Then('I should see a message {string}', function(message) {
    const noResultsMessage = $('#no-results'); // Ensure this selector matches
    return noResultsMessage.getText().then(text => {
        if (!text.includes(message)) {
            throw new Error(`Expected to see message "${message}", but got "${text}"`);
        }
    });
});

Then('I should be presented with suggestions for nearby cities', function() {
    const suggestions = $('#city-suggestions'); // Ensure this selector is correct
    return suggestions.isDisplayed(); // Additional checks can be added here
});

Then('I should be able to modify my search terms', function() {
    // Logic to clear or modify search inputs
});
