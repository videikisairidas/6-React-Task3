
// export default Footer
import React, { useState, useMemo, useCallback, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';

const Body = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true);
        fetch('https://dummyjson.com/users?limit=100')
            .then((response) => response.json())
            .then((data) => {
                setUsers(data.users);
                // console.log(data.users);
                setIsLoading(false);
            })
            
    }, [])

    

    const filteredUsers = useMemo(() => {
        // console.log( users.filter((user) =>
        //     user.firstName.toLowerCase().includes(searchQuery.toLowerCase())
        //   ));
        return users.filter((user) =>
          user.firstName.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [users, searchQuery]);

    const handleSearchChange = useCallback((query) => {
        setSearchQuery(query);
    }, []);

    return (
        <main>
            <SearchBar onSearchChange={handleSearchChange} query={searchQuery} />
            {isLoading ? (
                <p>Loading...</p>
            ) : filteredUsers.length === 0 ? (
                <p>No Result</p>
            ) : (
                <UserList users={filteredUsers} />
            )}

        </main>
    );
};

export default Body;
