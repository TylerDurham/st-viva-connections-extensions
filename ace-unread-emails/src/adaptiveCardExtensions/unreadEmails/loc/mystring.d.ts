

declare interface IUnreadEmailsAdaptiveCardExtensionStrings {
  PropertyPaneDescription: string;
  TitleFieldLabel: string;
  Title: string;
  SubTitle: string;
  PrimaryText: string;
  Description: string;
  QuickViewButton: string;

  ButtonTitle: string;
  ButtonTarget: string;

  Loading: IPrimaryTextCardParameters;
  NoUnread: IPrimaryTextCardParameters;
  Unread: IPrimaryTextCardParameters;
  LargeUnread: IPrimaryTextCardParameters;
  Error: IPrimaryTextCardParameters;
}

declare module 'UnreadEmailsAdaptiveCardExtensionStrings' {
  const strings: IUnreadEmailsAdaptiveCardExtensionStrings;
  export = strings;
}
