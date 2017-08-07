export const production = process.env.NODE_ENV === 'production';


const JSON_ESCAPE = {
  '&': '\\u0026',
  '>': '\\u003e',
  '<': '\\u003c',
  '\u2028': '\\u2028',
  '\u2029': '\\u2029'
};

const JSON_ESCAPE_REGEXP = /[\u2028\u2029&><]/g;

export const escapeJSONString = (string) => {
  return string.replace(JSON_ESCAPE_REGEXP, match => JSON_ESCAPE[match]);
}