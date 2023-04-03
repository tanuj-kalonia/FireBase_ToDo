import React from 'react';

const TodoContext = React.createContext();

const TodoContextProvider = ({ children }) => {

    const defaultProject = 'Today';
    const [selectedProject, setSelectedProject] = React.useState(defaultProject);

    return (
        <TodoContext.Provider
            // These values can be accessed globaly within the children
            value={{
                selectedProject, setSelectedProject
            }}
        >
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContextProvider, TodoContext };