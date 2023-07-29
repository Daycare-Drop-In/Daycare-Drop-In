import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {Button, Select, FormControl, InputLabel, MenuItem, FormHelperText, Box} from '@mui/material'

function ListPageSearchBar ({avail}) {
	const dispatch = useDispatch();

	const filterCity = () => {
		const cityFilter = [];
		for (let city of avail) {
			if (
				city &&
				city.provider_city &&
				!cityFilter.includes(city.provider_city)
			) {
				cityFilter.push(city.provider_city);
			}
		}
		// console.log("results based on city are:", cityFilter);
		return cityFilter;
	};
	const filterByCity = filterCity();

	const filterDate = () => {
		const dateFilter = [];
		for (let date of avail) {
			if (date && date.on_date && !dateFilter.includes(date.on_date)) {
				dateFilter.push(date.on_date);
			}
		}
		// console.log("results based on date are:", dateFilter);
		return dateFilter;
	};
const filterByDate = filterDate();

	const filterName = () => {
		const nameFilter = [];
		for (let name of avail) {
			if (name && name.biz_name && !nameFilter.includes(name.biz_name)) {
				nameFilter.push(name.biz_name);
			}
		}
		// console.log("results based on provider name are:", nameFilter);
		return nameFilter;
	};
    const filterByName = filterName();

	const [date, setDate] = useState([]);
	const [name, setName] = useState([]);
	const [city, setCity] = useState([]);

    const picked = {
        city:'',
        date:'',
        name:'',

    }
    const [userChoice, setUserChoice] = useState(picked)

	useEffect(() => {
		setCity(filterCity);
		setDate(filterDate);
		setName(filterName);
	}, []);


    const findRelevantInfo = () => {
        const filteredSearch = [];
        for (let entry of avail){
            if (entry.biz_name === userChoice.name){
				filteredSearch.push(entry);
			} else if (entry.on_date === userChoice.date) {
				filteredSearch.push(entry);
			} else if (
				entry.provider_city ==
				userChoice.city
			) {
				filteredSearch.push(entry);
			}
        }
        return filteredSearch;
    }

    const newResults = findRelevantInfo();

    const [results, setResults] = useState([])

console.log('RESULTS ARRAY TO BE DISPATCHED', results);
console.log('FILTER FIELDS', userChoice);
	const filterProviders = (event) => {
		// event.preventDefault()

        console.log('clicked');

        console.log('RESULTS', results);

        dispatch({type: "FETCH_FILTERED_RESULTS", payload: results})
	};

	const resetFilter = (event) => {
        // event.preventDefault()
        dispatch({ type: "CLEAR_FILTERED_RESULTS"});
		dispatch({ type: "CLEAR_FILTER"});
        setUserChoice(picked)
        setResults([])

	};
	const btn = { my: 1, mx: 1, height: "3.5rem", padding: 1 };
	const drop = { mx: 0.75, width: 100 };

	return (
		<Box
			component="form"
			onSubmit={filterProviders}
			sx={{
				display: "flex",
				flexDirection: "row",
				mb: 2,
				flexWrap: "wrap",
			}}
		>
			<FormControl sx={drop}>
				<InputLabel id="demo-simple-select-required-label">
					City
				</InputLabel>
				<Select
					labelId="demo-simple-select-required-label"
					id="demo-simple-select-required"
					value={userChoice.city}
					label="Age *"
					onChange={(e) =>
						{setUserChoice({ ...userChoice, city: e.target.value }),
							setResults(findRelevantInfo)}
					}
				>
					<MenuItem value="">
						<em>None</em>
					</MenuItem>
					{city.map((option, i) => {
						return (
							<MenuItem key={i} value={option}>
								{option}
							</MenuItem>
						);
					})}
					{/* {
										...newAdult,
										first_name: event.target.value,
									} */}
				</Select>
				{/* <FormHelperText>Filter by city</FormHelperText> */}
			</FormControl>

			<FormControl sx={drop}>
				<InputLabel id="demo-simple-select-required-label">
					Date
				</InputLabel>
				<Select
					labelId="demo-simple-select-required-label"
					id="demo-simple-select-required"
					value={userChoice.date}
					label="Age *"
					onChange={(e) =>
						{setUserChoice({ ...userChoice, date: e.target.value }),
							setResults(findRelevantInfo)}
					}
				>
					<MenuItem value="">
						<em>None</em>
					</MenuItem>
					{date.map((option, i) => {
						return (
							<MenuItem key={i} value={option}>
								{option}
							</MenuItem>
						);
					})}
				</Select>
				{/* <FormHelperText>Filter by day</FormHelperText> */}
			</FormControl>

			<FormControl sx={drop}>
				<InputLabel id="demo-simple-select-required-label">
					Provider
				</InputLabel>
				<Select
					labelId="demo-simple-select-required-label"
					id="demo-simple-select-required"
					value={userChoice.name}
					label="Age *"
					onChange={(e) => {
						setUserChoice({ ...userChoice, name: e.target.value }),
							setResults(findRelevantInfo)
					}}
				>
					<MenuItem value="">
						<em>None</em>
					</MenuItem>
					{name.map((option, i) => {
						return (
							<MenuItem key={i} value={option}>
								{option}
							</MenuItem>
						);
					})}
				</Select>
				{/* <FormHelperText>Filter by provider</FormHelperText> */}
			</FormControl>
			<Button type="submit" sx={btn} variant="contained">
				Search
			</Button>
			<Button sx={btn} onClick={resetFilter} variant="contained">
				Reset
			</Button>
		</Box>
		// <div className="container">
		//     <h2>Search Bar</h2>
		//     <p>This will be the search bar to sort the providers!</p>
		// </div>
	);
}

export default ListPageSearchBar;

{
	/* {
										...newAdult,
										first_name: event.target.value,
									} */
}

		//stores each toy that passes the filter function in the array of filtered toys
		// avail.map((obj) => {
		// 	if (!filteredSearch.includes(userChoice.name)){
        //         filteredSearch.push(obj);
        //         console.log("IS THIS THING ON?");
        //     }else if(obj?.provider_city.includes(userChoice.city)){
        //         // filteredSearch.push(obj);

        //     }else if(obj?.on_date.includes(userChoice.date)){
        //         // filteredSearch.push(obj);

        //     }else{
        //         console.log('KICK ROCKS');

        //     }
		// });
        // console.log('IS THIS THING ON?', filteredSearch);