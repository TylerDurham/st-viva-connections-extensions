import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseAdaptiveCardExtension } from '@microsoft/sp-adaptive-card-extension-base';
import { CardView } from './cardView/CardView';
import { QuickView } from './quickView/QuickView';
import { MyRecentDocsPropertyPane } from './MyRecentDocsPropertyPane';

export interface IMyRecentDocsAdaptiveCardExtensionProps {
  title: string;
}

export interface IMyRecentDocsAdaptiveCardExtensionState {
}

const CARD_VIEW_REGISTRY_ID: string = 'MyRecentDocs_CARD_VIEW';
export const QUICK_VIEW_REGISTRY_ID: string = 'MyRecentDocs_QUICK_VIEW';

export default class MyRecentDocsAdaptiveCardExtension extends BaseAdaptiveCardExtension<
  IMyRecentDocsAdaptiveCardExtensionProps,
  IMyRecentDocsAdaptiveCardExtensionState
> {
  private _deferredPropertyPane: MyRecentDocsPropertyPane | undefined;

  public onInit(): Promise<void> {
    this.state = { };

    this.cardNavigator.register(CARD_VIEW_REGISTRY_ID, () => new CardView());
    this.quickViewNavigator.register(QUICK_VIEW_REGISTRY_ID, () => new QuickView());

    return Promise.resolve();
  }

  protected loadPropertyPaneResources(): Promise<void> {
    return import(
      /* webpackChunkName: 'MyRecentDocs-property-pane'*/
      './MyRecentDocsPropertyPane'
    )
      .then(
        (component) => {
          this._deferredPropertyPane = new component.MyRecentDocsPropertyPane();
        }
      );
  }

  protected renderCard(): string | undefined {
    return CARD_VIEW_REGISTRY_ID;
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return this._deferredPropertyPane?.getPropertyPaneConfiguration();
  }
}
