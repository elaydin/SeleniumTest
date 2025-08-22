Feature('login');

Scenario('Yanlış Kullanıcı Adı @testcase1', async ({ I }) => {
  await I.amOnPage('https://amazon.com');
  await I.waitForElement('//div[@id="nav-signin-tooltip"]',5);
  await I.click('//div[@id="nav-signin-tooltip"]');
  await I.fillField('//input[@id="ap_email_login"]', 'dddd');
await I.click('//span[@id="continue"]//input[@type="submit"]');
  await I.seeElement("//*[contains(text(), 'cannot find')]");
});

Scenario('Doğru Kullanıcı Adı Yanlış şifre @testcase2', async ({ I }) => {
  await I.amOnPage('https://amazon.com');
  await I.waitForElement('//div[@id="nav-signin-tooltip"]',5);
  await I.click('//div[@id="nav-signin-tooltip"]');
  await I.waitForElement('//input[@id="ap_email_login"]',5);
  await I.fillField('//input[@id="ap_email_login"]','elaydinn@hotmail.com');
await I.click('//span[@id="continue"]//input[@type="submit"]');
  await I.waitForElement('//input[@id="ap_password"]',5);
  await I.fillField('//input[@id="ap_password"]','qwe');
  await I.waitForElement('//input[@id="signInSubmit"]',5);
  await I.click('//input[@id="signInSubmit"]');
  await I.seeElement("//*[contains(text(), 'Important Message')]");
});

Scenario('Doğru Kullanıcı Adı Doğru şifre @testcase3', async ({ I }) => {
  await I.amOnPage('https://amazon.com');
  await I.waitForElement('//div[@id="nav-signin-tooltip"]',5);
  await I.click('//div[@id="nav-signin-tooltip"]');
  await I.waitForElement('//input[@id="ap_email_login"]',5);
  await I.fillField('//input[@id="ap_email_login"]','elaydinn@hotmail.com');
await I.click('//span[@id="continue"]//input[@type="submit"]');
  await I.waitForElement('//input[@id="ap_password"]',5);
  await I.fillField('//input[@id="ap_password"]','elaa.');
  await I.waitForElement('//input[@id="signInSubmit"]'),5;
  await I.click('//input[@id="signInSubmit"]');
  await I.seeElement("//*[contains(text(), 'Hello, Ela')]");
});
