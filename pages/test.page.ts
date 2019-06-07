import { Element } from '@wdio/sync';

class TestPage {
	private logo: string;
	private inputField: string;

	constructor() {
		this.logo = '#hplogo';
		this.inputField = '[title="Search"]';
	}

	private getInputElemement(): Element {
		return $(this.inputField);
	}

	private getLogoElemement(): Element {
		return $(this.logo);
	}

	isLogoDisplayed(): boolean {
		this.getLogoElemement().waitForDisplayed();
		return this.getLogoElemement().isDisplayed();
	}

	typeInSearchField(searchText) {
		this.getInputElemement().setValue(searchText);
	}
}

const testPage = new TestPage();
Object.freeze(testPage);
export default testPage;
