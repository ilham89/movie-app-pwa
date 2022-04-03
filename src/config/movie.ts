import { axiosInstance } from "@config";

export const getTop250Movies = async () => {
    const response = await axiosInstance.get(
        `/API/Top250Movies/${process.env.IMDB_API_KEY}`
    );
    return response.data;
};

export const getComingSoonMovies = async () => {
    const response = await axiosInstance.get(
        `/API/ComingSoon/${process.env.IMDB_API_KEY}`
    );
    return response.data;
};

export const getDetailInfoMovie = async (movieId: any) => {
    const response = await axiosInstance.get(
        `/en/API/Title/${process.env.IMDB_API_KEY}/${movieId}/FullActor,FullCast,Posters,Images,Trailer,Ratings,Wikipedia`
    );
    return response.data;
};

export const getYoutubeTrailer = async (movieId: any) => {
    const response = await axiosInstance.get(
        `/API/YouTubeTrailer/${process.env.IMDB_API_KEY}/${movieId}`
    );
    return response.data;
};
