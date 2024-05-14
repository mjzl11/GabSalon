const { es, en, ro, cat } = require("../../public/translations")

function languageRouter(language) {
    switch (language) {
        case 'es':
            return es;
        case 'en':
            return en;
        case 'cat':
            return cat;
        case 'ro':
            return ro;
        default:
            return es;
    }
}

module.exports = languageRouter