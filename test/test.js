const chromedriver = require('chromedriver')
const path = require('path')
const fs = require('fs')

chromedriver.start()

module.exports = {
    // 'connection using invalid email + valid password': (client) => {
    //     const invalidEmail = 'invalidEmail@gmail.com'
    //     const password = 'password'
    //     client
    //     .url('http://localhost:4242/fr')
    //     .click('button.login')
    //     .setValue('input[type=email]', invalidEmail)
    //     .setValue('input[type=password]', password)
    //     .click('button.btn-valid')
    // },
    // 'expect to fail using invalid email': (client) => {
    //     client.expect.element('#error-login').to.be.present.before(1000)
    // },

    // 'connection using valid email + valid password': (client) => {
    //     const validEmail = 'steven@lalalab.com'
    //     // const password = '33aaa2a2'
    //     const password = 'Tysonitachi007'
    //     client
    //     .pause(3000)
    //     .url('https://www.preprod.lalalab.com/')
    //     // .url('https://www.lalalab.com/fr')
    //     .click('#button-login')
    //     .setValue('#field-email', validEmail)
    //     .setValue('#field-password', password)
    //     .click('button.btn-valid')
    // },
    // 'expect to be connected': (client) => {
    //     client.expect.element('#error-login').to.not.be.present.before(1000)
    // },


    // 'subscription': (client) => {
    //     const name = 'Steven'
    //     const lastname = 'Loo Fat'
    //     const email = 'email@epitech.eu'
    //     const password = 'passowrd'
    //     // client.pause(3000)
    //     client
    //     .url('http://localhost:4242/fr')
    //     // .expect.element('body').to.be.present.before(1000)  
    //     // client
    //     .click('#button-login')
    //     .click('#subscription-btn')
    //     .setValue('#subscription-firstname', name)
    //     .setValue('#subscription-lastname', lastname)
    //     .setValue('#subscription-email', email)
    //     .setValue('#subscription-password', password)
    //     .click('button.btn-valid')
    //     .end()
    // },

    'upload picture': (client) => {
        client
        // .url('https://www.lalalab.com/fr/produits/print/vintage-print/selection')
        .url('http://localhost:4242/fr/produits/print/vintage-print/selection')
        // .url('https://www.preprod.lalalab.com/en/products/print/vintage-print/selection')

        // .setValue('#file-upload', require('path').resolve('Users/steven/Documents/training/chrome-nightwatch/interresting-picture.jpeg'))
        // .setValue('#file-upload', require('path').resolve('/Users/steven/Documents/training/chrome-nightwatch/sunset.jpg'))
        .setValue('#file-upload', require('path').resolve('/Users/steven/Documents/training/chrome-nightwatch/picture/lake.jpeg'))
        // .setValue('#file-upload', require('path').resolve('Users/steven/Documents/training/chrome-nightwatch/girlnose.jpg'))
        // .setValue('#file-upload', require('path').resolve('Users/steven/Documents/training/chrome-nightwatch/interresting-picture.jpeg'))
        .click('#button-next')
    },

    'picture should be upload': async (client) => {
        client.expect.element('#picture-thumbs-up').to.be.present.before(1000);
    },
    'click next button': async (client) => {
        client
        .pause(2000)
        .click('#button-next-2')
    },
    'click accept term and condition': async (client) => {
        client.click('#accept-terms')
    },
    'validate command': async (client) => {
        client.click('#validate-command')
    },
    'connection using valid email + valid password': (client) => {
        const validEmail = 'steven@lalalab.com'
        // const password = '33aaa2a2'
        const password = 'Tysonitachi007'
        client
        .pause(3000)
        // .url('https://www.preprod.lalalab.com/')
        // .url('https://www.lalalab.com/fr')
        .click('#button-login')
        .setValue('#field-email', validEmail)
        .setValue('#field-password', password)
        .click('button.btn-valid')
        .pause(5000)
    },
    'Check if information are valid': (client) => {
        client.assert.urlEquals('http://localhost:4242/fr/adresse');
    },
    'fill using information': (client) => {
        client
        .click('#button-validate-information')
        .pause(2000)
        .click('#button-code-promo')
        .setValue('#coupon-code', 'CHAKTEST')
        .click('#button-coupon-handling')
        .pause(2000)
        .click('#button-purchase')
    }
}