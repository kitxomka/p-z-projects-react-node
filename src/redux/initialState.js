const getTheDate = () => {
    var today  = new Date();
    return today.toLocaleDateString("en-US");
};

export const initialState = {
    creatorName: '',
    comment: '',
    date: getTheDate(),
    loading: false,
}