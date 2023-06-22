export type Urls = {
    type?: string,
    url ?: string
}

export type Image = {
    path?: string,
    extension?: string,
}

export type Lists = {
    available?: number,
    returned?: number,
    collectionURI?: string,
    items?: Summaries[]
}

export type Summaries = {
    resourceURI?: string,
    name?: string,
    type?: string,
    date?: Date,  
    price?: number,
    role?: string,
}

export type TextObject = {
    type?: string,
    language?: string,
    text?: string,
}
