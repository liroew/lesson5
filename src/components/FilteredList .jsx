import { useState, useMemo, useCallback, useRef } from "react";
import { Button } from "antd";

export const FilteredList =() =>{
    const inputRef = useRef(null);

    const [users, setUsers] = useState([
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Anna' },
  { id: 4, name: 'Jack' },
  { id: 5, name: 'Mike' },
  { id: 6, name: 'Sofia' },
    ]);
    const [search, setSearch] = useState('');

    const filteredUsers = useMemo(() => {
    return users.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );
    }, [users, search]);

    const handleAddUser = useCallback(() => {
    inputRef.current.focus();
    setUsers(prev => [
        ...prev,
        { id: prev.length + 1, name: `User ${prev.length + 1}` }
    ]);
    }, []);

    return (
        <div>
            <input ref= {inputRef} type="text"  value={search} onChange={(e) => setSearch(e.target.value)} placeholder="type name.."/>
            <Button onClick={handleAddUser}>Add user</Button>
            <ul>
             {filteredUsers.map(user => (
            <li key={user.id}>{user.name}</li>
             ))}
            </ul>
        </div>

    )
}