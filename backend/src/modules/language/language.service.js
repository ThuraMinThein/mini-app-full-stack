import { LANGUAGES } from "../../utils/constants/languages.constant.js";
import { LanguageRepository } from "./language.repository.js";

export class LanguageService {
    constructor() {
        this.languageRepository = new LanguageRepository();
    }

    async seed() {
        const count = await this.languageRepository.totalCount();
        if (count > 0) {
            return
        }
        const languages = LANGUAGES;
        for (const language of languages) {
            await this.languageRepository.create(language);
        }
    }

    async findAll() {
        return this.languageRepository.findAll();
    }
}