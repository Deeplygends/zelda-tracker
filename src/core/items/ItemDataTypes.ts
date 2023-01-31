import { BaseItemProps } from "./BaseItem"


export type ItemDto = {
    title: string,
    defaultIcon: string,
    upgradeIcon?: Array<string>,
    upgradeTitle?: Array<string>,
    component: (props: BaseItemProps) => JSX.Element
}