const spriteMappings = require("./spriteSheetMappings");
const generateBBox = require("./generateBoundingBoxes");
/**
 *
 * @param spritesheetName {String}
 * @param documentImplementation
 */
function entrypoint(spritesheetName,documentImplementation) {
    const SpriteMap = spriteMappings.MappingFunction(spritesheetName,documentImplementation);
    generateBBox(documentImplementation);
    return {
        SpriteMaps:SpriteMap,
    }
}
module.exports = entrypoint;



