"use client";
import { Button } from "@/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";

import { DE, ES, FR, IT, US } from "country-flag-icons/react/3x2";
import { useEffect, useState } from "react";
import { dictionary } from "@/helpers/dictionary";
import Icons from "./Icons";

export function LanguageToggle() {
  const [language, setLanguage] = useState<string>("en");

  const handelClick = (language: string) => {
    setLanguage(language);
  };

  useEffect(() => {}, [language]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          <Icons.Languages className="scale-90 transition-all hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" forceMount>
        <DropdownMenuItem onClick={() => handelClick("en")}>
          <US title="United States" className="w-5 mr-2" />
          {language === "en" && dictionary.en.navbarOptions[2]}
          {language === "de" && dictionary.de.navbarOptions[2]}
          {language === "fr" && dictionary.fr.navbarOptions[2]}
          {language === "it" && dictionary.it.navbarOptions[2]}
          {language === "es" && dictionary.es.navbarOptions[2]}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handelClick("de")}>
          <DE title="Germany" className="w-5 mr-2" />
          {language === "en" && dictionary.en.navbarOptions[3]}
          {language === "de" && dictionary.de.navbarOptions[3]}
          {language === "fr" && dictionary.fr.navbarOptions[3]}
          {language === "it" && dictionary.it.navbarOptions[3]}
          {language === "es" && dictionary.es.navbarOptions[3]}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handelClick("fr")}>
          <FR title="France" className="w-5 mr-2" />
          {language === "en" && dictionary.en.navbarOptions[4]}
          {language === "de" && dictionary.de.navbarOptions[4]}
          {language === "fr" && dictionary.fr.navbarOptions[4]}
          {language === "it" && dictionary.it.navbarOptions[4]}
          {language === "es" && dictionary.es.navbarOptions[4]}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handelClick("it")}>
          <IT title="Italy" className="w-5 mr-2" />
          {language === "en" && dictionary.en.navbarOptions[5]}
          {language === "de" && dictionary.de.navbarOptions[5]}
          {language === "fr" && dictionary.fr.navbarOptions[5]}
          {language === "it" && dictionary.it.navbarOptions[5]}
          {language === "es" && dictionary.es.navbarOptions[5]}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handelClick("es")}>
          <ES title="Spain" className="w-5 mr-2" />
          {language === "en" && dictionary.en.navbarOptions[6]}
          {language === "de" && dictionary.de.navbarOptions[6]}
          {language === "fr" && dictionary.fr.navbarOptions[6]}
          {language === "it" && dictionary.it.navbarOptions[6]}
          {language === "es" && dictionary.es.navbarOptions[6]}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
