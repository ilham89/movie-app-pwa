import { CardComingSoonMovie, CardTopMovie } from "@components";
import { getComingSoonMovies, getTop250Movies } from "@config";
import { Close, FilterAlt, Search, Slideshow } from "@mui/icons-material";
import {
    Box,
    styled,
    Container,
    InputBase,
    IconButton,
    Input,
    TextField,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "src/context/theme";

const Root = styled(Container)({
    minHeight: "100vh",
    height: "100%",
    maxWidth: 444,
    width: "100%",
    padding: "0px !important",
    borderRight: "1px solid" + grey[400],
    borderLeft: "1px solid" + grey[400],
});

const Home: NextPage = () => {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    const [topMovies, setTopMovies] = useState([]);
    const [comingSoonMovies, setComingSoonMovies] = useState([]);
    const [keyword, setKeyword] = useState("");

    const fetchTopMovies = async () => {
        await getTop250Movies().then((res) => {
            setTopMovies(res.items);
        });
    };
    const fetchComingSoonMovies = async () => {
        await getComingSoonMovies().then((res) => {
            setComingSoonMovies(res.items);
        });
    };

    useEffect(() => {
        fetchTopMovies();
        fetchComingSoonMovies();
    }, []);

    console.log("keyword", keyword);
    return (
        <Root maxWidth="xs">
            <Box
                pt={3}
                px={2}
                mb={2}
                sx={{ display: "flex", justifyContent: "space-between" }}
            >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <IconButton color="inherit" sx={{ padding: 0 }}>
                        <Slideshow />
                    </IconButton>
                    <Box sx={{ fontSize: 16, fontWeight: 900 }} ml={0.5}>
                        MovieApp
                    </Box>
                </Box>
                <IconButton onClick={colorMode.toggleColorMode} color="inherit">
                    {theme.palette.mode === "dark" ? (
                        <Brightness7 />
                    ) : (
                        <Brightness4 />
                    )}
                </IconButton>
            </Box>
            <Box
                pl={2}
                mb={1}
                sx={{ width: "55%", fontSize: 22, fontWeight: 700 }}
            >
                Search Your Favorite Movie's
            </Box>
            <Box px={2} mb={2} sx={{ display: "flex" }}>
                <Box
                    sx={{
                        height: 45,
                        borderRadius: 2,
                        backgroundColor: grey[100],
                        padding: "12px 16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        cursor: "pointer",
                        width: "90%",
                    }}
                >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Search
                            fontSize="small"
                            sx={{
                                color:
                                    theme.palette.mode === "dark"
                                        ? grey[900]
                                        : grey[400],
                            }}
                        />
                        <InputBase
                            placeholder="Search..."
                            sx={{
                                marginLeft: "4px",
                                color:
                                    theme.palette.mode === "dark"
                                        ? grey[900]
                                        : grey[400],
                            }}
                            onChange={(event) => setKeyword(event.target.value)}
                        />
                    </Box>
                    <Close
                        fontSize="small"
                        sx={{
                            color:
                                theme.palette.mode === "dark"
                                    ? grey[900]
                                    : grey[400],
                        }}
                        onClick={() => setKeyword("")}
                    />
                </Box>
                <IconButton color="inherit" sx={{ ml: 1, width: "10%" }}>
                    <FilterAlt />
                </IconButton>
            </Box>

            {/* Top Movies */}
            <Box>
                <Box
                    sx={{
                        fontWeight: 900,
                        fontSize: 16,
                    }}
                    pl={2}
                    mb={2}
                >
                    Top Movies
                </Box>
                <Box pl={2}>
                    <Box
                        sx={{
                            display: "flex",
                            overflowX: "auto",
                            "&::-webkit-scrollbar": {
                                display: "none",
                            },
                            scrollbarWidth: "none",
                        }}
                    >
                        {topMovies.map((movie, index) => (
                            <Box key={index} mr={2}>
                                <CardTopMovie data={movie} />
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
            {/* Popular Movie */}
            <Box px={2}>
                <Box
                    sx={{
                        fontWeight: 900,
                        fontSize: 16,
                    }}
                    mb={2}
                >
                    Coming Soon
                </Box>

                {comingSoonMovies.map((movie, index) => (
                    <Box key={index}>
                        <CardComingSoonMovie data={movie} />
                    </Box>
                ))}
            </Box>
        </Root>
    );
};

export default Home;
