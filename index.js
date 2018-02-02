const spriteMappings = require("./spriteSheetMappings");
const generateBBox = require("./generateBoundingBoxes");
/**
 *
 * @param Svgstring
 * @param documentImplementation
 */
function entrypoint(Svgstring,documentImplementation) {
    const SpriteMap = spriteMappings.MappingFunction(Svgstring,documentImplementation);
    const BoundingBox = generateBBox(documentImplementation);
    const fabcanvas = new fabric.StaticCanvas(null,{ width: 200, height: 200 });
    return {
        SpriteMaps:SpriteMap,
        boundingBox:BoundingBox
    }
}
module.exports = entrypoint;



