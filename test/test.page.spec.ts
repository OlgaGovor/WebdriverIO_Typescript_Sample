import { expect } from 'chai';
import testPage from './../pages/test.page';

describe('Google page', () => {
	before(() => {
		browser.url('/');
	});

	it('should have Logo', () => {
		expect(testPage.isLogoDisplayed()).to.be.equal(true);
	});

	it('type text in Search field', () => {
		testPage.typeInSearchField('text to search');
	});
});
