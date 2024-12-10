const FilterPanel = ({ selectedFilters, onFilterChange, companies }) => {
    return (
      <div className="filter-panel">
        <h3>Фильтры</h3>
        
        <label className="filter-location-label">
          Локация:
          <select
            className="filter-field filter-location"
            value={selectedFilters.location}
            onChange={(e) => onFilterChange('location', e.target.value)}
          >
            <option value="">Все</option>
            <option value="Москва">Москва</option>
            <option value="Санкт-Петербург">Санкт-Петербург</option>
            <option value="Казань">Казань</option>
          </select>
        </label>
  
        <label className="filter-job-type-label">
          Тип работы:
          <select
            className="filter-field filter-job-type"
            value={selectedFilters.jobType}
            onChange={(e) => onFilterChange('jobType', e.target.value)}
          >
            <option value="">Все</option>
            <option value="Стажировка">Стажировка</option>
            <option value="Полная занятость">Полная занятость</option>
            <option value="Частичная занятость">Частичная занятость</option>
          </select>
        </label>
  
        <label className="filter-company-label">
          Компания:
          <select
            className="filter-field filter-company"
            value={selectedFilters.company}
            onChange={(e) => onFilterChange('company', e.target.value)}
          >
            <option value="">Все</option>
            {companies.map((company, index) => (
              <option key={index} value={company}>
                {company}
              </option>
            ))}
          </select>
        </label>
      </div>
    );
  };
  
  export default FilterPanel;
  