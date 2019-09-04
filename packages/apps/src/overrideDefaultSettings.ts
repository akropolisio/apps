import uiSettings from '@polkadot/ui-settings';
import { akroNodes } from '@polkadot/app-settings';

export function overrideDefaultSettings () {
  const settings = uiSettings.get();

  const isDefaultNode = uiSettings.availableNodes.reduce((isDefaultNode, { value }): boolean => {
    return isDefaultNode || value === settings.apiUrl;
  }, false);

  isDefaultNode && uiSettings.set({ ...settings, apiUrl: akroNodes[0].value });
}
