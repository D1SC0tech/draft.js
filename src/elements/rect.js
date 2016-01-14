Draft.Rect = class Rect extends Draft.Element {
  get rekt() {
    return `${Math.floor(Math.random() * 101)}% rekt`;
  }
};

Draft.Rect.require([
  'size',
  'radius'
]);

Draft.Group.mixin({
  rect(width, height) {
    return this.add(new Draft.Rect()).size(width, height);
  }
});
