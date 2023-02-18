import {
  BasePrimaryTextCardView,
  IPrimaryTextCardParameters,
  IExternalLinkCardAction,
  IQuickViewCardAction,
  ICardButton
} from '@microsoft/sp-adaptive-card-extension-base';
import * as strings from 'MyInboxAdaptiveCardExtensionStrings';
import { IMyInboxAdaptiveCardExtensionProps, IMyInboxAdaptiveCardExtensionState } from '../MyInboxAdaptiveCardExtension';

export class CardView extends BasePrimaryTextCardView<IMyInboxAdaptiveCardExtensionProps, IMyInboxAdaptiveCardExtensionState> {
  public get cardButtons(): [ICardButton] | [ICardButton, ICardButton] | undefined {
    return [
      {
        title: strings.ButtonTitle,
        action: {
          type: 'ExternalLink',
          parameters: {
            target: strings.ButtonTarget
          }
        }
      }
    ];
  }

  public get data(): IPrimaryTextCardParameters {
    return {
      primaryText: `${this.state.results?.unreadItemCount} Unread Emails`, //  strings.PrimaryText,
      description: strings.Description,
      title: this.properties.title
    };
  }

  public get onCardSelection(): IQuickViewCardAction | IExternalLinkCardAction | undefined {
    return {
      type: 'ExternalLink',
      parameters: {
        target: strings.ButtonTarget
      }
    };
  }
}
