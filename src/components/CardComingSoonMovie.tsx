import React from "react";
import { Box } from "@mui/system";
import { AccessTime } from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import theme from "@theme";
import { useRouter } from "next/router";

const CardComingSoonMovie = ({ data }: any) => {
    const router = useRouter();
    return (
        <Box
            sx={{
                display: "flex",
                width: "100%",
                minHeight: "25vh",
            }}
            mb={2}
            onClick={() => router.push(`/movies/${data.id}`)}
        >
            <img
                src={data.image}
                alt={data.title}
                style={{
                    width: "30%",
                    borderRadius: "8px",
                }}
            />

            <Box ml={2} sx={{ width: "70%" }}>
                <Box
                    sx={{
                        fontWeight: 700,
                        fontSize: 14,
                    }}
                    mb={1}
                >
                    {data.fullTitle}
                </Box>
                <Box
                    sx={{
                        fontWeight: 400,
                        fontSize: 12,
                        color: grey[400],
                    }}
                >
                    {data.releaseState}
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
                    {data.genreList.map((genre: any, index: number) => (
                        <Box
                            sx={{
                                backgroundColor: theme.palette.info.light,
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
                            {genre.value}
                        </Box>
                    ))}
                </Box>
                {data.runtimeStr && (
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            fontSize: 12,
                            fontWeight: 400,
                        }}
                    >
                        <AccessTime fontSize="small" color="inherit" />
                        <Box pl={0.5}>{data.runtimeStr}</Box>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default CardComingSoonMovie;
