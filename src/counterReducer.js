export default (state, action) => {
    if (action.type === "INCREMENT") {              //use switch instead of if else.else (default is very imp othervise getState error will be shown)
        return { count: state.count + 1 };
    }
    else if (action.type === "DECREMENT") {
        return { count: state.count - 1 };
    }
    else
    {
        return state;
    }
};