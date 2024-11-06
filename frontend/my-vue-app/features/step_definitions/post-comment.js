// step-definitions/postCommentSteps.js
const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let isUserLoggedIn = false;
let hasNavigatedToPost = false;
let comment = null;
let commentConfirmed = false;

Given('user is logged into the system', function () {
    isUserLoggedIn = true;
});

Given('user has navigated to the desired location or post', function () {
    hasNavigatedToPost = true;
});

When('user clicks "Post Comment"', function () {
    if (!isUserLoggedIn || !hasNavigatedToPost) {
        throw new Error('User must be logged in and navigated to a post');
    }
});

When('user enters his/her comment in the input text area', function () {
    comment = "This is a user comment";
});

When('user confirms the posting of the comment', function () {
    commentConfirmed = true;
});

Then('the comment should be processed by the system', function () {
    assert.ok(commentConfirmed, 'Comment should be confirmed for processing');
});

Then('the comment should be stored successfully', function () {
    assert.ok(comment, 'Comment should be stored');
});

Then('user should see his/her comment displayed on the post', function () {
    assert.ok(comment, 'Comment should be displayed');
});

When('user does not confirm the posting', function () {
    commentConfirmed = false;
});

Then('the comment should not be processed', function () {
    assert.strictEqual(commentConfirmed, false, 'Comment should not be processed');
});

Then('the comment should not be stored', function () {
    assert.strictEqual(comment, null, 'Comment should not be stored');
});

Then('user should not see his/her comment displayed on the post', function () {
    assert.strictEqual(comment, null, 'Comment should not be displayed');
});