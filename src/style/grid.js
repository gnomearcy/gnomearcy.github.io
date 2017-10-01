import {undefinedEvaluator, higherThanZeroEvaulator} from './evaluator'

const fontSize = 18;
const lineHeight = 28;
const gutter = lineHeight;
const columnWidth = 3 * gutter;
const mobileCols = 3;
const desktopCols = 8;

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

export default schemaForExport;
