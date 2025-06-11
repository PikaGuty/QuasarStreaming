import { ApiResponse } from '../constants/interfaces';

export async function fetchMovieContainers(apiUrl: string): Promise<ApiResponse> {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: ApiResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movie containers:', error);
    throw error;
  }
}
