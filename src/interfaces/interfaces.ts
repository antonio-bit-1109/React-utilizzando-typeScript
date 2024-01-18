/* modo meno verboso di scrivere l'interfaccia   */

export interface ObjectFetch {
    events: any[];
    featured: boolean | null;
    id: number | null;
    image_url: string;
    launches: {
        id: string;
        provider: string;
    }[];
    news_site: string | null;
    published_at: string | null;
    summary: string | null;
    title: string | null;
    updated_at: string | null;
    url: string | null;
}

/* modo più verboso di scrivere l interfaccia  */

/* 
export interface launcher {
    id: string;
    provider: string;

}

export interface ObjectFetch {
    events: any[];
    featured: boolean | null;
    id: number | null;
    image_url: string;
    launches: launcher[];
    news_site: string | null;
    published_at: string | null;
    summary: string | null;
    title: string | null;
    updated_at: string | null;
    url: string | null;
}
 */
