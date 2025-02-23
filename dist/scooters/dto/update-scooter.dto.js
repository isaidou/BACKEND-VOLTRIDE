"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateScooterDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_scooter_dto_1 = require("./create-scooter.dto");
class UpdateScooterDto extends (0, swagger_1.PartialType)(create_scooter_dto_1.CreateScooterDto) {
}
exports.UpdateScooterDto = UpdateScooterDto;
//# sourceMappingURL=update-scooter.dto.js.map