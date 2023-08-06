interface DictionaryEntry {
  homepageHeading: string
  homepageParagraph: string
  homepageLink: string
  pageNotFoundHeading: string
  pageNotFoundParagraph: string
  pageNotFoundLink: string
  documatationHeading: string
  documatationParagraph: string
  worlddataHeading: string
  worlddataParagraph: string
  requestApiHeading: string
  requestApiParagraph: string
  requestApiLabel: string
  requestApiButton: string
  apiDashboardHeading: string
  apiDashboardParagraph: string
  apiDashboardParagraph2: string

}

export const dictionary: Record<string, DictionaryEntry> = {
  en: {
    homepageHeading: "Data of the world.",
    homepageParagraph: "Get the latest data of the world in JSON format. Data about countries, states, cities, and more. All the data is free and open source.You can get the API key from ",
    homepageLink: "API Key",
    pageNotFoundHeading: "Site not found...",
    pageNotFoundParagraph: "The site you&apos;re searching for does not exist.",
    pageNotFoundLink: "Back to home",
    documatationHeading: "Making a Request",
    documatationParagraph: "The documentation for the API is available at",
    worlddataHeading: "The data we use",
    worlddataParagraph: "The world data is available at",
    requestApiHeading: "Request your API key",
    requestApiParagraph: "You haven&apos;t requested an API key yet.",
    requestApiLabel: "Your API key",
    requestApiButton: "Request API Key",
    apiDashboardHeading: "Welcome back, ",
    apiDashboardParagraph: "Your API key is available at",
    apiDashboardParagraph2: "Your API history:",
  },
  de: {
    homepageHeading: "Daten der Welt.",
    homepageParagraph: "Erhalten Sie die neuesten Daten der Welt im JSON-Format. Daten über Länder, Bundesstaaten, Städte und mehr. Alle Daten sind kostenlos und Open Source. Den API-Schlüssel erhalten Sie von ",
    homepageLink: "API-Schlüssel",
    pageNotFoundHeading: "Seite nicht gefunden...",
    pageNotFoundParagraph: "Die von Ihnen gesuchte Website existiert nicht.",
    pageNotFoundLink: "Zurück zur Startseite.",
    documatationHeading: "Eine Anfrage machen",
    documatationParagraph: "So verwenden Sie die API",
    worlddataHeading: "Die von uns verwendeten Daten",
    worlddataParagraph: "Von Ländern, Städten, Bergen, Seen bis hin zu Währungen",
    requestApiHeading: "Fordern Sie Ihren API-Schlüssel an",
    requestApiParagraph: "Sie haben noch keinen API-Schlüssel angefordert.",
    requestApiLabel: "Ihr API-Schlüssel",
    requestApiButton: "API-Schlüssel anfordern",
    apiDashboardHeading: "Willkommen zurück, ",
    apiDashboardParagraph: "Ihren API-Schlüssel finden Sie unter",
    apiDashboardParagraph2: "Ihr API-Verlauf:",
  }
}