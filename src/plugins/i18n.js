import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export const i18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'ru',
    messages: {
        en: {
            table: {
                columnName: 'Name',
                columnSymbol: 'Symbol',
                loading: 'Loading'

            },
            search: {
                search: 'Search',
                clear: 'Clear',
                placeholder: 'Example'

            },
            select: {
                showBy: 'Show by',
                select: 'Select'
            }
        },
        ru: {
            table: {
                columnName: 'Имя',
                columnSymbol: 'Символ',
                loading: 'Загрузка'

            },
            search: {
                search: 'Найти',
                clear: 'Сбросить',
                placeholder: 'Например'

            },
            select: {
                showBy: 'Показывать по',
                select: 'Выбрать'
            }
        },
        fr: {
            table: {
                columnName: 'Nom',
                columnSymbol: 'Symbole',
                loading: 'Le chargement'

            },
            search: {
                search: 'Trouver',
                clear: 'Clair',
                placeholder: 'Par exemple'

            },
            select: {
                showBy: 'Présenter par',
                select: 'Sélectionner'
            }
        }
    }
})