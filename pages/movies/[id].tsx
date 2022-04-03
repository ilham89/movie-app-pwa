import {
    Box,
    styled,
    Container,
    IconButton,
    CircularProgress,
    Backdrop,
} from "@mui/material";
import { grey, yellow } from "@mui/material/colors";
import { useEffect, useState } from "react";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "src/context/theme";
import { getDetailInfoMovie, getYoutubeTrailer } from "@config";
import { useRouter } from "next/router";
import { ArrowBack, PlayCircle, Star } from "@mui/icons-material";
import theme from "@theme";

const PopularDetail = () => {
    const router = useRouter();
    const [movie, setMovie] = useState<any>({});
    const [youtubeMovie, setYoutubeMovie] = useState<any>({});
    const [isLoading, setIsLoading] = useState(true);

    const fetchDetail = async () => {
        await getDetailInfoMovie(router.query.id)
            .then((res) => {
                setMovie(res);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const fetchYoutubeTrailer = async () => {
        await getYoutubeTrailer(router.query.id).then((res) => {
            setYoutubeMovie(res);
        });
    };
    useEffect(() => {
        if (router.query.id) {
            fetchDetail();
            // fetchYoutubeTrailer();
        }
    }, [router.query]);

    const Root = styled(Container)({
        minHeight: "100vh",
        height: "100%",
        maxWidth: 444,
        width: "100%",
        padding: "0px !important",
        borderRight: "1px solid" + grey[400],
        borderLeft: "1px solid" + grey[400],
    });

    return (
        <Root maxWidth="xs">
            <Backdrop sx={{ zIndex: 999 }} open={isLoading}>
                <CircularProgress color="primary" size={50} />
            </Backdrop>
            {movie && (
                <Box>
                    {/* <iframe
                    width="100%"
                    height={200}
                    src={`https://www.youtube.com/embed/${youtubeMovie.videoId}`}
                ></iframe> */}
                    <Box
                        sx={{
                            backgroundImage: `url(
                            ${movie?.trailer?.thumbnailUrl}
                        )`,
                            height: "250px",
                        }}
                    >
                        <IconButton
                            sx={{ p: 2 }}
                            color="inherit"
                            onClick={() => router.push("/")}
                        >
                            <ArrowBack
                                fontSize="large"
                                sx={{ color: "white" }}
                            />
                        </IconButton>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                            mt={2}
                        >
                            <Box>
                                <IconButton
                                    color="inherit"
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        width: "100%",
                                    }}
                                    size="large"
                                    onClick={() =>
                                        router.push(`${youtubeMovie?.videoUrl}`)
                                    }
                                >
                                    <PlayCircle
                                        fontSize="large"
                                        sx={{
                                            color: "white",
                                        }}
                                    />
                                </IconButton>
                                <Box
                                    sx={{
                                        fontSize: "12px",
                                        fontWeight: 700,
                                        color: "white",
                                    }}
                                >
                                    Play Trailer
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box p={2}>
                        <Box
                            sx={{
                                width: "70%",
                            }}
                        >
                            <Box
                                sx={{
                                    fontWeight: 700,
                                    fontSize: 20,
                                }}
                            >
                                {movie?.title}
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    color: grey[300],
                                }}
                            >
                                <Box>{movie?.year}</Box>
                                <Box>{movie?.contentRating}</Box>
                                <Box>{movie?.runtimeStr}</Box>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                fontWeight: 400,
                                fontSize: 12,
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <Star
                                fontSize="small"
                                sx={{ color: yellow[700] }}
                            />
                            <Box ml={0.5} sx={{ color: "#9C9C9C" }}>
                                {movie?.imDbRating}/10 IMDb
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                flexFlow: "column wrap",
                                flexDirection: "row",
                            }}
                            my={1}
                        >
                            {movie?.genreList?.map(
                                (genre: any, index: number) => (
                                    <Box
                                        sx={{
                                            backgroundColor:
                                                theme.palette.info.light,
                                            color: theme.palette.info.main,
                                            width: "fit-content",
                                            fontSize: "8px",
                                            fontWeight: 700,
                                            borderRadius: "100px",
                                        }}
                                        py={0.5}
                                        px={1.5}
                                        mr={1}
                                        mb={1}
                                        key={index}
                                    >
                                        {genre?.value}
                                    </Box>
                                )
                            )}
                        </Box>

                        <Box
                            sx={{
                                fontSize: 16,
                                fontWeight: 900,
                            }}
                        >
                            Plot Summary
                        </Box>
                        <Box
                            sx={{
                                fontSize: 12,
                                fontWeight: 400,
                                color: grey[300],
                            }}
                        >
                            {movie?.plot}
                        </Box>
                        <Box
                            sx={{
                                fontSize: 16,
                                fontWeight: 900,
                            }}
                        >
                            Cast
                        </Box>
                    </Box>
                </Box>
            )}
        </Root>
    );
};

export default PopularDetail;
