draft.View = class View extends draft.Element {
  /* render(renderer) {
    this['render' + renderer.toUpperCase()]();
  } */

  get aspectRatio() {
    var gcd = function(a, b) {
      return b ? gcd(b, a % b) : a;
    };

    gcd = gcd(this.width(), this.height());
    return `${this.width() / gcd}:${this.height() / gcd}`;
  }
};

draft.View.require('size');

draft.Group.mixin({
  view(width, height) {
    return this.push(new draft.View()).size(width, height);
  }
});
