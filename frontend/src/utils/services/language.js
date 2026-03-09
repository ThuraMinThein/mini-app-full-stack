
export const getLanguage = (key, lang, languages) => {
    return languages?.filter((l) => l.key === key)[0][lang];
}