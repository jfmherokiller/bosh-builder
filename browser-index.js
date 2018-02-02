const MainIndex = require("./index");

function BrowserEntry(spritesheetName, SVGString) {
    let Svgparser = new DOMParser();
    let doc = Svgparser.parseFromString(SVGString, "image/svg+xml").documentElement.cloneNode(true);
    let AppendedSvg = document.body.appendChild(doc);
    let Results = MainIndex(spritesheetName, AppendedSvg);
    let SvgResult = AppendedSvg.cloneNode(true);
    AppendedSvg.remove();
    return {
        MappingResults: Results,
        FinishedSvg:SvgResult
    }
}

module.exports = BrowserEntry;
