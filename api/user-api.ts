import { APP_CONSTANTS } from './constants';
import { getApi, getUrl } from './fetch-facade';

export async function getRecommendations(): Promise<any> {
    const url = getUrl(APP_CONSTANTS.recommendation);
    return getApi(url);
}
