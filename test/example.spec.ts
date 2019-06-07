import { expect } from 'chai';

describe('Google maps page', () => {
	it('should have the right title', () => {
		browser.url('/maps');
		const title = browser.getTitle();
		expect(title).to.be.equal('Google Maps');
	});
});
