Draft.Line = class Line extends Draft.Element {
  length(length) {
    return this.prop('length', unit(length));
  }
};

Draft.Group.mixin({
  line: function(length) {
    return this.add(new Draft.Line()).length(length);
  }
});
