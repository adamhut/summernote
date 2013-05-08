/****************************************
 * nativeRange (function)
 * from W3C Two BoundaryPoints to nativeRange
 * Support IE8+, Morden Webkit, Firefox
 ****************************************/
var nativeRange = function(sc, so, ec, eo) {
  /**
   * bp2textRange
   * Single W3C boundaryPoint(cont, offset) to nativeRange
   */
  var bp2textRange = function(cont, offset) {
    var textRangeProp = function(cont, offset) {
      var node, collapseToStart;
      if (dom.isText(cont)) {
        var prevTexts = dom.listPrev(cont, dom.isNotText);
        var prevCont = list.last(prevTexts).previousSibling;
        node = prevCont || cont.parentNode;
        offset += list.sum(list.tail(prevTexts, dom.length));
        collapseToStart = !prevCont;
      } else {
        node = cont.childNodes[offset] || cont;
        if (dom.isText(node)) {
          return textRangeProp(node, offset);
        }
        offset = 0, collapseToStart = false;
      }
      return {node: node, collapseToStart: collapseToStart, offset: offset};
    }

    var textRange = document.body.createTextRange();
    var prop = textRangeProp(cont, offset);

    textRange.moveToElementText(prop.node);
    textRange.collapse(prop.collapseToStart);
    textRange.moveStart('character', prop.offset);
    return textRange;
  };

  // create native range
  var range;
  if (document.createRange) {
    range = document.createRange();
    range.setStart(sc, so);
    range.setEnd(ec, eo);
  } else {
    range = bp2textRange(sc, so);
    range.setEndPoint('EndToEnd', bp2textRange(ec, eo));
  }
  return range;
};

/****************************************
 * nativeRangeFromPos (function)
 * from W3C Two BoundaryPoints to nativeRangeFromPos
 * Support IE8+, Morden Webkit, Firefox
 ****************************************/
var nativeRangeFromPos = function (x, y) {
  var range = document.caretRangeFromPoint(x, y);
  return range;
};