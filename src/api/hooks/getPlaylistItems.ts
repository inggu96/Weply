import Cookies from 'js-cookie';
import { authedAxios } from '../base/axisoInstance';

const youtubeURL = process.env.REACT_APP_API_URL;

export const getPlaylistItems = async (playlistId: any) => {
  const accessToken = Cookies.get('weply_access');
  if (!accessToken) {
    console.log('Access token is not found');
    return [];
  }

  try {
    const response = await authedAxios.get('/playlistItems', {
      baseURL: youtubeURL,
      params: {
        part: 'snippet',
        playlistId: playlistId,
        maxResults: 50,
      },
    });

    return response.data.items ?? [];
  } catch (error) {
    console.error('Error fetching playlist items:', error);
    return [];
  }
};
