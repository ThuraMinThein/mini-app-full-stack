import { LanguageService } from "./language.service.js";

const languageService = new LanguageService();

export class LanguageController {

    async seed(req, res) {
        try {
            await languageService.seed();
            res.status(200).json({ message: 'Language seeded successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message || 'Failed to seed languages' });
        }
    }

    async findAll(req, res) {
        try {
            const lang = req.query.lang || 'en';
            const languages = await languageService.findAll(lang);
            res.status(200).json(languages);
        } catch (error) {
            res.status(500).json({ message: error.message || 'Failed to retrieve languages' });
        }
    }

}