import { ISPFxAdaptiveCard, BaseAdaptiveCardView } from '@microsoft/sp-adaptive-card-extension-base';
import * as strings from 'QuickAccessAdaptiveCardExtensionStrings';
import { IQuickAccessAdaptiveCardExtensionProps, IQuickAccessAdaptiveCardExtensionState } from '../QuickAccessAdaptiveCardExtension';
import { IListItem } from '../sp.service';

export interface IQuickViewData {
  subTitle: string;
  title: string;
  listItems: IListItem[];
}

export class QuickView extends BaseAdaptiveCardView<
  IQuickAccessAdaptiveCardExtensionProps,
  IQuickAccessAdaptiveCardExtensionState,
  IQuickViewData
> {
  public get data(): IQuickViewData {
    const ret =  {
      subTitle: strings.SubTitle,
      title: strings.Title,
      listItems: this.state.listItems
    };
    console.log(ret)
    return ret;
  }

  public get template(): ISPFxAdaptiveCard {
    //console.log(JSON.stringify(this.state.listItems))
    return require('./template/QuickViewTemplate.json');
  }
}