import { ISPFxAdaptiveCard, BaseAdaptiveCardView } from '@microsoft/sp-adaptive-card-extension-base';
import * as strings from 'QuickAccessAdaptiveCardExtensionStrings';
import { IQuickAccessAdaptiveCardExtensionProps, IQuickAccessAdaptiveCardExtensionState } from '../QuickAccessAdaptiveCardExtension';
import { IListItem } from '../sp.service';

export interface IQuickViewData {
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
      title: (this.state.listItems.length > 0) ? strings.QuickView.Title : strings.QuickView.ErrNoConfiguredList,
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