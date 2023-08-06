interface DictionaryEntry {
  homepageHeading: string
  homepageParagraph: string
  homepageLink: string
}

export const dictionary: Record<string, DictionaryEntry> = {
  en: {
    homepageHeading: "Data of the world.",
    homepageParagraph: "Get the latest data of the world in JSON format. Data about countries, states, cities, and more. All the data is free and open source.You can get the API key from ",
    homepageLink: "API Key",
  },
  de: {
    homepageHeading: "Daten der Welt.",
    homepageParagraph: "Erhalten Sie die neuesten Daten der Welt im JSON-Format. Daten über Länder, Bundesstaaten, Städte und mehr. Alle Daten sind kostenlos und Open Source. Den API-Schlüssel erhalten Sie von ",
    homepageLink: "API-Schlüssel",
  }
}