import {translate, init} from 'focus-core/translation';
import traductionFiles from '../i18n';

export default () => {

    // Initialize translations configuration.
    const i18nConfig = {
        resStore: traductionFiles,
        lng: 'fr-FR'///langOpts.i18nCulture
    };

    // Plugin initialization.
    init(i18nConfig, () => {
        return console.log('Translation correctly initialized.');
    });

}
