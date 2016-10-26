var baseUrls = {
    services: '__UITestServicesUrl__',
    facadeWeb: '__UITestFacadeUrl__'
}

function getBaseUrl(url) {
    switch (url) {
        case 'services':
            return baseUrls.services.indexOf('__') == 0 ? 'https://testservices.dfdsseaways.com' : baseUrls.services;
        case 'facadeWeb':
            return baseUrls.facadeWeb.indexOf('__') == 0 ? 'https://testferry.dfdsseaways.com' : baseUrls.facadeWeb;
    }
}

var account = {
    email: 'miandetest@dfds.com',
    password: '1234567',
    firstName: 'Mikkel',
    lastName: 'Andersen',
    abta: 'dfdsit',
    aPassword: 'ebbesen',
    aName: 'miande'
}

var agentAccount = {
    abta = 'dfdsit',
    aPassword = 'ebbesen',
    aName = 'miande',
    myPageEmail = 'miandetest@dfds.com',
    myPagePassword = '1234567'
}

var services = {
    url: getBaseUrl('services')
}

var so = {
    de: getBaseUrl('facadeWeb') + '/?salesowner=8&locale=de',
    nl: getBaseUrl('facadeWeb') + '/?salesowner=13&locale=nl',
    en: getBaseUrl('facadeWeb') + '/?salesowner=14&locale=en',
    sv: getBaseUrl('facadeWeb') + '/?salesowner=1&locale=sv',
    lt: getBaseUrl('facadeWeb') + '/?salesowner=15&locale=lt',
    deA: getBaseUrl('facadeWeb') + '/agent?salesowner=8&locale=de',
    nlA: getBaseUrl('facadeWeb') + '/agent?salesowner=13&locale=nl',
    enA: getBaseUrl('facadeWeb') + '/agent?salesowner=14&locale=en',
    ltA: getBaseUrl('facadeWeb') + '/agent?salesowner=15&locale=lt',
    enT: getBaseUrl('facadeWeb') + '/?salesowner=14&locale=en',
    enTA: getBaseUrl('facadeWeb') + '/agent?salesowner=14&locale=en',
    localhostEn: 'http://localhost:4711?salesowner=14&locale=en',
}

var myPage = {
    uk: getBaseUrl('facadeWeb') + '/login',
    nl: 'http://test.dfdsseaways.nl/h-mijn-profiel/Pages/aanmelden.aspx'
}

var timeout = {
    ten: 10000,
    thirty: 30000,
}

module.exports = {
    services: services,
    baseUrls: baseUrls,
    account: account,
    so: so,
    login: login,
    everyPage: everyPage,
    timeout: timeout,
    myPage: myPage,
    agentAccount: agentAccount,
};