"use client";
import { Button } from "@/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import { DE, ES, FR, IT, US } from "country-flag-icons/react/3x2";
import { useState } from "react";

export function LanguageToggle() {
  const [language, setLanguage] = useState<string>("en");
  const handleClick = (input: string) => {
    setLanguage(input);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          {/*<Icons.Languages className="scale-90 transition-all hover:text-slate-900  dark:text-slate-400 dark:hover:text-slate-100" />*/}
          {language === "en" && <US title="United States" className="w-5" />}
          {language === "de" && <DE title="Germany" className="w-5" />}
          {language === "fr" && <FR title="France" className="w-5" />}
          {language === "es" && <ES title="Spain" className="w-5" />}
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" forceMount>
        <DropdownMenuItem onClick={() => handleClick("en")}>
          <US title="United States" className="w-5 mr-2" />
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("de")}>
          <DE title="Germany" className="w-5 mr-2" />
          German
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("fr")}>
          <FR title="France" className="w-5 mr-2" />
          French
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("it")}>
          <IT title="Italy" className="w-5 mr-2" />
          Italian
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("es")}>
          <ES title="Spain" className="w-5 mr-2" />
          Spanish
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
