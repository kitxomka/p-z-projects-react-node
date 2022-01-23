import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const dollar = 'USD';
const shekel = 'ILS';

const CurrencyDropDown = ({ handleCurrencyChange }) => {
    return (
        <div>
            <InputLabel>Currency</InputLabel>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                    onChange={e => handleCurrencyChange(e)}
                    defaultValue={dollar}
                >
                <MenuItem disabled value="">
                    <em>Currency</em>
                </MenuItem>
                <MenuItem value={dollar}>USD</MenuItem>
                <MenuItem value={shekel}>ILS</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export default CurrencyDropDown;