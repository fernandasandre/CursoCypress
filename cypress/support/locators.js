const locators = {
    LOGIN:{
        USER:'[data-test=email]', 
        PASSWORD: '[data-test=passwd]',
        BTN_LOGIN:'.btn' 
    },
    
    MENU:{
        SETTINGS:'[data-test=menu-settings]',
        RESET: '[href="/reset"]',
        CONTAS: '[href="/contas"]'
    },

    CONTAS:{
       NOME:'[data-test=nome]',
       BTN_SALVAR: '.btn',
       EDITAR: ':nth-child(1) > :nth-child(2) > .fa-edit'
    },
    MESSAGE:'.toast-message'
}

export default locators;