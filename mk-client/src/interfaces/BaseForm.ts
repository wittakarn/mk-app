export enum Mode {
    Create,
    Update,
    Delete,
}

export interface BaseForm {
    mode: Mode,
}
