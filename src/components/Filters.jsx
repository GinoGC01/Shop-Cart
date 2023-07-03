import { useFilters } from "../hooks/useFilters"

export function Filters() {
    const {filters, setFilters} = useFilters()


    const handleChangeMinPrice = (e)=>{
        const value = e.target.value
        setFilters(prevState => ({
            ... prevState,
            minPrice: value 
        }))
    }

    const handleChangeCategory = (e)=>{
        const value = e.target.value
        setFilters(prevState => ({
            ... prevState,
            category: value 
        }))
    }

  return (
    <section className='filters'>
        <div className="price__filters">
            <label htmlFor="price">Price from: </label>
            <input type="range" name="price" id="price" min={0} max={2000} onChange={handleChangeMinPrice} value={filters.minPrice}/> 
            <span>$ {filters.minPrice}</span>
        </div>
        <div className="categorys___filters">
            <label htmlFor="category">Category</label>
            <select name="category" id="category" onChange={handleChangeCategory}>
                <option value="all">All</option>
                <option value="laptops">Notebooks</option>
                <option value="smartphones">Phones</option>
                <option value="fragrances"> Fragances</option>
            </select>
        </div>
    </section>
  )
}
