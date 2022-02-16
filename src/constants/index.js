export const COUNTER_CHANGE = 'COUNTER_CHANGE'
export const COLORS = {
    primary: "#0727CE",
    secondary: "#052D8D",
    white: '#FFFFFF',
    black: '#000000'
}

export const FONTS = {
    regular: 'Sk-Modernist-Regular',
    medium: 'Sk-Modernist-Mono',
    bold: 'Sk-Modernist-Bold',
    extraBold: 'Sk-Modernist-Bold',
    semi: 'Sk-Modernist-Bold',
    thin: 'Sk-Modernist-Mono',
    light: 'Sk-Modernist-Mono'
}

export const CONFIG = {
    baseUrl: "http://142.93.217.129:3009/",
    apiUrl: "http://142.93.217.129:3009/api/v1/",
    // baseUrl: "http://192.168.1.6:3009/",
    // apiUrl: "http://192.168.1.6:3009/api/v1/",172.20.10.4
    // baseUrl: "http://172.20.10.4:3009/",
    // apiUrl: "http://172.20.10.4:3009/api/v1/",
}

export const getAssetPath = (name) => {
    return { uri: CONFIG.baseUrl + name }
}