import  React, {useState, useEffect} from 'react'
import { AutoComplete, Input} from 'antd';
import 'antd/dist/antd.css'
const { Option } = AutoComplete;

const SearchBox = (props) => {
    const [result, setResult] = useState([]);
    const [value, setValue] = useState([]);


    const handleSearch = (value) => {
        let res = []
        let val = []
        if(!value) {
            res = [];
        } else {
            res = props.movies.map((movie) => `${movie.title}`);
            val = value
        }

        setResult(res);
        setValue(val);
      };

    const handleSelect = (value) => {
        props.setSearchValue(value)
    }
    return (
        <div className='col-xl-4 col-lg-4 col-md-12 col-12 align-self-center'>
			
                <AutoComplete
                    style={{
                        width: 300,
                    }}
                    onSearch={handleSearch}
                    onChange={() => props.setSearchValue(value)}
                    onSelect={handleSelect}
                    placeholder='Search Movies'
                >
                    {result.map((_, index) => (
                    <Option key={index} value={result[index]}>
                        {result[index]}
                    </Option>
                    ))}
                </AutoComplete>
                {/* <input
                className='form-control'
                value={props.value}
                onSearch={handleSearch}
                onChange={(event) => props.setSearchValue(event.target.value)}
                placeholder='Search Movies'
                ></input> */}
		</div>
    )
};

export default SearchBox