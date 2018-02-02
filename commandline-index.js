const program = require('commander');
const fs = require("fs");
const program_version = JSON.parse(fs.readFileSync("package.json",{encoding:"utf8"})).version;
const isValid = require("is-valid-path");
const NodejsEntry = require("./nodejs-index");
program
    .version(program_version)
    .description(`
    This program will generate a production svg and json files which are compatible with linerider.
    `)
    .option('-i, --inputsvg <required>', 'Input Svg to generate mappings for')
    .option('-m, --mappingjson <required>', 'File to output mappings to')
    .option('-c, --cameraMapping <required>', 'File to output the camera mappings to')
    .option('-o, --outputsvg <required>','production ready svg output file')
    .parse(process.argv);

if (!program.inputsvg) {
    throw new Error('--inputsvg required');
}
if (!program.mappingjson) {
    throw new Error("--mappingjson required");
}
if(!program.cameraMapping) {
    throw new Error("--cameraMapping required")
}
if(!program.outputsvg) {
    throw new Error("--outputsvg required")
}

function LoadSVGFile(SvgPathString) {
    return fs.readFileSync(SvgPathString, {encoding: "utf8"});
}

function CheckIfValidPath(StringToCheck) {
    return isValid(StringToCheck);
}
if(CheckIfValidPath(program.inputsvg)) {
    const SVGString = LoadSVGFile(program.inputsvg);
    const MapsAndSvg = NodejsEntry(SVGString,null);
}
