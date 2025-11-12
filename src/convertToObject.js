'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  if (!sourceString.trim()) {
    return {};
  }

  const result = {};
  const cleaned = sourceString.replace(/\t/g, ' ');
  const rules = cleaned.split(';');

  for (let rule of rules) {
    rule = rule.trim();

    if (!rule) {
      continue;
    }

    const [property, ...valueParts] = rule.split(':');

    if (!valueParts.length) {
      continue;
    }

    const key = property.trim();
    const value = valueParts.join(':').replace(/^\s+|\s+$/g, '');

    if (key && value) {
      result[key] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
