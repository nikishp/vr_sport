var smartgrid = require('smart-grid');

/* It's principal settings in smart grid project */
var settings = {
  //  filename: "smart-grid",
  outputStyle: "sass",
  columns: 12,
  offset: "20px", // отступ межу столбцами
  mobileFirst: false,
  container: {
    maxWidth: "1660px",
    fields: "20px"
  },
  breakPoints: {
    m1400: {
      width: "1400px"
    },
    lg: {
      width: "1200px"
    },
    m1040: {
      width: "1040px"
    },
    md: {
      width: "992px",
      fields: "15px"
    },
    sm: {
      width: "768px"
    },
    smx: {
      width: "640px"
    },
    xs: {
      width: "576px"
    },
    m500: {
      width: "500px"
    },
    m480: {
      width: "480px"
    },
    xxs: {
      width: "380px"
    }
  },
  mixinNames: {
    container: "container",
    row: "row",
    rowFloat: "row-float",
    rowInlineBlock: "row-ib",
    rowOffsets: "row-offsets",
    column: "col",
    size: "cols",
    columnFloat: "col-float",
    columnInlineBlock: "col-ib",
    columnPadding: "col-padding",
    columnOffsets: "col-offsets",
    shift: "shift",
    from: "from",
    to: "to",
    fromTo: "from-to",
    reset: "reset",
    clearfix: "clearfix",
    debug: "debug"
  },
  tab: "  ",
  defaultMediaDevice: "only screen",
  //    detailedCalc: false

};

smartgrid('dev/sass', settings);
