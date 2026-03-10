import { LANGUAGES } from "../../utils/constants/languages.constant.js";
import { LanguageRepository } from "./language.repository.js";

export class LanguageService {
    constructor() {
        this.languageRepository = new LanguageRepository();
    }

    async seed() {
        const allLanguages = await this.languageRepository.findAll();

        const languages = LANGUAGES;
        const missingLanguages = languages.filter((lang) => !allLanguages.some((l) => l.key === lang.key));
        for (const language of missingLanguages) {
            await this.languageRepository.create(language);
        }
    }

    async findAll() {
        return this.languageRepository.findAll();
    }
}