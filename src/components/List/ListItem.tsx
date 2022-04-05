import React from 'react';
import {Box, Skeleton, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {CharacterModel} from "../../models/character.model";

function ListItem(props: { item: CharacterModel }) {
    const {item} = props

    return (
        <>
            <Box sx={{width: 210, marginRight: 0.5, my: 2}}>
                {item ? (
                        <Link to={`/character/${item.id}`}>
                            <img
                                style={{width: 210, height: 118}}
                                alt={item.name}
                                src={item.image}
                            />
                            <Box sx={{pr: 2}}>
                                <Typography gutterBottom variant="body2">
                                    {item.name}
                                </Typography>
                                <Typography display="block" variant="caption" color="text.secondary">
                                    {item.species}
                                </Typography>
                            </Box>
                        </Link>
                    ) :
                    (
                        <>
                            <Skeleton variant="rectangular" width={210} height={118}/>
                            <Box sx={{pt: 0.5}}>
                                <Skeleton/>
                                <Skeleton width="60%"/>
                            </Box>
                        </>
                    )}
            </Box>
        </>
    );
}

export default ListItem;
