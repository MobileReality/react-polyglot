import { ReactNode, Component } from 'react';

export interface ITranslate {
    t(word: string): string;
}

interface I18nProps {
    locale: string;
    messages: object;
    children?: ReactNode;
}

export class I18n extends Component<I18nProps, {}> {}

export function translate(): any;