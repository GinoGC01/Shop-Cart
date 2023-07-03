import { useCallback, useContext} from "react"
import { FilterContext } from "../context/FilterContext"
export function useFilters() {

const {filters, setFilters} = useContext(FilterContext)

      const filterProducts = useCallback(
        (products) => {
          return(
            products.filter(product =>{
              return(
                //muestra aquellos productos que cumplan con las siguientes condiciones
                product.price >= filters.minPrice && ((
                  filters.category === 'all' ||
                  product.category === filters.category
                ))
              )
            })
          )
        },[filters])
    
  return ({filterProducts, setFilters, filters })
}
