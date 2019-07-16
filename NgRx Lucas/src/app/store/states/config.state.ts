import { IConfig } from 'src/app/models';


export interface IConfigState {
    config: IConfig;
}

export const initialConfigState: IConfigState = {
    config: null
};
