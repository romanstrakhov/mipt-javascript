'use strict';

/**
 * Находит подходящее время для ограбления
 *
 * @param {Object} schedule Расписание банды
 * @param {Number} duration Время на ограбление в минутах
 * @param {Object} workingHours Время работы банка
 * @param {String} workingHours.from Время открытия, например, «10:00»
 * @param {String} workingHours.to Время закрытия, например, «18:00»
 * @returns {Object}
 */
exports.getAppropriateMoment = function (schedule, duration, workingHours) {
    return {

        /**
         * Отвечает на вопрос «Найдено ли время?»
         *
         * @returns {Boolean}
         */
        exists: function () {

        },

        /**
         * Возвращает отформатированную по шаблону строку с временем ограбления
         *
         * @param {String} template Например, «Начинаем в %HH:%MM»
         * @returns {String} Например, «Начинаем в 14:59»
         */
        format: function (template) {

        }
    };
};
