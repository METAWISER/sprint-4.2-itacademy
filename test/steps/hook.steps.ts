import { AfterAll, BeforeAll } from "@cucumber/cucumber";

import App from "../../src/backend/App";

let aplication: App;

BeforeAll(() => {
	aplication = new App();
	aplication.start();
});

AfterAll(() => {
	aplication.close();
});

export { aplication };
