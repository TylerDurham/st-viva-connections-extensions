import { AdaptiveCardExtensionContext } from "@microsoft/sp-adaptive-card-extension-base";
import { SPHttpClient } from '@microsoft/sp-http';

export interface IListItem {
    id: string;
    title: string;
    subTitle: string;
    sortOrder: number;
    thumbnailUrl: IThumbnailUrl;
}

export interface IThumbnailUrl {
    fileName: string;
    url: string;
}

export interface IList {
    id: string;
    name: string;
    description: string;
}

export const fetchListTitle = async (spContext: AdaptiveCardExtensionContext, listId: string) => {
    if (!listId) { return Promise.reject("Please specify a listId!"); }

    const response = await (await spContext.spHttpClient.get(
        `${spContext.pageContext.web.absoluteUrl}/_api/web/lists/GetById(id='${listId}')`,
        SPHttpClient.configurations.v1
    )).json();

    return Promise.resolve(response.title);
}

export const fetchLists = async (context: AdaptiveCardExtensionContext): Promise<IList[]> => {

    const response = await (await context.spHttpClient.get(
        `${context.pageContext.web.absoluteUrl}/_api/web/lists`, //?$select=Id, Title, WebUrl`,
        SPHttpClient.configurations.v1
    )).json();

    return Promise.resolve(response.value.map((list: any, index: number) => {
        return <IList> {
            id: list.Id,
            name: list.Title,
            description: list.Description
        }
    }));
}

export const fetchListItems = async(context: AdaptiveCardExtensionContext, listId: string): Promise<any> => {
    const response = await (await context.spHttpClient.get(
        `${context.pageContext.web.absoluteUrl}/_api/web/lists/GetByID('${listId}')/items`, //?$select=Id, Title, WebUrl`,
        SPHttpClient.configurations.v1
    )).json();

    return Promise.resolve(response.value.map((listItem: any) => {
        const { fileName, serverRelativeUrl, serverUrl } = JSON.parse(listItem.ThumbnailURL);
        return <IListItem> {
            id: listItem.Id,
            title: listItem.Title,
            subTitle: listItem.Subtitle,
            sortOrder: listItem.SortOrder,
            thumbnailUrl: { fileName, url: `${serverUrl}${serverRelativeUrl}` }
        }
    }));
}

