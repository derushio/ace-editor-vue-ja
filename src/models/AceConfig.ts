export interface AceConfig {
    basePath: string;
    theme: string;
    mode: string;

    fontSize: string;
    lineHeight: string;
}

export function defaultConfig(): AceConfig {
    return {
        basePath: './ace',
        theme: '',
        mode: '',

        fontSize: '14px',
        lineHeight: '1.5em',
    } as AceConfig;
}
