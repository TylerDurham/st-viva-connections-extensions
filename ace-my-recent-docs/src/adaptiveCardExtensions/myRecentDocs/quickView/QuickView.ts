import { ISPFxAdaptiveCard, BaseAdaptiveCardView } from '@microsoft/sp-adaptive-card-extension-base';
import * as strings from 'MyRecentDocsAdaptiveCardExtensionStrings';
import { IMyRecentDocsAdaptiveCardExtensionProps, IMyRecentDocsAdaptiveCardExtensionState } from '../MyRecentDocsAdaptiveCardExtension';

export interface IQuickViewData {
  subTitle: string;
  title: string;
}

export class QuickView extends BaseAdaptiveCardView<
  IMyRecentDocsAdaptiveCardExtensionProps,
  IMyRecentDocsAdaptiveCardExtensionState,
  IQuickViewData
> {
  public get data(): IQuickViewData {
    return {
      subTitle: strings.SubTitle,
      title: strings.Title
    };
  }

  public get template(): ISPFxAdaptiveCard {
    return require('./template/QuickViewTemplate.json');
  }
}