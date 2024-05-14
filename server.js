// app.js
const express = require('express');
const app = express();
const path = require('path');
const languageRouter = require('./logic/server/languageRouter')
require('dotenv').config()
const env = process.env

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public'), {
    maxAge: 365 * 24 * 60 * 60 * 1000 
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/logic', express.static(path.join(__dirname, 'logic')));

app.get('/', (req, res) => {
    const selectedLanguage = req.query.language;
    const language = languageRouter(selectedLanguage)
    res.render('index', { language: language });
});

app.get('/privacyPolicy', (req, res) => {
    const selectedLanguage = req.query.language;
    const language = languageRouter(selectedLanguage)
    res.render('privacyPolicy', { language: language });
})

app.get('/about', (req, res) => {
    const selectedLanguage = req.query.language;
    const language = languageRouter(selectedLanguage)
    res.render('about', { language: language });
})

app.use((req, res, next) => {
    const selectedLanguage = req.query.language;
    const language = languageRouter(selectedLanguage)
    res.status(404).render('404', { language: language });
});

app.use((err, req, res, next) => {
    const selectedLanguage = req.query.language;
    const language = languageRouter(selectedLanguage)
    res.status(500).render('500',{ language: language });
});

app.listen(env.PORT, () => {
    console.log(`Server is running on port ${env.PORT}`);
});
