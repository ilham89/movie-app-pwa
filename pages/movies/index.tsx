import { Box, styled, Container, IconButton } from "@mui/material";
import { grey, yellow } from "@mui/material/colors";
import { useEffect, useState } from "react";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "src/context/theme";
import { getDetailInfoMovie, getYoutubeTrailer } from "@config";
import { useRouter } from "next/router";
import { url } from "inspector";
import { ArrowBack, PlayCircle, Star } from "@mui/icons-material";
import theme from "@theme";

const Movies = () => {
    const router = useRouter();
    const [movies, setMovies] = useState([]);

    useEffect(() => {}, []);

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
            <Box></Box>
        </Root>
    );
};

export default Movies;
