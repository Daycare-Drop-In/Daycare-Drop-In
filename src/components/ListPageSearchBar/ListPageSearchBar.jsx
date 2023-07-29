import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {Button, Select, FormControl, InputLabel, MenuItem, FormHelperText, Box} from '@mui/material'

function ListPageSearchBar () {
 const dispatch = useDispatch()

    const option = {
		city: "",
		city1: "Minneapolis",
		city2: "Saint Paul",
		city3: "Crystal",
    }
    const [cityFilter, setCityFilter] = useState(option)
    const [ageFilter, setAgeFilter]= useState([])

    const filterProviders = () =>{

    }

    const resetFilter = () =>{
        // dispatch({type:'GET_ALL_AVAILABILITY'})

    }




    return (
		<Box>
			<FormControl sx={{ m: 1, minWidth: 120 }}>
				<InputLabel id="demo-simple-select-required-label">
					City
				</InputLabel>
				<Select
					labelId="demo-simple-select-required-label"
					id="demo-simple-select-required"
					value={cityFilter.city}
					label="Age *"
					onChange={(e) =>
						setCityFilter({ ...cityFilter, city: e.target.value })
					}
				>
					{/* {
										...newAdult,
										first_name: event.target.value,
									} */}
					{/* filter.map(option)=>(
                        <MenuItem value={option.city}>option.city</MenuItem>
                    )) */}
                    <MenuItem>
                    <em> none</em>
                    </MenuItem>
					<MenuItem value={cityFilter.city1}>
						{cityFilter.city1}
					</MenuItem>
					<MenuItem value={cityFilter.city2}>
						{cityFilter.city2}
					</MenuItem>
					<MenuItem value={cityFilter.city3}>
						{cityFilter.city3}
					</MenuItem>
				</Select>
				<FormHelperText>Filter by city</FormHelperText>
			</FormControl>
			<Button variant="contained">Search</Button>
			<Button variant="contained">Reset</Button>
		</Box>
		// <div className="container">
		//     <h2>Search Bar</h2>
		//     <p>This will be the search bar to sort the providers!</p>
		// </div>
	);
}

export default ListPageSearchBar