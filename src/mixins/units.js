draft.mixins.units = {
  // Get/set the element's measurement units
  units(units) {
    return this.prop('units', units);
  }
};

draft.defaults.units = 'px';
