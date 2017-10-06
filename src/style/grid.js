import {undefinedEvaluator, higherThanZeroEvaulator} from './evaluator'

const fontSize = 18;
const lineHeight = 28;
const gutter = lineHeight;
const columnWidth = 3 * gutter;
const mobileCols = 3;
const desktopCols = 8;

const maxCols = desktopCols;

// Keys for export objects
const nrOfCols_Key = "nrOfCols";
const contentWidth = "contentWidth";

const mobileSchema = {
  [nrOfCols_Key] : mobileCols,
  [contentWidth] : mobileCols * columnWidth + (mobileCols - 1) * gutter
}

const desktopSchema = {
  [nrOfCols_Key] : desktopCols,
  [contentWidth] : desktopCols * columnWidth + (desktopCols - 1) * gutter
}

const schemaForExport = {
  mobile: mobileSchema,
  desktop: desktopSchema,
};

// Check all values for undefined
undefinedEvaluator(schemaForExport);
higherThanZeroEvaulator(fontSize, lineHeight, gutter, columnWidth, mobileCols, desktopCols);

const column = (number) => {
    undefinedEvaluator(number);
    if(!(typeof number === 'number')){
      throw "argument is not a number"
    }

    let rounded = Math.round(number);
    if(rounded <= 0 || rounded > maxCols){
      throw `Expected a number in range <0, ${maxCols}] but got rounded`;
    }

    return rounded * columnWidth + (rounded - 1) * gutter;
}

export default {
  contentWidthMobile: mobileCols * columnWidth + (mobileCols - 1) * gutter,
  contentWidthDesktop: desktopCols * columnWidth + (desktopCols - 1) * gutter,
  gutter: gutter,
  rowHeight: lineHeight,
  columnWidth: columnWidth,
  col: column,

  /*
    Refactor into this:
    maxWidth:{
      desktop: column(desktopCols),
      mobile: column(mobileCols)
    }
  */
  maxWidth: column(maxCols),

  colNr: {
    mobile: mobileCols,
    desktop: desktopCols
  }
}
