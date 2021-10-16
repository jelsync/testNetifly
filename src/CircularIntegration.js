import React, { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { blue } from '@mui/material/colors';
import { TextField } from '@mui/material';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Select from 'react-select'
export default function CircularIntegration() {
    const [loading, setLoading] = useState(false); //pasar a true
    const [itemSelectd, setItemSelectd] = useState(''); //pasar a true
    const [value, setValue] = useState(''); //pasar a true
    const timer = useRef();

    useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        };
    }, []);

    const options = [
        { label: 'The Shawshank Redemption', value: 1 },
        { label: 'The Godfather', value: 2 },
        { label: 'The Godfather: Part II', value: 3 },
        { label: 'The Dark Knight', value: 4 },
    ]
    console.log('ItemSelectd=>', itemSelectd);
    console.log('Value=>', value);
    console.log('Options=>', options);
    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ m: 1, position: 'relative' }}>
                    <Select options={options} onChange={(e) => { setItemSelectd(e); setValue(e.value); }} value={itemSelectd} />
                    {loading && (
                        <CircularProgress
                            size={24}
                            sx={{
                                color: blue[500],
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                marginTop: '-12px',
                                marginLeft: '-12px',
                            }}
                        />
                    )}
                </Box>
            </Box>
            {/* <h1>ITEM SELECT {itemSelectd}</h1> */}
            <h1>VALUE {value}</h1>
        </>
    );
}
