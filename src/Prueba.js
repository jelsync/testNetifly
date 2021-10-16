import React, { useState } from "react";
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
const Prueba = () => {
    const [input, setInput] = useState('');
    const suggestions = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 },
        { title: 'The Dark Knight', year: 2008 },
        { title: '12 Angry Men', year: 1957 },
        { title: "Schindler's List", year: 1993 },
        { title: 'Pulp Fiction', year: 1994 },
        { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
        { title: 'The Good, the Bad and the Ugly', year: 1966 },
        { title: 'Fight Club', year: 1999 },
        { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
        { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
        { title: 'Forrest Gump', year: 1994 },
        { title: 'Inception', year: 2010 },
      ];
  return (
    <div>
      <Autocomplete
        options={suggestions}
        // getOptionLabel={(option) => option}
        // inputValue={input}
        onChange={(e, v) => setInput(v)}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Combo box"
            onChange={({ target }) => setInput(target.value)}
            variant="outlined"
            fullWidth
          />
        )}
      />
    </div>
  );
};

export default Prueba;
