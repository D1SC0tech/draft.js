draft.Angle = class Angle {
  constructor(value, unit) {
    this.value = parseFloat(value);

    value = this.test(value);
    unit = this.test(unit);

    if (!isNaN(this.value) && (value || unit)) {
      this.unit = value || unit;
      this.convert(unit);
    } else {
      // TODO: draft.defaults.units.angle
      this.unit = '';
    }
  }

  get type() {
    return 'angle';
  }

  get regex() {
    return '(deg|rad)';
  }

  get units() {
    return {
      deg: [1, 1, 'deg'],
      rad: [180, Math.PI, 'deg']
    };
  }

  test(val) {
    // TODO: strict match anchor (^ instead of word end)
    val = new RegExp(`${this.regex}$`, 'i').exec(val);
    return val ? val[0].toLowerCase() : false;
  }

  convert(newUnit) {
    newUnit = test(newUnit, this.regex);

    if (!newUnit) {
      return false;
    }

    var chain = (unit, reverse) => {
      let units = this.units[unit];

      this.value *= reverse ? units[1] : units[0];
      this.value /= reverse ? units[0] : units[1];

      return units[2];
    };

    let unit = this.unit;
    while (unit !== newUnit && unit !== 'px') {
      unit = chain(unit);
    }

    if (unit !== newUnit) {
      unit = newUnit;
      while (unit !== 'px') {
        unit = chain(unit, true);
      }
    }

    this.unit = newUnit;

    return this.toString();
  }

  valueOf() {
    return new Angle(this.toString(), 'deg').value;
  }

  toString() {
    return this.value + this.unit;
  }
};
