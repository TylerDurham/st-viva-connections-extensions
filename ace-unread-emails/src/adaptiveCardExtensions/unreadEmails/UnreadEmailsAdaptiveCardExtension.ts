import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseAdaptiveCardExtension } from '@microsoft/sp-adaptive-card-extension-base';
import { CardView } from './cardView/CardView';
import { QuickView } from './quickView/QuickView';
import { UnreadEmailsPropertyPane } from './UnreadEmailsPropertyPane';
import * as MicrosoftGraph from '@microsoft/microsoft-graph-types';
import { MSGraphClientV3 } from '@microsoft/sp-http';

export interface IUnreadEmailsAdaptiveCardExtensionProps {
  title: string;
}

export interface IUnreadEmailsAdaptiveCardExtensionState {
  results?: MicrosoftGraph.MailFolder;
  error?: GraphError;
}

export interface GraphError {
  statusCode?: number;
  code?: string;
  message: string;
  requestId?: string;
  date?: Date;
  body?: string;
}

const CARD_VIEW_REGISTRY_ID: string = 'UnreadEmails_CARD_VIEW';
export const QUICK_VIEW_REGISTRY_ID: string = 'UnreadEmails_QUICK_VIEW';

export default class UnreadEmailsAdaptiveCardExtension extends BaseAdaptiveCardExtension<
  IUnreadEmailsAdaptiveCardExtensionProps,
  IUnreadEmailsAdaptiveCardExtensionState
> {
  private _deferredPropertyPane: UnreadEmailsPropertyPane | undefined;

  public onInit(): Promise<void> {
    this.state = {};

    this.cardNavigator.register(CARD_VIEW_REGISTRY_ID, () => new CardView());
    this.quickViewNavigator.register(QUICK_VIEW_REGISTRY_ID, () => new QuickView());

    this.context.msGraphClientFactory.getClient("3").then((client: MSGraphClientV3): void => {
      client.api("/me/mailfolders/Inbox").select("unreadItemCount").get((error: GraphError, inbox: MicrosoftGraph.MailFolder) => {
        console.log('test');
        if (error) {
          console.error(error)
          this.setState({ error: error });
        }
        else {
          console.log(inbox)
          this.setState({ results: inbox });
        }
      });
    });

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
