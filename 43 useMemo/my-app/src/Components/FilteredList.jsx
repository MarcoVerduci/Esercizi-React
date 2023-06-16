import React, { useMemo } from 'react';

const FilteredList = () => {
  const list = [
    { id: 1, name: 'Marco', age: 24 },
    { id: 2, name: 'Giovanni', age: 18 },
    { id: 3, name: 'Alessandro', age: 29 },
    { id: 4, name: 'Sara', age: 21 },
  ];

  const filteredList = useMemo(() => {
    return list.filter(item => item.age > 18);
  }, [list]);

  return (
    <div>
      <h2>Filtered List</h2>
      <ul>
        {filteredList.map(item => (
          <li key={item.id}>
            {item.name} {item.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredList;