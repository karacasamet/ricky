import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {API_URL} from "./Home";
import {Box, Breadcrumbs, Grid} from "@mui/material";
import ListItem from "../components/List/ListItem";
import {CharacterModel} from "../models/character.model";
import {Link} from "react-router-dom";

function Character() {
    let {characterId} = useParams();

    const [item, setItem] = useState({} as CharacterModel);

    useEffect(() => {
        axios.get(`${API_URL}/${characterId}`).then(response => {
            handleError(response.status)
            let {data} = response;
            setItem(data)
        }, err => {
            handleError(err.status)
        })
    }, [characterId])

    const handleError = (statusCode: number) => {
        if (statusCode !== 200) {
            throw new Error('Error')
        }
    }

    return (
        <>
            <Grid container justifyContent="center">
                <>
                    <Box sx={{my: 2, width: "100%", justifyContent: "center", alignItems: "center", display: "flex"}}>
                        <Breadcrumbs aria-label="breadcrumb" sx={{width: "250px"}}>
                            <Link
                                color="inherit"
                                to="/"
                            >
                                Home
                            </Link>
                            <span
                            >
                                {item.name}
                            </span>
                        </Breadcrumbs>
                    </Box>
                    <ListItem item={item}/>
                </>
            </Grid>
        </>
    )
}

export default Character;
