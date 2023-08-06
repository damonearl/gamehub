import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";

export interface Platforms {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platforms }[];
    metacritic: number;
}

const useGames = (gameQuery: GameQuery) => 
    useData<Game>("/games", { 
    params: { 
        genres: gameQuery.genre?.id, 
        platforms: gameQuery.platform?.id 
    }}, 
    [gameQuery]);

export default useGames;