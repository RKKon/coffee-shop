import { useState, useEffect } from 'react';

import '../../assets/sass/style.sass';
import './searchPanel.sass';

import ViewCoffeeItems from '../viewCoffeeItems/ViewCoffeeItems';
import NotFoundCoffee from '../notFoundCoffee/NotFoundCoffee';
import Spinner from '../spinner/Spinner';

const SearchAndFilterPanel = (props) => {
	const {coffeeItem, coffeeInServer, allItems, basicFilter, loading, addToCart, 
		updateCoffeeDataFromAPI} = props 
	const [filter, setFilter] = useState(basicFilter ? basicFilter : null);
	const [search, setSearch] = useState('');

	const createCoffeeFilter = () => {
		updateCoffeeDataFromAPI();
		if (filter && filter.length) {      
			return
		} else {
			if (coffeeItem) {
				let arr = []
				coffeeItem.map(coffee => arr.length < 9 ? arr.push(coffee) : null )
				setFilter(arr)
			}
		}
	}

	const addActiveStyleFilter = (idOrClassName = '#all') => {
		let allInputs = document.getElementsByClassName("filter_style");
		Array.from(allInputs).forEach(item => item.classList.remove('filter_active'))
		document.querySelector(idOrClassName).classList.add('filter_active')
	}

	const mainFilter = (myFilter) => {
		if (myFilter === 'allItems') {
			setFilter(allItems)
			addActiveStyleFilter('#all')
		} else if (myFilter === 'drinkCoffee') {
			setFilter(coffeeItem)
			addActiveStyleFilter('#brazil')
		} else if (myFilter === 'coffeeBeans') {
			setFilter(coffeeInServer)
			addActiveStyleFilter('#columbia')
		} else console.log('Happened an error');
	};

	const searchFilter = (e) => { 
		let letters = e.target.value.toLowerCase();
		setSearch(letters)
		setFilter(allItems.filter(coffee => coffee.title.toLowerCase().indexOf(letters) > -1)) 
	};

	useEffect(() => {
		createCoffeeFilter();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[coffeeItem])

	return (
		<section className="search_and_filter_panel">
			<div className="search_menu_flex">
				<div>
					<label htmlFor="searchCoffee">Looking for</label>
					<input onChange={searchFilter} value={search} id="searchCoffee" name="searchCoffee" type="text" placeholder="start typing here..."/>
				</div>
				<div>
					<label className="filter_mr" htmlFor="filerCoffee">Or filter</label>
					<input onClick={() => mainFilter('allItems')} className="filter_style" type="button" value="All Coffee" id="all" name="allCoffee"/>
					<input onClick={() => mainFilter('drinkCoffee')} className="filter_style" type="button" value="Drink coffee" id="brazil" name="brazil"/>
					{/* <input onClick={() => mainFilter('Kenya')} className="filter_style" type="button" value="coffee beans" id="kenya" name="kenya"/> */}
					<input onClick={() => mainFilter('coffeeBeans')} className="filter_style" type="button" value="Coffee beans" id="columbia" name="columbia"/>
				</div>
			</div>
			
			<ul className="search_flex"> {/* <Spinner/> : */}
				{loading ? <Spinner selectorId='preloader_for_items'/> : !filter ? <NotFoundCoffee visibleLink={false}/>
				: <ViewCoffeeItems filteredCoffeeItem={filter} addToCart={addToCart} /> }
			</ul>

			<button onClick={() => {
				document.querySelector('.btn_see_all_coffee').style.display = 'none'; 
				mainFilter('allItems')
			}} className='btn_see_all_coffee'>See all coffee</button>
		</section>
	)
};

export default SearchAndFilterPanel;