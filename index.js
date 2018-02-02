const fs = require("fs");
const cheerio = require("cheerio");
const path = require("path");
const isValid = require("is-valid-path");

function produceMapping(StringContainingSVGContents) {

}

function LoadSVGFile(SvgPathString) {
    return fs.readFileSync(SvgPathString, {encoding: "utf8"});
}

function main(PathOrSvgString) {
    let svgDoc = "";

    if (CheckIfValidPath(PathOrSvgString)) {
        svgDoc = CreateCheerioInstance(LoadSVGFile(PathOrSvgString));
    } else {
        svgDoc = CreateCheerioInstance(PathOrSvgString);
    }
    console.log(svgDoc);
}

function CreateCheerioInstance(SVGString) {
    return cheerio.load(SVGString,{xmlMode:true});
}

main("./bosh-sprite.svg");

function CheckIfValidPath(StringToCheck) {
    return isValid(StringToCheck);
}

