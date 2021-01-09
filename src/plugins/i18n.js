import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export const i18n = new VueI18n({
    locale: 'us',
    fallbackLocale: 'ru',
    messages: {
        us: {
            table: {
                columnName: 'Name',
                columnSymbol: 'Symbol',
                loading: 'Loading',
                emptyMessage: 'Currency not found',
                site: 'Website'

            },
            search: {
                search: 'Search',
                clear: 'Clear',
                placeholder: 'Example'

            },
            select: {
                showBy: 'Show by',
            }
        },
        ru: {
            table: {
                columnName: 'Имя',
                columnSymbol: 'Символ',
                loading: 'Загрузка',
                emptyMessage: 'Валюта не найдена',
                site: 'Веб-сайт'

            },
            search: {
                search: 'Найти',
                clear: 'Сбросить',
                placeholder: 'Например'

            },
            select: {
                showBy: 'Показывать по',
            }
        },
        fr: {
            table: {
                columnName: 'Nom',
                columnSymbol: 'Symbole',
                loading: 'Le chargement',
                emptyMessage: 'Devise introuvable',
                site: 'Le site Web'

            },
            search: {
                search: 'Trouver',
                clear: 'Clair',
                placeholder: 'Par exemple'

            },
            select: {
                showBy: 'Présenter par',
            }
        }
    }
})