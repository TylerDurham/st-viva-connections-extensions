declare interface IQuickAccessAdaptiveCardExtensionStrings {
  PropertyPaneDescription: string;
  
  Title: string;
  SubTitle: string;
  PrimaryText: string;
  Description: string;
  QuickViewButton: string;
  PropertyPane: IQuickAccessAdaptiveCardExtensionPropertyPaneStrings;
}

declare interface IQuickAccessAdaptiveCardExtensionPropertyPaneStrings {
  TitleFieldLabel: string;
  TitleFieldDescription: string;
  ListNameFieldLabel: string;
  ListNameFieldDescription: string;
  DescriptionLabel: string;
}

declare module 'QuickAccessAdaptiveCardExtensionStrings' {
  const strings: IQuickAccessAdaptiveCardExtensionStrings;
  export = strings;
}
