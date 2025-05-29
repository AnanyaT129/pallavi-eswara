export enum ProfileItemTypes {
    title,
    heading,
    listWithHeading,
    image,
    link
}

export type ProfileItemsType = {
    itemType: ProfileItemTypes,
    content: string | {heading: string, content: string}
}