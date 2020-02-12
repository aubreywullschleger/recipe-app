// Setup filters
const filters = {
  searchText: ""
}

// Get filters
const getFilters = () => filters

// Set filters
const setFilters = updates => {
  if (typeof updates.searchText === "string") {
    filters.searchText = updates.searchText
  }
}

export { getFilters, setFilters }