import { Form, Button, Input } from './Styles';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function SearchForm(props) {
  const [search, setSearch] = useState(props.search);

  const handleSubmit = e => {
    e.preventDefault();
    if (search.trim() === '') return toast.error('Enter your query');
    props.searchProps(search);
    setSearch('');
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
      ></Input>
      <Button type="submit">Search</Button>
    </Form>
  );
}
