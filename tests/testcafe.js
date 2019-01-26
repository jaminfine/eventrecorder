import {IdSelector, QxSelector} from "../npm/adapters/TestCafe";

fixture `Testing demo`
  .page `http://127.0.0.1:8080/build/eventrecorder/index.html`;

test('Run demo', async t => {
  await t
    .click(IdSelector("button1"))
    .expect(IdSelector("button1/window").visible).ok()
    .click(IdSelector("button1/window/button2"))
    .expect(IdSelector("button1/window").visible).notOk();
});