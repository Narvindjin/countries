interface currencyInterface {
    name: string,
    symbol: string,
}

interface currencyDictionary {
    [key: string]:currencyInterface
}

interface languageDictionary {
    [key: string]:string
}

interface flagsInterface {
    alt: string,
    png: string,
    svg: string,
}

interface nativeNameInterfaceInner {
    common: string,
    official: string,
}

interface nativeNameInterfaceOuter {
    [key: string]:nativeNameInterfaceInner
}

interface nameInterface {
    common: string,
    nativeName: nativeNameInterfaceOuter,
    official: string,
}

type countryMap = Map<string, receivedCountry>

interface mapObjectInterface {
        countries: countryMap
    }

interface receivedCountry {
    borders: string[],
    capital: string[],
    cca3: string,
    currencies: currencyDictionary,
    flags: flagsInterface,
    languages: languageDictionary,
    name: nameInterface,
    population: number,
    region: string,
    subregion: string,
    tld: string[]
}

export type {receivedCountry, countryMap, mapObjectInterface, nativeNameInterfaceOuter, currencyDictionary, languageDictionary, nativeNameInterfaceInner, currencyInterface}