const defaulState ={
    value: 0
};


export const reducer = (state = defaulState ,action) => {
    if(action.type = 'RUN'){
        return {value: state.value + action.payload};
    }else{
        return 'false';
    }
}