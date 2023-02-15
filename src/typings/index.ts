export interface IExperience {
    title : string,
    description : string[],
    company : string,
    id : string | number,
    skills : string,
    duration: string
}

export interface IPortfolio {
    title : string,
    description  :string,
    publishedAt : string,
    tags : string[],
    portfolio : string,
    canonical:string,
    coverImage : string,
    videoURL?: string,
    liveURL?: string,
    githubURL?:string,
    assetsURL ?:string
    primaryURL ?:string
    category ?:string

}

