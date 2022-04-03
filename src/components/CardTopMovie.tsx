import React from "react";
import { Box } from "@mui/system";
import Image from "next/image";
import { Star } from "@mui/icons-material";
import { yellow } from "@mui/material/colors";
import { useRouter } from "next/router";

const CardTopMovie = ({ data }: any) => {
    const router = useRouter();
    return (
        <Box
            sx={{ width: "160px" }}
            onClick={() => router.push(`/movies/${data.id}`)}
        >
            <Box
                sx={{
                    borderRadius: "8px",
                    overflow: "hidden",
                    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                    height: "220px",
                    position: "relative",
                }}
            >
                <Image
                    src={data.image}
                    alt={data.title}
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </Box>
            <Box
                sx={{
                    fontWeight: 700,
                    fontSize: 14,
                }}
                mt={2}
                mb={1}
            >
                {data.fullTitle}
            </Box>
            <Box
                sx={{
                    fontWeight: 400,
                    fontSize: 12,
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Star fontSize="small" sx={{ color: yellow[700] }} />
                <Box ml={0.5} sx={{ color: "#9C9C9C" }}>
                    {data.imDbRating}/10 IMDb
                </Box>
            </Box>
        </Box>
    );
};

export default CardTopMovie;
