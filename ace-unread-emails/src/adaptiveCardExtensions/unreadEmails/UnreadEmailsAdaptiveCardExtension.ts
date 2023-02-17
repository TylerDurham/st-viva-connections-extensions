import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseAdaptiveCardExtension } from '@microsoft/sp-adaptive-card-extension-base';
import { CardView } from './cardView/CardView';
import { QuickView } from './quickView/QuickView';
import { UnreadEmailsPropertyPane } from './UnreadEmailsPropertyPane';

export interface IUnreadEmailsAdaptiveCardExtensionProps {
  title: string;
}

export interface IUnreadEmailsAdaptiveCardExtensionState {
}

const CARD_VIEW_REGISTRY_ID: string = 'UnreadEmails_CARD_VIEW';
export const QUICK_VIEW_REGISTRY_ID: string = 'UnreadEmails_QUICK_VIEW';

export default class UnreadEmailsAdaptiveCardExtension extends BaseAdaptiveCardExtension<
  IUnreadEmailsAdaptiveCardExtensionProps,
  IUnreadEmailsAdaptiveCardExtensionState
> {
  private _deferredPropertyPane: UnreadEmailsPropertyPane | undefined;

  public onInit(): Promise<void> {
    this.state = { };

    this.cardNavigator.register(CARD_VIEW_REGISTRY_ID, () => new CardView());
    this.quickViewNavigator.register(QUICK_VIEW_REGISTRY_ID, () => new QuickView());

    return Promise.resolve();
  }

  protected loadPropertyPaneResources(): Promise<void> {
    return import(
      /* webpackChunkName: 'UnreadEmails-property-pane'*/
      './UnreadEmailsPropertyPane'
    )
      .then(
        (component) => {
          this._deferredPropertyPane = new component.UnreadEmailsPropertyPane();
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
