import React, {ChangeEvent, useEffect, useState} from 'react';
import axios from "axios";
import {Grid, Pagination} from "@mui/material";
import ListItem from "../components/List/ListItem";
import {CharacterModel} from "../models/character.model";

export const API_URL = 'https://rickandmortyapi.com/api/character'

function Home() {
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([] as CharacterModel[]);
    const [info, setInfo] = useState({pages: 0});

    useEffect(() => {
        setLoading(true)
        axios.get(`${API_URL}?page=${page}`).then(response => {
            handleError(response.status)
            let {results, info} = response.data;
            setInfo(info)
            setData(results)
            setLoading(false)
        }, err => {
            handleError(err.status)
        })
    }, [page])

    const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    const handleError = (statusCode: number) => {
        if (statusCode!==200) {
            setLoading(false)
            throw new Error('Error')
        }
    }

    return (
        <>
            <Grid container justifyContent="center">
                {(loading ? Array.from(new Array(20)) : data).map((item, index) => (
                    <ListItem item={item} key={index}/>
                ))}
                <Pagination color="primary" count={info.pages} page={page} onChange={handlePageChange} />
            </Grid>
        </>
    );
}

export default Home;
