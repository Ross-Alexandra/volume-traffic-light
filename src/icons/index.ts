export * from './mic';

export interface Colors {
    [key: string] : string;
}

export interface IconProps<C extends Colors> extends React.HTMLProps<SVGSVGElement> {
    colors?: C; 
}
