
export const getLanguage = (key, lang, languages) => {
    const language = languages?.filter((l) => l.key === key)[0];
    return language ? language[lang] : "";
}