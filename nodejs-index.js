const MainEntryPoint = require("./index");

/**
 *
 * @param SVGString {String}
 * @returns {DOMWindow.document}
 * @constructor
 */
function CreateJSdom(SVGString) {
    const JSDOM = require("jsdom").JSDOM;
    const {document} = (new JSDOM(SVGString, {contentType: "image/svg+xml"})).window;
    return document;
}

function NodejsEntrypoint(SvgString, documentImplementation) {
    if (documentImplementation !== null) {
        return MainEntryPoint(SvgString, documentImplementation);
    } else {
        return MainEntryPoint(SvgString, CreateJSdom(SvgString));
    }
}

module.exports = NodejsEntrypoint;