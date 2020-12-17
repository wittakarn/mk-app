export interface TwoLevelMenuProps {
    menuName: string;
    subMenuDetails: UrlInformation[];
}

export interface UrlInformation {
    name: string;
    url: string | null;
    openNewTab?: boolean;
}