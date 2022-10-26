const validation = (data:String) => {

    // Dados não podem ser indefinidos
    if(typeof(data) == 'undefined') {
        return false;
    }

    // Dados não podem ser vazios
    if (data.length == 0) {
        return false;
    }

    return true;
};

export default validation;