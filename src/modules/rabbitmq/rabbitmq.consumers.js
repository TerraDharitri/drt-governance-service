"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompetingRabbitConsumer = void 0;
var nestjs_rabbitmq_1 = require("@golevelup/nestjs-rabbitmq");
var common_1 = require("@nestjs/common");
/** Competing Consumer which will be handled by only one instance of the microservice.
 * Make sure the exchange exists.
 */
var CompetingRabbitConsumer = function (config) {
    return (0, common_1.applyDecorators)((0, nestjs_rabbitmq_1.RabbitSubscribe)({
        queue: config.queueName,
        exchange: config.exchange,
        routingKey: '',
        queueOptions: {
            autoDelete: false,
            durable: true,
            arguments: {
                'x-queue-type': 'classic',
                'x-queue-mode': 'lazy',
                'x-single-active-consumer': true,
            },
        },
    }));
};
exports.CompetingRabbitConsumer = CompetingRabbitConsumer;
