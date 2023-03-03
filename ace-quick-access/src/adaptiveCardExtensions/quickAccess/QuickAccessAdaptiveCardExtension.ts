import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseAdaptiveCardExtension } from '@microsoft/sp-adaptive-card-extension-base';
import { CardView } from './cardView/CardView';
import { QuickView } from './quickView/QuickView';
import { QuickAccessPropertyPane } from './QuickAccessPropertyPane';

export interface IQuickAccessAdaptiveCardExtensionProps {
  title: string;
}

export interface IQuickAccessAdaptiveCardExtensionState {
}

const CARD_VIEW_REGISTRY_ID: string = 'QuickAccess_CARD_VIEW';
export const QUICK_VIEW_REGISTRY_ID: string = 'QuickAccess_QUICK_VIEW';

export default class QuickAccessAdaptiveCardExtension extends BaseAdaptiveCardExtension<
  IQuickAccessAdaptiveCardExtensionProps,
  IQuickAccessAdaptiveCardExtensionState
> {
  private _deferredPropertyPane: QuickAccessPropertyPane | undefined;

  public onInit(): Promise<void> {
    this.state = { };

    this.cardNavigator.register(CARD_VIEW_REGISTRY_ID, () => new CardView());
    this.quickViewNavigator.register(QUICK_VIEW_REGISTRY_ID, () => new QuickView());

    return Promise.resolve();
  }

  protected loadPropertyPaneResources(): Promise<void> {
    return import(
      /* webpackChunkName: 'QuickAccess-property-pane'*/
      './QuickAccessPropertyPane'
    )
      .then(
        (component) => {
          this._deferredPropertyPane = new component.QuickAccessPropertyPane();
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
