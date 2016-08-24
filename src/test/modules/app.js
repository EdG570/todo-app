import {expect} from 'chai';
import App from '../../scripts/modules/App';

describe('App class', () => {
  let app;

  beforeEach(() => {
    app = new App();
  });

  describe('constructor()', () => {
    it('should construct an instance of App', () => {
      expect(app).to.be.instanceOf(App);
    });
  });
});