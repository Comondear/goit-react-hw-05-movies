import { Form, Button, Input } from './Styles';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function SearchForm(props) {
  const [search, setSearch] = useState(props.search);
  const [loader, setLoader] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setLoader(true);
    if (search.trim() === '') return toast.error('Enter your query');
    props.searchProps(search);
    setSearch('');
    setLoader(false);
  };

  const handleChange = e => {
    setSearch(e.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="search"
        autoComplete="off"
        autoFocus
        placeholder="what r u gonna watch?:)"
        value={search}
        type="search"
        onChange={handleChange}
        isLoading={loader}
      ></Input>
      <Button type="submit">Search</Button>
    </Form>
  );
}
