import React from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next';
import { Languages, languages } from '../components/locales/i18n'
import red from '@material-ui/core/colors/red';
import { Button, Container, Typography } from '@material-ui/core';

const Header = () => {
    const { t, i18n } = useTranslation();

    const handleChangeLanguage = (lang: Languages) => {
        i18n.changeLanguage(lang);
    }

    return (
        <div style={{ backgroundColor: red[100], width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <Link href="/"><a style={{ color: 'white', fontWeight: 'bold' }}>Home</a></Link>
            <Link href="/about"><a style={{ color: 'white', fontWeight: 'bold' }}>About</a></Link>
            <div>
                {languages.map(lang=> (
                    <Button variant="outlined" color="secondary" key={lang} onClick={() => handleChangeLanguage(lang)}>
                        {t(`language_${lang}`)}
                    </Button>
                ))}
            </div>

        </div>
    )
}

export default Header
